import React from "react";
import { Link } from "react-router-dom";
import '../../styles/employee_styles/employee_header.css'

class MainNavbar extends React.Component {
  render() {
    return (
      <div>
        <nav id="empnav">
          <ul>
            <li>
              <Link to="/employee/Home">Home</Link>
            </li>
            <li>
              <Link to="/employee/assigndoctor">Assign Doctor</Link>
            </li>
            <li>
              <Link to="/issueform">Issue Form</Link>
            </li>
            <li>
              <Link to="/employee/instructions">Instructions</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainNavbar;