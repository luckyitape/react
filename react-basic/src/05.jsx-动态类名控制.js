// jsx的样式控制
// 1.行内样式 - 在元素身上绑定一个style属性即可

// 2.类名样式


import './app.css'

const style = {
  color:'red',
  fontSize:'30px'
}
// 动态控制这个active类名，满足条件才有

const actviveFlag = true

function App() {
  return (
    <div className="App">
      <span style={ style }> this is span </span>
      <span className='active'>类名样式</span>
      <span className={actviveFlag?'active':null}>|类名样式-满足条件才有</span>
    </div>
  );
}

export default App;
