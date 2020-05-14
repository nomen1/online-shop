import { Menu, Input } from "semantic-ui-react";
import React from "react";

const Filter = (props) => {
  const { setFilter, setQuery } = props;
  const handleItemClick = (filter) => {
    debugger;
    setFilter(filter);
  };

  const handleSetQuery = (filter, query) => {
    setQuery(filter, query);
  };

  return (
    <Menu vertical>
      <Menu.Item
        onClick={() => {
          handleItemClick("all");
        }}
      >
        Все
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          handleItemClick("price_low");
        }}
      >
        По цене (дешевле)
      </Menu.Item>

      <Menu.Item
        onClick={() => {
          handleItemClick("price_high");
        }}
      >
        По цене (дороже)
      </Menu.Item>

      <Menu.Item
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
