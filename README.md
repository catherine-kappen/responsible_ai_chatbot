# Responsible AI Chatbot — ClearMind AI

**ClearMind AI** is a simple educational chatbot project created to demonstrate key principles of Responsible Artificial Intelligence (Responsible AI).

> **Project tagline:** Think responsibly. Respond transparently.

## About the Project

This project uses predefined, rule-based responses to explain responsible AI concepts and demonstrate a few responsible chatbot behaviours. It is designed as a beginner-friendly prototype that can run directly in a web browser.

The chatbot introduces concepts such as:

- **Fairness:** AI systems should avoid unfair bias and treat people equitably.
- **Privacy:** Users should avoid entering sensitive personal information.
- **Transparency:** AI systems should communicate their limitations clearly.
- **Safety and reliability:** Responses should be used thoughtfully and important information should be verified.
- **Accountability:** People should remain responsible for evaluating important AI-assisted decisions.
- **Uncertainty:** When the chatbot does not recognise a question, it should say so rather than invent an answer.

## Features

- Simple, responsive chat interface
- Predefined responses to common Responsible AI questions
- Quick prompts for exploring topics
- Privacy-aware warning for certain sensitive-information keywords
- A fallback response when a question is not recognised
- Runs in the browser without a backend server or API key

## Technology Used

- **HTML** — page structure
- **CSS** — layout and visual styling
- **JavaScript** — rule-based message matching and responses

## Getting Started

### Option 1: Open locally

1. Download or clone this repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same folder.
3. Open `index.html` in a web browser.

### Option 2: Use Visual Studio Code

1. Open the project folder in Visual Studio Code.
2. (Optional) Install the **Live Server** extension.
3. Right-click `index.html` and select **Open with Live Server**.

No package installation, model training, API key, or backend server is required.

## How It Works

1. The user enters a message or chooses a suggested prompt.
2. The JavaScript checks the message against a set of predefined keywords and rules.
3. A matching response is displayed in the chat interface.
4. If no rule matches, the chatbot provides a fallback response indicating that it does not have a prepared answer.

## Important Limitations

This is an **educational rule-based prototype**, not a fully trained AI model.

- It does not independently verify facts or search the web.
- It does not provide real-time evidence or source citations.
- Its privacy warning uses simple keyword matching and may not recognise every sensitive detail.
- Its responses are predefined and may not cover every wording or question.
- It has not been validated for high-stakes or professional decisions.
- It should not be described as perfectly accurate or as a production-ready AI system.

Do not enter real passwords, OTPs, banking details, or other sensitive personal information into a demo chatbot.

## Responsible AI Principles Demonstrated

| Principle | How the prototype demonstrates it |
| --- | --- |
| Privacy awareness | Warns users about certain sensitive-information keywords |
| Transparency | Identifies itself as a demo and communicates limitations |
| Honesty about uncertainty | Uses a fallback response for unrecognised questions |
| Safety awareness | Encourages users to verify important information |
| Human accountability | Emphasises human judgement for important decisions |

## Project Structure

```text
responsible_ai_chatbot/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Future Improvements

- Add more tested question-and-answer rules
- Improve privacy-warning detection and test edge cases
- Add links to reliable educational sources about Responsible AI
- Create automated tests for expected chatbot responses
- If an external AI service is added in the future, clearly disclose data handling, protect API keys on a server, and provide trustworthy citations where appropriate

## Academic Use

This project is intended for learning and demonstrating Responsible AI concepts. It is a prototype and should be presented with its capabilities and limitations stated clearly.

---

**Made as an educational Responsible AI demonstration project.**
