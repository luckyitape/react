import React from "react";
class App extends React.Component{
    constructor(){
        super()
        console.log('constructor');
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }

    state={
        count:1,
        flag:true
    }

    clickHandler = ()=>{
        this.setState({
            count:this.state.count + 1,
            flag:!this.state.flag
        })
    }

    render() {
        // 1.渲染UI
        console.log('render');
        return(
            <div>
                this is div
                {this.state.flag ? <Test/> : null}
                <button onClick={this.clickHandler}>{this.state.count}</button>
            </div>
        )
    }
}

class Test extends React.Component{
    // 如果数据是组件的状态需要去影响视图，定义到state中
    // 而如果我们需要的数据状态  不和视图绑定  定义成一个普通的实例属性就可以
    // state中尽量保持精简
    timer = null;
    componentDidMount(){
        // 1.发送网络请求 2.dom操作
        console.log('componentDidMount');
        this.timer = setInterval(()=>{
            console.log('定时器开启了');
        },1000)
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
        clearInterval(this.timer)

    }
    render(){
        return(
            <div>11</div>
        )
    }
}


export default App