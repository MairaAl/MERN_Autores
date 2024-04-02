import "./App.css";
import AuthorsTable from "./views/AuthorsTable";
import { Route, Routes } from "react-router-dom";
import Update from "./views/Update";
function App() {
  return (
    <>
      <Routes>
        <Route path="/authors" element={<AuthorsTable />} />
        <Route path="/authors/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
