import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { created, updated, deleted } from './redux/actions';
import { getCreated } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const getCreatedState = useSelector(getCreated);
  console.log(getCreatedState);
  return (
    <div className='App'>
      <h1>Hello World</h1>
      <button onClick={() => dispatch(created())}>Create</button>
      <button onClick={() => dispatch(updated())}>Update</button>
      <button onClick={() => dispatch(deleted())}>Delete</button>
    </div>
  );
}

export default App;
