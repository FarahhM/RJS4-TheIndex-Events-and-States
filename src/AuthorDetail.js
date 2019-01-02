import React, { Component } from "react";
// Data
import authors from "./data";
//Components
import AuthorCard from "./AuthorCard";

class AuthorDetail extends Component {
  render() {
    const authorBookTitle = this.props.authorsdetail.books.map(book => (
      <tr>
        <td>{book.title}</td>
        <td>I SHOULD BE A STRING OF THIS BOOK'S AUTHORS</td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    ));
    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {this.props.authorsdetail.first_name +
              " " +
              this.props.authorsdetail.last_name}
          </h3>
          <img
            src={this.props.authorsdetail.imageUrl}
            className="img-thumbnail"
          />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{authorBookTitle}</tbody>
        </table>
      </div>
    );
  }
}
export default AuthorDetail;
