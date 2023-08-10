import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import config from '../../utils/config';

const BloodAdd = ({ setAlert, blood, isAuthenticated }) => {
   const navigate = useNavigate();
   // Function for edit //
   let { id } = useParams();

   const [groupDropDown, setgroupDropDown] = useState([{
      bgroup_id: '',
      bgroup_name: ''
   }]);

   const [bankDropDown, setBankDropDown] = useState([{
      bank_id: '',
      bank_name: ''
   }]);

   const [formData, setFormData] = useState({
      blood_id: '',
      blood_bank_id: '',
      blood_bgroup_id: '',
      blood_quantity: '',
      blood_description: ''
   });

    // Creating FormData Form elements ////
    const [message, setMessage] = useState({
      show_message: false,
      error_type: '',
      msg: ''
    });

   useEffect(() => {
      if (id) {
         axios.get(`${config.api_url}/blood/${id}`)
            .then(res => {
               console.log('Edit Data');
               console.log(res.data)
               setFormData(res.data);
            })
      }
      // Get  Blood Group Dropdown
      axios.get(`${config.api_url}/bgroup`)
      .then(res => {
         setgroupDropDown(res.data);
      })

      // Get  Blood Bank Dropdown
      axios.get(`${config.api_url}/bank`)
      .then(res => {
         setBankDropDown(res.data);
      })
   }, []);

   // Handlinng Change Event
   const onChange = (e) =>
      setFormData({ ...formData, [e.target.name]: e.target.value });

   // Handling Submit
   const onSubmit = async (e) => {
      e.preventDefault();
      // On submit //
      if (id) {
         axios({
            method: 'put',
            url: `${config.api_url}/blood/${id}`,
            data: formData,
         })
            .then(function (response) {
               //handle success
               console.log("Success  : ");
               console.log(response);
               navigate("/blood-report")
            })
            .catch(function (response) {
               //handle error
               console.log("Error  : ");
               console.log(response);
            });
      } else {
         axios({
            method: 'post',
            url: `${config.api_url}/blood`,
            data: formData,
         })
            .then(function (response) {
               //handle success
               console.log("Success  : ");
               console.log(response);
               navigate("/blood-report")
            })
            .catch(function (response) {
               //handle error
               console.log("Error  : ");
               console.log(response);
            });
      }
   };

   return (
      <section>
         <section id="inner-headline">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <h2 className="pageTitle">Blood Entry</h2>
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
                                 <h2 className='h2c'>Blood Entry Form</h2>
                              </div>
                              <br />
                           </div>
                        </div>
                        {message.show_message ? (
                           <div className={'alert ' + message.error_type} role="alert">
                              {message.msg}
                           </div>
                        ) : (
                           ''
                        )}
                        <section className="vh-100">
                           <div className="d-flex justify-content-center align-items-center h-100 frmc">
                              <form className="form-horizontal" onSubmit={onSubmit}>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Select Blood Group :</label>
                                    <div className="col-sm-8">
                                    <select name='blood_bgroup_id' value={formData.blood_bgroup_id} onChange={e => onChange(e)}  className="form-control">
                                       <option>Select Blood Group</option>
                                       {groupDropDown.map((option) => (
                                          <option value={option.bgroup_id}>{option.bgroup_name}</option>
                                       ))}
                                    </select>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Select Blood Bank :</label>
                                    <div className="col-sm-8">
                                    <select name='blood_bank_id' value={formData.blood_bank_id} onChange={e => onChange(e)}  className="form-control">
                                       <option>Select Blood Bank</option>
                                       {bankDropDown.map((option) => (
                                          <option value={option.bank_id}>{option.bank_name}</option>
                                       ))}
                                    </select>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Quantity:</label>
                                    <div className="col-sm-8">
                                       <input type="number" value={formData.blood_quantity} onChange={e => onChange(e)} name="blood_quantity" className="form-control" placeholder="Blood Quantity" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Description:</label>
                                    <div className="col-sm-8">
                                       <textarea name="blood_description" onChange={e => onChange(e)} className="form-control" placeholder="Enter details and policies" required value={formData.blood_description}></textarea>
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <div className="col-sm-offset-4 col-sm-8">
                                       <button type="submit" className="btn btn-default">Submit</button>&nbsp;&nbsp;
                                       <button type="reset" className="btn btn-danger">Reset</button>
                                    </div>
                                 </div>
                              </form>
                           </div>
                        </section>
                     </div>
                  </section>
               </div>
            </div>
         </section>
      </section>
   );
};

BloodAdd.propTypes = {
   setAlert: PropTypes.func.isRequired,
   blood: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool

};
const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert })(BloodAdd);