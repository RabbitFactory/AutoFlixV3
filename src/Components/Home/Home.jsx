import { Link } from 'react-router-dom';
import './Home.css'; // Custom CSS for animations
import Navbar from '../Navbar/Navbar';
import { useEffect, useState } from 'react';

const Home = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div>
      <Navbar visible={visible} />
      <div className="h-screen bg-black relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 h-full">
          {/* First Image */}
          <div className="slide-in">
            <Link to="/Movies">
              <img
                className="w-full h-full object-cover"
                src="/img/m (1).jpg"
                alt="Movies"
              />
              <div className="card-title">Movies</div>
            </Link>
          </div>

          {/* Second Image */}
          <div className="slide-in">
            <Link to="/Series">
              <img
                className="w-full h-full object-cover"
                src="/img/series (1).jpg"
                alt="TV Series"
              />
              <div className="card-title">TV Series</div>
            </Link>
          </div>

          {/* Third Image */}
          <div className="slide-in">
            <Link to="/Anime">
              <img
                className="w-full h-full object-cover"
                src="/img/Final anime re.png"
                alt="Anime"
              />
              <div className="card-title">Anime</div>
            </Link>
          </div>

          {/* Fourth Image */}
          <div className="slide-in">
            <Link to="/Games">
              <img
                className="w-full h-full object-cover"
                src="/img/game.jpeg"
                alt="Games"
              />
              <div className="card-title">Games</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
