import logo from './logo.svg';
import './App.css';
import FirebaseAuth from './Components/FirebaseAuth';
import FireStore from './Components/FireStore';
import Storage from './Components/Storage';

function App() {
  return (
    <>
    <FirebaseAuth/>
    // <FireStore/>
    <Storage/>
    </>
  );
}

export default App;
