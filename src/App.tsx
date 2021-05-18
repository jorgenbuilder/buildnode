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
          <ul>
            <li><span className="emoji">✉️</span> <a href="mailto:newbusiness@buildnode.io">newbusiness@buildnode.io</a></li>
          </ul>
        </main>
        <footer>
          <em>
            Hosted on the Interplanetary File System, or IPFS.
            (<a href="#nothing">What’s that?</a> 🤔)
          </em>
        </footer>
      </header>
    </main>
  );
}

export default App;
