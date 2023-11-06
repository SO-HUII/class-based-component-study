import React, { Component } from 'react';
import classes from './User.module.css';

class User extends Component {
    componentWillUnmount() {
        console.log('User will unmount!');  // 3번 반복. -> because user 컴포넌트 3번 사용해서
    }
    render() {
        return <li className={classes.user}>{this.props.name}</li>;
    }
} 

// const User = (props) => {
//     return (
//         <li className={classes.user}>
//             {props.name}
//         </li>
//     );
// };

export default User;