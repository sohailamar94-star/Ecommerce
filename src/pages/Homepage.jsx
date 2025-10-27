import React from "react";

import styled from "styled-components";
import Product from "../components/Product";
// -----------for context------------
import { EcommState } from "../context/EcommerceContext";
// -----------for context------------

// import { Box } from "@mui/material";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function Homepage() {
  const { productList, loading } = EcommState();

  return (
    <div className="App">
      <Container>
        {productList.map((prod, ind) => {
          return <Product key={ind} prod={prod} />;
        })}
      </Container>
    </div>
  );
}
