import React from "react";
// 里面各种内置的校验规则
import { PropTypes } from "prop-types";


function Test({list}) {
    <div>
        {list.map(item => <p key={item}>{item}</p>)}
    </div>
}

Test.propTypes = {
    list:PropTypes.array
}

class App extends React.Component{
    render(){
        return (
            <div>
               <Test list={[1,2,3]}/>
            </div>
        )
    }
}

export default App