import Link from 'next/link';

export default function Home() {
  return (
    <div style={containerStyle}>
      <h1>🎨 Welcome to Holihai – Ultimate Color Game!</h1>
      <p>Choose Your Game Mode:</p>

      <div style={buttonContainer}>
        <Link href="/color-guess"><button style={btnStyle}>🎯 Classic Color Guess</button></Link>
        <Link href="/memory-master"><button style={btnStyle}>🧠 Memory Master</button></Link>
        <Link href="/speed-tap"><button style={btnStyle}>⚡ Speed Tap</button></Link>
        <Link href="/color-math"><button style={btnStyle}>➕ Color Math Challenge</button></Link>
        <Link href="/multiplayer"><button style={btnStyle}>👥 Multiplayer Mode</button></Link>
      </div>
    </div>
  );
}

const containerStyle = { textAlign: 'center', padding: '2rem', background: '#FFE4B5' };
const buttonContainer = { marginTop: '2rem' };
const btnStyle = { margin: '10px', padding: '15px 30px', fontSize: '18px', borderRadius: '8px', cursor: 'pointer' };
