/** @format */

import React, { useState, useEffect } from "react";
import { Button, Row, ListGroup, Col, Form, Image } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../ContextApi/Context";
import { Rating } from "../Rating.js";
export const Cart = () => {
    const [total, settotal] = useState();
    const {
        state: { cart },
        dispatch,
    } = CartState();
    useEffect(() => {
        settotal(
            cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <div className='home'>
            <div className='productContainer'>
                <ListGroup>
                    {cart.map((product) => (
                        <ListGroup.Item key={product.id}>
                            <Row>
                                <Col md={2}>
                                    <Image src={product.image} fluid rounded />
                                </Col>
                                <Col md={2}>
                                    <span>{product.name}</span>
                                </Col>
                                <Col md={2}>{product.price}</Col>
                                <Col md={2}>
                                    <Rating rating={product.ratings} />
                                </Col>
                                <Col md={2}>
                                    <Form.Control
                                        as='select'
                                        value={product.qty}
                                        onChange={(e) => dispatch({
                                            type:"Change_Cart_qty",
                                            payload:{
                                                id:product.id,qty:e.target.value,
                                            },
                                        })}
                                        >
                                        {[...Array(product.inStock).keys()].map(
                                            (x) => (
                                                <option key={x + 1}>
                                                    {x + 1}
                                                </option>
                                            )
                                        )}
                                    </Form.Control>
                                </Col>
                                <Col md={2}>
                                    <Button
                                        fontSize='20px'
                                        variant='light'
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            dispatch({
                                                type: "Remove_To_Cart",
                                                payload: product,
                                            })
                                        }>
                                        <AiFillDelete fontSize='20px' />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </div>
            <div className='filters summary'>
                <span className='title'>Subtotal({cart.length}) items</span>
                <span style={{ fontWeight: 700, fontSize: 20 }}>
                    Total Rs {total}
                </span>
                <Button type='button' disabled={cart.length === 0}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    );
};
