import { useEffect } from 'react';
import M from 'materialize-css';
import backgroung from "../../assets/images/puzzle.jpg"
const ParallaxComponent = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }, []);

  return (
    <div className="parallax-container">
      <div className="parallax">
        <img src={backgroung} alt="A beautiful scenery" />
      </div>
    </div>
  );
};

export default ParallaxComponent;
