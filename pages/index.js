import Link from 'next/link';

export default function Home() {
  const games = [
    { path: '/color-guess', title: '🎯 Classic Color Guess', desc: 'Guess the correct color before time runs out!' },
    { path: '/memory-master', title: '🧠 Memory Master', desc: 'Remember the color sequence and repeat it.' },
    { path: '/speed-tap', title: '⚡ Speed Color Tap', desc: 'Tap the color as fast as possible!' },
    { path: '/color-math', title: '➕ Color Math Challenge', desc: 'Solve the math and pick the right color.' },
    { path: '/multiplayer', title: '👥 Multiplayer Battle', desc: 'Challenge your friend in a color guessing duel.' },
  ];

  return (
    <div style={container}>
      <h1>🎨 Welcome to Holihai – Play & Celebrate!</h1>
      <p>Choose a game and enjoy Holi vibes!</p>
      <div style={grid}>
        {games.map((game) => (
          <Link key={game.path} href={game.path}>
            <div style={card}>
              <h2>{game.title}</h2>
              <p>{game.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const container = { textAlign: 'center', padding: '2rem', background: '#FDE74C' };
const grid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const card = { padding: '20px', borderRadius: '12px', background: '#FF6F61', color: 'white', cursor: 'pointer' };
