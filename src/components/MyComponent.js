import React from 'react'
import AddUserInfor from './AddUserInfor'
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: 'Vo Anh Quan', age: '16' },
            { id: 2, name: 'Banh', age: '25' },
            { id: 3, name: 'Buoi', age: '69' }

        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUsers: [userObj, ...this.state.listUsers]
        })
    }

    //JSX
    render() {
        // DRY
        return (
            <>
                <div className='a'>
                    <AddUserInfor
                        handleAddNewUser={this.handleAddNewUser}
                    />
                    <br /> <br />
                    <DisplayInfor
                        listUsers={this.state.listUsers}

                    />
                </div>
                <div className='b'>

                </div>
            </>
        );
    }
}

export default MyComponent;