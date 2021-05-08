import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';








const App = (props) => {
  return (
    <BrowserRouter> 
        <div className='App__wrapper' >
          <Header />
          <Navbar />
          <div className='App__wrapper-content' >
              <Route  path='/Dialogs' component={Dialogs} />
              <Route  path='/Profile' component={Profile} /> 

              <Route  path='/Music' component={Music} />
              <Route  path='/News' component={News} /> 
              <Route  path='/Settings' component={Settings} />            
          </div>
        </div>
    </BrowserRouter>
  )
}


export default App;
