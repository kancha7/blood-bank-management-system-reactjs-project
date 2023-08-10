
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';

const HopitalList = () => {

   const [banks, setData] = useState([]);
   const [search_text, setSearchData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   /**
    * Function for getting lists
    */
   useEffect(() => {
      axios.get(`${config.api_url}/bank`)
         .then(res => {
            const banks = res.data;
            setData(banks);
            setFilteredData(banks);
            console.log(banks);
         })
   }, []);

   const reset_search = () => {
      search_text.search_text = '';
      setFilteredData(banks);
   };

   const search_data = () => {
      const newData = banks.filter(bank => {
         return bank.bank_name.toLowerCase().includes(search_text.search_text.toLowerCase())
         || bank.bank_city.toLowerCase().includes(search_text.search_text.toLowerCase())
         || bank.bank_state.toLowerCase().includes(search_text.search_text.toLowerCase());
       });

      if(search_text.search_text) {
         setFilteredData(newData);
      } else {
         setFilteredData(banks);
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
                     <h2 className="pageTitle">All Blood Bank Lists</h2>
                  </div>
               </div>
            </div>
         </section>
         <section id="content">
            <div className="container content">
               <div className="row">
                  <div className="col-md-12">
                     <div>
                        <h2>All Blood Banks</h2>
                        These all are available blood bank. Kindly click on the banks to see the details of it.
                     </div>
                     <br />
                     <form className="form-horizontal search_box">
                        <div className="form-group">
                           <label className="col-sm-2" htmlFor="email">Enter Bank Name:</label>
                           <div className="col-sm-4">
                              <input type="text" onChange={e => onChange(e)} name="search_text" className="form-control" placeholder="Enter Bank Name" required />
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
                        .map(bank =>
                           <div className="col-sm-4 info-blocks">
                              <i className="icon-info-blocks"><Link to={"/bank-details/" + bank.bank_id}><img src='img/blood.png' width={75} /></Link></i>
                              <div className="info-blocks-in">
                                 <h3><Link to={"/bank-details/" + bank.bank_id}>{bank.bank_name}({bank.bank_city})</Link></h3>
                                 <p>
                                    <table>
                                       <tr>
                                          <td>Contact : </td>
                                          <td>{bank.bank_contact}</td>
                                       </tr>
                                       <tr>
                                          <td>Email :</td>
                                          <td>{bank.bank_email}</td>
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