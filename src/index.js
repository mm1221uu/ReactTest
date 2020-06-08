import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import MyList from './MyList';


const toDos = [
"Read Biograpy Book",
"learn every day",
"learn Jira"
];

ReactDom.render(
<MyList theList={toDos} />,
document.getElementById('root')
);