const cron = require('node-cron')
const {logger} = require('./logging')

const serverStatus = (title,content) => {
    cron.schedule('* * * * *',() => {
        logger.info(title,{content:content})
    })
}
module.exports = {serverStatus}
