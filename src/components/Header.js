import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Container>
        <Navbar.Brand href="/"><img
              src="cropped-LPR-maroon-2.png"
              width="80"
              height="60"
              alt=""
            />Lambda Psi Rho
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <NavDropdown title="About" id="basic-nav-dropdown" align={{ sm: 'end' }}>
              <NavDropdown.Item href="/history/">History</NavDropdown.Item>
              <NavDropdown.Item href="/history/join/">Membership</NavDropdown.Item>
              <NavDropdown.Item href="/academics/">Academics</NavDropdown.Item>
              <NavDropdown.Item href="/stepping-strolling/">Stepping &amp; Strolling</NavDropdown.Item>
              <NavDropdown.Item href="/upcoming-events/">Upcoming Events</NavDropdown.Item>
              <NavDropdown.Item href="/history/expansion/">Expansion</NavDropdown.Item>
              <NavDropdown.Item href="/history/incorporation-chartering-process-and-non-profit/">Incorporation, Chartering Process, and Non-Profit</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Brothers" id="basic-nav-dropdown" align={{ sm: 'end' }}>
              <NavDropdown.Item href="/brothers/founding-chapter/">Founding Chapter</NavDropdown.Item>
              <NavDropdown.Item href="/active-house/">Active House</NavDropdown.Item>
              <NavDropdown.Item href="/brothers-alumni-chapter/">Alumni Chapter</NavDropdown.Item>
              <NavDropdown.Item href="/brothers/executive-board/">Executive Board</NavDropdown.Item>
              <NavDropdown.Item href="/history/national-board/">National Board</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Philanthropy" id="basic-nav-dropdown" align={{ sm: 'end' }}>
              <NavDropdown.Item href="/philanthropy/local/">Local Philanthropies</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
