import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductApi = () => {

    const [list, setList] = useState([])

    useEffect(() => {
        productApiCall()
    },[])

    function productApiCall() {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                setList(res.data.products);
                console.log(res.data.products);
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
                        <td>title</td>
                        <td>category</td>
                        <td>description</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((i, index) => (
                            <tr key={index}>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.category}</td>
                                <td>{i.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductApi