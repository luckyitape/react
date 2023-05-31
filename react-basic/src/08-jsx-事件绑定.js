import React from "react";
// 类组件的创建
class HelloComponent extends React.Component{
  // 事件回调函数---标准写法
  // 这样写我们在回调函数中的this指向当前组件的实例对象
  clickHandler = ()=>{
    console.log('类组件中的事件触发了');
  }
  render(){
    return <div onClick={this.clickHandler}>this is class component</div>
  }
}


function Hello(params) {
  const clickHandler = ()=>{
    console.log('函数组件中的事件触发了');
  }
  return <div onClick={clickHandler}>Hello</div>
}

function App() {
  return (
    <div className="App">
      {/* 渲染hello组件 */}
      <HelloComponent/>
      <Hello/>
    </div>
  );
}

export default App;

