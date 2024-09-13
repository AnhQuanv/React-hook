import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Banh',
        address: 'Hue',
        age: 21
    }

    handleClick = (event) => {
        console.log("My name is ", this.state.name)
    }
    handleOnMouseOver = (event) => {
        console.log(event)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}
                <button onClick={this.handleO}>Click me</button>
                <button onClick={this.handleOnMouseOver}>Hover me</button>

            </div>

        );
    }
}

export default MyComponent;