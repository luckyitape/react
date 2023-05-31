import React from "react";
// 目标：B组件的数据传给A
// B->App->A
function SonA(props) {
    return (
        <div>
          this is A
          {props.sendAMsg}
        </div>
    )
}

function SonB(props) {
    const bMsg = '这里是来自B组件中的数据'
    return (
        <div>
          this is A
          <button onClick={()=>props.getBMsg(bMsg)}>click</button>
        </div>
    )
}


class App extends React.Component{

    state = {
        sendAMsg:''
    }

    getBMsg = (msg)=>{
        console.log('msg', msg);
        this.setState({
            sendAMsg:msg
        })
    }
    render() {
        return (
           <div>
            {/* 子组件身上绑定属性  属性名可以自定义  保持语义化*/}
            <SonA sendAMsg={this.state.sendAMsg}/>
            <SonB getBMsg={this.getBMsg}/>
           </div>
        )
    }
}


export default App
