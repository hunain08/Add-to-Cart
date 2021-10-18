import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import {Link} from 'react-router-dom';
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Container, Dropdown, FormControl, Navbar,Nav, Badge, Button } from "react-bootstrap";
import { CartState } from './ContextApi/Context';
import { AiFillDelete } from 'react-icons/ai';
const Header = () => {
   const {state:{cart},dispatch} = CartState();
    return(
        <Navbar bg="dark" variant="dark">
           <Container>
              <Navbar.Brand>
                 <Link to="/">Shopping Cart</Link>
              </Navbar.Brand>
              <Navbar.Text className="search">
                 <FormControl
                 style={{width:500}}
                 placeholder="Search a product"
                 className="m-auto"
                 />
              </Navbar.Text>
              <Nav>
                 <Dropdown alignRight>
                     <Dropdown.Toggle variant="success">
                     <FaShoppingCart color="white" fontSize="1.2em"/>
                      <Badge>{cart.length}</Badge>
                     </Dropdown.Toggle>
                     <Dropdown.Menu style={{minWidth:370}}>
                     {cart.length > 0 ? (<React.Fragment>
                        {cart.map((product)=>(
                           <span className="cartitem" key={product.id}>
                           <img
                           src={product.image}
                           className="cartItemImg"
                           alt={product.name}
                           />
                           <div className="cartItemDetail">
                           <span>{product.name}</span>
                           <span>Rs: {product.price.split(".")[0]}</span>
                           </div>
                           <AiFillDelete fontSize="20px"
                           style={{cursor:"pointer"}}
                           onClick={()=>dispatch({
                              type:"Remove_To_Cart",
                              payload:product,
                           })}/>
                           </span>
                        ))}
                        <Link to="/cart">
                        <Button style={{width:"95%" ,margin:"0 10px"}}>
                        Go To Cart
                        </Button>
                        </Link>
                        </React.Fragment>): (<span style={{padding:10}}>Cart is Empty!</span>)}   
                     </Dropdown.Menu>
                 </Dropdown>
              </Nav>
           </Container>
        </Navbar>
    )
}

export default Header;
