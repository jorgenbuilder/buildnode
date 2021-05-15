import './App.css';
import '@fontsource/roboto-mono';

const App:React.FC = () => {
  return (
    <main>
      <header className="splash">
        <main>
          <div className="hero-emoji">👋</div>
          <p>
            Hey there, we're <span className="buildmoji" /> Buildnode Digital, and we build 🔥 web products.
          </p>
          <p>
            ✉️ <a href="mailto:newbusiness@buildnode.io">newbusiness@buildnode.io</a>
          </p>
        </main>
        <footer>
          Hosted on the Interplanetary File System, or IPFS.
          (<a href="#nothing">What’s that?</a> 🤔)
        </footer>
      </header>
    </main>
  );
}

export default App;
