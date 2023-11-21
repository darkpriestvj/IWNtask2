import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./Notes";
import CreateNotes from "./CreateNotes";
import EditNotes from "./EditNote";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Notes />}></Route>
          <Route path="/create" element={<CreateNotes />}></Route>
          <Route path="/edit/:id" element={<EditNotes />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
