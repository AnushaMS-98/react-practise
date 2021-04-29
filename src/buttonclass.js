
import React from 'react';
class ButtonClass extends React.Component{
    constructor(){
        super();
        this.state = {
            num : 50
        };
    }
    

    render(){
    return (
        <>
        <div>inside button class 12</div>
        <p>{this.state.num} </p>
        <button onClick={() => this.setState({num : 60})}>click to 60</button>
        </>
    )
}
}
export default ButtonClass;