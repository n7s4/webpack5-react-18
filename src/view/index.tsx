import React from "react";
import Memo from "@/components/example/Memo";
import Refs from "@/components/example/useRefs";
import Router from "@/components/example/router"
const View: React.FC = () => {

  return (
    <div>
      <div>
      <Memo/>
      </div>
       <div>
       <Refs/>
       </div>
        
      <div>
      <Router/>
     </div>
        
    </div>

  )
}
export default View;