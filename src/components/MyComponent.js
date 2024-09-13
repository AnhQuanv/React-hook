import React from 'react'
import UserInfor from './UserInfor'
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Vo Anh Quan', age: '21' },
            { id: 2, name: 'Banh', age: '25' },
            { id: 3, name: 'Buoi', age: '28' }

        ]
    }

    //JSX
    render() {
        // DRY
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                />
            </div>
        );
    }
}

export default MyComponent;