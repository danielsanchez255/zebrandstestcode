import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../logo.svg';
import './Home.css';

import { gettingGitUsers, gettingGitRepositories } from '../../slices/githubSlice.js';

const Home = () => {

  const gitUsers = useSelector((state) => state.githubReducer);
  
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, []);

  const clickHandler = () => {
    dispatch(gettingGitUsers('redux'));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          className="App-link"
          type="button"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => clickHandler()}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default Home;
