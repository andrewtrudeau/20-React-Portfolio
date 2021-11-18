import {
  NavLink
} from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navBar">
      <ul>
        <h2 className="acc2 name">Andrew Trudeau</h2>
        <NavLink to="/" activeClassName="active"><li>About Me</li></NavLink>
        <NavLink to="/projects" activeClassName="active"><li>Projects</li></NavLink>
        <NavLink to="/resume" activeClassName="active"><li>My Resume</li></NavLink>
        <NavLink to="/contact" activeClassName="active"><li>Contact</li></NavLink>
      </ul>
    </div>
  )
}

