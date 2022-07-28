import classes from './Counter.module.css';
import {counterActions} from '../store/counter';
import {useSelector,useDispatch} from 'react-redux';

const Counter = () => {
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.counter.counter);
  const show=useSelector((state)=>state.counter.showCounter);


  const IncrementHandler=()=>{
    dispatch(counterActions.increment());
  };
  const DecrementHandler=()=>{
    dispatch(counterActions.decrement());
  };
  const DecreaseHandler=()=>{
    dispatch(counterActions.decrease(5))
  }
  const IncreaseHandler=()=>{
    dispatch(counterActions.increase(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{count}</div>}
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
