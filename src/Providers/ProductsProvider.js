import React, { useReducer, useState } from 'react';
import { useContext } from 'react';

const ProcductContext = React.createContext();
const ProcductContextDispatcher = React.createContext();
const initialState = [
    { title: "react.js", price: "99$", id: 1, quantity: 1 },
    { title: "node.js", price: "89$", id: 2, quantity: 2 },
    { title: "javascript", price: "79$", id: 3, quantity: 3 },
]


const reducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'increment':
            const index = state.findIndex((item) => item.id === action.id);
            console.log(index)
            const product = { ...state[index] }
            product.quantity++
            const updateProduct = [...state];
            updateProduct[index] = product;
            return updateProduct
        case 'decrement':
            {
                const index = state.findIndex((item) => item.id === action.id);
                const product = { ...state[index] }
                if (product.quantity === 1) {
                    const filteredProducts = state.filter((p) => p.id !== action.id);
                    return filteredProducts;
                } else {
                    const updateProduct = [...state];
                    product.quantity--;

                    updateProduct[index] = product;

                    return updateProduct;
                }
            }


        case 'edit':
            {
                const index = state.findIndex((item) => item.id === action.id);
                const product = { ...state[index] }
                product.title = action.event.target.value;
                const updateProduct = [...state];
                updateProduct[index] = product;
                return updateProduct;
            }

        case 'remove':
            const filteredProduct = state.filter((p) => p.id !== action.id);

            return filteredProduct;
        default:
            return state;
    }

}
const ProductsProvider = ({ children }) => {

    const [products, dispatch] = useReducer(reducer, initialState)


    return (
        <ProcductContext.Provider value={products}>
            <ProcductContextDispatcher.Provider value={dispatch}>
                {children}
            </ProcductContextDispatcher.Provider>
        </ProcductContext.Provider>
    );

}
export default ProductsProvider;

export const useProducts = () => useContext(ProcductContext);
export const useProductsActions = () => {
    return useContext(ProcductContextDispatcher);
    // const products = useContext(ProcductContext)

    // const changeHandler = (e, id) => {
    //     const index = products.findIndex((item) => item.id === id);
    //     const product = { ...products[index] }
    //     product.title = e.target.value;
    //     const updateProduct = [...products];
    //     updateProduct[index] = product;
    //     setProducts(updateProduct)
    // }

    // const removeHandler = (id) => {
    //     console.log('clicked', id)
    //     const filteredProduct = products.filter((p) => p.id !== id);
    //     setProducts(filteredProduct)
    // }

    // const incrementHandler = (id) => {
    //     const index = products.findIndex((item) => item.id === id);
    //     console.log(index)
    //     const product = { ...products[index] }
    //     product.quantity++
    //     const updateProduct = [...products];
    //     updateProduct[index] = product;
    //     setProducts(updateProduct)
    // }
    // const decrementHandler = (id) => {
    //     const index = products.findIndex((item) => item.id === id);
    //     const product = { ...products[index] }
    //     if (product.quantity === 1) {
    //         const filteredProducts = products.filter((p) => p.id !== id);
    //         setProducts(filteredProducts)
    //     } else {
    //         const updateProduct = [...products];
    //         product.quantity--;

    //         updateProduct[index] = product;
    //         setProducts(updateProduct)
    //     }




    // }
    // return {removeHandler,incrementHandler,decrementHandler,changeHandler}

}




