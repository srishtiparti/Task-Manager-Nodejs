// Inheriting Custom API error and hardcoding stattus code for unauthenticated requests
const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./custom-error')

class UnauthenticatedError extends CustomAPIError {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = UnauthenticatedError