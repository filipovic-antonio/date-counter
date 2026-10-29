export default function App() {
  return <Counter />;
}

function Counter() {
  return (
    <div>
      <div>
        <input type="range" />
        <span>Step: 1</span>
      </div>
      <div>
        <button>-</button>
        <input />
        <button>+</button>
      </div>
      <p>
        <span></span>
        <span></span>
      </p>
      <div>
        <button>Reset</button>
      </div>
    </div>
  );
}
