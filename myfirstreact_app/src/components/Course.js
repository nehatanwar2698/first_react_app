import React from 'react'
import { Card, CardBody, CardSubtitle, CardText, Container, Button } from 'reactstrap';

const Course=({course})=>{
    return(
        <div>
<Card className="text-center p-4"> 
    <CardBody></CardBody>
    <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
    <CardText>{course.description}</CardText>
    <Container  > 
        <Button color="danger">Delete</Button>
        <Button color="warning ml-3">Update</Button>
    </Container>
</Card></div>

    );
}
export default Course;