import React, { Component } from 'react'
import './Table.css';

class Table extends Component {
    render() {
        const { detail, deleteDetail } = this.props;
        const detailList = detail.map(details => {
            return(
                <div className="details" key={details.id}>
                  <input type="radio" className="checked" /> 
                  <div style={{display: "inline-block", width: "200px", overflow: "hidden"}} name="name"> {details.name}</div>
                  <button onClick={() => {deleteDetail(details.id)}}>Delete</button>
                </div>
            )
        })

      return (
        <div className="detail-List">
            { detailList }
        </div>
      )
    }
  }

export default Table