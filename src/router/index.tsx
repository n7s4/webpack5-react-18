import React, { createContext, useEffect, useState } from "react"
const RouterContext = createContext<any>(null);
// 什么路径渲染什么组件组件和路径一一对应
// route组件不一定在BrowserRouter的子集，可能时孙组件
type PropsView = {
  path: string,
  component: React.FC<{}>
}
const Route = (props: any) => {
  const { path, component:Component } = props
  return (
    <RouterContext.Consumer>
      {(route) => {
        return path === route.path ?  <Component/> : null 
      }}
    </RouterContext.Consumer>
  )

  
}
// 将react的生命周期和history结合起来，再将props和Route进行关联 对path进行管理
const BrowserRouter: any = (props: any) => {
  const [path, setPath] = useState(() => {
    const {pathname} = window.location
    return pathname || ''
  })
  useEffect(() => {
    window.addEventListener('popstate', handlePopState)
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [path])
  const handlePopState = () => {
    const {pathname} = window.location
    setPath(pathname)
  }
  const goPath = (path: string) => {
    setPath(path)
    window.history.pushState({}, '', path)
  }
  const routerData = {
    path, // 页面路劲
    goPath  // 页面跳转方法
  }
  return (
    <RouterContext.Provider value={routerData}>
      {props.children}
    </RouterContext.Provider>
  )
}

export {
  Route,
  BrowserRouter,
  RouterContext
}