import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter);
  const IncrementHandler=()=>{
    dispatch({type:'increment'});
  };
  const DecrementHandler=()=>{
    dispatch({type:'decrement'});
  };
  const DecreaseHandler=()=>{
    dispatch({type:'decrease',number:5})
  }
  const IncreaseHandler=()=>{
    dispatch({type:'increase',number:5})
  }
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div className={classes.btn}>
        <button onClick={DecrementHandler}>Decrement</button>
        <button onClick={DecreaseHandler}>Decrement by 5</button>
        <button onClick={IncreaseHandler}>Increment by 5</button>
        <button onClick={IncrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
