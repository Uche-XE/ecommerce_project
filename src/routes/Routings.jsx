import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Register from '../pages/Register'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import ProductList from '../pages/ProductList'
import Product from '../pages/Product'
import Products from '../components/Products'







const Routings = () => (
    <Router>
        <main>
            <Routes>
                <Route path="/" element={<Homepage />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
                <Route path="/cart" element={<Cart />}/>
                <Route path="/product-list" element={<ProductList />}/>
                <Route path="/product" element={<Product />}/>
                <Route path="/products" element={<Products />}/>
            </Routes>
        </main>
    </Router>
)

export default Routings