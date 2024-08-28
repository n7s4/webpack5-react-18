import React, { memo, useCallback,  useState } from 'react'
import { BtnProps } from './type/index'

const Button: React.FC<BtnProps> = memo((props) => {
  const {onClickButton, children} = props

  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </> 
  )

})
// class Button extends React.PureComponent<BtnProps> {
//   constructor(props: BtnProps) {
//     super(props)
//   }
//   // shouldComponentUpdate(nextProps: Readonly<BtnProps>, nextState: Readonly<{}>, nextContext: any): boolean {
//   //   if(this.props.onClickButton === nextProps.onClickButton) {
//   //     console.log(nextProps,this.props.onClickButton);
//   //     return false
//   //   } else {
//   //     return true
//   //   }
//   // }
 
//   render(): React.ReactNode {
//       return (
//       <>
//         <button onClick={this.props.onClickButton}>{this.props.children}</button>
//         <span>{Math.random()}</span>
//       </>
//     )
//   }
// }
const Memo: React.FC = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const hanldeClickButton1 = () => {
    setCount1(count1 + 1)
  }
  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1)
  },[count2])
  return <div>
    <div>
      <Button onClickButton={hanldeClickButton1}>button1</Button>
    </div>
    <div>
      <Button onClickButton={handleClickButton2}>button2</Button>
    </div>
    <div>
      <Button onClickButton={() => setCount3(count3 + 1)}>button3</Button>
    </div>
  </div>
}

export default Memo

