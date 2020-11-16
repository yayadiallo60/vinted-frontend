// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import photo from "../assets/images/vinted-img.jpeg";
import Cards from "../components/Cards";

const Home = () => {
  // const [pages, setPages] = useState([]);
  // const [limit, setlimit] = useState(5);

  // const handleSetPages = (count) => {
  //   const newPages = [...pages];
  //   let elem = 1;
  //   for (let i = 1; i <= count; i += limit) {
  //     newPages.push(elem);
  //     elem++;
  //   }

  //   setPages(newPages);
  // };

  return (
    <div className="header">
      <div className="image-dechire">
        <img src={photo} alt="vinted-img" />
        <div className="carte-header">
          <p className="carte-heaader-title">
            Prêts à faire du tri dans vos placards ?
          </p>
          <button className="carte-header-button">Commencer a vendre</button>
        </div>
      </div>

      <Cards />
      <div className="page">{}</div>
    </div>
  );
};

export default Home;
