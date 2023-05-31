

import React from "react";

// this有问题的写法


class Test extends React.Component{

    constructor(){
        super()
        this.handler = this.handler.bind(this)
    }

    handler(){
        console.log('this', this);
        // this is undefined
        // use this is error
    }

    render(){
        return(
            <button onClick={this.handler}>click</button>
        )
    }
}



function App() {
  return (
    <div className="App">
      {/* 渲染hello组件 */}
      <Test/>
    </div>
  );
}

export default App;