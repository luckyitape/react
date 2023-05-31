import React from "react";


class Counter extends React.Component{

  state = {
    count:0,
    list: [1,2,3],
    person:{
      name:'jack',
      age:20
    }
  }

  // changeCount = ()=>{
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  clickHandler = ()=>{
    // 数组的修改

    // this.setState({
    //   list:[...this.state.list,4,5]
    // })

    // 对象修改

    // this.setState({
    //   person:{
    //     ...this.state.person,
    //     name:"cs"
    //   }
    // })

    // 合起来写
    // this.setState({
    //   list:[...this.state.list,4,5],
    //   person:{
    //     ...this.state.person,
    //     name:"cs"
    //   }
    // })

    // 删除数组的元素 - filter
    // 不要修改状态的值，而是用现有的值处理后返回
    this.setState({
      list:this.state.list.filter(item => item !==2)
    })



  }

  render(){
    return(
      <div>
        <ul>
          {this.state.list.map((item)=><li key={item}>{item}</li>)}
        </ul>
        <div>{this.state.person.name}</div>
        <button onClick={this.clickHandler}>clickHandler</button>
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