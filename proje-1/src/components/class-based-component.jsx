import { Component } from "react";

class ClassBasedComponent extends Component {

    state = {
        showText : false,
        changeColor : false
    }

    handleClick = () =>{

        const {showText, changeColor} = this.state

        this.setState({
            showText : !showText,
            changeColor : !changeColor 
        })
    } 

    //componentDidMount
    //componentDidUpdate
    //componentWillUnmount

    componentDidMount(){
        console.log("This is called first time page load");
        this.setState({
            showText : !this.state.showText,
            changeColor : !this.state.changeColor 
        })
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
        
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

  render() {

    const {showText, changeColor} = this.state

    return(
    <div>
        {
            showText ? <h3 style={{color : changeColor ? 'red' : 'black'}}>Class Based Components</h3> : null
        }
      
      <button onClick={this.handleClick}>Toggle Text</button>
    </div>
    );
  }
}

export default ClassBasedComponent;
