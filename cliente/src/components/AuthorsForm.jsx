import { useState } from "react";
import axios from "axios";
const AuthorsForm = () => {
  const [name, setName] = useState("");
  const [quotes, setQuotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/authors/new", { name, quotes })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          placeholder="Enter a author´s name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Quote:</label>
        <input
          type="text"
          value={quotes}
          placeholder="Enter a author´s quote"
          onChange={(e) => setQuotes(e.target.value)}
        />
      </div>
      <input type="submit" value="Add author" />
    </form>
  );
};
export default AuthorsForm;
