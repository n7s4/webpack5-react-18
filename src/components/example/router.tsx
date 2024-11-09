import { BrowserRouter, Route, RouterContext } from "@/router";
import React from "react";
import HelloThreejs from "@/components/Three";
const MyRouter = () => {
  return (
    <BrowserRouter>
      <RouterContext.Consumer>
        {(router) => (
          <>
            {/* <button onClick={() => router.goPath("/")}>home</button>
            <button onClick={() => router.goPath("/about")}>about</button>
            <button onClick={() => router.goPath("/users")}>users</button>

            <Route path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/users" component={Users}></Route> */}
            <HelloThreejs />
          </>
        )}
      </RouterContext.Consumer>
    </BrowserRouter>
  );
};

const Home: React.FC = () => {
  return <div>home</div>;
};
const About: React.FC = () => {
  return <div>about</div>;
};
const Users = () => {
  return <div>users</div>;
};
export default MyRouter;
