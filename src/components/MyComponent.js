import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Banh',
        address: 'Hue',
        age: 21
    }

    handleClick = (event) => {
        console.log(">>>> Click me my button")

        // merge state => react class
        this.setState({
            name: 'Anh Quan',
            age: Math.floor(Math.random() * 100 + 1)
        })
    }
    handleOnMouseOver = (event) => {
        // console.log(event)
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <button onClick={this.handleOnMouseOver}>Hover me</button>

            </div>

        );
    }
}

export default MyComponent;