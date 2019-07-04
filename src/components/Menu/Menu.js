import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true
    },
    {
        name: 'Quản Lí Sản Phẩm',
        to: '/products',
        exact: false
    }
]
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                let active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link className="nav-link" to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />

    )
};
class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand navbar-light bg-light">
                <Link className="navbar-brand" to='/'>CALL API</Link>
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }
    showMenus = (menus) => {
        let result = null;
        result = menus.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    label={menu.name}
                    to={menu.to}
                    activeOnlyWhenExact={menu.exact}
                />
            )
        })
        return result;
    }
}

export default Menu;
