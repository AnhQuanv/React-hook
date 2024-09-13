import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

class DisplayInfor extends React.Component {

    state = {
        isShowLisstUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowLisstUser: !this.state.isShowLisstUser
        })
    }

    render() {

        const { listUsers } = this.props
        // pros => properties
        return (
            <div className="display-infor-container">
                <img src={logo} />
                <div>
                    <span onClick={(event) => { this.handleShowHide(event) }}>

                        {this.state.isShowLisstUser === true ? 'Hide list users:' : 'Show list users:'}
                    </span>
                </div>
                {this.state.isShowLisstUser &&
                    <div>
                        {listUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 18 ? 'blue' : 'red'}>
                                    <div >My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;