import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, useLocation } from 'react-router-dom';

import GeneralInfo from './accountpages/GeneralInfo';
import Settings from './accountpages/Settings';
import MyDiet from './accountpages/MyDiet';
import MyPlan from './accountpages/MyPlan';
import Bookmarks from './accountpages/Bookmarks';

export function PageToggle() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={ <GeneralInfo/> } />
        <Route path="my-account/settings" element={ <Settings/> } />
        <Route path="my-account/my-diet" element={ <MyDiet/> } />
        <Route path="my-account/my-plan" element={ <MyPlan/> } />
        <Route path="my-account/bookmarks" element={ <Bookmarks/> } />
      </Route>
    </Routes>
  )
}

export function Sidebar() {
  const navigate = useNavigate();

  return (
    <Navbar expand="lg" id='profile-setting'>
      <Container className = "setting-box">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column me-auto w-100">
            <Nav.Link onClick={() => navigate("/my-account")}>General Info</Nav.Link>
            <Nav.Link onClick={() => navigate("/my-account/settings")}>Settings</Nav.Link>
            <Nav.Link onClick={() => navigate("/my-account/my-diet")}>My Diet</Nav.Link>
            <Nav.Link onClick={() => navigate("/my-account/my-plan")}>My Plan</Nav.Link>
            <Nav.Link onClick={() => navigate("/my-account/bookmarks")}>Bookmarks</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const MyAccount = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Container className='py-5 my-3'>
    <Row>
      <Col md = {3}>
        <div className = 'new-title'>
              Good Morning!
        </div>
        <Sidebar/>
      </Col>
      <Col>
        <PageToggle/>
      </Col>
    </Row>
    </Container>
  )
}


export default MyAccount