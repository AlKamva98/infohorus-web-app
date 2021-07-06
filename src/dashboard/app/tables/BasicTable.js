import React, { Component } from 'react'
import { ProgressBar } from 'react-bootstrap';
import Navbar from '../shared/Navbar';
import Sidebar from '../shared/Sidebar';
import SettingsPanel from '../shared/SettingsPanel';
import Footer from '../shared/Footer';

export class BasicTable extends Component {

  render() {
let navbarComponent = <Navbar/> ;
    let sidebarComponent =  <Sidebar/>;
    let SettingsPanelComponent = <SettingsPanel/> ;
    let footerComponent = <Footer/>;
    return (
      <div>
	 <div className="container-scroller">
        { navbarComponent }
        <div className="container-fluid page-body-wrapper">
          { sidebarComponent }
          <div className="main-panel">
            <div className=" content-wrapper">
        <div className="page-header">
          <h3 className="page-title"> Colleagues </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Tables</a></li>
              <li className="breadcrumb-item active" aria-current="page">Employees</li>
            </ol>
          </nav>
        </div>
        <div className="row">
           <div className="col-lg-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Company Employees</h4>                
		<div className="flex ">
		<div className="flex justify-content-end">
		 <button type="button" className="btn btn-success mx-2">New</button>
		<button type="button" className="btn btn-danger mx-2">Delete</button>
		<button type="button" className="btn btn-warning mx-2">Update</button>
                </div></div>
		<div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th> User </th>
                        <th> First name </th>
                        <th> Progress </th>
                        <th> Email </th>
                        <th> Deadline </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-1">
                          <i className="mdi mdi-account-box"></i>
                        </td>
                        <td> Herman Beck </td>
                        <td>
                          <ProgressBar variant="success" now={25} />
                        </td>
                        <td> hermanb985@example.co.za </td>
                        <td> Seo 15, 2021 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <i className="mdi mdi-account-box"></i>
                        </td>
                        <td> Messsy Adam </td>
                        <td>
                          <ProgressBar variant="danger" now={75} />
                        </td>
                        <td> messy.adam435@example.co.za </td>
                        <td> July 20, 2021 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <i className="mdi mdi-account-box"></i>
                        </td>
                        <td> John Richards </td>
                        <td>
                          <ProgressBar variant="warning" now={90} />
                        </td>
                        <td> richards.john972@example.co.za </td>
                        <td> Jul 12, 2021 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <i className="mdi mdi-account-box"></i>
                        </td>
                        <td> Peter Meggik </td>
                        <td>
                          <ProgressBar variant="primary" now={50} />
                        </td>
                        <td> meggik.peter547@example.co.za </td>
                        <td> Aug 19, 2021 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <i className="mdi mdi-account-box"></i>
                        </td>
                        <td> Edward Sulivan </td>
                        <td>
                          <ProgressBar variant="danger" now={60} />
                        </td>
                        <td> ted.sulivan@example.co.za </td>
                        <td> Aug 15, 2021 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                        <i className="mdi mdi-account-box"></i>
                        </td>
                        <td> John Doe </td>
                        <td>
                          <ProgressBar variant="info" now={65} />
                        </td>
                        <td> john.doe435@example.co.za </td>
                        <td> Aug 18, 2021 </td>
                      </tr>
                      <tr>
                        <td className="py-1">
                          <i className="mdi mdi-account-box"></i>
                        </td>
                        <td> Henry Tom </td>
                        <td>
                          <ProgressBar variant="warning" now={20} />
                        </td>
                        <td> tom.henry852@example.co.za </td>
                        <td> Sept 16, 2021 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
        </div>
  { SettingsPanelComponent }
            </div>
            { footerComponent }
          </div>
        </div>  
      </div> 
       </div>
    )
  }
}

export default BasicTable
