import React from "react";
/**
 * 总结
 1.编写组件其实就是编写原生js类或者函数
 2.定义状态必须通过state实例属性的方法 提供一个对象，名称固定就叫做state
 3.修改state中的任何属性，都不可以直接赋值，必须走setState方法，这个方法来自继承得到
 4.这里的this关键词，很容易出现指向问题，下面的写法最推荐和最规范的，没有this指向问题
 */
class TestComponent extends React.Component{
    // 1.定义组件状态
  state = {
    // 这里可以定义各种属性，全都是当前组件的状态
    name:'cs teacher'
  }

    // 事件回调函数
  changName = ()=>{
    // 3.修改state里面的name
    // 注意，不可以直接做赋值修改，必须通过setState
    this.setState({
      name: 'cf'
    })
  }

  render(){
    // 2.使用状态
    return(
      <div>
      {/* this is TestComponent */}
      {this.state.name}
      <button onClick={this.changName}>修改name</button>
      </div>
    )
    
  }
}

function App() {
  return (
    <div className="App">
      {/* 渲染hello组件 */}
      <TestComponent/>
    </div>
  );
}

export default App;

