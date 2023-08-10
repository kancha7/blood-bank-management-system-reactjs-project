import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { PropTypes } from 'prop-types';
import { register } from '../../actions/auth';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

const Register = ({ setAlert, register, isAuthenticated }) => {
   const navigate = useNavigate();


   function logout() {
      window.sessionStorage.removeItem("user");
      window.sessionStorage.removeItem("user_id");
      window.sessionStorage.removeItem("user_level_id");
      window.sessionStorage.removeItem("user_name");
      navigate("/login")
   }

   const adminLinks = (
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/About">About</Link></li>
         <li><Link to="/hospital-report">Hospital Management</Link></li>
         <li><Link to="/bank-report">Blood Bank Management</Link></li>
         <li><Link to="/donor-report">Donors Management</Link></li>
         <li><Link to="/seeker-report">Seeker Management</Link></li>
         <li><Link to="/blood-report">Blood Management</Link></li>
         <li><a onClick={logout} href="#!">Logout</a></li>
      </ul>
   )

   const ownerLinks = (
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/About">About</Link></li>
         <li><Link to="/location-add">Add Parking Location</Link></li>
          <li><Link to="/location-report">Parking Location Report</Link></li>
          <li><Link to="/space-add">Add Parking Space</Link></li>
          <li><Link to="/space-report">Parking Space Report</Link></li>
          <li><Link to="/parking-report">Revenue Report</Link></li>
         <li><a onClick={logout} href="#!">Logout</a></li>
      </ul>
   )

   const driverLinks = (
      <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/About">About</Link></li>
         <li><Link to="/location-list">Search Parking</Link></li>
         <li><Link to="/parking-history">Parking History</Link></li>
         <li><a onClick={logout} href="#!">Logout</a></li>
      </ul>
   )

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Admin Dashboard</h2>
                  </div>
               </div>
            </div>
         </section>
         <section id="content">
            <div className="container">
               <div className="about">
                  <section className="features">
                     <div className="container">
                        <div>
                           <div>
                              <div>
                                 <h2 className='h2c'>Admin Dashboard</h2>
                              </div>
                              <br />
                           </div>
                        </div>
                        <section className="vh-100">
                        <div className="row">
                           <div className="col-sm-6">
                              <div id="login-home">
                                 {(
                                    <Fragment>
                                       {
                                          window.sessionStorage.getItem("user_level_id") == "1" ? adminLinks :
                                             window.sessionStorage.getItem("user_level_id") == "2" ? ownerLinks :
                                                window.sessionStorage.getItem("user_level_id") == "3" ? driverLinks : ''
                                       }
                                    </Fragment>
                                 )}
                              </div>
                           </div>
                           <div className="col-sm-6">
                              <img src="/img/dashboard.jpeg" width={420}/><br />
                           </div>
                        </div>
                        </section>
                     </div>
                  </section >
               </div >
            </div >
         </section >
      </section >
   );
};

Register.propTypes = {
   setAlert: PropTypes.func.isRequired,
   register: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool

};
const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert, register })(Register);