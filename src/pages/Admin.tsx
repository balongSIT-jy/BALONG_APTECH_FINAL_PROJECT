import { useEffect, useState } from "react";

type Message = {
  name: string;
  email: string;
  message: string;
};

function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);

  
  useEffect(() => {
  try {
    const data = localStorage.getItem("messages");
    const savedMessages = data ? JSON.parse(data) : [];
    setMessages(savedMessages);
  } catch (error) {
    console.error("Failed to parse messages", error);
    setMessages([]);
  }
}, []);

 
  const clearMessages = () => {
    if (window.confirm("Are you sure you want to delete all stored messages?")) {
      localStorage.removeItem("messages");
      setMessages([]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Admin Panel</h2>
        {messages.length > 0 && (
          <button className="btn btn-danger btn-sm" onClick={clearMessages}>
            Clear All History
          </button>
        )}
      </div>

      <div className="card shadow-sm p-4">
        {messages.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted">No messages stored in this browser yet.</p>
            <small>Messages sent via the Contact page will appear here.</small>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped table-hover border">
              <thead className="table-dark">
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg, index) => (
                  <tr key={index}>
                    <td className="fw-bold">{msg.name}</td>
                    <td>{msg.email}</td>
                    <td style={{ whiteSpace: "pre-wrap" }}>{msg.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;