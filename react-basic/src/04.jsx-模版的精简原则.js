// 有一个状态 type 1 2 3 
// 1 -> h1
// 2 -> h2
// 3 -> h3

// 原则:模版中的函数尽量保持精简
// 复杂的多分支结构 收敛为一个函数 通过专门的函数来写分支逻辑 模版中只负责调用

const getHtag = (type)=>{
    switch (type) {
      case 1:
        return <h1>this is h1</h1> 
      case 2:
        return <h2>this is h2</h2>
      case 3:
        return <h3>this is h3</h3>
      default:
        break;
    }
  }
  
  function App() {
    return (
      <div className="App">
        {getHtag(2)}
      </div>
    );
  }
  
  export default App;
  