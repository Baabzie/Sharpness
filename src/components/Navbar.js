import { Link } from "react-router-dom";

//Creates a navbar for our diffrent pages.
export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/problem1">Problem 1</Link>
                </li>
                <li>
                    <Link to="/problem2">Problem 2</Link>
                </li>
                <li>
                    <Link to="/problem3">Problem 3</Link>
                </li>
            </ul>
        </nav>
    )
}