import React, { useEffect, useState } from "react";

// const FuncEffect: React.FC = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log("first componentDidMount");
//   }, []);
//   useEffect(() => {
//     console.log("依赖项发生变化，执行副作用函数");
//   }, [count]);
//   useEffect(() => {
//     return () => {
//       console.log("组件卸载");
//     };
//   });
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={handleClick}>增加</button>
//     </div>
//   );
// };

enum comStatus {
  mount = "mount",
  update = "update",
  unmount = "unmount",
}
class FuncEffect extends React.Component {
  state = {
    count: 0,
  };

  useEffectHook = (state: string) => {
    switch (state) {
      case comStatus.mount:
        console.log("挂载");
        break;
      case comStatus.update:
        console.log("更新");
        // 做一些其它的事情
        break;
      case comStatus.unmount:
        console.log("卸载");
        // 做一些其它的事情
        break;
      default:
        break;
    }
  };
  componentDidMount() {
    this.useEffectHook(comStatus.mount);
  }
  componentDidUpdate() {
    this.useEffectHook(comStatus.update);
  }
  componentWillUnmount() {
    this.useEffectHook(comStatus.unmount);
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render(): React.ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.count}</button>
      </div>
    );
  }
}
export default FuncEffect;
