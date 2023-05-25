import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap'

function Sidebar() {
    const navigate = useNavigate();
  
    return (
      <Navbar expand="lg" id='profile-setting'>
        <Container className = "setting-box">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="flex-column me-auto w-100">
              <Nav.Link onClick={() => navigate("/my-account")}>Settings</Nav.Link>
              <Nav.Link onClick={() => navigate("/my-account/my-diet")}>My Diet</Nav.Link>
              <Nav.Link onClick={() => navigate("/my-account/bookmarks")}>Bookmarks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Sidebar;