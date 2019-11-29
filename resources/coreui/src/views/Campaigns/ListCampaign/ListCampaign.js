import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap";
class ListCampaign extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg="12">
            <Card>
              <CardHeader>
                <i className="fa fa-table"></i> All Campaigns
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Tour ID</th>
                      <th>Title</th>
                      <th>Owner</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>4242634</td>
                      <td>California</td>
                      <td>Owner</td>
                      <td>Draft</td>
                      <td></td>
                    </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ListCampaign;
