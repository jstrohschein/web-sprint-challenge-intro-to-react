import React from 'react'
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: red;
`;

const Title = () => {
  return (
    <h1>React Wars</h1>
  )

  //For some reason, when I put <StyledTitle>React Wars<StyledTitle> I get an error saying 'Invalid Hook Call'. I'm leaving it here in comments for MVP to show that I know how it's supposed to work


}

export default Title