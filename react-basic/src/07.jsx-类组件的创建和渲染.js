import React from "react";
// 类组件的创建
class HelloComponent extends React.Component{
  render(){
    return <div>this is class component</div>
  }
}


function App() {
  return (
    <div className="App">
      {/* 渲染hello组件 */}
      <HelloComponent/>
      <HelloComponent></HelloComponent>
    </div>
  );
}

export default App;
