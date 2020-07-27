import React, { useEffect } from 'react'
import { Jumbotron, Container, Button } from 'reactstrap'
const Home=()=>
{
    useEffect(()=>{
        document.title="Home || LearnCodeWith Neha"
    },[])
    
    return(
<div >
<Jumbotron className="text-center">
    <h1 >Learn Code with Neha</h1>
    <p>this is deeveloped by neha for you all guys</p>
    <Container>
        <Button color="primary">Start Learning with Neha</Button>
    </Container>
</Jumbotron>
</div>


    );
}
export default Home;