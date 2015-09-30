import _ from 'lodash';

export const response = (success = false, message, data = []) => {
	return {
		success: success,
		message: message,
		data: data
	};
}
