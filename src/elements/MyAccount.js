import { Container, Row, Col } from 'react-bootstrap';
import { Routes, Route, useLocation } from 'react-router-dom';

import Settings from './accountpages/Settings';
import MyDiet from './accountpages/MyDiet';
import MyPlan from './accountpages/MyPlan';
import Bookmarks from './accountpages/Bookmarks';
import Sidebar from './accountpages/Sidebar';

export function PageToggle() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={ <Settings/> }/>
        <Route path="my-diet" element={ <MyDiet/> }/>
        <Route path="my-plan" element={ <MyPlan/> }/>
        <Route path="bookmarks" element={ <Bookmarks/> }/>
      </Route>
    </Routes>
  )
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