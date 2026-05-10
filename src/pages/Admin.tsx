import { useEffect, useState } from "react";

type Message = {
  name: string;
  email: string;
  message: string;
};

function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const savedMessages = JSON.parse(
      localStorage.getItem("messages") || "[]"
    );

    setMessages(savedMessages);

    console.log(savedMessages);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Admin Panel</h2>

      {messages.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <table className="table table-bordered">
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