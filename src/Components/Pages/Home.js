import React from "react";
import '../../App.css'
import { CartState } from "../ContextApi/Context";
import { Filter } from "../Filter";
import SingleProducts from "../SingleProducts";
export const Home = () => {
    const {
        state: { products },
    } = CartState();
    console.log(products);
    return <div className="home">
    <Filter/>
    <div className="productContainer">
    {products.map((product)=>{
        return<span><SingleProducts product={product} key={product.id}/></span>
    })}
    </div>
    </div>;
};
