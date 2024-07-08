import React, { useState } from "react";
import BackButton from "../components/BackButton";
import cop from "../public/copy.svg";

const extractCodeBlock = (inputString) => {
  const regex = /```(?:\w+\s)?([\s\S]*?)```/;
  const match = inputString.match(regex);

  if (match && match[1]) {
    return match[1].trim(); // Trimming to remove any leading/trailing whitespace
  }

  return null; // Return null if no match is found
};

const CodeConverterPage = () => {
  const [inputLang, setInputLang] = useState("javascript");
  const [outputLang, setOutputLang] = useState("python");
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleConvertCode = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "/api/projects/code_morph/models/codeconverter/predict", // Update this if needed
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                sourceLanguage: inputLang,
                targetLanguage: outputLang,
                sourceCode: inputCode,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data[0] && data[0].convertedCode) {
        const res = data[0].convertedCode;

        const codeBlock = extractCodeBlock(res);
        console.log(codeBlock);
        setOutputCode(codeBlock);
      } else {
        console.log("Unexpected response structure");
      }
    } catch (error) {
      console.log(error.message);
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  const handleCopyCode = () => {
    if (outputCode) {
      navigator.clipboard.writeText(outputCode);
      alert("Code copied to clipboard!");
    }
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 px-6 flex items-center justify-between w-full fixed top-0 z-10">
        <h1 className="text-2xl font-bold">Code Converter</h1>
        <BackButton />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-screen-lg flex items-center justify-center mt-20">
        <div className="flex flex-1 w-full max-w-screen-lg p-4">
          {/* Input Section */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-4 mr-4">
            <h2 className="text-lg font-bold mb-4">Code Conversion</h2>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Input Language:
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={inputLang}
                  onChange={(e) => setInputLang(e.target.value)}
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="C">C</option>
                  <option value="C++">C++</option>
                  <option value="C#">C#</option>
                  
                  {/* Add more languages as needed */}
                </select>
              </div>
            </div>
            <textarea
              className="w-full h-96 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your code..."
              value={inputCode}
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4 w-full"
              onClick={handleConvertCode}
              disabled={isLoading}
            >
              {isLoading ? "Converting..." : "Convert Code"}
            </button>
          </div>

          {/* Output Section */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-4">Converted Output:</h2>
            <div className="flex mb-4">
              <div className="w-1/2 mr-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Output Language:
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={outputLang}
                  onChange={(e) => setOutputLang(e.target.value)}
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="C">C</option>
                  <option value="C++">C++</option>
                  <option value="C#">C#</option>
                  {/* Add more languages as needed */}
                </select>
              </div>
            </div>
            <div className="h-96 overflow-y-auto border border-gray-300 rounded-md px-4 py-2">
              {outputCode || "Output will appear here."}
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-6 w-full flex items-center justify-center"
              onClick={handleCopyCode}
            >
              <img src={cop} alt="Copy Icon" className="mr-2 w-5 h-5" />
              Copy Code
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CodeConverterPage;
