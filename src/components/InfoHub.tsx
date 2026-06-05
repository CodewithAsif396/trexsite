import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, BookOpen, Wallet, Activity, ShieldAlert, Award, FileText, HelpCircle, LifeBuoy, AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function InfoHub() {
  const [activeTab, setActiveTab] = useState('getting-started');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const tabs = [
    { id: 'getting-started', icon: <BookOpen size={18} />, label: 'Getting Started' },
    { id: 'trading', icon: <Activity size={18} />, label: 'Trading & Policies' },
    { id: 'rewards', icon: <Award size={18} />, label: 'Reward Program' },
    { id: 'faq', icon: <HelpCircle size={18} />, label: 'FAQ (25+)' },
    { id: 'legal', icon: <FileText size={18} />, label: 'Legal & Support' },
  ];

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
    <div className="info-hub-container" style={{ margin: '4rem auto', maxWidth: '1200px', padding: '0 1rem' }}>
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="section-header">
        <h2 className="section-title">Documentation & Information Center</h2>
        <p className="section-desc">Comprehensive guides, policies, and frequently asked questions.</p>
      </motion.div>

      <div className="tabs-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1.5rem',
              borderRadius: '30px', border: '1px solid',
              borderColor: activeTab === tab.id ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
              background: activeTab === tab.id ? 'var(--primary)' : 'rgba(0,0,0,0.3)',
              color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
              cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: 600, fontSize: '0.9rem'
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="tab-content" style={{ background: 'rgba(15, 23, 42, 0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem' }}>
        <AnimatePresence mode="wait">
          
          {/* TAB 1: GETTING STARTED */}
          {activeTab === 'getting-started' && (
            <motion.div key="getting-started" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <BookOpen className="text-blue" /> 1. Getting Started
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Explain the complete onboarding process:</p>
                <ul style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.5rem' }}>
                  <li>User creates an account through Sign Up.</li>
                  <li>User logs into the account.</li>
                  <li>User visits the Profile section.</li>
                  <li>User submits both Basic Verification and Advanced Verification.</li>
                  <li>Verification is reviewed by the platform.</li>
                  <li>After successful approval, a dedicated TRC20 wallet address is assigned to the user.</li>
                  <li>User can then deposit funds and start using platform services.</li>
                </ul>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', borderLeft: '4px solid #3b82f6', padding: '1rem', marginTop: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#93c5fd', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Professional Note on Verification</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Verification approval is required to ensure compliance and security. While usually swift, please be aware that review times may experience slight delays during periods of high application volume.</p>
                </div>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <Wallet className="text-green" /> 2. Deposit Policy
                </h3>
                <ul style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.5rem' }}>
                  <li>Minimum deposit amount is 500 USDT.</li>
                  <li>Deposits are made through the assigned TRC20 wallet address.</li>
                  <li>Deposits are normally credited automatically after blockchain confirmation.</li>
                  <li>Funds first appear in the Exchange Wallet.</li>
                  <li>Users must transfer funds from Exchange Wallet to Trading Wallet before participating in trading.</li>
                </ul>
                <div style={{ background: 'rgba(251, 191, 36, 0.1)', borderLeft: '4px solid #f59e0b', padding: '1rem', marginTop: '1.5rem', borderRadius: '0 8px 8px 0' }}>
                  <h4 style={{ color: '#fcd34d', marginBottom: '0.5rem', fontSize: '0.95rem' }}>Important Deposit Notice</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>Ensure you are sending only USDT on the TRC20 network. Any other network or token will result in permanent loss. Blockchain confirmations may take a few minutes depending on network congestion.</p>
                </div>
              </div>

              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <Activity className="text-purple" /> 5. Withdrawal Policy
                </h3>
                <ul style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li>Users must transfer funds from Trading Wallet to Exchange Wallet before withdrawal.</li>
                  <li>Withdrawal requests can then be submitted.</li>
                </ul>
                <h4 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Processing Time</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Typical withdrawal processing time is between 30 minutes and 24 hours. Processing times may vary due to blockchain congestion, security reviews, maintenance, or network delays.</p>
                
                <h4 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Early Withdrawal Rule</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Withdrawals requested before completing 35 days may be subject to a 20% deduction fee.</p>
                
                <h4 style={{ color: 'white', marginTop: '1.5rem', marginBottom: '0.5rem' }}>Standard Withdrawal Rule</h4>
                <p style={{ color: 'var(--text-muted)' }}>Users completing the required holding period may withdraw available balances according to platform rules.</p>
              </div>

            </motion.div>
          )}

          {/* TAB 2: TRADING */}
          {activeTab === 'trading' && (
            <motion.div key="trading" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <Activity className="text-blue" /> 3. Trading Signal Guide
                </h3>
                <ol style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '1rem', paddingLeft: '1.5rem' }}>
                  <li><strong>Receive Signal:</strong> Users receive official trading signals through the platform's Telegram channel or moderators.</li>
                  <li><strong>Follow Precisely:</strong> Users must follow signals exactly as provided.</li>
                  <li><strong>Enter Market:</strong> Open the Futures Trading section using your Trading Wallet balance.</li>
                  <li><strong>Select Direction:</strong> Choose the correct direction (Long/Short or Buy/Sell) as indicated.</li>
                  <li><strong>Verify Parameters:</strong> Verify trade intervals and signal parameters match exactly before execution.</li>
                  <li><strong>Completion:</strong> Profits and losses are reflected directly in your Trading Wallet after the trade completion.</li>
                </ol>
              </div>

              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <ShieldAlert className="text-red" style={{ color: '#ef4444' }} /> 4. Manual Trading Policy
                </h3>
                <div style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '2rem', borderRadius: '12px' }}>
                  <h4 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Disclaimer of Liability</h4>
                  <p style={{ color: 'var(--text-main)', marginBottom: '1rem' }}>Users who trade manually without following official platform signals are fully responsible for their own actions.</p>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>The company is explicitly not responsible for any financial losses caused by:</p>
                  <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.5rem', paddingLeft: '1.5rem' }}>
                    <li>Manual trading deviations</li>
                    <li>Wrong market entries</li>
                    <li>Incorrect leverage applications</li>
                    <li>User typographical or execution mistakes</li>
                    <li>Unpredictable market volatility</li>
                    <li>Liquidation events resulting from the above</li>
                  </ul>
                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 3: REWARDS */}
          {activeTab === 'rewards' && (
            <motion.div key="rewards" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                <Award className="text-gold" /> 6. Referral & Reward Program
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Our comprehensive reward matrix incentivizes network growth across multiple investment tiers.</p>
              
              <div className="table-container" style={{ overflowX: 'auto' }}>
                <table className="custom-table" style={{ width: '100%', minWidth: '800px' }}>
                  <thead>
                    <tr>
                      <th>Package Tier</th>
                      <th>Welcome Bonus</th>
                      <th>Referral Bonus</th>
                      <th>Team Event Bonus (3 Members)</th>
                      <th>Monthly Salary (Maintained)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ fontWeight: 'bold', color: 'white' }}>500 USDT</td>
                      <td>15 USDT</td>
                      <td>25 USDT</td>
                      <td>80 USDT</td>
                      <td style={{ color: 'var(--accent-green)' }}>100 USDT</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 'bold', color: 'white' }}>800 USDT</td>
                      <td>30 USDT</td>
                      <td>50 USDT</td>
                      <td>200 USDT</td>
                      <td style={{ color: 'var(--accent-green)' }}>200 USDT</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 'bold', color: 'white' }}>1000 USDT</td>
                      <td>50 USDT</td>
                      <td>80 USDT</td>
                      <td>300 USDT</td>
                      <td style={{ color: 'var(--accent-green)' }}>300 USDT</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 'bold', color: 'white' }}>1500 USDT</td>
                      <td>75 USDT</td>
                      <td>120 USDT</td>
                      <td>500 USDT</td>
                      <td style={{ color: 'var(--accent-green)' }}>500 USDT</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 'bold', color: 'white' }}>2000 USDT</td>
                      <td>100 USDT</td>
                      <td>160 USDT</td>
                      <td>700 USDT</td>
                      <td style={{ color: 'var(--accent-green)' }}>700 USDT</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 'bold', color: 'white' }}>3000 USDT</td>
                      <td>150 USDT</td>
                      <td>250 USDT</td>
                      <td>1000 USDT</td>
                      <td style={{ color: 'var(--accent-green)' }}>1000 USDT</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* TAB 4: FAQ */}
          {activeTab === 'faq' && (
            <motion.div key="faq" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                <HelpCircle className="text-blue" /> 7. Frequently Asked Questions
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {faqs.map((faq, index) => (
                  <div key={index} className="faq-item" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div 
                      className="faq-question" 
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      style={{ padding: '1rem', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 500, color: 'white' }}
                    >
                      {faq.q}
                      <ChevronDown 
                        size={18} 
                        style={{ 
                          transform: activeFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                          color: 'var(--text-muted)'
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
            </motion.div>
          )}

          {/* TAB 5: LEGAL & SUPPORT */}
          {activeTab === 'legal' && (
            <motion.div key="legal" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.3 }}>
              
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <FileText className="text-purple" /> 8. Terms & Conditions
                </h3>
                <ul style={{ color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.5rem' }}>
                  <li><strong>User Responsibilities:</strong> Users must comply with all local laws and platform rules during trading.</li>
                  <li><strong>Account Security:</strong> You are solely responsible for safeguarding your login credentials.</li>
                  <li><strong>Verification Requirements:</strong> Services remain restricted until KYC verifications are formally approved.</li>
                  <li><strong>Bonus Eligibility:</strong> Promotional balances cannot be withdrawn immediately and are subject to trading volume requirements.</li>
                  <li><strong>Referral Rules:</strong> Self-referrals or sybil networks will void all associated bonuses.</li>
                  <li><strong>Fraud Prevention:</strong> The platform employs automated monitoring to detect illegal trading behaviors.</li>
                  <li><strong>Platform Rights:</strong> We reserve the right to suspend accounts pending investigation of suspicious activities.</li>
                  <li><strong>Service Interruptions:</strong> The platform is not liable for losses caused by unforeseen technical downtime.</li>
                  <li><strong>Compliance Requirements:</strong> Users from restricted jurisdictions are prohibited from utilizing the exchange.</li>
                  <li><strong>Account Termination:</strong> Violations of these terms may result in immediate and permanent account termination.</li>
                </ul>
              </div>

              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <AlertTriangle className="text-gold" style={{ color: '#f59e0b' }} /> 9. Important Notices
                </h3>
                <div style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '1.5rem', borderRadius: '12px' }}>
                  <ul style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.5rem', margin: 0 }}>
                    <li>Users must keep account information entirely secure.</li>
                    <li>Blockchain transactions are final and irreversible.</li>
                    <li>Wallet addresses must be checked carefully prior to any transfer.</li>
                    <li>The platform may request additional advanced verification at any time.</li>
                    <li>Fraudulent activity may result in indefinite account suspension.</li>
                    <li>Service availability may occasionally be affected by required maintenance.</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', color: 'white', marginBottom: '1.5rem' }}>
                  <LifeBuoy className="text-green" /> 10. Help Center
                </h3>
                <div className="grid-2">
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Contact Support</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Open a support ticket directly from your dashboard for account inquiries.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Telegram Support</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Join our official Telegram community and contact the verified Moderator.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Financial Assistance</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>For deposit and withdrawal issues, provide your TxID to our finance team.</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Technical & Verification</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Having bugs or KYC issues? Reach out with screenshots of the error.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
