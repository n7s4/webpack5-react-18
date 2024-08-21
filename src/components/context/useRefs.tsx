import React from "react";

interface Props {
  children?: React.ReactNode;
}
const FuncyButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <button ref={ref}>{props.children}</button>
})

class Refs extends React.Component {
  FuncyButton_ref: React.RefObject<unknown>;
  constructor(props: any) {
    super(props)
    this.FuncyButton_ref = React.createRef()
  }
  componentDidMount(): void {
    console.log(this.FuncyButton_ref);
  }
  render(): React.ReactNode {
      return (
        <div>
          <FuncyButton ref = {this.FuncyButton_ref}>
            <h1>hello world</h1>
          </FuncyButton>
        </div>
      )
  }  
}

export default Refs;