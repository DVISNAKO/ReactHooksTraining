import './App.css';
import Counter from './components/counter/Counter';
import Input from './components/input/Input';
import MyModal from './components/modal/MyModal';

function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <hr/>
      <Input/>
      <br/>
      <hr/>
      <MyModal>
        <h1>Hello, I'm inside the modal!</h1>
        <p>This is some content within the modal.</p>
      </MyModal>
    </div>
  );
}

export default App;
