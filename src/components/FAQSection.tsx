import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "How do I register a new account?", a: "Click the Sign Up button, fill out the required information including your email and secure password, and complete the registration process." },
    { q: "I can't log in, what should I do?", a: "Please verify your credentials. If you forgot your password, use the 'Forgot Password' link to securely reset it via email." },
    { q: "What is Basic Verification?", a: "Basic Verification is a mandatory KYC process where you provide your identity details to ensure a secure trading environment." },
    { q: "What is Advanced Verification?", a: "Advanced Verification may require additional documentation like a government ID or proof of address to unlock higher trading and withdrawal limits." },
    { q: "How long does verification take?", a: "Verification is typically processed within 1-24 hours. However, during high volume periods, it may take slightly longer." },
    { q: "What is the minimum deposit amount?", a: "The minimum deposit required to activate your account and start receiving signals is 500 USDT." },
    { q: "How do I make a deposit?", a: "After verification, you will be assigned a TRC20 wallet address. Send your USDT (TRC20) to this exact address." },
    { q: "Why hasn't my deposit arrived?", a: "Deposits depend on blockchain confirmations. It usually takes a few minutes, but network congestion can cause delays." },
    { q: "What is the difference between Exchange Wallet and Trading Wallet?", a: "The Exchange Wallet holds your raw deposits and withdrawals. The Trading Wallet is used actively for executing trades and receiving signals." },
    { q: "How do I get trading signals?", a: "Signals are broadcasted via our official Telegram Support Team or assigned Moderator channels once you have an active deposited account." },
    { q: "How do I use a trading signal?", a: "Open the Futures Trading section, select the exact direction (Long/Short) at the specified time, and ensure all parameters match the signal." },
    { q: "What happens if I miss the signal time?", a: "Do not enter the trade late. Market conditions change rapidly, and late entries can result in severe losses." },
    { q: "Can I trade manually without signals?", a: "Yes, but you do so entirely at your own risk. The platform is not responsible for any losses incurred through manual trading." },
    { q: "What is the daily signal limit?", a: "Standard $500 accounts receive 2 basic signals daily, while Pro $800 accounts receive 3 basic signals." },
    { q: "How do I claim my Welcome Bonus?", a: "Your Welcome Bonus is credited to your account automatically upon your first successful qualifying deposit." },
    { q: "How does the Referral Bonus work?", a: "When a user registers using your referral link and makes a deposit, you receive an instant referral bonus based on their deposit tier." },
    { q: "What is the Team Event Bonus?", a: "When you successfully refer 3 active members, you unlock a special one-time Event Bonus." },
    { q: "How do I qualify for a Monthly Salary?", a: "Maintain at least 3 active referred members, and you will receive a fixed monthly salary directly to your wallet." },
    { q: "How do I request a withdrawal?", a: "Transfer funds from your Trading Wallet to your Exchange Wallet, then submit a withdrawal request to your personal external TRC20 address." },
    { q: "How long do withdrawals take?", a: "Standard withdrawal processing time is between 30 minutes and 24 hours, subject to security reviews and network speeds." },
    { q: "What is the 35-Day Withdrawal Policy?", a: "If you request a withdrawal before your funds have been held for 35 days, a 20% early deduction fee will be applied." },
    { q: "Is my account secure?", a: "Yes, we utilize bank-grade encryption and strict sybil-attack monitoring to ensure your funds and data are protected." },
    { q: "Why was my account suspended?", a: "Accounts may be suspended for violating Terms & Conditions, such as operating multiple accounts, fraudulent referrals, or illegal trading activities." },
    { q: "Can I have multiple accounts?", a: "No. Operating multiple accounts by a single user is strictly prohibited and will lead to an immediate ban and loss of funds." },
    { q: "How do I contact technical support?", a: "You can reach out to our Support Team via the official Telegram channel or the Help Center section on your dashboard." }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="faq-container" style={{ margin: '4rem auto', maxWidth: '1000px', padding: '0 1rem' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="section-header">
        <h2 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h2>
        <p className="section-desc">Everything you need to know about getting started and trading on Trexis Platform.</p>
      </motion.div>

      <div className="faq-list" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div 
                className="faq-question" 
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                style={{ padding: '1rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 500, color: 'white' }}
              >
                <div style={{ paddingRight: '1rem' }}>{faq.q}</div>
                <ChevronDown 
                  size={18} 
                  style={{ 
                    transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    color: 'var(--text-muted)',
                    flexShrink: 0
                  }} 
                />
              </div>
              <AnimatePresence>
                {activeFaq === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 1rem 1rem 1rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>{faq.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
