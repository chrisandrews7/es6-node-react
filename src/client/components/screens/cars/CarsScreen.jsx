import React from 'react';
import _ from 'lodash';
import { Table, PageHeader } from 'react-bootstrap';

import CarActions from 'actions/CarActions';
import CarStore from 'stores/CarStore';

import './CarsScreen.scss';

export default class CarsScreen extends React.Component {

	constructor(props) {
    super(props);

    this.onStoreChanged = this.onStoreChanged.bind(this);
    this.state = {
      cars: CarStore.getState().cars
    };
  }

  componentWillMount() {
    CarStore.listen(this.onStoreChanged);
  }

  componentDidMount() {
    CarActions.requestCars();
  }

  componentWillUnmount() {
    CarStore.unlisten(this.onStoreChanged);
  }

  onStoreChanged(state) {
    this.setState({
      cars: state.cars
    });
  }

  render() {
    const table = (this.state.cars.length) ? (
      <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Make</th>
              <th>Model</th>
            </tr>
          </thead>
          <tbody>
          {_.map(this.state.cars, (car, index) => {
            return (
              <tr key={index}>
                <td>{car.make}</td>
                <td>{car.model}</td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      ) : null;

    return (
      <div>
        <PageHeader>Cars</PageHeader>
        {table}
      </div>
    );
  }

}
