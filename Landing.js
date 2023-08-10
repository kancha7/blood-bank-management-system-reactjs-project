
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
<div className="home-page">
            <section id="banner">
               <div id="main-slider" className="flexslider">
                  <ul className="slides">
                     <li>
                        <img src="img/slides/1.jpg" alt="flexslider" style={{height: 400}} /> 
                        <div className="flex-caption">
                           <h3>Blood Bank System</h3>
                           <p>One stop solution for managing all blood banks and invetories</p>
                        </div>
                     </li>
                     <li>
                        <img src="img/slides/2.png" alt="flexslider" style={{height: 400}}  /> 
                        <div className="flex-caption">

                        </div>
                     </li>
                  </ul>
               </div>
            </section>
            <section className="jumbobox">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <div>
                           <h1>Blood Bank System</h1>
                           A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a division of a hospital where the storage of blood product occurs and where proper testing is performed (to reduce the risk of transfusion related adverse events). However, it sometimes refers to a collection center, and some hospitals also perform collection. Blood banking includes tasks related to blood collection, processing, testing, separation, and storage.
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section id="content">
               <div className="container">
                  <div className="row">
                     <div className="skill-home">
                        <div className="skill-home-solid clearfix">
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c1"><i className="icon-settings icons"></i></span> 
                                 <div className="box-area">
                                    <h3>Blood Management</h3>
                                    <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a division of a hospital</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c2"><i className="icon-login icons"></i></span> 
                                 <div className="box-area">
                                    <h3>Hospital Management</h3>
                                    <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a division of a hospital</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c3"><i className="icon-user icons"></i></span> 
                                 <div className="box-area">
                                    <h3>Donor Management</h3>
                                    <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a division of a hospital</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                           <div className="col-md-3 text-center">
                              <div className="box">
                                 <span className="icons c4"><i className="icon-home icons"></i></span> 
                                 <div className="box-area">
                                    <h3>User Management</h3>
                                    <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a division of a hospital</p>
                                    <p><a href="#">Learn More</a></p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </section> 
         <section className="aboutUs">
            <div className="container">
               <div className="row">
                  <div className="col-md-6"><img src="img/home.jpeg" className="img-center" alt="" /></div>
                  <div className="col-md-6">
                     <div>
                        <h2>About Blood Bank System</h2>
                        <p>A blood bank is a center where blood gathered as a result of blood donation is stored and preserved for later use in blood transfusion. The term "blood bank" typically refers to a division of a hospital where the storage of blood product occurs and where proper testing is performed (to reduce the risk of transfusion related adverse events). However, it sometimes refers to a collection center, and some hospitals also perform collection. Blood banking includes tasks related to blood collection, processing, testing, separation, and storage.</p>
                        <p>While the first blood transfusions were made directly from donor to receiver before coagulation, it was discovered that by adding anticoagulant and refrigerating the blood it was possible to store it for some days, thus opening the way for the development of blood banks.</p>
                     </div>
                     <br/>
                  </div>
               </div>
            </div>
         </section>
   </div>
    <a href="#" className="scrollup"><i className="fa fa-angle-up active"></i></a>
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
