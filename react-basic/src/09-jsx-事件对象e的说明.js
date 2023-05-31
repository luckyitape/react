import React from "react";

function Hello(params) {
  const clickHandler = (e)=>{
    // 阻止默认行为
    e.preventDefault();
    
    console.log('函数组件中的事件触发了', e);
  }
  return <div onClick={clickHandler}>
    <a href="http://baidu.com">百度</a>
  </div>
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

