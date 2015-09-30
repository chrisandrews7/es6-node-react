import Alt from 'Control';
import Axios from 'axios';

class CarActions {

	requestCars() {
		Axios({
			url: '/api/cars'
		})
		.then((response) => {
			this.dispatch(response.data);
		});
	}

}

export default Alt.createActions(CarActions);
