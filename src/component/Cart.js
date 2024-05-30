import React from 'react'
import { useSelector } from 'react-redux'
import { Card,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import{remove} from "../store/cartSlice"

const Cart = () => {
  const productCart=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  const DeleteHandler=(id)=>{
dispatch(remove(id))
 
  }

  const card = productCart.map((product) => {
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
            
            <Button onClick={()=>DeleteHandler(product.id)} variant="primary">Delete to cart</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>cart
      {card}
    </div>
  )
}

export default Cart