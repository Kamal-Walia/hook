import {useState, useCallback} from 'react';
import UseEffectComponent from './components/UseEffectComponent';
// import UseCallback from './components/UseCallback';
import UseMemo from './components/UseMemo'

function App() {
  const [fname, handleUpdateFirstName] = useState('');
  const [users, updateUsers] = useState([]);
  const [count, updateCount] = useState(0);
  const returnedUseState = useState('');
  // console.log('KW101', lname)
  const lastName = returnedUseState[0];
  const updateLastName = returnedUseState[1];

  const handleOnClick = () => {
    const updatedArray = [...users, {fname,lastName}]
    updateUsers(updatedArray)
  }

  const handleUpdateCount = useCallback(() => {
    updateCount(count+1)
  }, [count])

  const handleUpdateCount1 = () => {
    updateCount(count+1)
  }

  return (
    <div>
     <input type={'text'} onChange={(e) => handleUpdateFirstName(e.target.value)} />
     {/* <button onClick={handleOnClick}>Add User</button>
     <p>Hello {fname} {returnedUseState[0]}</p>
     <p>
      Users:
      {
        users.map(item => <p>{item.fname} {item.lastName}</p>)
      }
     </p> */}

     {fname && <UseEffectComponent fname={fname}/>}
     <div><button onClick={handleUpdateCount1}>Update Count</button></div> 
     {/* <UseCallback count={count} handleUpdateCount={handleUpdateCount}/> */}
     <UseMemo count={count} />
    </div>
  );
}

export default App;
