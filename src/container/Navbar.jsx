import MainBody from "./Maiin-Body"
import About from "./About"

export default function Navbar({ toggleStyle, setPage }) {
  return (
    <nav>
      <div className="project-name">
        <h1>Textutils</h1>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <button onClick={toggleStyle} className="d-lMode">Change Mode</button>
          </li>
          <li onClick={() => setPage("home")}>
            Home
          </li>
          <li onClick={() => setPage("about")}>
            About Us
          </li>
        </ul>
      </div>
    </nav>
  )
}