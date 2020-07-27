import React, { useEffect } from 'react'
const About=()=>{
    useEffect(()=>{
        document.title="About";
    },[])
    return(
<div>
<h2 className="my-5">Code With Neha is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn</h2>
    
</div>

    );
}
export default About;