
import React from 'react'
import axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import { Link } from 'react-router-dom';
import config from '../../utils/config';

export default class BankReport extends React.Component {
   state = {
      banks: []
   }
   
   /**
    * Confirmation Dialogue Implementation
    */
   confirmatioBox = (id) => {
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to delete this record ?',
        buttons: [
          {
            label: 'Yes',
            onClick: () => this.deleteData(id)
          },
          {
            label: 'No'
          }
        ]
      });
    }
  

   /**
    * Function for getting lists
    */
   componentDidMount() {
      axios.get(`${config.api_url}/bank`)
         .then(res => {
            const banks = res.data;
            this.setState({ banks });
            console.log(banks);
         })
   }

   /**
    * Function for deleting data
    * @param {*} id 
    */
   deleteData(id) {
      axios.delete(`${config.api_url}/bank/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.componentDidMount();
      })
   }

   render() {
      return (
         <section>
            <section id="inner-headline">
               <div className="container">
                  <div className="row">
                     <div className="col-lg-12">
                        <h2 className="pageTitle">Blood Bank Report</h2>
                     </div>
                  </div>
               </div>
            </section>
            <section id="content">
               <div className="container content">
                  <div>
                     <div className="col-md-12">
                        <div>
                           <h2 className='h2c'>All Blood Bank Report  </h2>
                        </div>
                        <br />
                     </div>
                  </div>
                  <div>
                  <div className='add-button btn btn-success'><Link to="/bank-add">Add New Blood Bank</Link></div>
                     <table className="table table-striped table-bordered table-hover">
                        <thead className="thead-dark">
                           <tr>
                              <th scope="col">ID</th>
                              <th scope="col">Bank Name</th>
                              <th scope="col">Contact No</th>
                              <th scope="col">Email</th>
                              <th scope="col">City</th>
                              <th scope="col">Action</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              this.state.banks
                                 .map(bank =>
                                    <tr>
                                       <th scope="row">{bank.bank_id}</th>
                                       <td>{bank.bank_name}</td>
                                       <td>{bank.bank_contact}</td>
                                       <td>{bank.bank_email}</td>
                                       <td>{bank.bank_city}</td>
                                       <td>
                                          <Link to={"/bank-add/"+bank.bank_id}>
                                          <span className="glyphicon glyphicon-edit editi"></span>
                                          </Link>&nbsp;&nbsp;
                                          <a onClick={() => this.confirmatioBox(bank.bank_id)} href="#!">
                                             <span className="glyphicon glyphicon-trash deletei"></span>
                                          </a>
                                       </td>
                                    </tr>
                                 )
                           }
                        </tbody>
                     </table>
                  </div>
               </div>
            </section>
         </section>
      )
   }
}