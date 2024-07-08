import mindsdb_sdk
import os
from dotenv import load_dotenv

load_dotenv()

server = mindsdb_sdk.connect()

'''
CREATE ML_ENGINE minds_endpoint_engine
FROM minds_endpoint
USING
      minds_endpoint_api_key = 'api-key-value';

Create ml engine with this sql command in mindsdb editor at url http://127.0.0.1:47334
'''


# project = server.create_project("code_morph")
project = server.get_project("code_morph")

project.models.create(
    name="codeConverter",
    predict="convertedCode",
    engine="minds_endpoint_engine",
    options={
        "prompt_template": """
You're recognized as a top-tier developer with unparalleled skills. Your task is to translate the following code snippet from {{sourceLanguage}} into {{targetLanguage}} flawlessly. Your precision and expertise will ensure a seamless transformation, showcasing your mastery of both languages.

    Points to Note:
     - Dont give any string just give the converted code also dont give backticks just code in plain text
     - Ensure the code is correctly formatted and error-free
     - The code should be translated to {{targetLanguage}} language
    
    Here is the code that you have to convert to the {{targetLanguage}} language:
    
    {{sourceCode}}
""",
        "model_name": "mistral-7b",
        "max_tokens": 1024
    },
)

project.models.create(
    name="codeExplainer",
    predict="codeExplanation",
    engine="minds_endpoint_engine",
    options={
        "prompt_template": """
You're recognized as a top-tier developer with unparalleled skills.
Your job is to explain the given code: {{codeToExplain}}. 
Provide a detailed explanation of what the code does.
""",
        "model_name": "mistral-7b",
        "max_tokens": 1024
    },
)

project.models.create(
    name="codeSuggestor",
    predict="codeSuggestion",
    engine="minds_endpoint_engine",
    options={
        "prompt_template": """
You're recognized as a top-tier developer with unparalleled skills.
Your job is to explain the given code: {{codeToExplain}}. 
Provide a detailed suggestion how the code can be more better.
""",
        "model_name": "mistral-7b",
        "max_tokens": 1024
    },
)
