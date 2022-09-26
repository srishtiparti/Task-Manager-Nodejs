// Inheriting Custom API error and hardcoding stattus code for Badrequests

const CustomAPIError = require('./custom-error')
const { StatusCodes } = require('http-status-codes')

class badRequest extends CustomAPIError {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
    }
}

module.exports = badRequest