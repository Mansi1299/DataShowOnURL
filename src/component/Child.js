import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import React from "react";
import { useLocation } from "react-router-dom";

function Child({ name }) {
    return (
      <>
      <div>
        {name ? (
          <h3>
            The <code>name</code> in the query string is &quot;{name}&quot;
          </h3>
         
        ) : (
          <h3>There is no name in the query string</h3>
        )}
      </div>
      
     
      </>
    );
  }
  export default Child;