import React, { useEffect, useRef,  } from "react";

interface Props {
  children?: React.ReactNode;
}
const FuncyButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <button ref={ref}>{props.children}</button>;
});

// class Refs extends React.Component {
//   public FuncyButton_ref: React.RefObject<HTMLButtonElement>;
//   constructor(props: any) {
//     super(props);
//     this.FuncyButton_ref = React.createRef<HTMLButtonElement>();
//   }
//   componentDidMount(): void {
//     console.log(this.FuncyButton_ref);
//   }
//   render(): React.ReactNode {
//     return (
//       <div>
//         <FuncyButton ref={this.FuncyButton_ref}>
//           <h1>hello world</h1>
//         </FuncyButton>
//         {}
//       </div>
//     );
//   }
// }
const Refs: React.FC = () => {
  const Ref = useRef<HTMLDivElement | any>(null);
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    if(!Ref.current?.flag) {
      Ref.current.flag = true;
    } else {
      console.log('组件更新了');
    }
  },[count])
  return <>
    <div ref={Ref}>{count}</div>
    <button onClick={() => setCount(count + 1)}>button</button>
  </>

}

export default Refs;
