# hooks

hooks 的设计是为了解决 class 组件的两个问题：

1. class 组件的逻辑难服用
   在 class 中，开发中习惯将一些业务逻辑放在生命周期中，这样就会导致一个生命周期中包含多个业务逻辑，一个业务逻辑也会分散到不同的生命周期中
2.

## useEffect

```javascript
useEffect(setup, dep);
```

**useEffect**是 React Hooks 中的一个 API，用于在组件渲染后执行副作用操作。

setup 代码时副作用函数，可 return 一个 cleanup 函数，在组件卸载时执行。
dep 时依赖项，为一个数组，当依赖项变更时，将重新运行 setup 代码。

1. 组件挂载到页面时，将运行 setup 代码。即组件挂载会执行一次副作用函数
2. 重新渲染依赖项变更后的组件

- 首先，使用旧的 props 和 state 运行 cleanup 代码
- 然后， 使用新的 props 和 state 运行 setup 代码

3. 当组件从页面卸载后，cleanup 代码会运行。即组件卸载会执行一次 cleanup 函数

尝试在 class 中实现以下 useEffect 的效果

明白 useEffect 的作用，触发场景 **组件第一次挂载** **组件更新** **组件卸载**

当没有给 useEffect 执行依赖项的时候，useEffect 就只会在组件的挂载和卸载的时候执行

```javascript
const FuncEffect: React.FC = () => {
  const [leftCount, setLeftCount] = useState(0);
  const [rigthCount, setRigthCount] = useState(0);
  useEffect(() => {
    console.log(`Button left clicked ${leftCount} times`);
    document.title = `Button left clicked ${leftCount} times`;
  });
  return (
    <div style={{ display: "flex" }}>
      <button onClick={() => setLeftCount(leftCount + 1)}>左{leftCount}</button>
      <button onClick={() => setRigthCount(rigthCount + 1)}>
        右{rigthCount}
      </button>
    </div>
  );
};
```

上面例子中，组件点击左右按钮会执行 useEffect 中的回调函数，并更新组件的 title，是因为改变了 state 的值，所以会触发组件的重新渲染，然后执行 useEffect 中的回调函数，更新 title。

## useRef

如何让useEffect让组件更新时才执行?
通过useRef来保存一个值，然后通过useEffect来判断这个值是否改变，如果改变了，则执行回调函数。

```javascript
import React, {useEffect, useRef, useState} from 'react'
const app = () => {
  const [count, setCount] = useState(0)
  const Ref = useRef(null)
  useEffect(() => {
    if(!Ref.current.flag) {
      Ref.current.flag = true
    } else {
      console.log('组件更新了')
    }
  },[count])
  return (
    <>
      <div ref="Ref">{count}</div>
      <button onClick={() => setCount(count + 1)}></button>
    </>
  )
}
export default app
```