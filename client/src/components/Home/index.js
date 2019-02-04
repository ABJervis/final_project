import React from "react";
import Footer from "../Footer";
import "./style.css";


function Home() {
  return (
    <div>
      <div className="about-container">
        <div className="description-div">
          <div className="row">
            <div className="col-sm-6">
              <h1>Welcome!</h1><br />
              <h4>
            It's easy to overlook details from one day to the next. Life gets busy and memories of the exact can become blurred. 
             This site is designed to handle the remembering of your child's doctors visits for you. All it takes is a moment of your
             time to enter the date, reason for visit, diagnosis, medication needed and you're all set today. Keep 
             a permanent record by child for easy reference. </h4>
             <br />
            </div>
          </div>
        </div>
      </div>

      
      
      <Footer />
    </div>
   
  );
}
export default Home;