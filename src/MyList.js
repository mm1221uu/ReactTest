import React, {Component} from 'react';
import ToDoList from './ToDoList';


class MyList extends Component {
   constructor(props) {
     super(props);

     this.state = {
        toDoItems: props.theList,
        newItem: "Hey Elon!"
     };
   }

    clearList = (e) => {
       this.setState({
        toDoItems: []
       });
    }

    addItem = (e) => {
     e.preventDefault();
     
       const { toDoItems, newItem } = this.state;

       this.setState({
           toDoItems: [...toDoItems, newItem],
           newItem: ""
       });
    }

       newItemChange = (e) => {
         this.setState({
             newItem: e.target.value
         });
       }

       render() {
         
            return (

                <div>
                    <h1>Things I should stop procrastinating:</h1>
                    <ToDoList todoItems={this.state.toDoItems} />
                    <br />

                    <form>
                        <input type="text"
                            placeholder="Type a task here!"
                            onChange={this.newItemChange}
                            value={this.state.newItem}
                            />
                        <button onClick={this.addItem}>Add Task!</button>
                    </form>

                    <hr />
                    <button
                        onClick={this.clearList}>
                            I Finished Everthing!
                    </button>
                </div>
            );
       }
    }
    export default MyList;