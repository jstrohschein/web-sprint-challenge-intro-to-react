import React from 'react'
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: Yellow;
  font-weight: heavy;
`;

const Title = () => {
  return (
    <StyledTitle>React Wars</StyledTitle>
  )

  //For some reason, when I put <StyledTitle>React Wars<StyledTitle> I get an error saying 'Invalid Hook Call'. I'm leaving it here in comments for MVP to show that I know how it's supposed to work


}

export default Title