import React from "react";
import styled from "styled-components";

const Msg = styled.p`
  width: 400px;
  background-color: #eb6864;
  color: #fff;
  margin: 0;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const Error = ({ msg }) => {
  return (
    <Container>
      <Msg>{msg}</Msg>
    </Container>
  );
};

export default Error;
