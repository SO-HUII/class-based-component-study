import React, { useState } from 'react';
import classes from './Users.module.css';
import User from './User';

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' }
];

const Users = () => {
    const [showUsers, setShowUsers] = useState(true);

    const toggleUserHandler = () => {
        setShowUsers((curState) => !curState);
    };

    const userList = (
        <ul>
            {DUMMY_USERS.map((user) => (
                <User key={user.id} name={user.name} />
            ))}
        </ul>
    )

    return (
        <div className={classes.users}>
            <button onClick={toggleUserHandler}>
                {showUsers ? 'Hide' : 'Show'} Users
            </button>
            {showUsers && userList}
        </div>
    );
};

export default Users;