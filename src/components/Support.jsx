import React from "react";
import './Support.css';
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa"; // Import social icons

const Support = () => {
  const faqs = [
    {
      question: "How do I register for a course?",
      answer: "You can register by selecting the 'Get Course' button on the course page and proceeding to checkout.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept credit cards, PayPal, and other major payment platforms.",
    },
    {
      question: "Can I get a refund if I don't like a course?",
      answer: "Yes, we offer a 7-day money-back guarantee for all courses.",
    },
    {
      question: "How long will I have access to the course?",
      answer: "Once purchased, you will have lifetime access to the course materials.",
    },
  ];

  return (
    <div className="support-page">
      <h2>Contact Support</h2>
      <p>If you have any questions, feel free to reach out through the following channels:</p>
      <ul className="contact-list">
        <li>Email: <a href="mailto:support@onlinelearning.com">support@onlinelearning.com</a></li>
        <li className="desktop-social">Facebook: <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">Visit Us</a></li>
        <li className="desktop-social">Instagram: <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">@yourpage</a></li>
        <li className="desktop-social">Telegram: <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">@yourtelegram</a></li>
      </ul>

      {/* Social Media Icons (Visible on Mobile Only) */}
      <div className="mobile-social-icons">
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
      </div>

      <h2>Frequently Asked Questions (FAQ)</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Support;
