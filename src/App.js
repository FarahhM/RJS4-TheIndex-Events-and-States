import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAuthor: {},
      authors: authors,
      filteredAuthors: authors
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.resetCurrentAuthor = this.resetCurrentAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }
  selectAuthor(author) {
    this.setState({ currentAuthor: author });
  }
  viewMethod() {
    if (this.state.currentAuthor.first_name) {
      return <AuthorDetail authorsdetail={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          selectAuthor={this.selectAuthor}
          authors={this.state.filteredAuthors}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  }
  resetCurrentAuthor() {
    this.setState({ currentAuthor: {} });
  }

  filterAuthors(query) {
    const filteredAuthors = this.state.authors.filter(author => {
      return (
        author.first_name.toUpperCase().includes(query.toUpperCase()) ||
        author.last_name.toUpperCase().includes(query.toUpperCase())
      );
    });
    console.log(filteredAuthors);
    this.setState({ filteredAuthors: filteredAuthors });
  }
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar resetCurrentAuthor={this.resetCurrentAuthor} />
          </div>
          <div className="content col-10">{this.viewMethod()}</div>
        </div>
      </div>
    );
  }
}

export default App;
