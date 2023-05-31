import React from "react";
// 父传子 props
// props里面的所有数据不可修改，只可以读
// 数字 字符串 布尔值 数组 对象 函数 jsx都可以传
function SonF({msg,userInfo,getMes,child}) {
    // props是一个对象  里面存着通过父组件传入的所有数据
    // console.log('props', props);
    // const {msg,userInfo,getMes,child} = props
    return (
        <div>
            我是函数子组件 
            {msg}
            
            {userInfo.name}
            <button onClick={getMes}>触发父组件传过来的函数</button>
            {child}
        </div>
    )
}
class SonC extends React.Component{
    render() {
        return (
            // 类组件必须用this关键词获取
            <div>我是类子组件 
                {this.props.msg}
                {this.props.userInfo.name}
                <button onClick={this.props.getMes}>触发父组件传过来的函数</button>
                {this.props.child}
            </div>
        )
    }
}

// 子传父
// 子组件调用父组件传递过来的函数，并且把想要传递的数据当成函数的实参传递
function Son(props) {
    const { getSonMsg, message } = props
    function clickHandler() {
        getSonMsg('这里是来自于子组件的参数')
    }
    return(
        <div>
            this is son
            <button onClick={()=>getSonMsg(message)}>父传子</button>
            <button onClick={clickHandler}>父传子</button>

        </div>
    )
}

class App extends React.Component{
    state = {
        // message: "this is message"
        message: [1,2,3],
        userInfo:{
            name:"cp",
            age:30
        } 
    }

    getMes = ()=>{
        console.log('父组件的函数');
    }

    // 子传父
    getSonMsg = (param)=>{
        console.log('param', param);
        
    }
    render() {
        return (
           <div>
            {/* 子组件身上绑定属性  属性名可以自定义  保持语义化*/}
            <SonF msg = {this.state.message} userInfo={this.state.userInfo} getMes={this.getMes} child={<span>111</span>}/>
            <SonC msg = {this.state.message} userInfo={this.state.userInfo} getMes={this.getMes} child={<span>111</span>}/>
            <Son getSonMsg={this.getSonMsg} message={this.state.message}/>
           </div>
        )
    }
}


export default App
