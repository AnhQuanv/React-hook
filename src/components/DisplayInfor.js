import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'

const DisplayInfor = (props) => {

    const { listUsers } = props // object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(
        () => {
            if (listUsers.lenght === 0) {
                alert('You deleted all the users')
            }
            console.log('call me the useffect')
        }, [listUsers]
    )

    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => handleShowHideListUser()}>
                    {isShowHideListUser === true ? 'Hide list users' : 'Show list users'}

                </span>
            </div>
            {isShowHideListUser &&
                <>
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'blue' : 'red'}>
                                    <div>
                                        <div >My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                </>
            }
        </div>
    )

}
export default DisplayInfor;