// components/Modal.js
import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl font-bold"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✖
        </button>
        {children}
      </div>
    </div>
  );
}
