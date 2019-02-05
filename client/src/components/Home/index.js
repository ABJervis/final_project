import React from "react";
import Footer from "../Footer";
import "./style.css";


function Home() {
  return (
    <div>
      <div className="about-container">
        <div className="description-div">
          <div className="row">
            <div className="col-sm-5">
            
              <h1>Welcome!</h1><br />
            
              <h5>
            It's easy to overlook details from one day to the next. Life gets busy and memories of the exact can become blurred. 
             <br /><br />This site is designed to handle the remembering of your child's doctors visits for you. All it takes is a moment of your
             time to enter the date, reason for visit, diagnosis, medication needed or any of the optional offerings and you're all set.<br /><br /> Keep 
             a permanent record by child for easy reference whether at your pediatrician or the urgent care center.</h5>
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

//add image//