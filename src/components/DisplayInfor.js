import React from "react";
import './DisplayInfor.scss'
import logo from './../logo.svg'

class DisplayInfor extends React.Component {

    constructor(pros) {
        console.log('>>>>> call constructor: 1')
        super(pros);
        this.state = {
            isShowLisstUser: true
        }
    }

    componentDidMount() {
        console.log('>>>> Call me component did mount')
        setTimeout(() => {
            document.title = 'banhkute'
        }, 3000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('>>>> Call me component did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowLisstUser: !this.state.isShowLisstUser
        })
    }

    render() {
        console.log('>>>> cal me render')
        const { listUsers } = this.props
        // pros => properties
        return (
            <div className="display-infor-container">
                {/* <img src={logo} /> */}
                <div>
                    <span onClick={(event) => { this.handleShowHide(event) }}>

                        {this.state.isShowLisstUser === true ? 'Hide list users:' : 'Show list users:'}
                    </span>
                </div>
                {this.state.isShowLisstUser &&
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
                                            <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfor;