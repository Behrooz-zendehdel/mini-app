import React, { Component } from 'react';
class ClassCounter extends Component {
    state = {
         name:""
         ,count:0 
} 

componentDidMount() { 
    document.title =`clicked: ${this.state.count}times`
 }
 componentDidUpdate(prevProps, prevState) {
     console.log('document title updating');
    document.title =`clicked: ${this.state.count}times`

 }
    render() { 
        return (<div>
            <input onChange={(e)=>this.setState({name :e.target.value})}></input>
            <button onClick={()=> this.setState({count : this.state.count+1})}>count :</button>
        </div>);
    }
}
 
export default ClassCounter;