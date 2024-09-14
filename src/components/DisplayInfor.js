import React, { useState } from "react";
import './DisplayInfor.scss'

// class DisplayInfor extends React.Component {


//     render() {
//         console.log('>>>> cal me render')
//         const { listUsers } = this.props
//         // pros => properties
//         return (
//             <div className="display-infor-container">

//                 {true &&
//                     <>
//                         <div>
//                             {listUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 18 ? 'blue' : 'red'}>
//                                         <div>
//                                             <div >My name's {user.name}</div>
//                                             <div>My age's {user.age}</div>
//                                         </div>
//                                         <div>
//                                             <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                         </div>
//                                         <hr />
//                                     </div>
//                                 )
//                             })}
//                         </div>
//                     </>
//                 }
//             </div>
//         )
//     }
// }
const DisplayInfor = (props) => {

    const { listUsers } = props // object

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

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