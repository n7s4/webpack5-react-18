import React, { FC, useCallback, useEffect, useRef } from "react";
import myBox from "./MyBox";
import myCircle from "./MyCircle";
import styled from "styled-components";
import myWireframe from "@/components/hello-primitives/MyfireFrame";
import {
  BufferGeometry,
  Color,
  DirectionalLight,
  DoubleSide,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshPhongMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const Wrapper = styled.div``;
const meshArr: (Mesh | LineSegments)[] = [];
const HelloPrimitives: FC = () => {
  // canvas画布
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 渲染器
  const rendererRef = useRef<WebGLRenderer | null>(null);

  // 镜头
  const cameraRef = useRef<PerspectiveCamera | null>(null);

  // 创建材质
  const createMaterial = () => {
    const material = new MeshPhongMaterial({ side: DoubleSide });

    const hue = Math.floor(Math.random() * 100) / 100; //随机获得一个色相
    const saturation = 1; //饱和度
    const luminance = 0.5; //亮度

    material.color.setHSL(hue, saturation, luminance);

    return material;
  };

  // 初始化操作 渲染器 镜头 镜头对应的场景
  const createInit = useCallback(() => {
    if (canvasRef.current === null) {
      return;
    }
    meshArr.length = 0;

    //初始化渲染器
    const renderer = new WebGLRenderer({
      canvas: canvasRef.current as HTMLCanvasElement,
    });
    rendererRef.current = renderer;

    //初始化镜头
    const camera = new PerspectiveCamera(40, 2, 0.1, 1000);
    camera.position.z = 120;
    cameraRef.current = camera;

    //初始化场景
    const scene = new Scene();
    scene.background = new Color(0xaaaaaa); // 给场景设置背景色

    // 添加两盏灯光
    const light0 = new DirectionalLight(0xffffff, 1);
    light0.position.set(-1, 2, 4);
    const light1 = new DirectionalLight(0xffffff, 1);
    light1.position.set(1, -2, -4);
    scene.add(light0, light1);

    //获得各个 solid 类型的图元实例，并添加到 solidPrimitivesArr 中
    const solidPrimitivesArr: BufferGeometry[] = [];
    solidPrimitivesArr.push(myBox, myCircle);

    //将各个 solid 类型的图元实例转化为网格，并添加到 primitivesArr 中
    solidPrimitivesArr.forEach((item: BufferGeometry) => {
      const material = createMaterial();
      const mesh = new Mesh(item, material);
      meshArr.push(mesh);
    });

    // //获得各个 line 类型的图元实例，并添加到 meshArr 中
    // const linePrimitivesArr: BufferGeometry[] = [];
    // linePrimitivesArr.push(myEdges, myWireframe);

    // //将各个 line 类型的图元实例转化为网格，并添加到 meshArr 中
    // linePrimitivesArr.forEach((item) => {
    //   const material = new LineBasicMaterial({ color: 0x000000 });
    //   const mesh = new LineSegments(item, material);
    //   meshArr.push(mesh);
    // });

    //定义物体在画面中显示的网格布局
    const eachRow = 5; //每一行显示 5 个
    const spread = 15; //行高 和 列宽

    //配置每一个图元实例，转化为网格，并位置和材质后，将其添加到场景中
    meshArr.forEach((mesh, index) => {
      const row = Math.floor(index / eachRow); //行
      const column = index % eachRow; // 列
      mesh.position.x = (column - 2) * spread;
      mesh.position.y = (2 - row) * spread;
      scene.add(mesh);
    });
    // 添加自动旋转渲染动画
    const render = (time: number) => {
      time = time * 0.001; // 将时间转换为秒
      meshArr.forEach((item) => {
        item.rotation.x = time;
        item.rotation.y = time;
      });
      renderer.render(scene, camera);
    };
    window.requestAnimationFrame(render);
  }, [canvasRef]);

  const resizeHandle = () => {
    //根据窗口大小变化，重新修改渲染器的视椎
    if (rendererRef.current === null || cameraRef.current === null) {
      return;
    }
    const canvas = rendererRef.current.domElement;
    cameraRef.current.aspect = canvas.clientWidth / canvas.clientHeight;
    cameraRef.current.updateProjectionMatrix();
    rendererRef.current.setSize(canvas.clientWidth, canvas.clientHeight, false);
  };

  //组件首次装载到网页后触发，开始创建并初始化 3D 场景
  useEffect(() => {
    createInit();
    resizeHandle();
    window.addEventListener("resize", resizeHandle);
    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, [canvasRef, createInit]);
  return <canvas ref={canvasRef}></canvas>;
};

export default HelloPrimitives;
