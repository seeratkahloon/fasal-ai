import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane, FaLeaf, FaSpinner } from "react-icons/fa";
import config from "../config";

const suggestions = [
  "How do I treat leaf rust in wheat?",
  "Best fertilizer for cotton crop?",
  "When should I irrigate rice?",
  "How to prevent pest attacks?",
];

const Chat = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "السلام علیکم! I'm your FasalAI farming assistant 🌾 Ask me anything about your crops, diseases, weather, or farming tips — in Urdu or English!" }
  ]);
  const [input, setInput]     = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText) return;
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userText }]);
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      console.log("Sending chat message...", userText);
      
        const response = await fetch(`${config.API_URL}/chat`, {
        method:  "POST",
        headers: {
          "Content-Type":  "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: userText,
          history: messages,
        }),
      });

      console.log("Chat response status:", response.status);
      const data = await response.json();
      console.log("Chat response data:", data);

      if (data.success) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", text: `Error: ${data.message}` }]);
      }
    } catch (err) {
      console.error("Chat error:", err);
      setMessages((prev) => [...prev, { role: "assistant", text: "Connection error. Make sure backend is running on port 5000." }]);
    }
    setLoading(false);
  };

 return (
   <div className="min-h-screen bg-gray-50 pt-20 pb-0 flex flex-col">
    
             {/* Header */}
         <div className="bg-white rounded-t-3xl shadow-sm px-6 py-4 flex items-center gap-3 mt-4">
           <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
            <FaRobot className="text-primary-600" />
           </div>
          <div>
            <h2 className="font-display font-bold text-gray-900">FasalAI Assistant</h2>
            <p className="text-xs text-green-500 font-medium">● Online — Ask in Urdu or English</p>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-grow bg-white overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                  <FaLeaf className="text-primary-600 text-xs" />
                </div>
              )}
              <div className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary-600 text-white rounded-br-sm"
                  : "bg-gray-100 text-gray-800 rounded-bl-sm"
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mr-2">
                <FaLeaf className="text-primary-600 text-xs" />
              </div>
              <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                <FaSpinner className="animate-spin text-primary-500" />
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length <= 1 && (
          <div className="bg-white px-6 py-3 flex gap-2 overflow-x-auto">
            {suggestions.map((s) => (
              <button key={s} onClick={() => sendMessage(s)}
                className="flex-shrink-0 text-xs bg-primary-50 text-primary-700 border border-primary-200 px-3 py-2 rounded-full hover:bg-primary-100 transition whitespace-nowrap">
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className="bg-white rounded-b-3xl shadow-sm px-6 py-4 flex gap-3 items-center border-t border-gray-100">
          <input
            type="text"
            placeholder="Ask about your crops... (Urdu or English)"
            className="input-field flex-grow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            disabled={loading}
          />
          <button onClick={() => sendMessage()} disabled={loading || !input.trim()}
            className="btn-primary px-4 py-3 disabled:opacity-50">
            <FaPaperPlane />
          </button>
        </div>
     </div>
  
  );
};

export default Chat;