import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const dispatch=useDispatch();
  const login=useSelector(state=>state.auth.isAuthenticated);
  const LogoutHandler=()=>{
    dispatch(authActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            {login && <a href='/'>My Products</a>}
          </li>
          <li>
            {login && <a href='/'>My Sales</a>}
          </li>
          <li>
            {login && <button onClick={LogoutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
