import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNote.css"; 

const AddNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ title, content }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Note added successfully!");
        setTitle("");
        setContent("");
        navigate("/"); 
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error");
    }
  };

  return (
    <section className="add-note-container">
      <h2 className="add-note-heading">Add a New Note</h2>
      <form onSubmit={handleSubmit} className="add-note-form">
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="note-input"
        />
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="note-textarea"
        />
        <button type="submit" className="note-submit-btn">
          Add Note
        </button>
      </form>
    </section>
  );
};

export default AddNote;
