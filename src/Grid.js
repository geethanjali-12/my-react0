import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Profile 1</Card.Title>
        <Card.Text>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw1zEh8p_-D5WMuYRmR91SL1awCy02ZFJ86Q&s"height="200"width="200"alt="notfount"></img>  
         </Card.Text>
       <p>Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they may find inspiration and strength to go on, in his story.</p>
       <p>&#128192;&#128187;</p>
      </Card.Body>
    </Card></Col>
        <Col> <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Profile 2</Card.Title>
          <Card.Text>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXw2Vr4ZWKzXea8BRYUgb5eDCs8KCUf4O63e8r1W5nH8Lv7RwpNIHHeZ7CTsDQksv_N7I&usqp=CAU"
           height="200"width="200"alt="notfount"></img> 
           </Card.Text>
           <p>Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they
           may find inspiration and strength to go on, in his story.</p>      
           <p>&#128192;&#128187;</p>
        </Card.Body>
      </Card></Col>
        <Col> <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Profile 3</Card.Title>
        <Card.Text>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHehiGkuYb2BpQ06BFQa6LyLZ8kRZTM1exxDZxDdVv1s_24fqUQI2oHbXEnN6h904R2Os&usqp=CAU"
         height="200"width="200"alt="notfount"></img>       
         </Card.Text>
        <p>Every common man who by his sheer grit and hard work achieves success should share his story with the rest for they may find
         inspiration and strength to go on, in his story.</p>  
         <p>&#128192;&#128187;</p>  
     </Card.Body>
    </Card></Col>
      </Row>
    </Container>
  );
}

export default ContainerFluidExample;