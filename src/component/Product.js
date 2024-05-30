import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import {add} from "../store/cartSlice"
import { useDispatch,useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";


const Product = () => {
 // const [products, setProducts] = useState([]);
 const dispatch=useDispatch()
 const {data:products,status}=useSelector(state=>state.products)
  useEffect(() => {

   dispatch(getProducts())
    // fetch("https://fakestoreapi.com/products/")
    //   .then((res) => res.json())
    //   .then((json) => setProducts(json));
  }, []);
if(status ==="loading"){

  return <p>Loading...</p>
}

  const addToCart=(product)=>{
  dispatch(add(product))
  }

  const card = products.map((product) => {
    return (
      <div className="col-md-3" style={{ marginBottom: "10px" }}>
        <Card key={product.id} className="h-100">
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
          <Card.Footer style={{backgroundColor:"white",textAlign:"center"}}>
            
            <Button  onClick={()=>addToCart(product)}variant="primary">Add to cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });
  return (
    <div>
      <h1>product dashboard</h1>

      <div className="row">{card}</div>
    </div>
  );
};

export default Product;
