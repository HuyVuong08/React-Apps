/*
 *import logo from './logo.svg';
 *import './App.css';
 *
 *function App() {
 *  return (
 *    <div className="App">
 *      <header className="App-header">
 *        <img src={logo} className="App-logo" alt="logo" />
 *        <p>
 *          Edit <code>src/App.js</code> and save to reload.
 *        </p>
 *        <a
 *          className="App-link"
 *          href="https://reactjs.org"
 *          target="_blank"
 *          rel="noopener noreferrer"
 *        >
 *          Learn React
 *        </a>
 *      </header>
 *    </div>
 *  );
 *}
 *
 *export default App;
 */

/*
 *import React, { useState } from 'react';
 *function Counting() {
 *    const [i, setCount] = useState(0);
 *    return (
 *        <div>
 *            <h3>Number of click: {i} </h3>
 *            <button onClick={() => setCount(i + 1)}>
 *                Click to Count
 *            </button>
 *        </div>
 *    );
 *}
 *export default Counting;
 */

/*
 *import React, { useState, useEffect } from 'react';
 *function Counting() {
 *    const [i, setCount] = useState(0);
 *    useEffect(() => {
 *        document.title = `Number of click: ${i}`;
 *    });
 *    return (
 *        <div>
 *            <h3>Number of click: {i} </h3>
 *            <button onClick={() => setCount(i + 1)}>
 *                Click to Count
 *            </button>
 *        </div>
 *    );
 *}
 *export default Counting;
 */

/*
 *import React, { useState, useEffect } from 'react';
 *const useDocumentTitle = title => {
 *    useEffect(() => {
 *        document.title = title;
 *    }, [title])
 *}
 *function Counting() {
 *    const [i, setCount] = useState(0);
 *    const incrementCount = () => setCount(i + 1);
 *    useDocumentTitle(`Number of click: ${i}`);
 *    return (
 *        <div>
 *            <h3>Number of click: {i} </h3>
 *            <button onClick={incrementCount}>Click to Count</button>
 *        </div>
 *    )
 *}
 *export default Counting;
 */

import React, { useContext } from 'react';
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
export default App;
