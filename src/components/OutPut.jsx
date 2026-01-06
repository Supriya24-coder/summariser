import React from 'react'
import Loader from './Loader';

const OutPut = ({summary,isLoading,isError}) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-8">
      <div
        className="
          rounded-2xl
          border border-gray-700
          bg-gradient-to-br from-gray-900 to-gray-800
          p-6
          shadow-xl
        "
      >
        {/* Header */}
        <div className="mb-4 flex items-center gap-2">
          {isLoading?<div className="h-3 w-3 rounded-full bg-green-400 animate-pulse" />
          :<div className="h-3 w-3 rounded-full bg-indigo-500" />}
          <h2 className="text-gray-200 font-semibold">AI Response</h2>
        </div>

        {/* Content */}
        <div className="text-gray-100 leading-relaxed whitespace-pre-wrap">
          {isLoading ? (
            <Loader />
          ) : summary ? (
            summary
          ) : (
            isError?
            <p style={{ color: "red" }}>{isError}</p>:
            <span className="text-gray-400">
              Your AI response will appear here…
            </span>
          )}
        </div>
      </div>
    </div>
  );
}



export default OutPut;