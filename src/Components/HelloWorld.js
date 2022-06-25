import React from "react";

// Props allows you to pass information from one component to another 
/*function HelloWorld(props) 
{
    return (
        <div>
            <h1>Hello {props.name} </h1>
            <input>
            </input>
        </div>
        
    )
}
*/

class HelloWorld extends React.Component {
    render(){
        return(
            <h1>
                Hello {this.props.name}
            </h1>
        )
    }
}
export default HelloWorld