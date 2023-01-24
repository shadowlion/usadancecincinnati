import Link from "next/link";

const BaseNavigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <div className="container">
        <Link href="/" className="navbar-brand">
          USA Dance Cincinnati
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
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/calendar" className="nav-link">
                Calendar
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link href="/resources" className="nav-link">
                Resources
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/contactus" className="nav-link">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default BaseNavigation;
