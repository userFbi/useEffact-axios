import axios from 'axios'
import React, { useEffect, useState } from 'react'

const CartApi = () => {

    const [list, setList] = useState([])


    useEffect(() => {
        CallingApi()
    }, [])

    function CallingApi() {

        axios.get("https://dummyjson.com/carts")
            .then((res) => {
                setList(res.data.carts)
                // console.log(res.data.carts);
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
                        <td>price</td>
                        <td>quantity</td>
                        <td>total</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((cart) => (
                            cart.products.map((i, index) => (
                                <tr key={index}>
                                    <td>{i.id}</td>
                                    <td>{i.title}</td>
                                    <td>{i.price}</td>
                                    <td>{i.quantity}</td>
                                    <td>{i.total}</td>
                                </tr>
                            ))
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CartApi