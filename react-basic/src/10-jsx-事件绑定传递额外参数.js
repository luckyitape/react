import React from "react";

function Hello(params) {
  const clickHandler = (e,msg)=>{
    // 阻止默认行为
    
    console.log('函数组件中的事件触发了', e,msg);
  }
  return <div onClick={(e)=>clickHandler(e,'this is msg')}>click me</div>
}

function App() {
  return (
    <div className="App">
      {/* 渲染hello组件 */}
      <Hello/>
    </div>
  );
}

export default App;

