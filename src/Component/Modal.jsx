import React from "react";
import { IoCopy } from "react-icons/io5";
import { GiPartyPopper } from "react-icons/gi";


const Modal = ({ shareLink, createdAt, formatDate, copyLink, onClose }) => (
  <div className="fixed inset-0 flex items-center mt-[-20%] justify-center bg-black bg-opacity-50 z-50 ">
    <div className="bg-white rounded-2xl p-6 w-100 flex flex-col space-y-4 ">
      <h2 className="text-xl font-bold flex items-center justify-start space-x-1">
        <span>URL is generated</span>
        <span className="text-2xl"><GiPartyPopper className=""/></span>

      </h2>

      <input
        type="text"
        readOnly
        value={shareLink}
        className="w-full p-2 border rounded-lg text-gray-700"
      />

      {createdAt && (
        <div className="text-gray-600 text-sm">
          Created at: {formatDate(createdAt)} <br />
          It will expire in 1 hour.
        </div>
      )}

      <div className="flex justify-end space-x-2">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-lg border hover:bg-gray-100"
        >
          Close
        </button>
        <button
          onClick={copyLink}
          className="px-4 py-2 rounded-lg bg-indigo-700 text-white hover:bg-indigo-600 flex items-center space-x-1"
        >
          <IoCopy/>
          <span className="">Copy</span>
        </button>
      </div>
    </div>
  </div>
);

export default Modal;
