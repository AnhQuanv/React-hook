import React from 'react'

class MyComponent extends React.Component {

    state = {
        name: 'Banh',
        address: 'Hue',
        age: 21
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name}

            </div>

        );
    }
}

export default MyComponent;