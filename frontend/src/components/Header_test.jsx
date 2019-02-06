import React from 'react'
import component from '../images/Component.png'
import { NavLink } from 'react-router-dom'


class Header_test extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }


    render() {
        return (
            <React.Fragment>

                <nav className="navbar navbar-inverse">
                    <div className="container-fluid md-tabs bg-success">
                        <div className="d-flex img-fluid justify-content-start align-items-center">
                            <span className="display-4 text-dark">RECYCLE </span> &nbsp;
                            <img src={component} className=" mx-auto " width="50" height="50" alt="" />
                            &nbsp;
                            <span className="display-4 text-dark"> DATABASE</span>
                        </div>

                        <ul className="nav  text-white justify-content-end lighten-1 mx-0 mb-0 mt-1 pt-4 pb-2">
                            <li className="nav-item">
                                <NavLink to="/searchArea" className="nav-link text-white">Search Area</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/#" className="nav-link text-white">Add an Item</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink to="/recommendedLinks" className="nav-link text-white">Recommended Links</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/aboutUs" className="nav-link text-white">About us</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment >
        )
    }
}

export default Header_test



