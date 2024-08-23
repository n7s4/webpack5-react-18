# hooks

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

1、明白 useEffect 的作用，触发场景 **组件第一次挂载** **组件更新** **组件卸载**
2、
