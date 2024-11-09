import React, { FC, useEffect, useRef } from "react";
import {
  WebGLRenderer,
  PerspectiveCamera,
  Scene,
  BoxGeometry,
  Mesh,
  DirectionalLight,
  MeshPhongMaterial,
} from "three";
import ThreeStyle from "./style";

const HelloThreejs: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const resizeHandleRef = useRef<() => void>();
  useEffect(() => {
    if (canvasRef.current) {
      // 创建渲染器
      const renderer = new WebGLRenderer({
        canvas: canvasRef.current,
      });

      //创建镜头
      //PerspectiveCamera() 中的 4 个参数分别为：
      //1、fov(field of view 的缩写)，可选参数，默认值为 50，指垂直方向上的角度，注意该值是度数而不是弧度
      //2、aspect，可选参数，默认值为 1，画布的宽高比(宽/高)，例如画布宽300像素，高150像素，那么意味着宽高比为 2
      //3、near，可选参数，默认值为 0.1，近平面，限制摄像机可绘制最近的距离，若小于该距离则不会绘制(相当于被裁切掉)
      //4、far，可选参数，默认值为 2000，远平面，限制摄像机可绘制最远的距离，若超出该距离则不会绘制(相当于被裁切掉)
      //以上 4 个参数在一起，构成了一个 “视椎”，关于视椎的概念理解，暂时先不作详细描述。
      const camera = new PerspectiveCamera(75, 2, 0.1, 5);

      // 创建场景
      const scene = new Scene();

      // 创建几何体
      const geometry = new BoxGeometry(1, 1, 1);

      //创建材质
      // const material = new MeshPhongMaterial({ color: 0x44aa88 });
      //我们需要让立方体能够反射光，所以不使用MeshBasicMaterial，而是改用MeshPhongMaterial
      // 创建三个材质
      const material1 = new MeshPhongMaterial({ color: 0x44aa88 });
      const material2 = new MeshPhongMaterial({ color: 0xc50d0d });
      const material3 = new MeshPhongMaterial({ color: 0x39b20a });

      // 创建网格
      // const cube = new Mesh(geometry, material);
      // 创建三个网格
      const cube1 = new Mesh(geometry, material1);
      cube1.position.x = -2;
      const cube2 = new Mesh(geometry, material2);
      cube2.position.x = 0;
      const cube3 = new Mesh(geometry, material3);
      cube3.position.x = 2;
      const cubes = [cube1, cube2, cube3];
      // 讲三个网格添加到场景中
      scene.add(cube1);
      scene.add(cube2);
      scene.add(cube3);

      // 创建光源
      const light = new DirectionalLight(0xffffff, 1);
      light.position.set(-1, 2, 4);
      scene.add(light); //将光源添加到场景中，若场景中没有任何光源，则可反光材质的物体渲染出的结果是一片漆黑，什么也看不见

      // 这只透视镜头的Z轴距离，以便我们以某个距离来观察几何体
      // 之前初始化镜头时，设置的进平面为0.1 远平面为5
      // 因此 camera.position.z 的值一定要在 0.1 - 5 的范围内，超出这个范围则画面不会被渲染
      camera.position.z = 2;

      // 添加自动旋转渲染动画
      const render = (time: number) => {
        time = time * 0.001; // 将时间转换为秒
        cubes.map((cube: Mesh) => {
          cube.rotation.x = time;
          cube.rotation.y = time;
        });
        renderer.render(scene, camera);
        requestAnimationFrame(render);
      };
      window.requestAnimationFrame(render);

      const handlerResize = () => {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
      };
      handlerResize();
      resizeHandleRef.current = handlerResize;
      // window.addEventListener("resize", handlerResize);
      const resizeObserver = new ResizeObserver(() => {
        handlerResize();
      });
      resizeObserver.observe(canvasRef.current);

      return () => {
        if (resizeHandleRef && resizeHandleRef.current) {
          resizeObserver.disconnect();
        }
      };
    }
  }, [canvasRef]);
  return (
    <ThreeStyle>
      <canvas className="full-screen" ref={canvasRef} />;
    </ThreeStyle>
  );
};
export default HelloThreejs;
