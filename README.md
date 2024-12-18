# 🌟 Code Morph 🌟

Welcome to **Code Morph**, the ultimate AI-powered code conversion and explanation tool!

## ✨ About

Code Morph is designed to help developers seamlessly convert code from one language to another and understand complex code snippets through detailed explanations. Harnessing the power of MindsDB's Mistral-7b AI model, Code Morph provides accurate and insightful code transformations and explanations.

## 🚀 Features

- 🔄 **Code Conversion:** Convert code from one programming language to another effortlessly.
- 📖 **Code Explanation:** Get detailed explanations of code snippets to enhance your understanding.
- 💡 **Intelligent Code Suggestions:** Receive intelligent suggestions for optimizing and refactoring code, based on best practices and AI-driven insights.
- ⚡ **AI-Powered:** Utilizes the advanced MindsDB Mistral-7b model for precise and reliable results.

## 🎥 Demo Video

<p align="center">
    <a href="https://youtu.be/-FTOeDK2yWE">
        <img src="https://img.freepik.com/free-vector/modern-red-video-media-player-template_1017-23409.jpg"/>
    </a>
</p>

## 🛠️ How to Use

### Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/jyoti-ranjan-jena/codemorph.git
   cd codemorph
   ```

2. **Setup:**

   ```sh
   cd setup
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   pip install -r requirements.txt
   ```


4. **Configure MindsDB engine:**

   ```sh
   # Go to the MindsDB endpoint
   go to http://127.0.0.1:47334

   # Run the following SQL command:
   CREATE ML_ENGINE minds_endpoint_engine
   FROM minds_endpoint
   USING
         minds_endpoint_api_key = 'your-api-key';
   ```

   You can get your API key at [mdb.ai](mdb.ai).

5. **Run the MindsDB setup script:**

   ```sh
   python mindsdb_setup.py
   ```

6. **Setup the frontend:**

   ```sh
   cd ../client
   npm install
   npm run dev
   ```

7. **Run the app and start coding!**

## ⭐ Star the Repo

If you like **Code Morph**, please give us a star ⭐

[![jyoti-ranjan-jena's GitHub | Languages Over Time](https://stats.quira.sh/jyoti-ranjan-jena/languages-over-time?theme=dark)](https://quira.sh?utm_source=widgets&utm_campaign=jyoti-ranjan-jena)

## 📞 Contact the Creator

Feel free to reach out for any questions, suggestions, or collaboration opportunities!

- **Email:** jyotiranjanjena256504@gmail.com
- **GitHub:** [jyoti-ranjan-jena](https://github.com/jyoti-ranjan-jena)

---

Made with ❤️ by Jyoti Ranjan Jena
