import React, { Component } from 'react';
import Table from './Table';
import AddDetail from './AddDetail';

class TodoList extends Component {
    constructor(){
      super();
      this.state= {
        detail : []
      };
      this.count = 0;
    }
    
    addDetail = (detail) => {
      detail.id = this.count++;
        this.setState({
          detail : [...this.state.detail, detail]
        })
    }
  
    deleteDetail = (id) => {
      let detail = this.state.detail.filter(detail => {
        return detail.id !== id;
      })
      this.setState({
        detail: detail
      })
    }
    render() {
      return (
        <div className="TodoList">
          <p style={{fontSize: '40px'}}>ToDo-List</p>
          <Table deleteDetail = {this.deleteDetail} detail={this.state.detail}/>
          <AddDetail addDetail={this.addDetail} />
        </div>
      );
    }
  }
  
  export default TodoList;
  