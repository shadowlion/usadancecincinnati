import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const BaseFooter = () => {
  return (
    <Container>
      <Nav className="d-flex justify-content-around">
        <Nav.Link disabled>
          &copy;{new Date().getFullYear()} USA Dance Cincinnati
        </Nav.Link>
        <Link href="mailto:usadance2006@gmail.com" passHref>
          <Nav.Link>Questions?</Nav.Link>
        </Link>
        <Link href="/https://facebook.com" passHref>
          <Nav.Link>Facebook</Nav.Link>
        </Link>
      </Nav>
    </Container>
  );
};

export default BaseFooter;
