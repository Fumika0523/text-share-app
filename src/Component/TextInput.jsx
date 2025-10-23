import React from "react" 
import { FaLink } from "react-icons/fa6";

const TextInput = ({ text, setText, generateLink }) => (
  <div className="flex flex-col items-center space-y-6 w-full max-w-3xl px-4 sm:px-6">
    <textarea
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Type or paste your text here..."
      className="
        w-full 
        min-h-[150px] sm:min-h-[180px] 
        bg-white/80 
        p-3 sm:p-4 
        border rounded-2xl 
        focus:outline-none focus:ring-2 focus:ring-sky-800/60 
        resize-none 
        text-sm sm:text-base md:text-lg 
        shadow-sm
      "
    />

    <button
      onClick={generateLink}
      disabled={!text}
      className="
        flex items-center justify-center gap-2
        bg-indigo-700 
        text-white font-semibold 
        py-2.5 sm:py-3 px-6 sm:px-8
        rounded-2xl 
        text-base sm:text-lg
        transform transition-transform duration-200 hover:scale-105 
        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
        shadow-md hover:shadow-lg
        w-full sm:w-auto
      "
    >
      <FaLink className="text-xl sm:text-2xl" />
      <span>Generate Link</span>
    </button>
  </div>
);

export default TextInput;
