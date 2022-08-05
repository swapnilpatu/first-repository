import './App.css';

import Header from './components/header/header';
import TodosList from './components/todos/todosList';
import Footer from './components/footer/footer';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <TodosList></TodosList>
      <Footer></Footer>
    </div>
  );
}

export default App;
