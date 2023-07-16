/**
 * Compose json response for success.
 * @param {json} data
 * @param {string} message
 * @return {string}
 */
export const composeSuccessJson = (data, message) => {
    return JSON.stringify({
        status: 'success',
        message: message,
        data: data,
    });
};

/**
 * Compose json response for error.
 * @param {string} message
 * @param {string} status
 * @return {string}
 */
export const composeErrorJson = (message, status) => {
    return JSON.stringify({
        status: status ? status : 'error',
        message: message,
    });
};