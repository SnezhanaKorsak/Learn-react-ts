import React, {useState} from "react";


type CounterType = {
    count: number
}

type UsersListType = {
    users: Array<string>
}

export const Counter: React.FC<CounterType> = ({ count}) => {
    return <div>{count}</div>
}

export const UsersList: React.FC<UsersListType>  = ({users}) => {
    return <div>
        {users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

export const Users = React.memo(UsersList)

export const Example1 = () => {
    let [counter, setCounter] = useState(8)
    let [users, setUsers] = useState(['Dimych', 'Snega', 'Alex'])

    const counterHandler = () => {
        setCounter(counter + 1)
    }

    const addUserHandler = () => {
        setUsers([...users, 'NewUser ' + new Date().getTime()])
    }

    return <div>
        <button onClick={counterHandler}>+</button>
        <button onClick={addUserHandler}>add user</button>

        <Counter count={counter}/>
        <Users users={users}/>
    </div>

}