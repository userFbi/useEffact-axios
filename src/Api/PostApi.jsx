import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostApi = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        CallingApi()
    }, [])

    function CallingApi() {
        axios.get("https://dummyjson.com/post")
            .then((res) => {
                setList(res.data.posts)
                console.log(res.data.posts)
            })
            .catch((error) => console.log(error))
    }

    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>title</td>
                        <td>body</td>
                        <td>views</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) => (
                            <tr key={index}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.body}</td>
                                <td>{i.views}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default PostApi