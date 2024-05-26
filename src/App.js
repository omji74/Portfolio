import Home from './components/Home/Home'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
const App = () => {
  return (
    <div className="App">
      
     
      <Navbar />
      <Home/>
     
      <SideMenu />

      {/* Rest of your portfolio content */}
    </div>
  );
};

export default App;
