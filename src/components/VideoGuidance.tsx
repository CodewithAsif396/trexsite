import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Download, X } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'How to create account full process',
    src: '/videos/create_account.mp4',
  },
  {
    id: 2,
    title: 'How to unlock account full potential',
    src: '/videos/unlock_potential.mp4',
  },
  {
    id: 3,
    title: 'How to trade on signal',
    src: '/videos/trade_on_signal.mp4',
  }
];

export default function VideoGuidance() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section" style={{ minHeight: '80vh', paddingTop: '2rem' }}>
      <motion.div className="section-header" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="section-title">Video Guidance</h2>
        <p className="section-desc">Learn everything from creating an account to trading on signals.</p>
      </motion.div>

      <div className="grid-3" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {videos.map((video) => (
          <motion.div key={video.id} className="card plan-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }} whileHover={{ scale: 1.02 }} onClick={() => setActiveVideo(video.src)}>
            <div style={{ width: '100%', height: '180px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(139,92,246,0.2))' }}></div>
              <Play size={48} color="white" style={{ position: 'relative', zIndex: 1, opacity: 0.8 }} />
            </div>
            <h3 style={{ color: 'white', fontSize: '1.1rem', textAlign: 'center', minHeight: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: '1.4' }}>
              {video.title}
            </h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: 'auto' }}>
              <button className="primary-button" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }} onClick={(e) => { e.stopPropagation(); setActiveVideo(video.src); }}>
                <Play size={16} /> Watch
              </button>
              <a href={video.src} download className="secondary-button" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '30px' }} onClick={(e) => e.stopPropagation()}>
                <Download size={16} /> Save
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            style={{ position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.95)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem', backdropFilter: 'blur(10px)' }}
            onClick={() => setActiveVideo(null)}
          >
            <button style={{ position: 'absolute', top: '2rem', right: '2rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer', zIndex: 10000 }} onClick={() => setActiveVideo(null)}>
              <X size={24} />
            </button>
            
            <div style={{ width: '100%', maxWidth: '450px', maxHeight: '85vh', aspectRatio: '9/16', background: 'black', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
              <video src={activeVideo} controls autoPlay style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
