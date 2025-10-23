import React, { useState, useEffect } from "react";
import TextInput from "./TextInput";
import Modal from "./Modal";
import TextView from "./TextView";
import toast, { Toaster } from 'react-hot-toast';
import { IoDocumentTextSharp } from "react-icons/io5";
import { IoIosLock } from "react-icons/io";
import { MdFlashOn } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";


const TextCard = () => {
  const [text, setText] = useState(""); // Stores user's text in put
  const [modalOpen, setModalOpen] = useState(false); 
  const [shareLink, setShareLink] = useState(""); //Stores the generated shareable URL
  const [createdAt, setCreatedAt] = useState(null); //Timestamp for when text was created

  const copyNotify = () => toast.success('Link copied to clipboard!');
  const formatDate = (ts) => new Date(ts).toLocaleString(
    undefined,
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // optional: remove AM/PM
    }
  );
  
  // React Hook
  // It runs automatically after the component mount (after your page loads)
  // The empty array at the end means: "Run only once, not every re-render" >> check only once when the page first loads

  useEffect(() => {
    console.log("UseEffect run only once when page is loaded")
    const params = new URLSearchParams(window.location.search); //creates a URLSearchParams object - ketting you easily read things like ?id=123abc from a page's url
    // → "?id=aB3cDe9X"
    const id = params.get("id");  // → "aB3cDe9X"
    console.log("URL id =",id)

    if (id) {
      console.log("  Found an id in URL, checking localStorage...");

      const saved = localStorage.getItem(`textshare-${id}`); //This looks inside the browser’s localStorage (a small key-value database that lives inside the browser).
    console.log(" Data fetched from localStorage =", saved);

      if (saved) {
        const { content, timestamp } = JSON.parse(saved); // localStorage can only store text, not objects.So earlier you saved your data as a JSON string using: Convert JSON string → object
      console.log(" Parsed data =", { content, timestamp });

        const now = Date.now();
        console.log("Current time =", now);
        if (now - timestamp < 3600 * 1000) {
          console.log("now-timestamp", now, timestamp)
          setText(content);
          setCreatedAt(timestamp);
        } else {
          localStorage.removeItem(`textshare-${id}`);
          setText("This text has expired.");
        }
      } else {
        setText("Invalid or expired link... Please create a new one again.");
      }
    }
  }, []);

  const generateId = (length = 8) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  };

  const generateLink = () => {
    const timestamp = Date.now();
    const id = generateId();
    const data = { content: text, timestamp };
    localStorage.setItem(`textshare-${id}`, JSON.stringify(data)); //Because localStorage can only store text, not objects.
    const link = `${window.location.origin}?id=${id}`; //This line creates a full, shareable link (a string).
    setShareLink(link);
    setCreatedAt(timestamp);
    setModalOpen(true);
  };

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(shareLink);
    copyNotify()
  } catch (err) {
    toast.error('Failed to copy link.');
    console.error(err);
  }
};

const cartTitle = [
  {icon:<IoIosLock className="text-yellow-600 text-2xl" />, title:  "Private", description: (
      <>
        Peer-to-peer connections.<br/>Your data never touches a server.
      </>
    )},
  {icon: <MdFlashOn className="text-orange-500 text-2xl" />,title:"Real-time", description:"See changes instantly as others type."},
  {icon: <TfiWorld  className="text-blue-700 text-xl" />,title:"Open Source", description:(
    <>
    Free forever.
    <br/>
     View code on GitHub.
    </>
  )},
]

  const params = new URLSearchParams(window.location.search);
  if (params.get("id")) {
    return (
      <>
       <div className="flex flex-col items-center space-y-6 w-full  border-red-400 pt-10 max-w-3xl px-4">
          <TextView text={text} createdAt={createdAt} formatDate={formatDate} />
       </div>
 
      </>
    );
  }


  return (
    <>
        <div className="flex flex-col items-center space-y-6 w-full py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center flex flex-row items-center justify-center gap-1 ">
            <IoDocumentTextSharp className="text-green-600"/>
            <span className="text-gray-900">Share Text Instantly</span>
            </h1>

          <p className="text-gray-600 text-base sm:text-lg text-center max-w-lg">
            No signup. No servers. Just peer-to-peer real-time collaboration.
          </p>

      <TextInput text={text} setText={setText} generateLink={generateLink} />
      {modalOpen && (
        <Modal
          shareLink={shareLink}
          createdAt={createdAt}
          formatDate={formatDate}
          copyLink={copyLink}
          onClose={() => setModalOpen(false)}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-6 w-full max-w-3xl  min-h-[150px]   mx-auto px-4">
  {cartTitle?.map((element, index) => (
    <div
      key={index}
      className="bg-white rounded-2xl p-5 flex  flex-col gap-2  shadow-sm hover:shadow-md transition-all duration-200"
    >
      <h2 className="flex flex-row items-center justify-start  text-start gap-2 text-gray-800 text-lg font-semibold">
        {element.icon} {element.title}
      </h2>
      {element.description && (
        <div className="text-gray-600 text-sm text-start  w-full ">{element.description}</div>
      )}
    </div>
  ))}
      </div>

    </div>
    <Toaster position="bottom-right" reverseOrder={false} />
    </>

    
  )
}



export default TextCard;
