import { BrowserRouter, Route, RouterContext } from "@/router"
import React from "react"
// const MyRouter = () => {
//   return (
//     <BrowserRouter>
//       <Route path="/" component={Home}></Route>
//       <Route path="/about" component={About}></Route>
//       <Route path="/users" component={Users}></Route>
//     </BrowserRouter>
//   )
// }
const MyRouter = () => {
  return (
    <BrowserRouter>
      <RouterContext.Consumer>
        {(router) => (
          <>
            <button onClick={() => router.goPath('/')}>home</button>
            <button onClick={() => router.goPath('/about')}>about</button>
            <button onClick={() => router.goPath('/users')}>users</button>

            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/users" component={Users}></Route>
          </>
        )}
      </RouterContext.Consumer>
    </BrowserRouter>
  )
}

const Home: React.FC = () => {
  return <div>home</div>
}
const About: React.FC = () => {
  return <div>about</div>
}
const Users = () => {
  return <div>users</div>
}
export default MyRouter