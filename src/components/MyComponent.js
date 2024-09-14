import React, { useState } from 'react'
import AddUserInfor from './AddUserInfor'
import DisplayInfor from './DisplayInfor';

const MyComponent = (props) => {

    const [listUsers, setListUsers] = useState(
        [
            { id: 1, name: 'Vo Anh Quan', age: '16' },
            { id: 2, name: 'Banh', age: '25' },
            { id: 3, name: 'Buoi', age: '69' }

        ]
    );



    const handleAddNewUser = (userObj) => {
        setListUsers([userObj, ...listUsers]);

    };

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter(item => item.id !== userId);
        setListUsers(listUsersClone);
    };

    return (
        <>
            <div className='a'>
                <AddUserInfor
                    handleAddNewUser={handleAddNewUser}
                />
                <br /> <br />
                <DisplayInfor
                    listUsers={listUsers}
                    handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'>

            </div>
        </>
    );
};
export default MyComponent;