import React, { useState } from 'react';

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can easily upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time. There are no cancellation fees.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom information to your invoices, such as PO numbers or client names.",
    },
    {
      question: "How does billing work?",
      answer: "We offer monthly or annual billing cycles. You can choose the option that best suits your needs.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email in your account settings.",
    },
  ];

  return (
    <section className="bg-white py-16 mt-0.5">
      <div className="container mx-auto px-6 ">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8">Everything you need to know about the product and billing.</p>

        <div className="space-y-4 max-w-xl mx-auto">
  {faqs.map((faq, index) => (
    <div key={index} className="border-b border-gray-200 py-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleAnswer(index)}
      >
        <span className="font-medium">{faq.question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 transition-transform duration-200"
        >
          {activeIndex === index ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 15l6-6 6 6"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 9l6 6 6-6"
            />
          )}
        </svg>
      </div>
      {activeIndex === index && (
        <p className="mt-2 text-gray-700">{faq.answer}</p>
      )}
    </div>
  ))}
</div>


        <div className="mt-16 bg-gray-100 rounded-lg p-6">
        <div className="flex items-center justify-center mt-8"> 
          <img src={require("./simage2.png")} className="w-10 h-10 rounded-full" alt="Avatar 1" /> 
          <img src={require("./simage.png")} className="w-10 h-10 rounded-full" alt="Avatar 2" />
          <img src={require("./simage3.png")} className="w-10 h-10 rounded-full" alt="Avatar 3" /> 
        </div>
        <p className="text-center mt-4">Still have questions?</p>
        <p className="text-center text-sm text-gray-500">Can't find the answer you're looking for? Please chat to our friendly team.</p>
        <button className="mt-4 inline-block px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded">Get in touch</button>
      </div>
      </div>
      <div className="w-full border-t border-gray-300 mt-10"></div>
    </section>
  );
};

export default Questions;