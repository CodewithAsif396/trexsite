import { useState, useEffect } from 'react';
import { Star, CheckCircle, Clock } from 'lucide-react';

const FIRST_NAMES = [
  "Alexander", "Mateo", "Liam", "Oliver", "Noah", "Emma", "Charlotte", "Amelia", "Sophia", "Isabella",
  "Hans", "Lars", "Sven", "Klaus", "Jürgen", "Ingrid", "Helga", "Freya", "Astrid", "Johanna",
  "Pierre", "Jean", "Luc", "Antoine", "Camille", "Chloé", "Léa", "Manon", "Juliette",
  "Alessandro", "Lorenzo", "Matteo", "Leonardo", "Giulia", "Sofia", "Martina", "Giorgia",
  "Pablo", "Diego", "Carlos", "Javier", "Lucia", "Maria", "Paula", "Valeria",
  "Ahmed", "Omar", "Youssef", "Tariq", "Hassan", "Fatima", "Aisha", "Mariam", "Zainab",
  "Wei", "Ying", "Hao", "Jian", "Li", "Mei", "Xiu", "Juan",
  "Hiroshi", "Kenji", "Takeshi", "Yuki", "Sakura", "Hina", "Yui",
  "Arthur", "Thomas", "George", "Harry", "Jack", "Olivia", "Emily", "Jessica", "Sophie",
  "Dmitry", "Ivan", "Mikhail", "Nikolai", "Anna", "Maria", "Elena", "Natalia",
  "Thiago", "Miguel", "Arthur", "Heitor", "Alice", "Laura", "Julia", "Sophia"
];

const LAST_INITIALS = ["A.", "B.", "C.", "D.", "E.", "F.", "G.", "H.", "J.", "K.", "L.", "M.", "N.", "P.", "R.", "S.", "T.", "V.", "W.", "Z."];

const ACTION_TEMPLATES = [
  "just completed a withdrawal of ${amount} to their TRC20 wallet.",
  "hit a {percent}% profit target on today's Futures signal! 🚀",
  "received the ${amount} Monthly Salary bonus.",
  "upgraded their account to the ${tier} USDT Tier.",
  "successfully claimed the Meal Subsidy reward.",
  "earned a ${amount} Referral Bonus from a new invite.",
  "completed the 3-member team requirement and received an Event Bonus!",
  "just got their account fully verified. Ready to trade!",
  "secured a ${amount} Welcome Bonus upon registration.",
  "transferred ${amount} to their Trading Wallet for the next signal.",
  "closed a perfect Long position from the SGT signal.",
  "is currently on a {days}-day winning streak with official signals! 🔥",
  "just joined the community. Welcome!",
  "made a total profit of ${amount} this week."
];

export default function LiveReviews() {
  const [reviews, setReviews] = useState<any[]>([]);

  useEffect(() => {
    // Generate 150 unique, highly varied reviews to make it look completely natural
    const generated = Array.from({ length: 150 }).map((_, i) => {
      const name = `${FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)]} ${LAST_INITIALS[Math.floor(Math.random() * LAST_INITIALS.length)]}`;
      
      let action = ACTION_TEMPLATES[Math.floor(Math.random() * ACTION_TEMPLATES.length)];
      
      // Randomize variables inside templates
      const amounts = [15, 25, 40, 50, 70, 80, 100, 150, 200, 300, 450, 500, 800, 1200, 1500, 2500];
      const tiers = [500, 800, 1000, 1500, 2000, 3000];
      const percents = ["1.5", "1.8", "2.0", "2.1", "2.4", "3.0"];
      const days = [3, 5, 7, 10, 14];

      action = action.replace("{amount}", amounts[Math.floor(Math.random() * amounts.length)].toString());
      action = action.replace("{tier}", tiers[Math.floor(Math.random() * tiers.length)].toString());
      action = action.replace("{percent}", percents[Math.floor(Math.random() * percents.length)]);
      action = action.replace("{days}", days[Math.floor(Math.random() * days.length)].toString());

      const stars = Math.random() > 0.9 ? 4 : 5; // Mostly 5 stars, rarely 4
      const time = Math.floor(Math.random() * 59) + 1; // 1 to 59 mins ago
      
      // Generate a random gradient color for the avatar
      const hue1 = Math.floor(Math.random() * 360);
      const hue2 = (hue1 + 40) % 360;
      const gradient = `linear-gradient(135deg, hsl(${hue1}, 70%, 50%), hsl(${hue2}, 70%, 40%))`;

      return { id: i, name, action, stars, time, gradient };
    });
    
    // Sort by time so it looks like a chronological feed (lowest time first)
    generated.sort((a, b) => a.time - b.time);
    
    setReviews(generated);
  }, []);

  if (reviews.length === 0) return null;

  return (
    <section id="reviews" style={{ padding: '6rem 0', overflow: 'hidden', position: 'relative', background: 'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.8) 50%, rgba(15,23,42,0) 100%)' }}>
      <style>{`
        @keyframes scrollRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 0.75rem)); }
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          width: fit-content;
          /* Slower animation for better readability */
          animation: scrollRightToLeft 200s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        .review-card {
          width: 300px;
          max-width: 85vw;
          flex-shrink: 0;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, background 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.05);
          border-color: rgba(59, 130, 246, 0.4);
        }
      `}</style>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem', padding: '0 1rem' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 6vw, 2.5rem)', color: 'white', marginBottom: '1rem', fontWeight: 'bold' }}>
          Real-Time <span className="text-gradient">Global Activity</span>
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <span style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
          Live updates from our worldwide network of traders and partners.
        </p>
      </div>

      <div style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Gradients to fade edges */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '15%', background: 'linear-gradient(90deg, #0f172a 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, width: '15%', background: 'linear-gradient(270deg, #0f172a 0%, transparent 100%)', zIndex: 2, pointerEvents: 'none' }}></div>

        {/* Marquee Track: duplicate the reviews array to create seamless loop */}
        <div className="marquee-track">
          {[...reviews, ...reviews].map((rev, index) => (
            <div key={`${rev.id}-${index}`} className="review-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: rev.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: '1.2rem', boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2)' }}>
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h5 style={{ color: 'white', fontSize: '1.05rem', margin: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      {rev.name} <CheckCircle size={14} color="#10b981" />
                    </h5>
                    <div style={{ display: 'flex', gap: '2px', marginTop: '2px' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} fill={i < rev.stars ? "#f59e0b" : "transparent"} color={i < rev.stars ? "#f59e0b" : "rgba(255,255,255,0.15)"} />
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                  <Clock size={12} /> {rev.time}m ago
                </div>
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                {rev.name.split(' ')[0]} {rev.action}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
