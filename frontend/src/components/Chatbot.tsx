"use client";

import { useState } from "react";

export default function Chatbot() {

  const [isOpen, setIsOpen] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello 👋 I'm Kartik AI Assistant. How can I help you?",
    },
  ]);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);

  // Send Message

  const sendMessage = async () => {

    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      content: input,
    };

    // Add user message

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      // Call FastAPI Backend

      const response = await fetch(
        "http://localhost:8000/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message: input,
          }),
        }
      );

      const data = await response.json();
      console.log(data);
      // Add AI response

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.response,
        },
      ]);

    } catch (error) {

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Backend connection failed.",
        },
      ]);

    } finally {

      setLoading(false);

    }

    setInput("");

  };

  return (
    <>
      {/* Floating Button */}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
        fixed
        bottom-8
        right-8
        z-50
        w-16
        h-16
        rounded-full
        bg-cyan-500
        text-black
        text-3xl
        shadow-[0_0_40px_rgba(34,211,238,0.8)]
        hover:scale-110
        transition
      "
      >
        ✦
      </button>

      {/* Chat Window */}

      {isOpen && (
        <div
          className="
          fixed
          bottom-28
          right-8
          w-[380px]
          h-[550px]
          bg-black/80
          border
          border-cyan-500/20
          backdrop-blur-xl
          rounded-3xl
          shadow-[0_0_80px_rgba(34,211,238,0.15)]
          z-50
          flex
          flex-col
          overflow-hidden
        "
        >

          {/* Header */}

          <div
            className="
            p-5
            border-b
            border-cyan-500/20
            flex
            justify-between
            items-center
          "
          >

            <div>

              <h2 className="text-cyan-400 font-bold text-xl">
                Kartik AI
              </h2>

              <p className="text-gray-500 text-sm">
                AI Assistant
              </p>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 text-xl"
            >
              ✕
            </button>

          </div>

          {/* Messages */}

          <div
            className="
            flex-1
            overflow-y-auto
            p-5
            space-y-4
          "
          >

            {messages.map((msg, index) => (
              <div
                key={index}
                className={`
                  max-w-[85%]
                  p-4
                  rounded-2xl
                  text-sm
                  leading-relaxed
                  ${
                    msg.role === "user"
                      ? "ml-auto bg-cyan-500 text-black"
                      : "bg-white/10 text-gray-200"
                  }
                `}
              >
                {msg.content}
              </div>
            ))}

            {/* Loading */}

            {loading && (
              <div
                className="
                bg-white/10
                text-gray-300
                px-4
                py-3
                rounded-2xl
                w-fit
              "
              >
                Thinking...
              </div>
            )}

          </div>

          {/* Input */}

          <div
            className="
            p-4
            border-t
            border-cyan-500/20
            flex
            gap-3
          "
          >

            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="
              flex-1
              bg-white/10
              border
              border-cyan-500/20
              rounded-xl
              px-4
              py-3
              text-white
              outline-none
            "
            />

            <button
              onClick={sendMessage}
              className="
              px-5
              bg-cyan-500
              text-black
              rounded-xl
              font-semibold
            "
            >
              Send
            </button>

          </div>

        </div>
      )}
    </>
  );
}