import React from 'react';


//this is a class based component 
//can create function based components also
class CounterClass extends React.Component{

    constructor(){ //counter class constructor

        super();
        this.increment = this.increment.bind(this);  //binding the increment function to the class //need
        this.state = {
            number:0
        }

    }

    increment(){  //when  increment button is clicked
        this.setState({
            number:this.state.number+1

        })
            

    }

    render(){
        return(
            <div>
                 <h2>class component</h2>
                <h3>Counter = {this.state.number}</h3>
                <button onClick={this.increment}>Incremet</button>

            </div>
        )
    }
}

export default CounterClass;