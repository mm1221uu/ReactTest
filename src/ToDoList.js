import React, { Component } from 'react';
import ListItem from './ListItem';

const ToDoList = props => {
  const list = props.todoItems.map((item,index) => {
        return <ListItem task={item} key={index} />;
  });

    return (
        <ul>
            {list}
        </ul>
    );
}

export default ToDoList;