import { Send } from "lucide-react";
import { useState } from "react";

const GptChatInput = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] sm:w-[70%] md:w-[50%] z-50">
      <div className="flex items-center bg-white text-black rounded-xl border border-gray-700 px-3 py-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your movie request..."
          className="flex-1 bg-transparent outline-none text-sm sm:text-base px-2"
        />
        <button type="submit">
          <Send className="w-5 h-5 text-gray-400 hover:text-red-500 transition" />
        </button>
      </div>
    </form>
  );
};

export default GptChatInput;
