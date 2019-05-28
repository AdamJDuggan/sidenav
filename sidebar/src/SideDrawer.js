// import React from 'react';
import React, { Component } from 'react'
import SideNavItemMobile from './SideNavItemMobile'

import './SideDrawer.css';

class sideDrawer extends Component {
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
            open: true
        }
    }
    render() {
        let drawerClasses = 'side-drawer';
        if (this.props.show) {
            drawerClasses = 'side-drawer open';
        }

        const listItem = this.state.listItem.map((li, index) =>
            <li key={index}>
                <SideNavItemMobile {...li}
                />
            </li>
        );

        return (
            <div>
                <nav className={drawerClasses}>
                    <ul>
                        {listItem}
                    </ul>
                </nav>

            </div>
        )
    }
}

export default sideDrawer;
