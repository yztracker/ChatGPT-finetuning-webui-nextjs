import React from 'react'

function Dataset() {
    const jsonData = {
        "messages": [
          { "role": "system", "content": "You are an assistant that occasionally misspells words" },
          { "role": "user", "content": "Tell me a story." },
          { "role": "assistant", "content": "One day a student went to schoool." }
        ]
      };

      return (
    <div className="bg-zinc-300 p-4  backdrop-blur-2xl rounded-xl">
      <h3 className="text-lg mb-2">Step1. Prepare Dataset</h3>
      <code
    className="text-sm sm:text-base inline-flex text-left items-center space-x-4 bg-gray-800 text-white rounded-lg p-4 pl-6">
        <div>
        <span className=" text-gray-400">Example</span>
            <span className="flex gap-4">

            <span className="flex-1">
                <span className="whitespace-pre">
                {JSON.stringify(jsonData, null, 2)}
            </span>
        </span>
    </span>

        </div>

    {/* <svg class="shrink-0 h-5 w-5 transition text-gray-500 group-hover:text-white" xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z"></path>
        <path
            d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z">
        </path>
    </svg> */}
</code>     
 {/* <div className="p-4 shadow-md rounded bg-white">
            <h1 className="text-xl font-semibold mb-4">Jobs List</h1>
        </div> */}
    </div>
  )
}

export default Dataset

