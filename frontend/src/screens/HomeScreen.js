import './HomeScreen.css'
import Product from '../components/Product'
import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

//Actions
import { getProducts as listProducts} from '../redux/actions/productActions'

const HomeScreen = () => {
    const getProducts = useSelector(state => state.getProducts);
    const dispatch = useDispatch();
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return (
        <div className="homescreen">
            <h2 className="homescreen__title">Latest Products</h2>
            <div className="homescreen__products">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default HomeScreen
