// Write your Character component here
import React, { useState } from 'react'
import { Card, CardTitle, CardText, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from "styled-components";




const CharacterCard = (props) => {

  console.log(props)

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [info, setInfo] = useState(props.info.birth_year)

  const toggle = () => setDropdownOpen(prevState => !prevState)
  const eyeColor = () => setInfo(prevInfo => props.info.eye_color)
  const hairColor = () => setInfo(prevInfo => props.info.hair_color)
  const height = () => setInfo(prevInfo => props.info.height)
  const gender = () => setInfo(prevInfo => props.info.gender)

  const Wrapper = styled.section`
  padding: 2rem;
`;

  return (

    <Wrapper>
      <Col lg="6">
        <Card className='card' body>
          <CardTitle>{props.info.name}</CardTitle>
          <CardText>{info}</CardText>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
              Character Info
        </DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={eyeColor}>Eye Color</DropdownItem>
              <DropdownItem onClick={hairColor}>Hair Color</DropdownItem>
              <DropdownItem onClick={height}>Height</DropdownItem>
              <DropdownItem onClick={gender}>Gender</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Card>
      </Col>
    </Wrapper>

  )
}


export default CharacterCard