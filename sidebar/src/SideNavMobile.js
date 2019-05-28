import React, { Component } from 'react'
import styles2 from './SideNavMobile.css'
import SideNavItem from './SideNavItem'
import styles from './AdminEnviroment.css'





class SideNavMobile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listItem: [
                {
                    title: 'Organisations',
                    subItem: [
                        {
                            subItemTitle: 'Org1',
                            subItemHref: 'Org1'
                        }
                    ],
                    href: '#orgSubmenu',
                    id: 'orgSubmenu',
                    icon: 'fa fa-home menuIcons mr-3'
                },
                {
                    title: 'Users',
                    subItem: [
                        {
                            subItemTitle: 'User1',
                            subItemHref: 'User1'
                        },
                        {
                            subItemTitle: 'User2',
                            subItemHref: 'User2'
                        },

                    ],
                    href: '#userSubmenu',
                    id: 'userSubmenu',
                    icon: 'fas fa-users menuIcons mr-3'
                },
                {
                    title: 'LNAs',
                    href: '#lnas',
                    icon: 'far fa-chart-bar menuIcons mr-3'

                }
            ],
            sidebarOpen: true
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top mobileNav">
                    <button type="button" className="btn btn-lg hamburger mt-2 ml-4 text-white " onClick={this.props.click}>
                        <i className="fa fa-align-justify"></i>
                    </button>

                </nav>
            </div>
        )
    }
}

export default SideNavMobile;