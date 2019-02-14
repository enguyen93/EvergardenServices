import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import Navbar from "../Navbar";
// import dashNav from "../dashNav";
// import Full from "../Full";
// import DashSideBar from "../DashSideBar";
// import DashSideName from "../DashSideName";
// import "./style.css";


className Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (



<body>

<div className="d-flex" id="wrapper">

  <!-- //////////////////////////////////////////////////Sidebar/////////////////////////////////////////////////////////////// -->
  <div className="bg-light border-right bg-primary" id="sidebar-wrapper">
    <div className="sidebar-heading">Add Contact + </div>
    <div className="list-group list-group-flush">
      <a href="#" className="list-group-item list-group-item-action bg-light text-primary">Eric Nguyen</a>
      <a href="#" className="list-group-item list-group-item-action bg-light">Carlos Barahona </a>
      <a href="#" className="list-group-item list-group-item-action bg-light">Niko Roberts</a>
    </div>
  </div>
  <!-- /#sidebar-wrapper -->

  <!-- Page Content -->
  <div id="page-content-wrapper">

    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <!-- <button className="btn btn-primary" id="menu-toggle">Toggle Menu</button> -->

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60">
          
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <!-- Nav Item - User Information -->
                
                <!-- <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span> -->
                
              
          
        </ul>
      </div>
    </nav>

    <!-- ////////////////////////////////////////WELCOME////////////////////////////////////////// -->

    <div className="container-fluid">
      <h1 className="mt-4">Welcome, John!</h1>
    </div>

    <!-- /////////////////////////////////////MESSAGE//////////////////////////////////////////////// -->
    
      <div className="card w-50">
      <h5 className="card-header bg-white">Title</h5>
      <div className="card-body">
        
        <p className="card-text">Message</p>
      </div>
      </div>
      <div className="messageButtons">
          <button className="btn btn-primary">Calendar</button>
          <button className="btn btn-success">Submit</button>
      </div>
    
    <!-- ////////////////////////////////////ACTIVE MESSAGES////////////////////////////////////////// -->

    <div className="card w-50">
        <h5 className="card-header activeHeader text-white">Active Message</h5>
        <div className="card-body">
            <table className="table">
                <thead></thead>
                  <!-- <tr>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr> -->
                </thead>
                <tbody>
                  <tr>
                    <td>Mark Smith</td>
                    <td>Pending</td>
                    
                  </tr>
                  <tr>
                    <td>Jacob Random</td>
                    <td>Pending</td>
                  
                  </tr>
                  <tr>
                    <td>Larry random</td>
                    <td>Sent</td>
                    
                  </tr>
                </tbody>
              </table>
          
        </div>
      </div>



  </div>
  <!-- /#page-content-wrapper -->

</div>
<!-- /#wrapper -->

<!-- Bootstrap core JavaScript -->
<script src="vendor/jquery/jquery.min.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

<!-- Menu Toggle Script -->

</body>












        
{/* <div className="dashboardBody"> */}
    {/* <Navbar /> */}
    {/* <dashNav />
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="/">Evergarden</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" id="nav-active" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav className='col-md-2 d-none d-md-block bg-light sidebar'>
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item">test</li>
          <li className="nav-item">test</li>
          <li className="nav-item">test</li>
        </ul>
      </div>
    </nav>
    <Full>
      <div className="textBody">
        <DashSideBar>
      
          <h1>text</h1>

        </DashSideBar>      
      </div>
    </Full>
  </div> */}




    //   <div style={{ height: "75vh" }} className="container valign-wrapper">
    //     <div className="row">
    //       <div className="col s12 center-align">
    //         <h4>
    //           <b>Hey there,</b> {user.name.split(" ")[0]}
    //           <p className="flow-text grey-text text-darken-1">
    //             You are logged into a full-stack{" "}
    //             <span style={{ fontFamily: "monospace" }}>MERN</span> app 👏
    //           </p>
    //         </h4>
    //         <button
    //           style={{
    //             width: "150px",
    //             borderRadius: "3px",
    //             letterSpacing: "1.5px",
    //             marginTop: "1rem"
    //           }}
    //           onClick={this.onLogoutClick}
    //           className="btn btn-large waves-effect waves-light hoverable blue accent-3"
    //         >
    //           Logout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);