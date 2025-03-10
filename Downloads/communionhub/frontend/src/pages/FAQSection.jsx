import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is CommunionHub?",
      answer: "CommunionHub is a platform that connects people through social, religious, and charity events, fostering community engagement and togetherness.",
    },
    {
      question: "How can I participate in events?",
      answer: "Simply browse our event listings and register for the ones that interest you. You can also host your own events!",
    },
    {
      question: "Is there a fee to join events?",
      answer: "Most events are free to join, but some may require a small registration fee. Check event details for specific information.",
    },
    {
      question: "How do I create my own event?",
      answer: "You can add your event using our 'Add Event' feature. Fill in the necessary details, and once approved, it will be live on the platform.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full max-w-6xl px-6 py-12 text-center">
      <h2 className="text-3xl font-bold  text-[#181D3B] mb-6 animate-fadeIn">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 bg-white rounded-lg p-4 shadow-md hover:scale-105 transition-transform duration-300">
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium text-[#181D3B]  "
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-[#F67974] text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              className={`mt-2 text-gray-600 text-sm transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
