import "./App.css";
import AuthorsList from "./components/AuthorsList";
import AuthorsTable from "./views/AuthorsTable";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthorsTable />} />
        <Route path="/authors/" element={<AuthorsList />} />
      </Routes>
    </>
  );
}

export default App;
