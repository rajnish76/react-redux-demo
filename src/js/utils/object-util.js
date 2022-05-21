
import { isUndefined, isNull, isObject, isArray } from './type-util';

/**
 * Resolves an object property from a string representing the path in dot notation.
 *
 * @param   {Object} source
 * @param   {String} path
 * @param   {*}      [defaultValue]
 * @returns {*}
 */
export function resolveProp(source, path, defaultValue) {

	let parts = String(path).split('.');
	let prop = parts.shift();
	let result = source;

	while (prop) {

		if (isUndefined(result[ prop ]) || isNull(result[ prop ])) {
			return defaultValue;
		} else {
			result = result[ prop ];
		}

		prop = parts.shift();
	}

	return result;
}

/**
 * Deep merges a target object by copying the values of all enumerable own properties from
 * one or more source objects to the target object. Properties in the target object will
 * be overwritten by properties in the sources if they have the same key. Sources are applied
 * from left to right in the arguments list.
 *
 * @param   {Object}    target      The target object.
 * @param   {...Object} [sources]   One or more source objects to merge.
 * @returns {Object}
 */
export function merge(target, ...sources) {

	sources.forEach(source => {
		for (let key in source) {
			if (source.hasOwnProperty(key)) {

				if (isObject(target[ key ]) && !isArray(target[ key ]) &&
					isObject(source[ key ]) && !isArray(source[ key ])) {

					target[ key ] = merge({}, target[ key ], source[ key ]);

				} else {

					target[ key ] = source[ key ];
				}
			}
		}
	});

	return target;
}

/**
 * Getting the error response message
 *
 * @param   {Object}    error      The error response.
 * @returns {String}
 */
export function responseError(error) {
	if (error.response && error.response.data) {
		if (error.response.data.errors && error.response.data.errors.length) {
			return error.response.data.errors.map(e => e.defaultMessage).join('\n');
		} else if (error.response.data.message) {
			return error.response.data.message;
		} else {
			return error.message;
		}
	} else {
		return error.message;
	}
}

/**
 * Getting a unique Id
 *
 * @returns {String}
 */
export function getUniqueId() {
	return Math.random()
		.toString(36)
		.substring(2);
}
