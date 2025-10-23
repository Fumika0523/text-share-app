import React from "react";
import { FaLink } from "react-icons/fa6";
import Navbar from "./Navbar";
import { IoCopy } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";

const TextView = ({ text, createdAt, formatDate }) => {
  // Reload to go back to the main page
  const handleCreateNew = () => {
    window.location.href = window.location.origin;
  };

  // Detect invalid or expired text
  const isInvalid =
    text === "Invalid or expired link." ||
    text === "Invalid or expired link... Please create a new one again." ||
    text === "This text has expired.";


   const handleCopyText = async()=>{
    try{
      await navigator.clipboard.writeText(text)
      toast.success("Text Copied to clipboard!")
    }catch(e){
      toast.error("Failed to copy text")
      console.error(e)
    }
   }

  return (
    <>
      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-col  min-h-[80vh] min-w-xl pt-10">
        {/* Info (date + expiry) */}
        {createdAt && (
          <div className="text-gray-700 text-sm text-end w-full max-w-3xl mb-3">
            Created at: <span className="font-medium">{formatDate(createdAt)}</span>
            <br />
            <span className="text-gray-500">This page will expire in 1 hour.</span>
          </div>
        )}

        {/* Text Display Box */}
        <div
          className={`bg-white rounded-2xl min-h-[150px] shadow-md max-w-3xl w-full break-words whitespace-pre-wrap p-6 transition-all duration-200 ${
            isInvalid
              ? "border-2 border-red-400 text-red-600"
              : "border border-gray-200 text-gray-900"
          }`}
        >
          <div className="text-start text-base sm:text-lg leading-relaxed">{text}</div>
        </div>
        
 
       {!isInvalid && (
  <div className="flex justify-end flex-row w-full bg-amber-700 gap-3 mt-6">
    {/* Copy Text Button */}
    <button
      onClick={handleCopyText}
      className="flex items-center gap-2 bg-green-700 text-white py-3 px-6 rounded-2xl font-medium shadow-md hover:bg-green-800 hover:scale-105 transition-all duration-200 "
    >
      <IoCopy className="text-lg" />
      <span>Copy Text</span>
    </button>

    {/* Create New Link Button */}
    <button
      onClick={handleCreateNew}
      className="flex items-center gap-2 bg-indigo-700 text-white py-3 px-6 rounded-2xl font-medium shadow-md hover:bg-indigo-600 hover:scale-105 transition-all duration-200"
    >
      <FaLink className="text-lg" />
      <span>Create New Link</span>
    </button>
  </div>
)}

   

        {/* Create New Link Button (only for expired or invalid text) */}
        {isInvalid && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleCreateNew}
              className="flex items-center gap-2 bg-indigo-700 text-white py-3 px-6 rounded-2xl font-medium shadow-md hover:bg-indigo-600 hover:scale-105 transition-all duration-200"
            >
              <FaLink className="text-lg" />
              <span>Create New Link</span>
            </button>
          </div>
        )}
              <Toaster position="bottom-right" reverseOrder={false} />

      </div>
    </>
  );
};

export default TextView;
