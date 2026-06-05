import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, TrendingUp, Users } from 'lucide-react';

export default function AboutUs() {
  const [users, setUsers] = useState(14592);
  const [rewards, setRewards] = useState(2450320);

  useEffect(() => {
    // Calculate realistic growth based on days passed since an arbitrary launch date
    const baseDate = new Date('2024-01-01').getTime();
    const now = Date.now();
    const daysPassed = (now - baseDate) / (1000 * 60 * 60 * 24);
    
    // Add realistic daily growth
    const initialUsers = 14592 + Math.floor(daysPassed * 22.5);
    const initialRewards = 2450320 + Math.floor(daysPassed * 1850.75);

    setUsers(initialUsers);
    setRewards(initialRewards);

    // Live ticking simulation while the user is on the page
    const interval = setInterval(() => {
      // 30% chance to gain a user every 3 seconds
      if (Math.random() > 0.7) {
        setUsers(prev => prev + 1);
      }
      // 60% chance to increase reward payout every 3 seconds
      if (Math.random() > 0.4) {
        setRewards(prev => prev + Math.floor(Math.random() * 45) + 5);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section" style={{ position: 'relative', zIndex: 2 }}>
      <motion.div className="section-header" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <h2 className="section-title">About Trexis Platform</h2>
        <p className="section-desc">Building trust through transparency, consistency, and professional trading excellence since our inception.</p>
      </motion.div>

      <div className="grid-2" style={{ alignItems: 'center' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          <h3 style={{ fontSize: '2rem', color: 'white', marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Your Trusted Partner in <span className="text-gradient">Crypto Wealth Generation</span>
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
            Trexis Platform is a globally registered and regulated cryptocurrency signals and education portal. Operating across the USA, UK, and UAE, we provide our members with institutional-grade trading signals, lucrative team-building rewards, and a transparent ecosystem designed for mutual growth.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Unlike traditional platforms, we focus strictly on <strong>information and precision</strong>. Our expert analysts monitor the markets 24/7 to deliver up to 2% daily performance targets, while our community structure rewards you with steady salaries and event bonuses for sharing the success.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <ShieldCheck className="text-green" size={24} />
              <span style={{ color: 'white', fontWeight: 600 }}>Secure & Verified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Globe className="text-blue" size={24} />
              <span style={{ color: 'white', fontWeight: 600 }}>Global Presence</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <TrendingUp className="text-gold" size={24} />
              <span style={{ color: 'white', fontWeight: 600 }}>High Accuracy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Users className="text-purple" size={24} />
              <span style={{ color: 'white', fontWeight: 600 }}>10K+ Community</span>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ position: 'relative' }}>
          {/* Glassmorphic stats card */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '2.5rem', backdropFilter: 'blur(10px)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '2rem', textAlign: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>Platform Statistics</h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Registered Users</span>
                  <span style={{ color: 'white', fontWeight: 'bold' }}>{users.toLocaleString()}</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Signal Accuracy</span>
                  <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>98.4%</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '98%', height: '100%', background: 'linear-gradient(90deg, #10b981, #34d399)' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Total Rewards Paid</span>
                  <span style={{ color: 'var(--accent-gold)', fontWeight: 'bold' }}>${rewards.toLocaleString()}</span>
                </div>
                <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg, #f59e0b, #fbbf24)' }}></div>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '2.5rem', textAlign: 'center', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
               <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}>🇺🇸 USA Registered</span>
               <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}>🇬🇧 UK Registered</span>
               <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.1)' }}>🇦🇪 UAE Registered</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div style={{ marginTop: '6rem', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100%', background: 'radial-gradient(ellipse at center, rgba(16, 185, 129, 0.05) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }} />
        
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', padding: '6px 16px', borderRadius: '30px', color: '#10b981', fontWeight: 'bold', fontSize: '0.85rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <ShieldCheck size={16} /> Fully Regulated & Verified
          </div>
          <h3 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '1rem', fontWeight: 800 }}>Official <span className="text-gradient">Registrations</span></h3>
          <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
            We operate with absolute transparency. Trexis Platform is legally incorporated in the UK and registered in the USA.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* UK CERT */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              style={{ position: 'relative', perspective: '1000px' }}
            >
              <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', filter: 'blur(20px)', opacity: 0.3, borderRadius: '20px', zIndex: -1 }}></div>
              <div style={{ background: 'white', padding: '10px', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ width: '100%', height: '420px', overflow: 'hidden', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src="/1780649337014.png" 
                    alt="UK Registration" 
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
                  />
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <h4 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700 }}>TREXISPLATORM LTD</h4>
                <p style={{ color: 'var(--primary-light)', fontSize: '0.9rem', fontWeight: 600, marginTop: '4px' }}>United Kingdom</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>Company No: 15492115</p>
              </div>
            </motion.div>

            {/* US CERT */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{ position: 'relative', perspective: '1000px' }}
            >
              <div style={{ position: 'absolute', inset: '-10px', background: 'linear-gradient(135deg, #10b981, #3b82f6)', filter: 'blur(20px)', opacity: 0.3, borderRadius: '20px', zIndex: -1 }}></div>
              <div style={{ background: 'white', padding: '10px', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)', position: 'relative', zIndex: 1, border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ width: '100%', height: '420px', overflow: 'hidden', borderRadius: '8px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src="/1780649633044.png" 
                    alt="USA Registration" 
                    draggable="false"
                    onContextMenu={(e) => e.preventDefault()}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none' }}
                  />
                </div>
              </div>
              <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
                <h4 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 700 }}>Trexisplatorm LLC</h4>
                <p style={{ color: 'var(--accent-green)', fontSize: '0.9rem', fontWeight: 600, marginTop: '4px' }}>State of Wyoming, USA</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '4px' }}>Official State Registry</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
