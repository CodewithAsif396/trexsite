import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Users, Clock, ChefHat, 
  CheckCircle2, ShieldCheck, Crown, Menu, X, 
  Activity, Lock, RefreshCw
} from 'lucide-react';
import InfoHub from './components/InfoHub';
import AboutUs from './components/AboutUs';
import LiveReviews from './components/LiveReviews';
import FAQSection from './components/FAQSection';
import TelegramWidget from './components/TelegramWidget';
import VideoGuidance from './components/VideoGuidance';
import './index.css';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'videos'>('home');

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <>
      <div className="app-container">
        {/* Live Wallpaper Background */}
      <div className="live-wallpaper">
        <div className="ambient-orb orb-1"></div>
        <div className="ambient-orb orb-2"></div>
        <div className="ambient-orb orb-3"></div>
        <div className="stars-overlay"></div>
      </div>

      {/* Navigation */}
      <header className="header">
        <div className="logo-container">
          <img src="/logo.png" alt="Trexis Logo" style={{ width: '45px', height: '45px', objectFit: 'contain' }} />
          <span>TrexisPlatorm</span>
        </div>
        
        <div className="nav-links">
          <a className="nav-link" href="#features" onClick={() => setCurrentPage('home')}>Features</a>
          <a className="nav-link" href="#plans" onClick={() => setCurrentPage('home')}>Signal Plans</a>
          <a className="nav-link" href="#rewards" onClick={() => setCurrentPage('home')}>Rewards</a>
          <a className="nav-link" href="#manager" onClick={() => setCurrentPage('home')}>Manager</a>
          <a className="nav-link" href="#faq" onClick={() => setCurrentPage('home')}>FAQ</a>
          <button className="nav-link" style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer' }} onClick={() => setCurrentPage('videos')}>Video Guidance</button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <a className="nav-link" href="#features" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>Features</a>
            <a className="nav-link" href="#plans" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>Signal Plans</a>
            <a className="nav-link" href="#rewards" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>Rewards</a>
            <a className="nav-link" href="#manager" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>Manager Structure</a>
            <a className="nav-link" href="#faq" onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('home'); }}>FAQ</a>
            <button className="nav-link" style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', textAlign: 'left', padding: '10px 0', width: '100%' }} onClick={() => { setIsMobileMenuOpen(false); setCurrentPage('videos'); }}>Video Guidance</button>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="main-content">
        {currentPage === 'videos' ? (
          <VideoGuidance />
        ) : (
          <>
        {/* Hero Section */}
        <section className="hero">
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <div className="hero-badge">Official Information Portal</div>
            <h1 className="hero-title">
              Your Complete Guide to <br />
              <span>TrexisPlatorm</span>
            </h1>
            <p className="hero-desc">
              Find every detail, rule, and reward structure right here. Everything you need to know about our premium signal tiers, referral rewards, and manager payouts in one place.
            </p>
          </motion.div>
        </section>

        <AboutUs />

        {/* Dedicated FAQ Section placed higher for easy access */}
        <section id="faq" style={{ position: 'relative', zIndex: 2 }}>
          <FAQSection />
        </section>

        {/* Features Section */}
        <section id="features" className="section">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="section-title">Why Choose Trexis?</h2>
            <p className="section-desc">We provide a robust, secure, and highly rewarding environment for all our traders and managers.</p>
          </motion.div>
          
          <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            <motion.div className="card feature-card" variants={fadeIn}>
              <div className="icon-wrap"><Activity size={24} /></div>
              <h3 className="feature-title">Real-time Signals</h3>
              <p className="feature-desc">Receive instant push notifications for basic and VIP trading slots directly on your dashboard.</p>
            </motion.div>
            <motion.div className="card feature-card" variants={fadeIn}>
              <div className="icon-wrap" style={{ color: '#10b981', background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.2)' }}><RefreshCw size={24} /></div>
              <h3 className="feature-title">Instant Settlement</h3>
              <p className="feature-desc">Trades are resolved automatically upon signal completion, updating your PnL instantly.</p>
            </motion.div>
            <motion.div className="card feature-card" variants={fadeIn}>
              <div className="icon-wrap" style={{ color: '#a78bfa', background: 'rgba(167,139,250,0.1)', borderColor: 'rgba(167,139,250,0.2)' }}><Lock size={24} /></div>
              <h3 className="feature-title">Bank-Grade Security</h3>
              <p className="feature-desc">Your funds and data are protected with top-tier encryption and strict multi-account monitoring.</p>
            </motion.div>
          </motion.div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="section">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="section-title">Trading Tier Plans</h2>
            <p className="section-desc">Select the account tier that matches your investment goals. Higher tiers unlock more signals and larger bonuses.</p>
          </motion.div>

          <motion.div className="grid-3" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
            {[
              { price: 500, name: "Standard Account", welcome: 15, referral: 25, team: 80, salary: 100, basicSignals: 2, extraSignals: 2, extraDays: 1, popular: false, color: '#cbd5e1', rgb: '203, 213, 225' },
              { price: 800, name: "Pro Account", welcome: 30, referral: 50, team: 200, salary: 200, basicSignals: 3, extraSignals: 2, extraDays: 2, popular: true, color: '#fbbf24', rgb: '251, 191, 36' },
              { price: 1000, name: "Elite Account", welcome: 50, referral: 80, team: 300, salary: 300, basicSignals: 4, extraSignals: 3, extraDays: 3, popular: false, color: '#a855f7', rgb: '168, 85, 247' },
              { price: 1500, name: "VIP Account", welcome: 75, referral: 120, team: 500, salary: 500, basicSignals: 5, extraSignals: 3, extraDays: 5, popular: false, color: '#ef4444', rgb: '239, 68, 68' },
              { price: 2000, name: "Master Account", welcome: 100, referral: 160, team: 700, salary: 700, basicSignals: 6, extraSignals: 4, extraDays: 7, popular: false, color: '#10b981', rgb: '16, 185, 129' },
              { price: 3000, name: "Legend Account", welcome: 150, referral: 250, team: 1000, salary: 1000, basicSignals: 8, extraSignals: 4, extraDays: 14, popular: false, color: '#06b6d4', rgb: '6, 182, 212' }
            ].map((plan, i) => (
              <motion.div key={i} className="card plan-card" variants={fadeIn} style={{ padding: '1.5rem', borderColor: `rgba(${plan.rgb}, 0.4)`, background: `rgba(${plan.rgb}, 0.05)` }}>
                {plan.popular && <div className="badge" style={{ background: `rgba(${plan.rgb}, 0.15)`, color: plan.color, border: `1px solid rgba(${plan.rgb}, 0.3)` }}>Most Popular</div>}
                
                <div className="card-header" style={{ marginBottom: '1rem', gap: '1rem' }}>
                  <div className="icon-wrap" style={{ width: '42px', height: '42px', color: plan.color, background: `rgba(${plan.rgb}, 0.1)`, borderColor: `rgba(${plan.rgb}, 0.3)` }}>
                    {plan.popular ? <Trophy size={20} /> : <ShieldCheck size={20} />}
                  </div>
                  <div>
                    <div style={{ color: plan.color, fontWeight: 600, letterSpacing: '1px', fontSize: '0.75rem' }}>TIER {i + 1}</div>
                    <h3 style={{ fontSize: '1.2rem', color: 'white' }}>{plan.name}</h3>
                  </div>
                </div>

                <div className="plan-price-wrap" style={{ margin: '0 0 1rem 0', paddingBottom: '1rem' }}>
                  <div className="plan-price" style={{ fontSize: '2.5rem', color: plan.color }}>${plan.price}+ <span style={{ fontSize: '0.85rem' }}>Deposit</span></div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(59,130,246,0.15)', color: 'var(--primary-light)', borderRadius: '20px', fontWeight: 600 }}>{plan.basicSignals} Basic Signals/Day</span>
                  <span style={{ fontSize: '0.75rem', padding: '4px 10px', background: 'rgba(167,139,250,0.15)', color: '#c4b5fd', borderRadius: '20px', fontWeight: 600 }}>+{plan.extraSignals} Premium ({plan.extraDays}D)</span>
                </div>

                <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.75rem', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}><strong style={{color:'var(--primary-light)'}}>BASIC:</strong> 3PM, 6PM, 7PM</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}><strong style={{color:'#c4b5fd'}}>EXTRA:</strong> 8PM</div>
                </div>

                <div className="info-list" style={{ marginTop: 'auto', gap: '0.75rem' }}>
                  <div className="info-item" style={{ fontSize: '0.85rem' }}><CheckCircle2 size={16} color={plan.color} style={{flexShrink:0}} /><div><strong style={{color: plan.color}}>Welcome Bonus:</strong> ${plan.welcome}</div></div>
                  <div className="info-item" style={{ fontSize: '0.85rem' }}><CheckCircle2 size={16} color={plan.color} style={{flexShrink:0}} /><div><strong style={{color: plan.color}}>Referral Reward:</strong> ${plan.referral}</div></div>
                  <div className="info-item" style={{ fontSize: '0.85rem' }}><CheckCircle2 size={16} color={plan.color} style={{flexShrink:0}} /><div><strong style={{color: plan.color}}>Team Event (3 Members):</strong> ${plan.team}</div></div>
                  <div className="info-item" style={{ fontSize: '0.85rem' }}><CheckCircle2 size={16} color={plan.color} style={{flexShrink:0}} /><div><strong style={{color: plan.color}}>Monthly Salary:</strong> ${plan.salary}</div></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(255, 255, 255, 0.05)', borderLeft: '4px solid #3b82f6', borderRadius: '0 8px 8px 0', maxWidth: '800px', margin: '3rem auto 0 auto' }}>
            <h4 style={{ color: 'white', marginBottom: '0.75rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Important Notice
            </h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Bonuses, rewards, salaries, and signal benefits are subject to platform terms and conditions. Eligibility requirements must be met before rewards are issued. Trading involves risk, and past performance does not guarantee future results.
            </p>
          </motion.div>
        </section>

        {/* Rewards Section */}
        <section id="rewards" className="section">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="section-title">Community Rewards</h2>
            <p className="section-desc">Grow the platform and get rewarded. We offer instant referral payouts and special lifestyle subsidies.</p>
          </motion.div>

          <div className="grid-2">
            <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="card-header">
                <div className="icon-wrap" style={{ color: 'var(--accent-green)', background: 'rgba(16,185,129,0.1)', borderColor: 'rgba(16,185,129,0.2)' }}>
                  <ChefHat size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'white' }}>Meal Subsidy</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Reward yourself for growing the community.</p>
                </div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1.5rem', borderRadius: '12px', border: '1px dashed rgba(16,185,129,0.3)', marginBottom: '1.5rem' }}>
                <p style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Invite a <span className="text-green font-bold">500 USDT+</span> member</p>
                <div style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', fontWeight: 800, color: 'var(--accent-green)', lineHeight: 1 }}>
                  Up to $30 <span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: 400 }}>reimbursement</span>
                </div>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem' }}>
                <Clock size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                To prevent extravagant spending, you must apply with a valid meal receipt and 1-3 group photos.
              </p>
            </motion.div>

            <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="card-header">
                <div className="icon-wrap"><Users size={28} /></div>
                <div>
                  <h3 style={{ fontSize: '1.5rem', color: 'white' }}>Referral Matrix</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Auto-credited real-time rewards.</p>
                </div>
              </div>
              
              <div className="table-container">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Investment</th>
                      <th>Referrer Gets</th>
                      <th>New Member Gets</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="text-gradient">$500</td><td>25 USDT</td><td>15 USDT</td></tr>
                    <tr><td className="text-gradient">$800</td><td>70 USDT</td><td>40 USDT</td></tr>
                    <tr><td className="text-gradient">$1000</td><td>160 USDT</td><td>120 USDT</td></tr>
                    <tr><td className="text-gradient">$1500</td><td>330 USDT</td><td>210 USDT</td></tr>
                    <tr><td className="text-gradient">$2000</td><td>520 USDT</td><td>400 USDT</td></tr>
                    <tr><td className="text-gradient">$3000</td><td>800 USDT</td><td>640 USDT</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Manager Structure Section */}
        <section id="manager" className="section">
          <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <h2 className="section-title">Manager Volume & Bonus Structure</h2>
            <p className="section-desc">Climb the ranks by building your team. Unlock monthly salaries and percentage-based volume rewards.</p>
          </motion.div>

          <motion.div className="card" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} style={{ padding: 0, overflow: 'hidden' }}>
            <div className="table-container" style={{ borderRadius: 0, border: 'none' }}>
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Position Level</th>
                    <th>Direct Members</th>
                    <th>Team Members</th>
                    <th>Volume Bonus</th>
                    <th>Monthly Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ color: '#c084fc', fontWeight: 'bold' }}>Level 1 Manage</td>
                    <td>3</td><td>-</td><td>1.0%</td>
                    <td style={{ fontWeight: 'bold', color: 'white' }}>$15</td>
                  </tr>
                  <tr>
                    <td style={{ color: '#c084fc', fontWeight: 'bold' }}>Level 2 Manage</td>
                    <td>5</td><td>15 or more</td><td>1.5%</td>
                    <td style={{ fontWeight: 'bold', color: 'white' }}>$40</td>
                  </tr>
                  <tr>
                    <td style={{ color: '#c084fc', fontWeight: 'bold' }}>Level 3 Manage</td>
                    <td>6</td><td>50 or more</td><td>2.0%</td>
                    <td style={{ fontWeight: 'bold', color: 'white' }}>$100</td>
                  </tr>
                  <tr>
                    <td style={{ color: '#c084fc', fontWeight: 'bold' }}>Level 4 Manage</td>
                    <td>10</td><td>100 or more</td><td>2.5%</td>
                    <td style={{ fontWeight: 'bold', color: 'white' }}>$250</td>
                  </tr>
                  <tr>
                    <td style={{ color: '#c084fc', fontWeight: 'bold' }}>Level 5 Manage</td>
                    <td>15</td><td>200 or more</td><td>3.0%</td>
                    <td style={{ fontWeight: 'bold', color: 'white' }}>$1000</td>
                  </tr>
                  <tr>
                    <td style={{ color: '#c084fc', fontWeight: 'bold' }}>Level 6 Manage</td>
                    <td>20</td><td>500 or more</td><td>3.5%</td>
                    <td style={{ fontWeight: 'bold', color: 'white' }}>$3000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div style={{ padding: '2rem', background: 'rgba(192, 132, 252, 0.05)', borderTop: '1px solid rgba(192, 132, 252, 0.1)' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#c084fc', marginBottom: '1rem' }}>
                <Crown size={20} /> Promotion Rules
              </h4>
              <ol style={{ color: 'var(--text-muted)', fontSize: '0.95rem', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li>To apply for a promotion and receive corresponding benefits, one must meet the required number of direct and team members for each manager position.</li>
                <li>If the number of direct members reaches the promotion criteria but the team size does not, the promotion cannot be applied for.</li>
                <li>Actions such as one person operating multiple accounts for illegal trading are strictly prohibited; any violations will result in the cancellation of investment qualifications.</li>
                <li>Manager bonuses are distributed every month.</li>
                <li>Any false rumors's members to promote to manage; reports will lose all benefits and be permanently banned from cooperation.</li>
              </ol>
            </div>
          </motion.div>
        </section>

        <LiveReviews />

        {/* Documentation / Info Hub */}
        <section id="docs" style={{ width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', marginTop: '2rem' }}>
          <InfoHub />
        </section>

          </>
        )}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div className="logo-icon" style={{ width: '30px', height: '30px', fontSize: '1.2rem' }}>T</div>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: 'white' }}>TrexisPlatorm Info</span>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '500px', margin: '0 auto 1.5rem auto' }}>
          Your ultimate informational guide to the Trexis platform. We are here to answer every question and provide full transparency on all our plans and rewards.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.1)' }}>🇺🇸 Registered in USA</span>
          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.1)' }}>🇬🇧 Registered in UK</span>
          <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.85rem', color: 'var(--text-main)', border: '1px solid rgba(255,255,255,0.1)' }}>🇦🇪 Registered in UAE</span>
        </div>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} TrexisPlatorm Info. All rights reserved.
        </div>
      </footer>
      </div>

      {/* Floating Telegram Support Widget */}
      <TelegramWidget />
    </>
  );
}

export default App;
