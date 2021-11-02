import './Product.css'
import {Link} from 'react-router-dom'

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.unsplash.com/photo-1564424224827-cd24b8915874?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80" alt="product name"/>
            <div className="product_info">
                <p className="info__name"/>
                <p className="info__description">
                    Lorem ipsum dolor sit amet consectetur adiing jasdlasjdslajhakjlgf asl;fdj kjljashdfljasd jsadflkasjdf ljhasdlfksad?
                </p>
                <p className="info__price">$499.99</p>
                <Link to={`/product/${1111}`} className="info__button">
                View
                </Link>


            </div>
        </div>
    )
}

export default Product
