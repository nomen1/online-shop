import { Menu, Input } from "semantic-ui-react";
import React from "react";

const Filter = (props) => {
  const { setFilter, setQuery } = props;
  const handleItemClick = (filter) => {
    setFilter(filter);
  };

  const handleSetQuery = (filter, query) => {
    setQuery(filter, query);
  };

  return (
    <Menu vertical>
      <Menu.Item
        color = "blue"
        active={props.filter === "all"}
        onClick={() => {
          handleItemClick("all");
        }}
      >
        Все
      </Menu.Item>
      <Menu.Item
        color = "blue"
        active={props.filter === "price_low"}
        onClick={() => {
          handleItemClick("price_low");
        }}
      >
        По цене (дешевле)
      </Menu.Item>

      <Menu.Item
        color = "blue"
        active={props.filter === "price_high"}
        onClick={() => {
          handleItemClick("price_high");
        }}
      >
        По цене (дороже)
      </Menu.Item>

      <Menu.Item
        color = "blue"
        active={props.filter === "name"}
        onClick={() => {
          handleItemClick("name");
        }}
      >
        По автору
      </Menu.Item>
      <Menu.Item>
        <Input
          value={props.query}
          onChange={(e) => {
            handleSetQuery("search", e.target.value);
          }}
          className="icon"
          icon="search"
          placeholder="Search..."
        />
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
