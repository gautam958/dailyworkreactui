import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Menu extends Component {
    render() {
        return (
            <div>

                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img
                            src="dist/img/AdminLTELogo.png"
                            alt="AdminLTE Logo"
                            className="brand-image img-circle elevation-3"
                            style={{ opacity: '.8' }}
                        />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img
                                    src="dist/img/user2-160x160.jpg"
                                    className="img-circle elevation-2"
                                    alt="User Image"
                                />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">
                                    Alexander Pierce
                </a>
                            </div>
                        </div> */}
                        {/* Sidebar Menu */}



                        <nav className="mt-2">
                            <ul
                                className="nav nav-pills nav-sidebar flex-column"
                                data-widget="treeview"
                                role="menu"
                                data-accordion="false"
                            >
                                <li className="nav-item">
                                    <Link to="/Users/" className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>Users</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Users/AddUser/" className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>Add Users</p>
                                    </Link>
                                </li>
                                <li className="nav-item has-treeview">
                                    <Link to="#" className="nav-link">
                                        <i className="nav-icon fas fa-copy" />
                                        <p>
                                            Layout Options
                                               <i className="fas fa-angle-left right" />
                                        </p>
                                    </Link>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/layout/top-nav.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Top Navigation</p>
                                            </a>
                                        </li>

                                        <li className="nav-item">
                                            <a
                                                href="pages/layout/collapsed-sidebar.html"
                                                className="nav-link"
                                            >
                                                <i className="far fa-circle nav-icon" />
                                                <p>Collapsed Sidebar</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-header">LABELS</li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-circle text-danger" />
                                        <p className="text">Important</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-circle text-warning" />
                                        <p>Warning</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon far fa-circle text-info" />
                                        <p>Informational</p>
                                    </a>
                                </li>
                            </ul>
                        </nav>


                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>

            </div>
        );
    }
}
