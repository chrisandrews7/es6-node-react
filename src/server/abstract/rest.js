import _ from 'lodash';

export default class Rest {

	constructor(schema) {
		if (this.constructor === Rest) {
			throw new TypeError('Class cannot be instantiated directly.');
		}
		if(schema){
			this.setSchema(schema);
		}
  }

	setSchema(schema) {
		this.schema = schema;
	}

	getSchema(full) {
		if(!full) {
			return _.keys(this.schema);
		}
		return this.schema;
	}

	parseSchemaKeys(body) {
		return _.pick(body, this.getSchema());
	}
}
