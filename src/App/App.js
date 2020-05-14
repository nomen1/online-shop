import React from 'react';
import '.././App.css';
import Header from "../../src/Header/HeaderContainer"
import {Container, Card} from "semantic-ui-react"
import Filter from "../Filter/FilterContainer"
import useMediaQuery from "./../useMediaQuery"





const App = (props)=> {


  
  const lg = useMediaQuery("(min-width: 1200px)");

  

  return (
    <Container>
        <Header/>
        <Filter/>
        <Card.Group itemsPerRow = {lg && 8} >
        {props.books}
        </Card.Group>   
    </Container>
  
  );
}


export default App