import React from "react";

// reactstrap components
import {
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  Table
} from "reactstrap";

import { HashLink as Link } from 'react-router-hash-link';

// core components
import DangerNavbar from "sections/InfoNavbar.js";
import FooterWhite from "sections/FooterGray.js";

function SearchWithSidebar() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("search-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("search-page");
    };
  });

  let apartments = JSON.parse(localStorage.getItem("apartments"))

  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white section-search">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6" xs="12">
                  <Form className="form-inline search-form" role="search">
                    <InputGroup className="no-border">
                      <span
                        className="input-group-addon addon-xtreme no-border"
                        id="basic-addon1"
                      >
                        <i className="fa fa-search" />
                      </span>
                      <Input
                        aria-describedby="basic-addon1"
                        className="input-xtreme no-border"
                        placeholder="Find Stuff"
                        type="text"
                      />
                    </InputGroup>
                  </Form>
                  <h6 className="text-muted">
                    Is this what you are looking for?
                  </h6>
                </Col>
              </Row>
              {apartments.length > 0 && <>
              <h4 className="title">
                <small>Search Results</small>
              </h4>
              <Col className="ml-auto mr-auto" md="10">
              <Table className="table-shopping" responsive>
                <thead>
                  <tr>
                    <th />
                    <th className="text-right">Address</th>
                    <th className="text-right">Price</th>
                    <th className="text-right">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {apartments.map((apartment, index) =>
                      <tr>
                      <td className="td-product">
                        <a className="link" href={ "/apartment/" + index } tag={Link}><strong>{apartment["name"]}</strong></a>
                        <p>
                          {apartment["units"][0] === 0 ? "Studio, 1 Bed 1 Bath, 2 Bed 2 Bath" : "1 Bed 1 Bath or 2 Bed 2 Bath"}
                        </p>
                      </td>
                      <td className="td-price">
                        <small>{apartment["address"]}</small>
                      </td>
                      <td className="td-number td-quantity">
                        ${apartment["price"][0].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} - ${apartment["price"][1].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </td>
                      <td className="td-number">
                        {apartment["trend"] ? <i className="fas fa-arrow-trend-up"></i> : <i className="fas fa-arrow-trend-down"></i>}
                      </td>
                    </tr>
                  )}
                  <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                  </tr>
                </tbody>
              </Table>
            </Col></>
            }
            </Container>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default SearchWithSidebar;
