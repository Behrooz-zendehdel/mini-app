
import { Component } from 'react';
import './App.css'
import Wrapper from './components/hoc/Wrapper';
import ParentComp from './components/PureMemoComp/ParentComp';
// import ClassCounter from './components/ClassCounter';
// import ClassTimer from './components/ClassTimer';
// import FunctionalTimer from './components/FunctionalTimer';
// import FunctionalCounter from './components/FunctionalCounter';
// import ProductList from './components/ProductList/ProductList';
// import Navbar from './components/Navbar/Navbar';
// import ClickCounter from './components/hocExample/ClickCounter';
// import HoverCounter from './components/hocExample/HoverCounter';

class App extends Component {
    constructor(props) {
        super(props)
        console.log('app.js constructor ');
    }

    state = {
        products: [
            { title: "react.js", price: "99$", id: 1, quantity: 1 },
            { title: "node.js", price: "89$", id: 2, quantity: 2 },
            { title: "javascript", price: "79$", id: 3, quantity: 3 },
        ],
        isShow: true,

    }

    changeHandler = (e, id) => {
        const index = this.state.products.findIndex((item) => item.id === id);
        const product = { ...this.state.products[index] }
        product.title = e.target.value;
        const products = [...this.state.products];
        products[index] = product;
        this.setState({ products })
    }

    removeHandler = (id) => {
        console.log('clicked', id)
        const filteredProduct = this.state.products.filter((p) => p.id !== id);
        this.setState({ products: filteredProduct })
    }
    incrementHandler = (id) => {
        const index = this.state.products.findIndex((item) => item.id === id);
        console.log(index)
        const product = { ...this.state.products[index] }
        product.quantity++
        const products = [...this.state.products];
        products[index] = product;
        this.setState({ products })

    }
    decrementHandler = (id) => {
        const index = this.state.products.findIndex((item) => item.id === id);
        const product = { ...this.state.products[index] }
        if (product.quantity === 1) {
            const filteredProducts = this.state.products.filter((p) => p.id !== id);
            this.setState({ products: filteredProducts })
        } else {
            const products = [...this.state.products];
            product.quantity--;

            products[index] = product;
            this.setState({ products })
        }




    }



    render() {
        return (



            <>
                <ParentComp />

                {/* <Navbar totalItems={this.state.products.filter((p) => p.quantity > 0).length} />
                <ProductList products={this.state.products}
                    onRemove={this.removeHandler}
                    onIncrement={this.incrementHandler}
                    onDecrement={this.decrementHandler}
                /> */}

            </>

        )
    }

};

export default Wrapper(App, "container");






