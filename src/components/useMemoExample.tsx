import React, {ChangeEvent, useMemo, useState} from "react";

export const WithUseMemoExample = () => {
    let [a, setA] = useState<number>(0)
    let [b, setB] = useState<number>(0)

    let resultB = 1

   let resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            if (a === 0) tempResultA = 0

            let fake = 0
            while (fake < 100000000) {
                fake++
            }
            tempResultA *= i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        b === 0 ? resultB = 0 : resultB *= i
    }

    const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'valueA':
                return setA(+e.currentTarget.value)

            case 'valueB':
                return setB(+e.currentTarget.value)
        }
    }

    return <div>
        <br/>
        <div>Example with useMemo</div>
        <hr/>
        a: <input value={a} name={'valueA'} onChange={changeValueHandler}/>
        b: <input value={b} name={'valueB'} onChange={changeValueHandler}/>

        <div>
            Result for a: {resultA}<br/>
            Result for b: {resultB}
        </div>
    </div>
}


export const UsersList = (props: { users: Array<string> }) => {
    console.log('USERS LIST')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

export const Users = React.memo(UsersList)


export const WithUseMemoHelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    let [counter, setCounter] = useState(8)
    let [users, setUsers] = useState(['Dimych', 'Snega', 'Alex'])

    const counterHandler = () => {
        setCounter(counter + 1)
    }

    let filtredUsers = useMemo(() => {

        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    return <div>
        <button onClick={counterHandler}>+</button>
        {counter}
        <Users users={filtredUsers}/>
    </div>
}



