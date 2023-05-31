import React from "react";


class Counter extends React.Component{

  state = {
    count:1
  }

  changeCount = ()=>{
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return(
      <div>
        { this.state.count }
        <button onClick={this.changeCount}>Counter++</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      {/* 渲染hello组件 */}
      <Counter/>
    </div>
  );
}

export default App;