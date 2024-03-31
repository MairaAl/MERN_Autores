import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const AuthorsList = (props) => {
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
              <Link>Edit </Link>
              <Link> Delete</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
AuthorsList.propTypes = {
  author: PropTypes.array,
};

export default AuthorsList;
