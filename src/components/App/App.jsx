import BookForm from '../BookForm/BookForm';
import BookList from '../BookList/BookList';
import ListName from '../ListName/ListName';

import { useSelector, useDispatch } from 'react-redux';

import './App.css';

function App() {
  // Connecting a local variable to our reducer
  const count = useSelector(store => store.count);
  const listName = useSelector(store => store.listName);
  // dispatch is used to send data to redux
  const dispatch = useDispatch();

  const increaseCount = () => {
    // Send data to Redux using dispatch
    const action = { type: 'INCREASE' };
    dispatch(action);
  }
  const decreaseCount = () => {
    // Send data to Redux using dispatch
    const action = { type: 'DECREASE' };
    dispatch(action);
  }
  const resetCount = () => {
    // Send data to Redux using dispatch
    const action = { type: 'RESET' };
    dispatch(action);
  }
  

  // TODO - GET Book List from server
  return (
    <div className="App">
      <header><h1>{listName}</h1></header>
      <div>
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
      </div>
      <div>Count: {count}</div>
      <h4>Name Your Book List:</h4>
      <ListName/>
      <main>
        <BookForm />
        <BookList />
      </main>
    </div>
  );
}

export default App;
