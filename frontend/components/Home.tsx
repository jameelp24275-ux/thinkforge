"use client";

import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "40px",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0B0B0F",
        color: "#F5F5F7",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          margin: 0,
        }}
      >
        ThinkForge
      </h1>

      <h2
        style={{
          fontWeight: 400,
          color: "#A1A1AA",
          marginTop: "-10px",
        }}
      >
        Your Personal Knowledge Workspace
      </h2>

      <p
        style={{
          maxWidth: "650px",
          textAlign: "center",
          lineHeight: "1.6",
          color: "#A1A1AA",
        }}
      >
        Ask questions over your curated knowledge base and receive answers
        backed by your own articles.
      </p>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        style={{
          width: "600px",
          maxWidth: "90%",
          padding: "15px",
          borderRadius: "10px",
          border: "1px solid #333",
          backgroundColor: "#14141A",
          color: "#F5F5F7",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <button
        style={{
          padding: "14px 28px",
          backgroundColor: "#FF2D7A",
          color: "white",
          border: "none",
          borderRadius: "10px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Ask Question
      </button>

      <div
        style={{
          width: "700px",
          maxWidth: "90%",
          minHeight: "180px",
          padding: "25px",
          borderRadius: "12px",
          backgroundColor: "#14141A",
          border: "1px solid #222",
        }}
      >
        <h3
          style={{
            marginTop: 0,
            color: "#FF2D7A",
          }}
        >
          Answer
        </h3>

        <p
          style={{
            lineHeight: "1.7",
            color: "#D4D4D8",
          }}
        >
          {question
            ? `You asked: "${question}"`
            : "Waiting for your first question..."}
        </p>
      </div>
    </main>
  );
}