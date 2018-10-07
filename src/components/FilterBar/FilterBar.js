import React, { Component } from "react";
import { connect } from "react-redux";
import { filterPosts } from "../../actions/deckActions";
import "./FilterBar.css";

class FilterBar extends Component {
  render() {
    return (
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Filter..."
          onChange={event => {
            this.props.filterPosts(event.target.value);
          }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  { filterPosts }
)(FilterBar);
