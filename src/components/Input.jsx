import { Search, X } from 'lucide-react';
import React from 'react'

const Input = ({ url, setUrl, onSubmit,hasSummary,setError }) => {

  const clearField = () => {
    setUrl("");
    hasSummary("");
    setError("");
  }
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        className="
          flex items-center
          rounded-2xl
          border border-gray-700
          bg-gradient-to-br from-gray-900 to-gray-800
          px-4 py-2
          shadow-lg
          focus-within:ring-2
          focus-within:ring-indigo-500/50
          transition
        "
      >
        <input
          type="text"
          placeholder="Ask about a website..."
          className="
            flex-1
            bg-transparent
            text-gray-100
            placeholder-gray-400
            outline-none
            text-lg
          "
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        {
          url ? <button
            className="p-2 rounded-lg bg-gray-700/40 text-gray-300 hover:bg-gray-600/60 hover:text-white transition duration-200 active:scale-95"
            onClick={clearField}>
            <X size={18} />
          </button> : ""
        }

        <button
          onClick={onSubmit}
          className="
            ml-3
            flex items-center gap-2
            rounded-xl
            bg-indigo-600
            px-4 py-2
            text-white
            font-medium
            hover:bg-indigo-500
            active:scale-95
            transition
          "
        >
          <Search size={18} />
          Ask
        </button>
      </div>
    </div>
  );
}

export default Input