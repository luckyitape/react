import React, {createRef} from "react";


class Counter extends React.Component{
  // 实例属性可以自定义，语意化即可
  msgRef = createRef()
  state = {
    message: 'this is message'
  }

  getValue = ()=>{
    console.log('msgRef', this.msgRef);
    console.log('current', this.msgRef.current);
    console.log('current.value', this.msgRef.current.value);
  }

  render(){
    return(
      <div>
        <input type='text' ref={this.msgRef}/>

        <button onClick={this.getValue}>点击获取输入框的值</button>
      </div>
    )
  }
}


function App() {
  return(
    <div className="App">
      <Counter/>
    </div>
  )
}


export default App