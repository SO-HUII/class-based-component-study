import React, { Component } from 'react';
import classes from './Users.module.css';
import User from './User';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' }
];

class Users extends Component {
    // 클래스 컴포넌트에서 상태 정의 시에는 생성자 사용.
    constructor() {
        super();
        this.state = {
            showUsers: true
        };
    }

    toggleUserHandler() {
        this.setState((curState) => {
            return { showUsers: !curState.showUsers };
        });
    };

    render() {
        const userList = (
            <ul>
                {DUMMY_USERS.map((user) => (
                    <User key={user.id} name={user.name} />
                ))}
            </ul>
        );

        return (
            <div className={classes.users}>
                {/* bind(this)에서 this 예약어는 이 클래스를 참조한다는 의미. */}
                <button onClick={this.toggleUserHandler.bind(this)}>
                    {this.state.showUsers ? 'Hide' : 'Show'} Users
                </button>
                {this.state.showUsers && userList}
            </div>
        );
    }
}

export default Users;