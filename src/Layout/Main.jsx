import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Row>
        <Col lg={12}>
          <Outlet></Outlet>
        </Col>
      </Row>

      <Footer></Footer>
    </div>
  );
};

export default Main;
