import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logo from '../../logo.svg';
import './Home.css';

import { gettingGitUsers } from '../../slices/gitUsersSlice.js';

const Home = () => {

  const gitUsers = useSelector((state) => state.gitUsersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("gitUsers: ", gitUsers);
    dispatch(gettingGitUsers);
  }, []);

  return (
    <div className="App">
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
      </header>
    </div>
  );
}

export default Home;
