import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserApi = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        CallingApi()
    }, [])

    function CallingApi() {
        axios.get("https://dummyjson.com/users")
            .then((res) => {
                setList(res.data.users)
                console.log(res.data.users)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>firstName</td>
                        <td>lastName</td>
                        <td>age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) => (
                            <tr key={index}>
                                <td>{i.id}</td>
                                <td>{i.firstName}</td>
                                <td>{i.lastName}</td>
                                <td>{i.age}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserApi