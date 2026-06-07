import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Wallet, Activity, ShieldAlert, Award, FileText, LifeBuoy, AlertTriangle, ChevronRight } from 'lucide-react';

export default function InfoHub() {
  const [activeTab, setActiveTab] = useState('getting-started');

  const tabs = [
    { id: 'getting-started', icon: <BookOpen size={18} />, label: 'Getting Started' },
    { id: 'trading', icon: <Activity size={18} />, label: 'Trading & Policies' },
    { id: 'rewards', icon: <Award size={18} />, label: 'Reward Program' },
    { id: 'legal', icon: <FileText size={18} />, label: 'Legal & Support' },
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

      <div className="tabs-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem', justifyContent: 'center' }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1.5rem',
              borderRadius: '30px', border: '1px solid',
              borderColor: activeTab === tab.id ? 'var(--primary)' : 'rgba(255,255,255,0.15)',
              background: activeTab === tab.id ? 'var(--primary)' : 'rgba(0,0,0,0.4)',
              color: activeTab === tab.id ? 'white' : 'var(--text-muted)',
              cursor: 'pointer', transition: 'all 0.3s ease', fontWeight: 600, fontSize: '0.95rem',
              boxShadow: activeTab === tab.id ? '0 0 15px rgba(59, 130, 246, 0.4)' : 'none'
            }}
            onMouseOver={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseOut={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.background = 'rgba(0,0,0,0.4)';
                e.currentTarget.style.color = 'var(--text-muted)';
              }
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {tab.icon} {tab.label}
            </div>
            {activeTab !== tab.id && (
              <ChevronRight size={16} style={{ opacity: 0.6, marginLeft: '0.5rem' }} />
            )}
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
                <Award className="text-gold" /> 6. Account Plans & Reward Matrix
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Choose an account plan that fits your goals. Our comprehensive reward matrix incentivizes network growth across multiple investment tiers.</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {[
                  { name: 'STANDARD', price: '$500+', signals: '2 Basic Signals / Day', welcome: '$20', referral: '$20', team: '5 Active Members = $100', salary: '$75', color: '#3b82f6' },
                  { name: 'PRO', price: '$800+', signals: '3 Basic Signals / Day', welcome: '$25', referral: '$25', team: '7 Active Members = $180', salary: '$150', color: '#8b5cf6' },
                  { name: 'ELITE', price: '$1000+', signals: '3 Basic Signals / Day', welcome: '$30', referral: '$30', team: '10 Active Members = $300', salary: '$250', color: '#f59e0b' },
                  { name: 'VIP', price: '$1500+', signals: '3 Basic Signals / Day', welcome: '$40', referral: '$40', team: '12 Active Members = $500', salary: '$400', color: '#ec4899' },
                  { name: 'MASTER', price: '$2000+', signals: '3 Basic Signals / Day', welcome: '$60', referral: '$60', team: '15 Active Members = $800', salary: '$600', color: '#10b981' },
                  { name: 'LEGEND', price: '$3000+', signals: '3 Basic Signals / Day', welcome: '$100', referral: '$100', team: '20 Active Members = $1500', salary: '$1000', color: '#eab308' },
                ].map((tier, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${tier.color}30`, borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s' }}>
                    <div style={{ background: `${tier.color}20`, padding: '1.5rem', borderBottom: `1px solid ${tier.color}30`, textAlign: 'center' }}>
                      <h4 style={{ color: tier.color, margin: 0, fontSize: '1.25rem', fontWeight: 700, letterSpacing: '1px' }}>{tier.name}</h4>
                      <div style={{ color: 'white', fontSize: '1.75rem', fontWeight: 800, marginTop: '0.5rem' }}>{tier.price}</div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                        <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Signals:</span> <strong>{tier.signals}</strong>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Welcome Bonus:</span> <strong>{tier.welcome}</strong>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Referral Bonus:</span> <strong>{tier.referral}</strong>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.875rem' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Team Event:</span> <strong style={{ color: '#60a5fa' }}>{tier.team}</strong>
                        </li>
                        <li style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.875rem' }}>
                          <span style={{ color: 'var(--text-muted)' }}>Monthly Salary:</span> <strong style={{ color: 'var(--accent-green)' }}>{tier.salary}</strong>
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(59, 130, 246, 0.05)', border: '1px solid rgba(59, 130, 246, 0.2)', padding: '2rem', borderRadius: '12px' }}>
                <h4 style={{ color: '#60a5fa', marginBottom: '1rem', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Award size={20} /> Reward Rules & Examples
                </h4>
                <ul style={{ color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '0.75rem', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                  <li><strong>Welcome Bonus</strong> is awarded according to the user's own deposit plan.</li>
                  <li><strong>Referral Bonus</strong> is awarded according to the deposit plan of the referred user.</li>
                </ul>
                <h5 style={{ color: 'white', marginBottom: '1rem' }}>Examples (Referral Bonus):</h5>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem' }}>
                  {[
                    { ref: '$500', earn: '$20' },
                    { ref: '$800', earn: '$25' },
                    { ref: '$1000', earn: '$30' },
                    { ref: '$1500', earn: '$40' },
                    { ref: '$2000', earn: '$60' },
                    { ref: '$3000', earn: '$100' },
                  ].map((ex, i) => (
                    <div key={i} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', color: 'var(--text-muted)', borderLeft: '3px solid #60a5fa', display: 'flex', justifyContent: 'space-between' }}>
                      <span>Refer <strong style={{color:'white'}}>{ex.ref}</strong> User</span>
                      <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>Earn {ex.earn}</span>
                    </div>
                  ))}
                </div>
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
