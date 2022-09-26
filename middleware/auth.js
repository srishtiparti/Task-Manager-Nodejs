const jwt = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')


const authenticationMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No token provided')
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const { id, username } = decoded
        // create a new user
        req.user = { id, username }

    } catch (error) {
        throw new UnauthenticatedError('Not authorized to access this path')
    }

    next()
}

module.exports = authenticationMiddleware