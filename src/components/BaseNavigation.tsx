import Link from "next/link";

const BaseNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">USA Dance Cincinnati</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/calendar" passHref>
                <a className="nav-link" aria-current="page">
                  Calendar
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/resources" passHref>
                <a className="nav-link" aria-current="page">
                  Resources
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contactus" passHref>
                <a className="nav-link" aria-current="page">
                  Contact Us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BaseNavigation;
