const extractCodeBlock = (inputString) => {
  const regex = /```(?:\w+\s)?([\s\S]*?)```/;
  const match = inputString.match(regex);

  if (match && match[1]) {
    return match[1].trim(); // Trimming to remove any leading/trailing whitespace
  }

  return null; // Return null if no match is found
};

fetch(
  "http://127.0.0.1:47334/api/projects/code_morph/models/codeconverter/predict",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [
        {
          sourceLanguage: "Python",
          targetLanguage: "Java",
          sourceCode: "console.log('hello');",
        },
      ],
    }),
  }
)
  .then((res) => res.json())
  .then((json) => {
    const res = json[0].convertedCode;

    const codeBlock = extractCodeBlock(res);
    console.log(codeBlock);
  })
  .catch((err) => console.error("error:" + err));
