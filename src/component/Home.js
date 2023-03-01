import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import {  useParams,} from "react-router-dom";
import React from "react";
import { useLocation } from "react-router-dom";
import About from './About'
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Home = (props) => {
  let query = useQuery();
  const [state, setState] = useState({});
  function changehandle(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <>
      <h1>This is home page</h1>
      <input
        name="name"
        value={state?.name}
        onChange={changehandle}
        placeholder="Enter Your Name"
      />
      <input
        name="age"
        value={state?.age}
        onChange={changehandle}
        placeholder="Enter Age"
      />
      <input
        name="designation"
        value={state?.designation}
        onChange={changehandle}
        placeholder="Enter Designation"
      />
      <Link
        to={`/about/${state.name}?age=${state.age}&designation=${state.designation}`}
      >
        About
      </Link>
     
    </>
  );
};



export default Home;
