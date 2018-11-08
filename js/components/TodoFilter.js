import React from "react";
import { connect } from "react-redux";

import { setVisibilityFilter } from "../actions";

const Link = ({ active, children, onClick }) => {
  if (active) {
    return (
      <div className="control">
        <a className="button is-small" disabled>
          {children}
        </a>
      </div>
    );
  }

  return (
    <div className="control">
      <a
        className="button is-small"
        href="#"
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
      >
        {children}
      </a>
    </div>
  );
};

const mapStateProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};
const mapDispatchProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};

const FilterLink = connect(
  mapStateProps,
  mapDispatchProps
)(Link);

export default () => (
  <div className="field has-addons" style={{ width: "100%" }}>
    <FilterLink filter="SHOW_ALL">All</FilterLink>
    <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
    <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
  </div>
);
