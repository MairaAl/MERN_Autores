import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8080/api/authors/${id}`).then((res) => {
      console.log(res.data);
      setName(res.data.author.name);
      setQuote(res.data.author.quotes);
    });
  }, [id]);
  const updatePerson = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/api/authors/${id}`, { name, quote })
      .then((res) => console.log(res));
  };
  return (
    <div>
      <h3>Update an author</h3>
      <form onSubmit={updatePerson}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Quote</label>
          <input
            type="text"
            name="quote"
            value={quote}
            onChange={(e) => {
              setQuote(e.target.value);
            }}
          />
        </div>
        <input type="submit" value="Save changes" />
      </form>
      <Link to={`/authors/`}>Back to homepage</Link>
    </div>
  );
};

export default Update;
