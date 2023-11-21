import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => setNotes(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete("http://localhost:8081/notes/" + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div>
          <Link to="/create" className="btn btn-success rounded-circle p-2 ">
            {" "}
            Add
          </Link>
        </div>
        <div className="w-75 d-flex flex-wrap justify-content-around">
          {Array.isArray(notes) && notes.length > 0 ? (
            notes.map((data, i) => (
              <div key={i} className="card m-2" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">
                    Subtitle
                  </h6>
                  <p className="card-text">{data.content}</p>
                  <Link
                    to={`/edit/${data.id} `}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(data.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No notes available</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Notes;
