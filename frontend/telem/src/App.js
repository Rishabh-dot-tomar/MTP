
import './App.css';
import MainPages from './pages/MainPages';
import UserPage from './pages/UserPage'
import UserPageSignup from './pages/UserPageSignup'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route path ="/" exact>
                <MainPages/>

          </Route>
          <Route path="/userpage">
            <UserPage/>
          </Route>
          <Route path="/usersignup">
             <UserPageSignup/>
          </Route>
        </Switch>
      
        </BrowserRouter>
    </div>
  );
}

export default App;
