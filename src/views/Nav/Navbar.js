import React, {
    Component
} from 'react'
import '../Nav/nav.scss'
import { Link, NavLink } from 'react-router-dom'
class Navbar extends Component {

    render() {
        return (
            <>
                <div class="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                        Home
                    </NavLink>
                    <NavLink to="/todo" activeClassName="active">
                        Todo
                    </NavLink>
                    <NavLink to="/about" activeClassName="active">
                        About
                    </NavLink>
                </div>
            </>

        )
    }
}
export default Navbar