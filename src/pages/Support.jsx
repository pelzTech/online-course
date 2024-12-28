import React from 'react';
import './Support.css';



const Support = () => {
  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer: "Simply navigate to the 'Courses' section, select your desired course, and click 'Get Course' to proceed to checkout.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept payments through credit/debit cards, PayPal, and other secure payment methods.",
    },
    {
      question: "Can I access my courses offline?",
      answer: "Currently, courses are only available online. However, we are working on an offline mode feature.",
    },
    {
      question: "How can I contact support?",
      answer: "You can use the contact form below or reach us via email, Facebook, Instagram, or Telegram.",
    },
    {
      question: "Can I get a refund after purchasing a course?",
      answer: "Refunds are available within 7 days of purchase if the course has not been accessed.",
    },
  ];

  return (
    <div className="support-page">
      <h1>Support</h1>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or need support, feel free to reach out to us:</p>
        <ul className="contact-links">
          <li>Email: <a href="mailto:owner@example.com">cryptopelzacademy2@gmail.com.com</a></li>
          <li>Facebook: <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook Page</a></li>
          <li>Instagram: <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@InstagramHandle</a></li>
          <li>Telegram: <a href="https://t.me/TelegramHandle" target="_blank" rel="noopener noreferrer">Telegram Channel</a></li>
        </ul>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Support;
