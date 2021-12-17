import { createGlobalStyle } from 'styled-components';
import logo from './logo.svg';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    width: 800px;
    height: 600px;
  }

  .App {
    text-align: center;
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function doAThing() {
  // eslint-disable-next-line no-console
  console.log('document', document);
}
// meh maybe this one
// https://heptagon.in/2019/03/01/how-to-build-a-chrome-extension-chapter-3-changing-background-color-of-a-paragraph/
function App() {
  const handleFuck = () => {
    // eslint-disable-next-line no-undef
    chrome.tabs.query({ active: true, currentWindow: true }, function ([tab]) {
      // eslint-disable-next-line no-console
      console.log('tab', tab);

      // eslint-disable-next-line no-undef
      chrome.tabs.executeScript({
        target: { tabId: tab.id },
        function: doAThing,
      });
    });
  };

  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={handleFuck}>fuck</button>
      </header>
    </div>
  );
}

export default App;
