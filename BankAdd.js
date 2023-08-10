import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useSearchParams, useNavigate, useParams } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { PropTypes } from 'prop-types';
import axios from 'axios';
import config from '../../utils/config';

const BankAdd = ({ setAlert, bank, isAuthenticated }) => {
   const navigate = useNavigate();
   // Function for edit //
   let { id } = useParams();

    // Creating FormData Form elements ////
    const [formData, setFormData] = useState({
      bank_id: '',
      bank_name: '',
      bank_city: '',
      bank_state: '',
      bank_address: '',
      bank_contact: '',
      bank_email: '',
      bank_pincode: ''
   });

   useEffect(() => {
      if (id) {
         axios.get(`${config.api_url}/bank/${id}`)
            .then(res => {
               console.log('Edit Data');
               console.log(res.data)
               setFormData(res.data);
            })
      }
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
            url: `${config.api_url}/bank/${id}`,
            data: formData,
         })
            .then(function (response) {
               //handle success
               console.log("Success  : ");
               console.log(response);
               navigate("/bank-report")
            })
            .catch(function (response) {
               //handle error
               console.log("Error  : ");
               console.log(response);
            });
      } else {
         axios({
            method: 'post',
            url: `${config.api_url}/bank`,
            data: formData,
         })
            .then(function (response) {
               //handle success
               console.log("Success  : ");
               console.log(response);
               navigate("/bank-report")
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
                     <h2 className="pageTitle">Blood Bank Registration</h2>
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
                                 <h2 className='h2c'>Blood Bank Entry Form</h2>
                              </div>
                              <br />
                           </div>
                        </div>
                        <section className="vh-100">
                           <div className="d-flex justify-content-center align-items-center h-100 frmc">
                              <form className="form-horizontal" onSubmit={onSubmit}>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Enter Bank Name:</label>
                                    <div className="col-sm-8">
                                       <input type="text" value={formData.bank_name} onChange={e => onChange(e)} name="bank_name" className="form-control" placeholder="Enter Bank Name" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Bank City:</label>
                                    <div className="col-sm-8">
                                       <input type="text" value={formData.bank_city} onChange={e => onChange(e)} name="bank_city" className="form-control" placeholder="Bank City" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Bank State:</label>
                                    <div className="col-sm-8">
                                       <input type="text" value={formData.bank_state} onChange={e => onChange(e)} name="bank_state" className="form-control" placeholder="Bank State" required />
                                    </div>
                                 </div>
                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Contact Email:</label>
                                    <div className="col-sm-8">
                                       <input type="email" value={formData.bank_email} onChange={e => onChange(e)} name="bank_email" className="form-control" placeholder="Contact Email" required />
                                    </div>
                                 </div>

                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Contact Number:</label>
                                    <div className="col-sm-8">
                                       <input type="text" value={formData.bank_contact} onChange={e => onChange(e)} name="bank_contact" className="form-control" placeholder="Contact Number" required />
                                    </div>
                                 </div>

                                 <div className="form-group">
                                    <label className="control-label col-sm-4" htmlFor="email">Full Address:</label>
                                    <div className="col-sm-8">
                                       <textarea name="bank_address" onChange={e => onChange(e)} className="form-control" placeholder="Enter Full Address" required value={formData.bank_address}></textarea>
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

BankAdd.propTypes = {
   setAlert: PropTypes.func.isRequired,
   bank: PropTypes.func.isRequired,
   isAuthenticated: PropTypes.bool

};
const mapStateToProps = state => ({
   isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { setAlert })(BankAdd);