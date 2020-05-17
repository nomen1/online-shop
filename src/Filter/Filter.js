import { Menu, Input, Checkbox, List } from "semantic-ui-react";
import React from "react";
import {useState} from "react"

const Filter = (props) => {
  const { setFilter, setQuery } = props;

  const [Checked, setChecked] = useState([])

  const handleToggle = (genre, filterType) => {

      const currentIndex = Checked.indexOf(genre);
      const newChecked = [...Checked];

      if (currentIndex === -1) {
          newChecked.push(genre)
      } else {
          newChecked.splice(currentIndex, 1)
      }

      setChecked(newChecked)
      props.handleMultipleFilters(newChecked, filterType)
      
    }










  const handleItemClick = (filter) => {
    setFilter(filter);
  };

  const handleSetQuery = (filter, query) => {
    setQuery(filter, query);
  };

  return (
    <Menu vertical>

     <Checkbox  onChange={() => handleToggle('classic', "multiplayFilter")} label='Классика' />
      
     <Checkbox  onChange={() => handleToggle('scientific', "multiplayFilter")} label='Научная литература' />
     
     <Checkbox  onChange={() => handleToggle('modern', "multiplayFilter")} label='Современная литература' />
  

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
