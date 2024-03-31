import { useState, useEffect } from "react";
import AuthorsList from "../components/AuthorsList";
import AuthorsForm from "../components/AuthorsForm";
import axios from "axios";

function AuthorsTable() {
  const [author, setAuthor] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/authors/")
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setAuthor]);
  return (
    <div>
      <h3>Authors List</h3>
      {loaded && <AuthorsList author={author.authors} />}
      <h3>Authors Form</h3>
      <AuthorsForm />
    </div>
  );
}
export default AuthorsTable;
