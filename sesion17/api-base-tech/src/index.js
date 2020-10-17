require('dotenv').config()
// require('./dotenv')
const logger = require('./logger')
// require('./bcrypt')
const bcrypt = require('bcrypt')
const connection = require('./sequelize-orm')

const store = connection()

const tryStore = async () => {
  try {
    // const users = await store.User.findAll();
    // console.log(users);
    // // insertar
    // const user = await store.User.create({
    //   name: 'Ethien Salinas',
    //   email: 'ethien.salinas@gmail.com',
    //   password: 'qwerty'
    // })
    // update
    // await store.User.update({ password: await bcrypt.hash('qwerty', 9) }, {
    //   where: {
    //     email: 'ethien.salinas@gmail.com'
    //   }
    // })
    //nueva consulta
    const ethienUser = await store.User.findOne({
      where: {
        name: 'Ethien Salinas'
      }
    })
    console.log(`password match: ${await bcrypt.compare('qwerty', ethienUser.password)}`)
  } catch (error) {
    logger.error(error)
  }
}
tryStore()

// const constValue = {
//     name: 'Ethien',
//     email: 'ethien.salinas@gmail.com',
//     timestamp: new Date().toISOString()
// }
// logger.debug(`This is a debug line: ${JSON.stringify(constValue)}`)
// logger.error(`Error log line: ${new Error('so sad 😓')}`)

