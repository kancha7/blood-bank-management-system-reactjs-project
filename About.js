
import React from 'react'
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import  PropTypes  from 'prop-types';


const Landing = ({isAuthenticated}) => {
    if(isAuthenticated){
        return <Navigate to ='/Dashboard'/> 
    }
return (
<section>
<section id="inner-headline">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <h2 className="pageTitle">About Blood Bank</h2>
         </div>
      </div>
   </div>
</section>
<section id="content">
   <div className="container">
      <div className="about">
         <section className="features">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div>
                        <h2>About Blood Bank System</h2>
                        <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a division of a hospital where the storage of blood product occurs and where proper testing is performed (to reduce the risk of transfusion related adverse events). However, it sometimes refers to a collection center, and some hospitals also perform collection. Blood banking includes tasks related to blood collection, processing, testing, separation, and storage.</p>
                        <p>While the first blood transfusions were made directly from donor to receiver before coagulation, it was discovered that by adding anticoagulant and refrigerating the blood it was possible to store it for some days, thus opening the way for the development of blood banks.</p>
                     </div>
                     <br/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-6">
                     <div className="features-item">
                        <div className="features">
                           <div className="icon">
                              <i className="icon-map icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Hospital Management System</h3>
                              <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion.</p>
                           </div>
                        </div>
                        <div className="features">
                           <div className="icon">
                              <i className="icon-envelope-open icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Blood Bank Management System</h3>
                              <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion.</p>
                           </div>
                        </div>
                        <div className="features">
                           <div className="icon">
                              <i className="icon-badge icons"></i>
                           </div>
                           <div className="features-content">
                              <h3>Donor and User Management System</h3>
                              <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion.</p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <img className="img-responsive" src="img/home.jpeg" alt="" />
                  </div>
               </div>
            </div>
         </section>
      </div>
   </div>
</section>
</section>
)
}
Landing.propTypes={
isAuthenticated:PropTypes.bool
}
const mapStateToProps =state=>
 ({
isAuthenticated:state.auth.isAuthenticated
 })

export default connect(mapStateToProps)(Landing);
