import React, { Fragment,useEffect } from 'react'
import { Form, FormGroup, Label, Input, Container, Button } from 'reactstrap'
const AddCourse=()=>{
    useEffect(()=>{
        document.title="Add Course"
    },[])
    return(
        <Fragment>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form>
                <FormGroup>
                    <Label for="userId" className="font-weight-bold">Course Id </Label>
                    <Input type="text" name="userId" id="userId" placeholder="Enter Here.." />
                    
                </FormGroup>

                <FormGroup>
                    <Label for="title" className="font-weight-bold">Course Title </Label>
                    <Input type="text" name="title" id="title" placeholder="Enter Title Here.." />
                    
                </FormGroup>
                

                <FormGroup>
                    <Label for="description" className="font-weight-bold">Course Description </Label>
                    <Input type="textarea" name="description" id="description" placeholder="Enter Description  Here.."  style={{height:200}}/>
                    
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>

            </Form>
        </Fragment>

    );
}
export default AddCourse;