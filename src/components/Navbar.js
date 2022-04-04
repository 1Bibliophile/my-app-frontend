import { NavLink } from "react-router-dom"

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "lightBlue",
    fontWeight: "bold",
    verticalAlign: "center"
}

const Navbar = () => {
  return (
    <div>
        <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "2C7AAF"
        }}
        exact 
        style={style}
        to="/"
        >Home
        </NavLink>

        <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "2C7AAF"
        }}
        exact 
        style={style}
        to="/subsidiaries"
        >Subsidiaries
        </NavLink>

        <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "2C7AAF"
        }}
        exact 
        style={style}
        to="/subsidiaries/new"
        >New
        </NavLink>

        <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "2C7AAF"
        }}
        exact 
        style={style}
        to="/asset"
        >Assets
        </NavLink>
    </div>
  )
}

export default Navbar