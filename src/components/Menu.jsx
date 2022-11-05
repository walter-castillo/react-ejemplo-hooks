import { Link, Outlet } from "react-router-dom";

export default function Menu() {
  return (
      <main>
        <nav>
            <Link to='/'>Home</Link> | {" "}
            <Link to='/about'>About</Link>
        </nav>
        <section>
        <br />
            <Outlet />
        </section>
    </main>
  )
}
