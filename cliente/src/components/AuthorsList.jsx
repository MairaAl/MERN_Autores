import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

const AuthorsList = (props) => {
  const { removeFromDom } = props;
  const deleteAuthor = (authorId) => {
    axios
      .delete(`http://localhost:8080/api/authors/delete/${authorId}`)
      .then((res) => {
        removeFromDom(authorId);
        console.log(authorId);
        console.log(res);
      });
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Quote</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.author.map((author) => (
          <tr key={author._id}>
            <td>{author.name}</td>
            <td>{author.quotes}</td>
            <td>
              <Link to={`/authors/update/${author._id}`}>Edit </Link>
              <button
                onClick={() => {
                  deleteAuthor(author._id);
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
AuthorsList.propTypes = {
  author: PropTypes.array,
  id: PropTypes.number,
  removeFromDom: PropTypes.func,
};

export default AuthorsList;
