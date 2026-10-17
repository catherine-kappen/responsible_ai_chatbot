const form = document.getElementById("chatForm");
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");
const clearButton = document.getElementById("clearButton");

const initialBotMessage = `
  Hi! I'm ClearMind AI. I can explain responsible AI, privacy, fairness, and safety.
  <br /><br />
  I'll also tell you when I don't know an answer. Please don't enter passwords or private information.
`;

function addMessage(text, sender, tag = "") {
  const wrapper = document.createElement("div");
  wrapper.className = `message ${sender === "user" ? "user-message" : "bot-message"}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";

  // Use textContent for user-provided text to avoid interpreting it as HTML.
  if (sender === "user") {
    bubble.textContent = text;
  } else {
    if (tag) {
      const badge = document.createElement("span");
      badge.className = tag === "PRIVACY REMINDER" || tag === "UNCERTAINTY" ? "answer-tag warning" : "answer-tag";
      badge.textContent = tag;
      bubble.appendChild(badge);
      bubble.appendChild(document.createElement("br"));
    }
    const answer = document.createElement("span");
    answer.textContent = text;
    bubble.appendChild(answer);
  }

  const meta = document.createElement("span");
  meta.className = "message-meta";
  meta.textContent = sender === "user" ? "You" : `ClearMind · ${tag || "Demo response"}`;

  wrapper.appendChild(bubble);
  wrapper.appendChild(meta);
  messages.appendChild(wrapper);
  messages.scrollTop = messages.scrollHeight;
}

function getResponse(raw) {
  const q = raw.toLowerCase();

  // Privacy checks happen before ordinary topic matching.
  const sensitivePatterns = [
    /\b(password|passcode|pin number|otp)\b/,
    /\b(credit card|debit card|bank account|cvv)\b/,
    /\b(aadhaar|social security number|passport number)\b/
  ];
  if (sensitivePatterns.some(pattern => pattern.test(q))) {
    return {
      tag: "PRIVACY REMINDER",
      text: "Please don't share passwords, OTPs, PINs, bank details, or identity numbers in a chatbot. This demo does not send messages to a server, but it is still best practice to avoid entering sensitive information into online tools."
    };
  }

  if (/\b(hello|hi|hey|good morning|good evening)\b/.test(q)) {
    return { tag: "GREETING", text: "Hello! Ask me about responsible AI, fairness, privacy, transparency, safety, or accountability." };
  }
  if (q.includes("responsible ai") || q.includes("what is ai") || q.includes("meaning of responsible")) {
    return {
      tag: "CORE CONCEPT",
      text: "Responsible AI means designing, developing, using, and monitoring AI in ways that aim to benefit people and reduce avoidable harm. Important principles include fairness, privacy, transparency, safety, reliability, and accountability."
    };
  }
  if (q.includes("privacy") || q.includes("personal data") || q.includes("protect data")) {
    return {
      tag: "PRIVACY",
      text: "Responsible AI protects personal information by collecting only what is needed, explaining how data is used, limiting access, securing stored information, and following applicable privacy rules. Avoid sharing sensitive details unless truly necessary."
    };
  }
  if (q.includes("bias") || q.includes("fairness") || q.includes("discrimination")) {
    return {
      tag: "FAIRNESS",
      text: "AI bias can occur when data, design choices, or deployment conditions lead to unfair outcomes. Teams can examine training data, test performance across relevant groups, document limitations, and use human review. A model's overall accuracy alone does not prove fairness."
    };
  }
  if (q.includes("transparent") || q.includes("explain") || q.includes("source")) {
    return {
      tag: "TRANSPARENCY",
      text: "Transparency means making relevant information clear: what the system is intended to do, what supports its output, where it may fail, and when people should seek human review. Explanations should not pretend to reveal more than the system actually knows."
    };
  }
  if (q.includes("safe") || q.includes("reliable") || q.includes("wrong") || q.includes("correct") || q.includes("guarantee")) {
    return {
      tag: "UNCERTAINTY",
      text: "No AI system can guarantee that every answer is correct. AI can make mistakes or miss context. Important outputs should be checked against reliable sources, and high-impact decisions need appropriate human oversight. This particular chatbot uses predefined responses, not a live AI model."
    };
  }
  if (q.includes("accountab") || q.includes("responsible if") || q.includes("who is responsible")) {
    return {
      tag: "ACCOUNTABILITY",
      text: "People and organisations that build, provide, and use AI should define who is responsible, test and monitor the system, investigate harmful outcomes, correct problems, and provide suitable ways to request human review."
    };
  }
  if (q.includes("deepfake") || q.includes("fake news") || q.includes("misinformation")) {
    return {
      tag: "VERIFY INFORMATION",
      text: "Check the original source, date, context, and independent reporting before sharing a claim. AI-generated-content detectors can make mistakes, so a detector result alone does not prove that an image, audio clip, or video is authentic or fake."
    };
  }
  if (q.includes("example") || q.includes("real life") || q.includes("application")) {
    return {
      tag: "REAL-WORLD EXAMPLE",
      text: "For example, a hiring system should be tested for unfair patterns; a health-related AI tool should support, not replace, qualified medical judgement; and a fact-checking chatbot should show real sources and admit when evidence is insufficient."
    };
  }
  return {
    tag: "UNCERTAINTY",
    text: "I don't have a reliable predefined answer for that question. I won't guess. Try asking about responsible AI, privacy, fairness, transparency, safety, misinformation, or accountability. This is a rule-based demo, not a general-purpose AI model."
  };
}

function submitQuestion(question) {
  const text = question.trim();
  if (!text) return;
  addMessage(text, "user");
  const response = getResponse(text);
  addMessage(response.text, "bot", response.tag);
  input.value = "";
  input.focus();
}

form.addEventListener("submit", event => {
  event.preventDefault();
  submitQuestion(input.value);
});

document.querySelectorAll("[data-prompt]").forEach(button => {
  button.addEventListener("click", () => submitQuestion(button.dataset.prompt));
});

clearButton.addEventListener("click", () => {
  messages.replaceChildren();
  const wrapper = document.createElement("div");
  wrapper.className = "message bot-message";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = "New chat started. Ask me about responsible AI, fairness, privacy, transparency, safety, or accountability.";
  const meta = document.createElement("span");
  meta.className = "message-meta";
  meta.textContent = "ClearMind · Demo response";
  wrapper.append(bubble, meta);
  messages.appendChild(wrapper);
  input.focus();
});
