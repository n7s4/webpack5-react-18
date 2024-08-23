import React, { useEffect, useState } from "react";
import "./app.css";
import ThemeContext from "./components/example/ThemeContext";
import UseFefs from "@/components/example/useRefs";
import Effect from "@/components/example/Effect";

const FuncEffect: React.FC = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("first componentDidMount");
  }, []);
  useEffect(() => {
    console.log("依赖项发生变化，执行副作用函数");
  }, [count]);
  useEffect(() => {
    return () => {
      console.log("组件卸载");
    };
  });
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>增加</button>
    </div>
  );
};
const App: React.FC = () => {
  const [isVisible, steIsVisible] = useState(true);
  // return <ThemeContext />;
  // return <UseFefs></UseFefs>;
  return <Effect></Effect>;
  // return (
  //   <div>
  //     <button onClick={() => steIsVisible(!isVisible)}>
  //       切换FuncEffect显示
  //     </button>
  //     {isVisible && <FuncEffect />}
  //   </div>
  // );
};

// 发布订阅模型
// class DataSource {
//   lintener: any[];
//   constructor() {
//     // 订阅者
//     this.lintener = [];
//   }
//   // 订阅
//   addChangeListener(callback: (data: string) => void) {
//     this.lintener.push(callback);
//   }
//   // 发布
//   publish(data: any) {
//     this.lintener.forEach((item) => item(data));
//   }
// }
// const data_source = new DataSource();
// data_source.addChangeListener((data) => {
//   console.log("订阅者1", data);
// });
// data_source.addChangeListener((data) => {
//   console.log("订阅者2", data);
// });
// data_source.publish("nba");
export default App;
