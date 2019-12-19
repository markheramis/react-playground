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

import axios from 'axios';

class ListCampaign extends Component {
  /**
   * [constructor description]
   *
   * @param   {object}  props  [props description]
   *
   * @return  null
   */
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get('https://localhost:8000/api/campaign').then((response) => {
      let campaigns = response.data;
      this.setState({campaigns})
    })
  }
  /**
   * [render description]
   *
   * @return  HTML  the template to render
   */
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
