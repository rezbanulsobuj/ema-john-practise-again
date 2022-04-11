import { useEffect, useState } from "react"
import { getStorecart } from "../utilities/fakedb"

const useCart = (products) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const storedCart = getStorecart()
        const savedcart = []
        for (const id in storedCart) {
            const added = products.find(product => product.id === id)
            if (added) {
                const quantity = storedCart[id]
                added.quantity = quantity
                savedcart.push(added)
            }

        }
        setCart(savedcart)
    }, [products])
    return [cart, setCart]
}
export default useCart;