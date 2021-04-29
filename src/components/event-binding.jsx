import React, { Component } from 'react';

class EventBinding extends Component{
    constructor(){
        super();
        this.handleclick2 = this.handleclick1.bind(this);
        
    }
    handleclick1(){
        console.log('click 1 is done');
        console.log(this);
    }
    handleclick3=()=>{
        console.log(this);
        console.log('click 3 is done')
    }
    render(){
        return(
            <div>
                <button onClick={this.handleclick1()}>Click 1</button>
                <button onClick={this.handleclick1}>Click 2</button>
                <button onClick={this.handleclick2}>Click 3</button>
                <button onClick={this.handleclick3}>Click 4</button>
            </div>

        )
    }
}
export default EventBinding;