import { useEffect, useState } from 'react';
import { createUser, getUsers, getUsersAsync, getUsersById } from './services';

const UserList = () => {
    const [users, setUsers] = useState([])
    getUsersAsync(setUsers)
    return (
        <>
            <h3>List Users</h3>
            <ul>
                {
                    users.map((user, k) => (
                        <li key={k}>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                        </li>
                    ))
                }
            </ul>   
        </>
    )
}

const GetUser = () => {
    const [user, setUser] = useState({})
    getUsersById('1',setUser)
    return (
        <>
            <ul>
                <li>Id : {user.id}</li>
                <li>Name : {user.name} </li>
                <li>Username : {user.username}</li>
                <li>Email : {user.email}</li>
                {/* <li>Address : {user.address.city}</li>/ */}
            </ul>
        </>
    )
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
               {/* <UserList/> */}
               <GetUser/>
            </header>
        </div>
    );
}

export default App;
