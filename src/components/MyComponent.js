import React from 'react'
import UserInfor from './UserInfor'
import DisplayInfor from './DisplayInfor';

class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfor = ['av', 'a', 'v']
        return (
            <div>
                <UserInfor />
                <br /> <br />
                <DisplayInfor name={'Vo Anh Quan'} age={21} myInfor={myInfor} />
            </div>

        );
    }
}

export default MyComponent;