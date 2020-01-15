import React, { Component } from 'react'
import './Table.css';

class Table extends Component {
    render() {
        const { detail, deleteDetail } = this.props;
        const detailList = detail.map(details => {
            return(
                <div className="details" key={details.id}>
                  <div style={{display: "inline-block", width: "200px", overflow: "hidden", fontSize: "27px" }} name="name"> {details.name}</div>
                  <img src="https://img.icons8.com/flat_round/50/000000/delete-sign.png" alt="Display" onClick={() => {deleteDetail(details.id)}}></img>
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