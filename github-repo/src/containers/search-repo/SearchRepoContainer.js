import React, { Component } from "react";
import { connect } from "react-redux";
import { InputBase }from "@material-ui/core";
import { loadRepoData } from '../../actions/index';
import * as constants from '../../utils/constants';

class SearchRepoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { user: "", repo: "" }
    this.handleUsername = this.handleUsername.bind(this)
    this.handleRepo = this.handleRepo.bind(this)
    this.handleSearchRepoInfo = this.handleSearchRepoInfo.bind(this)
  }

  timer = null;
  
  componentWillMount() {
    this.timer = null;
  }

  handleUsername(text) {
    clearTimeout(this.timer);
    text.preventDefault()

    if(text.target.value.length > 0) {
      this.setState({"user": text.target.value})
      this.timer = setTimeout(this.handleSearchRepoInfo, constants.waitInterval);
    }
  }

  handleRepo(text) {
    clearTimeout(this.timer);
    text.preventDefault()

    if(text.target.value.length > 0) {
      this.setState({"repo": text.target.value})
      this.timer = setTimeout(this.handleSearchRepoInfo, constants.waitInterval);
    }
  } 

  handleSearchRepoInfo() {
    if(this.state && this.state.repo.length > 0 && this.state.user.length > 0) {
      this.props.loadRepoData(this.state.user, this.state.repo)
    }
  }

  render() {
    return (
      <div className="searchDiv-style">
          <InputBase
            className="usernameInput-style"
            defaultValue="Username"
            type="search"
            onChange={(e) => this.handleUsername(e)}
            inputProps={{ "aria-label": "naked" }}
          />
          <InputBase
            className="repoName-style"
            defaultValue="Repo"
            type="search"
            onChange={(e) => this.handleRepo(e)}
            inputProps={{ "aria-label": "naked" }}
          />
      </div>
    );
  }
}


const mapDispatchToProps = {
  loadRepoData: loadRepoData
};

export default connect(
  null,
  mapDispatchToProps
)(SearchRepoContainer);
