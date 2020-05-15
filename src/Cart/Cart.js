import React from "react";
import { Item, Button } from "semantic-ui-react";

const Cart = (props) => {
  const handleClick = (id) => {
    props.deleteFromCart(id);
  };

  const items = props.cartBooks.map((book) => {
  
    return (
      <Item>
        <Item.Image size="tiny" src={book.image} />
        <Item.Content>
    <Item.Header as="a">{book.title}</Item.Header>
          <Item.Meta>{book.author}</Item.Meta>
          <Item.Extra>({book.count}) шт.</Item.Extra>
          <Button
            onClick={() => {
              handleClick(book.id);
            }}
            
            color="red"
          >
            Удалить
          </Button>
        </Item.Content>
      </Item>
    );
  });

  return <Item.Group>{items}</Item.Group>;
};

export default Cart;
