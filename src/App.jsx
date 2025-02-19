import './App.css'
import TodoList from './components/TodoList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <TodoList/>
      <ToastContainer />
    </>
  )
}

export default App
