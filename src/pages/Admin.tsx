
import { useEffect, useState } from "react";

function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(data);
  }, []);

  return (
    <div className="container-fluid mt-9">
      <h2>Admin Panel</h2>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg, index) => (
              <tr key={index}>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Admin;