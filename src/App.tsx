import React from "react";
import "./app.css";
import ThemeContext from "./components/context/ThemeContext";
import UseFefs from "@/components/context/useRefs"
const App = () => {
  // return <ThemeContext />;
  return <UseFefs></UseFefs>
};


// 发布订阅模型
class DataSource {
  lintener: any[];
  constructor() {
    // 订阅者
    this.lintener = []
  }
  // 订阅
  addChangeListener(callback: (data: string) => void) {
    this.lintener.push(callback)
  }
  // 发布
  publish(data: any) {
    this.lintener.forEach(item => item(data))
  }
}
const data_source = new DataSource()
data_source.addChangeListener((data) => {
  console.log('订阅者1', data)
})
data_source.addChangeListener((data) => {
  console.log('订阅者2', data)
})
data_source.publish('nba')
export default App;
