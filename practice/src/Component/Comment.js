import React, { useState } from "react";

const App = () => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  const handleAddComment = () => {
    setComments([...comments, input]);
    setInput("");
  };

  const handleDeleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <h1>Comments</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Write your comment..."
        rows="4"
        style={{ width: "100%" }}
      />
      <button onClick={handleAddComment}>Add Comment</button>
      <div>
        <h2>Comments:</h2>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#f9f9f9",
              }}
            >
              <p style={{ margin: 0 }}>{comment}</p>
              <button
                onClick={() => handleDeleteComment(index)}
                style={{
                  background: "blue",
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No comments yet!</p>
        )}
      </div>
    </div>
  );
};

export default App;
