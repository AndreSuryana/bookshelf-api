/**
 * Compose json response for success. 
 * 
 * @param data: json
 * @param message: string
 */
export const composeSuccessJson = (data, message) => {
    return JSON.stringify({
        status: "success",
        message: message,
        data: data
    });
}

/**
 * Compose json response for error. 
 * 
 * @param message: string
 */
export const composeErrorJson = (message, status) => {
    return JSON.stringify({
        status: status ? status : "error",
        message: message
    });
}