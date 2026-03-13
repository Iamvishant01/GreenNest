import React, { useState } from "react";

const faqData = [
  {
    question: "How can GreenNest improve nursery business efficiency?",
    answer:
      "GreenNest helps nursery owners streamline operations by managing plant inventory, sales records, supplier details, and customer information in one centralized system. This reduces manual errors, saves time, and provides better visibility into stock levels and sales trends, helping owners make smarter business decisions and increase overall profitability."
  },
  {
    question: "Can GreenNest help increase nursery sales and revenue?",
    answer:
      "Yes, GreenNest tracks sales trends and customer preferences, helping nursery owners identify popular plants and improve marketing strategies to boost revenue."
  },
  {
    question: "How does GreenNest support inventory management ?",
    answer:
      "GreenNest provides real-time inventory tracking so nursery owners can monitor stock levels, manage suppliers, and avoid stock shortages."
  },
  {
    question: "Is GreenNest suitable for both small nurseries businesses?",
    answer:
      "Yes, GreenNest is designed for both small and large nursery businesses with scalable features that grow with your operations."
  },
  {
    question: "Can GreenNest help reduce plant wastage and stock losses?",
    answer:
      "Yes, with better tracking and monitoring tools, GreenNest helps reduce wastage and manage plant lifecycle efficiently."
  }
];

function FAQ() {

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="faq-section">

      <h3 className="faq-title">
        Frequently Asked Questions →
      </h3>

      <div className="faq-container">

        {faqData.map((faq, index) => (

          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >

              <span>{index + 1}. {faq.question}</span>

              <span className={`arrow ${activeIndex === index ? "open" : ""}`}>
                ▼
              </span>

            </div>

            {activeIndex === index && (
              <div className="faq-answer">
                {faq.answer}
              </div>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default FAQ;