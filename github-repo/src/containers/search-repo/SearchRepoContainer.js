import React, { Component } from "react";
import { connect } from "react-redux";
import { InputBase }from "@material-ui/core";
import { loadRepoData } from '../../actions/index';

class SearchRepoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchDiv-style">
          <InputBase
            className="usernameInput-style"
            defaultValue="Username"
            inputProps={{ "aria-label": "naked" }}
          />
          <InputBase
            className="repoName-style"
            defaultValue="Repo"
            inputProps={{ "aria-label": "naked" }}
          />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repoInfo: state.repoReducer
  };
};

const mapDispatchToProps = {
  loadRepoData: loadRepoData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchRepoContainer);
