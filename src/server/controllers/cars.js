import _ from 'lodash';

import { response } from '../libs/helperUtils';
import car from '../models/car';
import rest from '../abstract/rest';

class AreaController extends rest {

	constructor() {
		super(car.schema.paths);
	}

	getAll(req, res) {
		car.find((err, cars) => {
			if (err) {
				return res.status(404).json(response(false, 'Couldnt find any cars'));
			}
			res.json(response(true, null, cars));
		});
	}

	getOneById(req, res) {
		car.findOne({_id: req.params.id}, (err, car) => {
			if (err) {
				return res.status(404).json(response(false, 'Couldnt find this car'));
			}
			res.json(response(true, null, car));
		});
	}

	createOne(req, res) {
		car.create(this.parseSchemaKeys(req.body), (err) => {
	      if (err){
          return res.status(500).json(response(false, err));
        }
	      res.json(response(true, 'Car created'));
	  });
	}

}

export default new AreaController;
