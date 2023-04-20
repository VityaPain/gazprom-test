// import logo from './logo.svg';
// import './App.css';
import AppHeader from "../AppHeader/AppHeader";
import Courses from "../Courses/Courses"
import OrganizationsList from "../OrganizationsList/OrganizationsList";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Courses />
      <OrganizationsList />
    </div>
  );
}

export default App;
