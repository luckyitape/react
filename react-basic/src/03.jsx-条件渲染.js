// 条件渲染
// 技术方案：三元表达式(常用) AND 逻辑&&运算
// 1.三元表达式 - 满足条件渲染一个span标签
const flag = true

function App() {
  return (
    <div className="App">
     {flag?(
      <div>
        <span>这是一个span标签</span>
      </div>
     ):null}

     {flag && <span>这是一个span标签</span>}
    </div>
  );
}

export default App;
