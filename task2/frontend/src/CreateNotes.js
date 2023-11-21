import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CreateNotes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8081/create", { title, content })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-20 bg-white rounded">
        <form onSubmit={handleSubmit}>
          <h2>Add Notes</h2>
          <div className="mb-2">
            <label htmlFor="">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Content</label>
            <input
              type="text"
              placeholder="Enter content"
              className="form-control"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNotes;
