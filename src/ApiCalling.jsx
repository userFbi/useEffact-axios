import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ApiCalling = () => {

    const [list, setList] = useState()

    useEffect(() => {
        apiCall()
    }, [])

    function apiCall() {
        axios.get('https://dummyjson.com/quotesF')
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
                        <td>quotes</td>
                        <td>author</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) => (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.quotes}</td>
                                <td>{i.author}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ApiCalling