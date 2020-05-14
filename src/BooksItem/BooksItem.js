import React from 'react';
import {Card, Image, Icon, Button}  from "semantic-ui-react"








const BooksItem = (props) => {
  const handleClick = (book)=>{
   
props.addToCart(book)
  }
    return (
      
        <Card itemsPerRow={4}>
        <Image src={props.book.image} wrapped ui={false} />
        <Card.Content>
    <Card.Header>{props.book.title}</Card.Header>
          <Card.Meta>
            <span className='date'>{props.book.author}</span>
          </Card.Meta>
          
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="usd" />
           {props.book.price}
          </a>
        </Card.Content>
        <Button  onClick={()=> {handleClick(props.book)}}
        basic color='green'>
      Добавить в корзину
    </Button>
      </Card>
    
    );
  }
  
export default  BooksItem
  

  