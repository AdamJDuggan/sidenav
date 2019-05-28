import React from 'react';
import styles from './AdminEnviroment.css'



function SideNavSubItem(props) {

    return (

        <div className="submenuItem ml-4">
            <a className="text-white" href={props.subItemHref}>{props.subItemTitle}</a>
        </div>
    )
}


export default function SideNavItem(props) {
    const noSubItem = !props.subItem
    return (
        <div>
            {noSubItem ? (
                <div className="btn-group dropright mb-4">
                    <button type="button btn-block" className="btn icon" aria-haspopup="true" aria-expanded="false">
                        <div className="row ml-2 mb-3 d-flex align-items-center ">
                            <i className={props.icon}></i>
                            {props.open && <div className="sideNavItemText">{props.title}</div>}
                        </div>
                    </button>
                    <br />
                </div>
            ) : (
                    <div className="btn-group dropright mb-4">
                        <button type="button btn-block" className="btn icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="row ml-2 mb-3 d-flex align-items-center">
                                <i className={props.icon}></i>
                                {props.open && <div className="sideNavItemText">{props.title}</div>}
                                {props.open && <i className="fas fa-chevron-right ml-3 pull-right"></i>}
                            </div>
                        </button>

                        <div className="dropdown-menu" id={props.id}>
                            {props.subItem.map((li, index) => {
                                return (
                                    <SideNavSubItem
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
