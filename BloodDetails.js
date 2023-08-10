
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';
import { withRouter } from "react-router"
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';

const HopitalDetails = () => {

   // Function for edit //
   let { id } = useParams();

   const [bloodDetails, setData] = useState({});

   useEffect(() => {
      if (id) {
         axios.get(`${config.api_url}/blood/blood-detaills/${id}`)
            .then(res => {
               console.log(res.data);
               setData(res.data[0]);
            })
      }
   }, []);

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Details of {bloodDetails.bgroup_name}</h2>
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
                                 <h2 className='h2c'>Details of Blood Group {bloodDetails.bgroup_name} Inventory</h2>
                              </div>
                              <br />
                           </div>
                        </div>
                        <section className="vh-100">
                        <table className="table table-striped table-bordered" style={{width:"70%"}}>
                        <thead className="thead-dark">
                           <tr>
                              <th scope="col" style={{width:'30%'}}>Column</th>
                              <th scope="col">Data</th>
                           </tr>
                        </thead>
                           <tbody>
                              <tr>
                                 <th className="thead-dark">Group Name</th>
                                 <td>{bloodDetails.bgroup_name}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Available Quantity</th>
                                 <td className='invetorycf'>{bloodDetails.blood_quantity} Blood Units Available in this bank</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Blood Bank Name</th>
                                 <td>{bloodDetails.bank_name}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Contact Number</th>
                                 <td>{bloodDetails.bank_contact}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Contact Email</th>
                                 <td>{bloodDetails.bank_email}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Address</th>
                                 <td>{bloodDetails.bank_address}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">City</th>
                                 <td>{bloodDetails.bank_city}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">State</th>
                                 <td>{bloodDetails.bank_state}</td>
                              </tr>
                              <tr>
                                 <th className="thead-dark">Blood Details/Policy</th>
                                 <td>{bloodDetails.blood_description}</td>
                              </tr>
                           </tbody>
                           </table>
                        </section>
                     </div>
                  </section>
               </div>
            </div>
         </section>
      </section>
   )
}

export default HopitalDetails;