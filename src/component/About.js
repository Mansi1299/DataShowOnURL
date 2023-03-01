import React from "react";
 import {  useParams, useSearchParams,} from "react-router-dom";
const About = () => {

  let { id } = useParams();
 
  const [searchParams] = useSearchParams();
  const age = searchParams.get("age");
  // const name = searchParams.get("name");
  const designation = searchParams.get("designation");
  // console.log(name)
  
  return (
    <div>
      <h1>This is About </h1>
     <h1>    {id} </h1> 
     <h1>    {designation} </h1> 
     <h1>    {age} </h1> 

    </div>
  );
};

export default About;