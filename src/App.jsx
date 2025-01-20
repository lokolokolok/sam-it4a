import profile from './assets/profile.jpg';
import gp1 from './assets/gp1.png';
import gp2 from './assets/gp2.png';
import gp3 from './assets/gp3.png';
import gp4 from './assets/gp4.png';
import gp5 from './assets/gp5.png';
import gp6 from './assets/gp6.png';
import gp7 from './assets/gp7.png';
import gp8 from './assets/gp8.png';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Profile Section */}
      <div className="profile-section">
        <img src={profile} className="profile-pic" alt="Profile" />
        <h1>Glezel E. Magsalay</h1>
        <p className="subtitle">Graphic Designer</p>
      </div>
      <hr />
      <br />
     
      {/* Graphic Designs Section */}
      <div className="design-section">
        <h2>Graphic Designs</h2>
        <div className="design-gallery">
          <img src={gp1} className="design-item" alt="Graphic Design 1" />
          <img src={gp2} className="design-item" alt="Graphic Design 2" />
          <img src={gp3} className="design-item" alt="Graphic Design 3" />
          <img src={gp4} className="design-item" alt="Graphic Design 4" />
          <img src={gp5} className="design-item" alt="Graphic Design 5" />
          <img src={gp6} className="design-item" alt="Graphic Design 6" />
          <img src={gp7} className="design-item" alt="Graphic Design 7" />
          <img src={gp8} className="design-item" alt="Graphic Design 8" />
        </div>
      </div>

      <hr />
      <br />



      
    </div>
  );
}

export default App;
