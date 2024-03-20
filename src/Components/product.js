import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios'
import { useState } from 'react';
import  productdata from '../data/value'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const Product = () => {
    
    // useEffect(()=>{
    //     axios.get("http://20.244.56.144/products/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000",{
    //         headers:{
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEwOTE3NTY5LCJpYXQiOjE3MTA5MTcyNjksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImExMzdjZTJlLTFiZDItNDVhMi05ZDBmLTZhNmEwZDkyMWIyZSIsInN1YiI6IjcxNzgyMWYxMTZAa2NlLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiS2FycGFnYW0gIiwiY2xpZW50SUQiOiJhMTM3Y2UyZS0xYmQyLTQ1YTItOWQwZi02YTZhMGQ5MjFiMmUiLCJjbGllbnRTZWNyZXQiOiJGaUpnQXBibFBVblRSRVRnIiwib3duZXJOYW1lIjoiR293dGhhbSIsIm93bmVyRW1haWwiOiI3MTc4MjFmMTE2QGtjZS5hYy5pbiIsInJvbGxObyI6IjcxNzgyMWYxMTYifQ.zTLXw4337A-mEuKAP1h8tVHyUQZkcfBs6KuNVEvIiUk'
    //         }
    //     })
    //     .then((res)=>console.log(res.data))
    //     .catch((er)=>console.log(er))
    // },[])
    // console.log(product)
  return (
    <div>
       <div>
       <Navbar expand="lg"  style={{backgroundColor:'red'}}>
        <Container>
            <Navbar.Brand href="#">E-Commerce Platform</Navbar.Brand>
        </Container>
        </Navbar>
       </div>
       <div>
        <h1  style={{textAlign:'center'}}>AMZ Company Details</h1>
        <Row>
    {
        productdata.map((e,i)=>{
            return  <>
           
            <Col key={i} xs={12} md={4} sm={6}>
                    <Card style={{ width: '18rem' ,backgroundColor:'black',padding:10,margin:15,color:'white'}}>
                        <Card.Body>
                        <Card.Title>{e.productName}</Card.Title>
                        </Card.Body>
                        <Button style={{backgroundColor:'red' ,border:'red'}}><Link to={"/product" } state={{ from: `${e.productName}` }} style={{color:'black'}}>Show Details</Link></Button>
                    </Card>
            </Col>
      
            </>
           
        })
    }
      </Row>
       </div>
    </div>

  )
}

export default Product
