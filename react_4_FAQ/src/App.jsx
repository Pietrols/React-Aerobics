import { useState } from "react";

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is useState?",
      answer: "useState lets you add state to function components.",
    },
    {
      question: "What is JSX?",
      answer: "JSX allows you to write HTML-like syntax inside JavaScript.",
    },
  ];

  return (
    <div>
      <h1>FAQs</h1>
      <div>
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => setOpenIndex(1)}
            className={openIndex === 1 ? "active" : ""}
          >
            {faq}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
