import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const BaseFooter = () => {
  return (
    <Container>
      <Nav>
        <Nav.Link href="/">USA Dance Cincinnati</Nav.Link>
        <Nav.Link href="mailto:usadance2006@gmail.com">Email Us</Nav.Link>
        <Nav.Link href="https://facebook.com">Facebook</Nav.Link>
      </Nav>
    </Container>
  );
};

export default BaseFooter;
