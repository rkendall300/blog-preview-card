import './App.css';
import footerImage from './images/image-avatar.webp';

function App() {
  return (
    <div id="backdrop">
      <div id="card">
        <div id="fm-image-container">
          <div id="fm-image"></div>
        </div>
        <div id="info">
          <div id="tag">
            <p id="tag-text">Learning</p>
          </div>
          <p id="publish-date">Published 21 Dec 2023</p>
          <h1>HTML & CSS foundations</h1>
          <p id="description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
          <div id="footer">
            <img src={footerImage} alt="avatar" id="avatar"></img>
            <h2 id="author">Greg Hooper</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
