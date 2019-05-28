import React from 'react';
import styles from './AdminEnviroment.css'



function SideNavSubItemMobile(props) {

    return (

        <div className="submenuItem ml-4">
            <a className="text-white" href={props.subItemHref}>{props.subItemTitle}</a>
        </div>
    )
}


export default function SideNavItemMobile(props) {
    const noSubItem = !props.subItem
    return (
        <div>
            {noSubItem ? (
                <div className="btn-group dropdown mb-4">
                    <button type="button btn-block" className="btn icon" aria-haspopup="true" aria-expanded="false">
                        <div className="row mb-3 d-flex align-items-center ">
                            <i className={props.icon}></i>
                            <div className="sideNavItemText">{props.title}</div>
                        </div>
                    </button>
                    <br />
                </div>
            ) : (
                    <div className="btn-group dropdown mb-4">
                        <button type="button btn-block" className="btn icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="row mb-3 d-flex align-items-center">
                                <i className={props.icon}></i>
                                <div className="sideNavItemText mr-4">{props.title}</div>
                                <i className="fas fa-chevron-down pull-right"></i>
                            </div>
                        </button>

                        <div className="dropdown-menu" id={props.id}>
                            {props.subItem.map((li, index) => {
                                return (
                                    <SideNavSubItemMobile
                                        subItemHref={li.subItemHref}
                                        subItemTitle={li.subItemTitle}
                                    />
                                )
                            })}
                        </div>
                        <br />
                    </div>

                )}

        </div>
    )
}
