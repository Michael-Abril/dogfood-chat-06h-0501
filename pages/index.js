import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [messages, setMessages] = useState([
    { user: "System", text: "Welcome to Dogfood Chat!" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function send(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages((m) => [...m, { user: "You", text: input }]);
    setInput("");
  }

  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 600, margin: "40px auto", padding: "0 16px" }}>
      <h1>Dogfood Chat — Stack 5</h1>
      <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 16, minHeight: 300, marginBottom: 12 }}>
        {messages.map((m, i) => (
          <div key={i}><strong>{m.user}:</strong> {m.text}</div>
        ))}
        <div ref={endRef} />
      </div>
      <form onSubmit={send} style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, padding: 8, borderRadius: 4, border: "1px solid #ccc" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>Send</button>
      </form>
    </main>
  );
}
