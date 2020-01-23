import React, { Fragment } from "react";
import { connect } from "react-redux";
import { getRequests } from "./Api";
import { deleteRow, filterByStat } from "./action";

import "./Request.css";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(getRequests());
  }

  deleteRow = id => {
    console.log(id);
    this.props.dispatch(deleteRow(id));
  };

  handleDropDownChange = event => {
    // console.log("111", event);
    this.props.dispatch(filterByStat(event.target.value));
  };

  render() {
    const requestTableRow = this.props.lists.map(list => (
      <tr key={list.id} className={list.status}>
        <td>{list.title}</td>
        <td>{list.status}</td>
        <td>{list.created_at}</td>
        <td>{list.updated_at}</td>
        <td className="delete-link" onClick={() => this.deleteRow(list.id)}>
          Delete
        </td>
      </tr>
    ));
    const tableHeader = (
      <Fragment>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Delete</th>
        </tr>
      </Fragment>
    );
    return (
      <div>
        <select onChange={e => this.handleDropDownChange(e)}>
          <option value="SHOW_ALL">Filter All</option>
          <option value="Approved">Filter Approved</option>
          <option value="Pending">Filter Pending</option>
          <option value="Denied">Filter Denied</option>
        </select>
        <table>
          {tableHeader}
          {requestTableRow}
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const filter = state.dropdownFilter.filter;
  console.log(filter);
  const unsortedList = state.fetchTableList.lists;
  const lists =
    filter === "SHOW_ALL"
      ? unsortedList
      : unsortedList.filter(list => list.status === filter);
  console.log("111", lists);
  return {
    lists
  };
};

export default connect(
  mapStateToProps,
  null
)(Table);
