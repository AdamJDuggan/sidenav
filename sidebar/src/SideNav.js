import React, { Component } from 'react'
import SideNavItem from './SideNavItem'
import SideNavMobile from './SideNavMobile'
import styles from './AdminEnviroment.css'
import SideNavMobileRow from './SideNavMobileRow'



class SideNav extends Component {

    constructor(props) {
        super(props);
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
        this.toggleSideNav = this.toggleSideNav.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.updateScrollPosition = this.updateScrollPosition.bind(this);
    }
    toggleSideNav() {
        const currentState = this.state.sidebarOpen
        this.setState({ sidebarOpen: !currentState })
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
        window.addEventListener("scroll", this.updateScrollPosition);
        console.log(this.props)
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
        window.removeEventListener("resize", this.updateScrollPosition);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    updateScrollPosition() {
        this.setState({ scrollPosition: window.pageYOffset });
    }


    render() {

        if (this.state.width <= 768) {
            return <SideNavMobile click={this.props.drawerClickHandler} />;
        }

        const listItem = this.state.listItem.map((li, index) =>
            <li key={index}>
                <SideNavItem open={this.state.sidebarOpen} {...li}
                />
            </li>
        );


        return (
            <div>
                <nav className={this.state.sidebarOpen ? "sidebar d-flex" : "sidebar-small d-flex"}>
                    <div>
                        <div className="sidebar-header mb-4 ml-1">
                            <button type="button" className="btn hamburger" onClick={this.toggleSideNav}>
                                <i className="fa fa-align-justify"></i>
                            </button>
                        </div>
                        {listItem}
                    </div>
                </nav>

            </div>
        )
    }
}

export default SideNav;