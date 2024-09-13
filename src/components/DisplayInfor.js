import React from "react";

class DisplayInfor extends React.Component {
    render() {

        const { listUsers } = this.props
        // pros => properties
        return (
            <div>
                {listUsers.map((user) => {
                    return (
                        <div key={user.id}>
                            <div>My name's {user.name}</div>
                            <div>My age's {user.age}</div>
                            <hr />
                        </div>
                    )
                })}

            </div>
        )
    }
}

export default DisplayInfor;