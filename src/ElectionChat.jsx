import { useState, useRef, useEffect } from "react";

const API_URL = "https://web-production-59ec9d.up.railway.app/ask";

const TypingDots = () => (
  <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "2px 0" }}>
    {[0, 1, 2].map(i => (
      <span key={i} style={{
        width: 6, height: 6, borderRadius: "50%", background: "#5BAADC",
        display: "inline-block",
        animation: "bounce 1.2s infinite",
        animationDelay: `${i * 0.2}s`,
      }} />
    ))}
  </div>
);

export default function NepalElectionChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "नमस्ते! Welcome to Nepal Election 2082 Live Updates. Ask me anything about the latest results, candidates, or voter turnout.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question || loading) return;

    setMessages(prev => [...prev, { role: "user", text: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: question }),
      });
      if (!res.ok) throw new Error(`Server error: ${res.status}`);
      const data = await res.json();
      const answer = data.answer || data.response || data.text || JSON.stringify(data);
      setMessages(prev => [...prev, { role: "assistant", text: answer }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: "assistant",
        text: `Could not reach the server. Please try again.`,
        error: true,
      }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const suggestions = [
    "Who is leading in Kathmandu?",
    "Current voter turnout?",
    "Which party is winning?",
    "Latest results?",
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f0f4f8",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui, -apple-system, sans-serif",
      padding: 16,
    }}>
      <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        textarea:focus { outline: none; }
        .send-btn:hover:not(:disabled) { background: #2E86C1 !important; }
        .chip:hover { background: #e0f0fa !important; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #cce4f5; border-radius: 4px; }
      `}</style>

      <div style={{
        width: "100%",
        maxWidth: 620,
        background: "#ffffff",
        borderRadius: 16,
        border: "1px solid #d6eaf8",
        display: "flex",
        flexDirection: "column",
        height: "min(88vh, 760px)",
        boxShadow: "0 4px 24px rgba(91,170,220,0.1)",
        overflow: "hidden",
      }}>

        {/* Header */}
        <div style={{
          padding: "16px 20px",
          borderBottom: "1px solid #d6eaf8",
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "#fff",
        }}>
          <div style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "#EBF5FB",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 18,
            border: "1px solid #aed6f1",
          }}>🗳️</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: "#1a2a3a" }}>
              Nepal Election 2082
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#27ae60",
                display: "inline-block",
              }} />
              <span style={{ fontSize: 12, color: "#7fb3d3" }}>Live Updates</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px 18px 10px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              animation: "fadeUp 0.25s ease forwards",
            }}>
              <div style={{
                maxWidth: "78%",
                padding: "10px 14px",
                borderRadius: msg.role === "user"
                  ? "18px 18px 4px 18px"
                  : "18px 18px 18px 4px",
                background: msg.role === "user"
                  ? "#5BAADC"
                  : msg.error
                    ? "#fdf0f0"
                    : "#f0f8ff",
                border: msg.role === "user"
                  ? "none"
                  : msg.error
                    ? "1px solid #f5c6c6"
                    : "1px solid #d6eaf8",
                color: msg.role === "user" ? "#fff" : "#1a2a3a",
                fontSize: 14,
                lineHeight: 1.65,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}>
                {msg.text}
              </div>
            </div>
          ))}

          {loading && (
            <div style={{ display: "flex", animation: "fadeUp 0.25s ease forwards" }}>
              <div style={{
                padding: "10px 14px",
                borderRadius: "18px 18px 18px 4px",
                background: "#f0f8ff",
                border: "1px solid #d6eaf8",
              }}>
                <TypingDots />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div style={{
            padding: "0 18px 10px",
            display: "flex", flexWrap: "wrap", gap: 7,
          }}>
            {suggestions.map((s, i) => (
              <button key={i} className="chip" onClick={() => { setInput(s); inputRef.current?.focus(); }} style={{
                background: "#f0f8ff",
                border: "1px solid #aed6f1",
                borderRadius: 20,
                padding: "5px 12px",
                fontSize: 12,
                color: "#2E86C1",
                cursor: "pointer",
                fontFamily: "inherit",
                transition: "background 0.15s",
              }}>{s}</button>
            ))}
          </div>
        )}

        {/* Input */}
        <div style={{
          borderTop: "1px solid #d6eaf8",
          padding: "12px 14px",
          display: "flex",
          gap: 8,
          alignItems: "flex-end",
          background: "#fff",
        }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about election updates…"
            rows={1}
            style={{
              flex: 1,
              border: "1px solid #aed6f1",
              borderRadius: 10,
              padding: "10px 13px",
              fontSize: 14,
              fontFamily: "inherit",
              color: "#1a2a3a",
              resize: "none",
              lineHeight: 1.5,
              maxHeight: 90,
              overflowY: "auto",
              background: "#f8fcff",
              transition: "border-color 0.15s",
            }}
            onFocus={e => e.target.style.borderColor = "#5BAADC"}
            onBlur={e => e.target.style.borderColor = "#aed6f1"}
          />
          <button
            className="send-btn"
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            style={{
              width: 40, height: 40,
              borderRadius: 10,
              background: input.trim() && !loading ? "#5BAADC" : "#d6eaf8",
              border: "none",
              color: input.trim() && !loading ? "#fff" : "#a0c4d8",
              fontSize: 16,
              cursor: input.trim() && !loading ? "pointer" : "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center",
              transition: "background 0.15s",
              flexShrink: 0,
            }}
          >↑</button>
        </div>
      </div>
    </div>
  );
}