
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';

const HopitalList = () => {

   const [bloods, setData] = useState([]);
   const [search_text, setSearchData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   /**
    * Function for getting lists
    */
   useEffect(() => {
      axios.get(`${config.api_url}/blood/blood-report`)
         .then(res => {
            const bloods = res.data;
            setData(bloods);
            setFilteredData(bloods);
            console.log(bloods);
         })
   }, []);

   const reset_search = () => {
      search_text.search_text = '';
      setFilteredData(bloods);
   };

   const search_data = () => {
      const newData = bloods.filter(blood => {
         return blood.bgroup_name.toLowerCase().includes(search_text.search_text.toLowerCase())
         || blood.bank_city.toLowerCase().includes(search_text.search_text.toLowerCase())
         || blood.bank_name.toLowerCase().includes(search_text.search_text.toLowerCase());
       });

      if(search_text.search_text) {
         setFilteredData(newData);
      } else {
         setFilteredData(bloods);
      }
   };

    // Handlinng Change Event
    const onChange = (e) =>
    setSearchData({[e.target.name]: e.target.value });

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Blood Inventory</h2>
                  </div>
               </div>
            </div>
         </section>
         <section id="content">
            <div className="container content">
               <div className="row">
                  <div className="col-md-12">
                     <div>
                        <h2>All Blood Inventory Report</h2>
                        These all are available blood blood. Kindly click on the bloods to see the details of it.
                     </div>
                     <br />
                     <form className="form-horizontal search_box">
                        <div className="form-group">
                           <label className="col-sm-2" htmlFor="email">Search Blood:</label>
                           <div className="col-sm-4">
                              <input type="text" onChange={e => onChange(e)} name="search_text" className="form-control" placeholder="Search Blood Group/City/Hospital" required />
                           </div>
                           <div className="col-sm-4">
                              <button type="button" className="btn btn-default" onClick={search_data}>Search</button>&nbsp;&nbsp;
                              <button type="reset" className="btn btn-danger" onClick={reset_search}>Reset</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
               <div className="row">
                  {
                     filteredData
                        .map(blood =>
                           <div className="col-sm-4 info-blocks">
                              <i className="icon-info-blocks"><Link to={"/blood-details/" + blood.blood_id}><img src={blood.bgroup_image} width={75} /></Link></i>
                              <div className="info-blocks-in">
                                 <h3><Link to={"/blood-details/" + blood.blood_id}><span style={{color:'red'}}>{blood.bgroup_name}</span> <span style={{color:'green'}}>({blood.blood_quantity} Available)</span></Link></h3>
                                 <p>
                                    <table>
                                       <tr>
                                          <td>Blood Bank : </td>
                                          <td> {blood.bank_name}</td>
                                       </tr>
                                       <tr>
                                          <td>Contact : </td>
                                          <td> {blood.bank_contact}</td>
                                       </tr>
                                       <tr>
                                          <td>Email :</td>
                                          <td>{blood.bank_email}</td>
                                       </tr>
                                       <tr>
                                          <td>City :</td>
                                          <td>{blood.bank_city}</td>
                                       </tr>
                                    </table>
                                 </p>
                              </div>
                           </div>
                        )
                  }
               </div>
            </div>
         </section>
      </section>
   )
}
export default HopitalList;