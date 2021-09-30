import Link from "next/link";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const BaseNavigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand href="/">
          {/*<Image
            src="/logo.png"
            alt="logo.png"
            width={60}
            height={60}
            className="d-inline-block align-center"
          />*/}
          USA Dance #2006 (Cincinnati, OH)
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-responsive" />
        <Navbar.Collapse id="navbar-responsive" className="justify-content-end">
          <Nav>
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/calendar" passHref>
              <Nav.Link>Calendar</Nav.Link>
            </Link>
            <Link href="/resources" passHref>
              <Nav.Link>Resources</Nav.Link>
            </Link>
            <Link href="/contactus" passHref>
              <Nav.Link>Contact Us</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BaseNavigation;
