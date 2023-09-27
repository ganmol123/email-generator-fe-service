import React, { useState } from "react";
import "./App.css";

function App() {
  const [emailContent, setEmailContent] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [length, setLength] = useState(0);

  // Function to generate the email content
  const generateEmail = async () => {
    const requestData = {
      recipient_name: recipientName,
      recipient_email: recipientEmail,
      sender_name: senderName,
      subject: subject,
      keywords: keywords.split(",").map((keyword) => keyword.trim()), // Split keywords by comma
      length: length,
    };

    try {
      // Add your API endpoint here
      const url = "http://localhost:8000/generate_email";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        const data = await response.json();
        setEmailContent(data.email_content);
      } else {
        setEmailContent("Error generating email.");
      }
    } catch (error) {
      setEmailContent("Error generating email.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personalized Email Generator using GPT</h1>
        <div className="input-group">
          <label className="label">Recipient Name:</label>
          <input
            type="text"
            onChange={(e) => setRecipientName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Sender Name:</label>
          <input type="text" onChange={(e) => setSenderName(e.target.value)} />
        </div>
        <div className="input-group">
          <label className="label">Recipient Email:</label>
          <input
            type="text"
            onChange={(e) => setRecipientEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label className="label">Subject:</label>
          <input type="text" onChange={(e) => setSubject(e.target.value)} />
        </div>
        <div className="input-group">
          <label className="label">Keywords (comma-separated):</label>
          <input type="text" onChange={(e) => setKeywords(e.target.value)} />
        </div>
        <div className="input-group">
          <label className="label">Tokens:</label>
          <input
            type="number"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <button onClick={generateEmail} style={{ marginTop: "10px" }}>
          Generate Email
        </button>
        <div className="output-group">
          <h2>Email Content:</h2>
          <pre>{emailContent}</pre>
        </div>
      </header>
    </div>
  );
}

export default App;
