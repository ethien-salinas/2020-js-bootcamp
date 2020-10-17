const bcrypt = require('bcrypt');
const logger = require('../logger');
const saltRounds = 9
const myPlaintextPassword = 's0/\/\P4$$w0rD'
const someOtherPlaintextPassword = 'not_bacon'
const hashPassword = '$2b$09$9/j7p8v2oyQV8.fR6c4hjuo1WBESu8qi4Uz8penGA.Seq21Atkz8a'

bcrypt.hash(myPlaintextPassword, saltRounds)
  .then((hash) => {
    console.log(hash) // Aquí se almacena en BD
  })
  .catch((err) => {
    logger.error(err)
  })
// compare using promises
bcrypt.compare(myPlaintextPassword, hashPassword)
  .then((result) => {
    console.log(`[0] result: ${result}`) // true
  })
  .catch((err) => {
    logger.error(err)
  })
// compare using callback
bcrypt.compare(someOtherPlaintextPassword, hashPassword, (err, result) => {
  if (err) { logger.error(err) }
  console.log(`[1] result: ${result}`) // false
})