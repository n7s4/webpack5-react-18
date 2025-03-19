import React, { FC } from "react";
interface PropsView { 
  title: string
}
const Content: FC<PropsView> = () => { 
  return (
    <div>
      内容
    </div>
  );
}
export default Content