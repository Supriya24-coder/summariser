# AI-Driven Website Summariser

This is a React-based web application that allows a user to enter any public website URL and get a short AI-generated summary of the webpage content.

# ⚙️ Setup Steps

```bash
git clone (https://github.com/Supriya24-coder/summariser.git)
cd client

Install dependencies
- npm install
```
# Create a .env file in the root directory and add your Groq API key
You can generate a free Groq API key from:
https://console.groq.com/keys

# Run the application
- npm run dev

# How AI Was Used
1. The user enters a public website URL.

2. The application fetches the visible text content of the webpage using a lightweight text extraction service.

3. The extracted text is trimmed to avoid token limits.

4. This text is sent to the Groq AI API using Axios.

5. A LLaMA 3.1 language model processes the content and generates a concise summary.

6. The generated summary is displayed to the user in the UI.

** The AI integration is handled directly in the React frontend for simplicity, as no backend was required for this assignment.**