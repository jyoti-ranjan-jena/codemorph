import React, { useState } from "react";
import BackButton from "../components/BackButton";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeExplainerPage() {
  const [inputCode, setInputCode] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleExplainCode = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        "/api/projects/code_morph/models/codeexplainer/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                codeToExplain: inputCode,
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data && data[0] && data[0].codeExplanation) {
        const res = data[0].codeExplanation;
        setOutputText(res);
      } else {
        console.log("Unexpected response structure");
      }
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header className="bg-blue-500 text-white py-3 px-6 flex items-center justify-between w-full fixed top-0 z-10">
        <h1 className="text-2xl font-bold">Code Explainer</h1>
        <BackButton />
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-screen-lg flex items-center justify-center mt-20">
        <div className="flex flex-1 w-full max-w-screen-lg p-4">
          {/* Input Section */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-4 mr-4">
            <h2 className="text-lg font-bold mb-4">Enter Your Code:</h2>
            <textarea
              className="w-full h-96 px-4 py-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your code..."
              value={inputCode}
              onChange={handleInputChange}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mt-4 w-full"
              onClick={handleExplainCode}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Explain Code"}
            </button>
          </div>

          {/* Output Section */}
          <div className="flex-1 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-bold mb-4">Output:</h2>
            <div className="h-96 overflow-y-auto border border-gray-300 rounded-md px-4 py-2">
              <ReactMarkdown
                children={outputText}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={duotoneLight}
                        language={match[1]}
                        PreTag="div"
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
