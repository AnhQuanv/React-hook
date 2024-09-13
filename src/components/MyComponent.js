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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                        type='text'
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>

        );
    }
}

export default MyComponent;