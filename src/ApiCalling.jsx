import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCalling = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        apiCall()
    },[])

    function apiCall() {
        // axios.get('https://dummyjson.com/quotes')
        axios.get('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((res) => {
                console.log(res.data);
                setList(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>body</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) => (
                            <tr id={index}>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.body}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    )
}
export default ApiCalling