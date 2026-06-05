import { useState } from 'react';
import { X } from 'lucide-react';

export default function TelegramWidget() {
  const [isBubbleVisible] = useState(true); // Default true so CSS animation handles delay
  const [isDismissed, setIsDismissed] = useState(false); // If user manually closes it

  // Direct native app redirect URL
  const telegramUrl = "tg://resolve?domain=Morganjim";

  // If user dismissed it, we don't show the bubble at all
  const showBubble = isBubbleVisible && !isDismissed;

  return (
    <div style={{
      position: 'fixed',
      bottom: '90px', 
      right: '30px', 
      zIndex: 2147483647,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '16px',
      pointerEvents: 'none' // Allow clicking through the container
    }}>
      {/* Message Bubble */}
      {showBubble && (
        <div 
          className="tg-bubble-enter"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '16px',
            padding: '16px 20px',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), 0 0 20px rgba(42, 171, 238, 0.1)',
            width: 'max-content',
            maxWidth: 'calc(100vw - 40px)',
            position: 'relative',
            pointerEvents: 'auto' // Re-enable clicking for the bubble
          }}
        >
          <button 
            onClick={(e) => {
              e.preventDefault();
              setIsDismissed(true);
            }}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              background: 'rgba(255, 255, 255, 0.05)',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              transition: 'background 0.2s, color 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = 'white';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.color = 'var(--text-muted)';
            }}
            aria-label="Close message"
          >
            <X size={14} />
          </button>
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
            <div style={{ fontWeight: 600, color: 'white', marginBottom: '6px', fontSize: '0.95rem', paddingRight: '20px' }}>
              Need any help? 👋
            </div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}>
              Chat with our support team on Telegram. We usually reply in a few minutes.
            </div>
          </a>
        </div>
      )}

      {/* Main Telegram Button */}
      <div className="tg-widget-enter" style={{ pointerEvents: 'auto' }}>
        <a 
          href={telegramUrl}
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            width: '60px',
            height: '60px',
            backgroundColor: '#2AABEE',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            textDecoration: 'none',
            boxShadow: '0 8px 24px rgba(42, 171, 238, 0.4)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(42, 171, 238, 0.5)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(42, 171, 238, 0.4)';
          }}
          aria-label="Contact Support on Telegram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="60" height="60">
            <circle cx="120" cy="120" r="120" fill="#2AABEE"/>
            <path fill="#FFF" d="M54.3 116.3c41-17.9 68.3-29.6 82-35.3 39-16.2 47.1-19 52.4-19.1 1.2 0 3.8.3 5.5 1.7 1.4 1.2 1.8 2.7 2 3.8.2 1.1.4 3.6.2 5.6-2.2 22.4-11.5 77.2-16.2 102.5-2 10.7-6 14.3-9.8 14.7-8.4.8-14.8-5.6-23-10.9-12.8-8.4-20-13.6-32.4-21.8-14.4-9.5-5.1-14.7 3.1-23.2 2.1-2.2 39.4-36.1 40.1-39.2.1-.4.2-1.8-.6-2.6-.8-.7-2-.5-2.9-.3-1.2.3-19.7 12.5-56.6 37.4-5.4 3.7-10.3 5.5-14.7 5.4-4.9-.1-14.3-2.8-21.3-5.1-8.6-2.8-15.4-4.2-14.8-8.9.3-2.5 2.6-5 7-5.1z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
