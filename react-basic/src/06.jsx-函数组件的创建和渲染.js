// 函数组件的创建
// 创建

function Hello(params) {
    return <div>Hello</div>
  }
  
  function App() {
    return (
      <div className="App">
        {/* 渲染hello组件 */}
        <Hello/>
        <Hello></Hello>
      </div>
    );
  }
  
  export default App;
  