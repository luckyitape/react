

import React from "react";

// this有问题的写法


class Test extends React.Component{

    


    handler(){
        console.log('this', this);
        // this is undefined
        // use this is error
    }

    render(){
        console.log('父级函数this的指向', this);
        
        return(
            <button onClick={()=>this.handler()}>click</button>
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

