import React, { Component } from 'react'
import styles from './SideNavMobile.css'



class SideNavMobileRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sidebarOpen: true
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg mb-4 navbarMobileRow">
                    <button type="button" className="btn btn-lg hamburger mt-2 ml-4 text-white " onClick={this.props.drawerClickHandler}>
                        <i className="fa fa-align-justify mr-4"></i>
                        Admin
                    </button>
                </nav>
            </div>
        )
    }
}

export default SideNavMobileRow;