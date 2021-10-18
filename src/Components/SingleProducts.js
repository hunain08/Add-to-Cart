import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Rating } from './Rating'
import '../App.css';
import { CartState } from './ContextApi/Context';
const SingleProducts = ({product}) => {
    const {state:{cart},dispatch,} = CartState();
    return (
        <div className="products">
            <Card>
            <Card.Img variant="top" 
            src={product.image}
            alt={product.name}
            >
            </Card.Img>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom:10}}>
            <span>Rs: {product.price.split(".")[0]}</span>
            {product.fastDelivery ? (
                <div>Fast Delivery</div>
            ):(<div>4 days Delivery</div>)}
            <Rating rating={product.ratings}/>
            </Card.Subtitle>
            {
                cart.some(p=>p.id === product.id) ? ( <Button
                     onClick={()=>{
                dispatch({
                    type:"Remove_To_Cart",
                    payload:product,
                });
            }} 
             variant="danger">
            Remove from cart
            </Button>):( <Button onClick={()=>{
                dispatch({
                    type:"ADD_To_Cart",
                    payload:product,
                });
            }} disabled={!product.inStock}>
               {!product.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>)
            }
           
           
            </Card.Body>
            </Card>
        </div>
    )
}

export default SingleProducts
