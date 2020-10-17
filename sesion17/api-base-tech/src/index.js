require('dotenv').config()
const dotenv_example = require('./dotenv')
const logger = require('./logger')

const constValue = {
    name: 'Ethien',
    email: 'ethien.salinas@gmail.com',
    timestamp: new Date().toISOString()
}
logger.debug(`This is a debug line: ${JSON.stringify(constValue)}`)
logger.error(`Error log line: ${new Error('so sad 😓')}`)