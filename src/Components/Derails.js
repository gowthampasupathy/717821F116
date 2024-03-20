import React from 'react'
import { useLocation } from 'react-router-dom'
import  productdata from '../data/value'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Derails = () => {
    const location = useLocation()
    const { from } = location.state
    const data =productdata.find(function(val){
        return val.productName===from ;
    })
    console.log(data)
  return (
    <div>
      <Row style={{display:"flex",alignItems:'center',justifyContent:"center"}}>
        <Col >
        {
             <Card style={{ width: '18rem',margin:'auto',marginTop:200,backgroundColor:'red'  }}>
             <Card.Body>
               <Card.Title>Product Name:{from}</Card.Title>
               <Card.Text>
                <h3>Price:{data.price}</h3>
                <h3>Rating:{data.rating}</h3>
                <h3> Discount:{data.discount}</h3>
                <h3>Availability:{data.availability}</h3>
               
               </Card.Text>
             </Card.Body>
           </Card>
        }
        </Col>
      </Row>
    </div>
  )
}

export default Derails
