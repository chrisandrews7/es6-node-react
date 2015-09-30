import Alt from 'Control';
import CarActions from 'actions/CarActions';

class CarStore {

	constructor() {
		this.cars = [];

    this.bindActions(CarActions);
	}

  onRequestCars(data) {
		this.cars = data.data;
	}

}

export default Alt.createStore(CarStore, 'CarStore');
