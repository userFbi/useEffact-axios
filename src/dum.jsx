



import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCalling810 = () => {

    const [list, setList] = useState([])
    const [no, setNo] = useState(0)

    // [] => 1 load
    // [state] => single
    // [state , state] => multi

    useEffect(() => {
        apiCall()
    }, [no])

    function apiCall() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
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

            <button onClick={() => setNo(no + 1)}>+++</button>
            <table border={1}>
                <tr>
                    <td>userid</td>
                    <td>id</td>
                    <td>title</td>
                    <td>body</td>
                </tr>
                {
                    list.map((i, index) => (
                        <tr>
                            <td>{i.userId}</td>
                            <td>{i.id}</td>
                            <td>{i.title}</td>
                            <td>{i.body}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}

export default ApiCalling810

