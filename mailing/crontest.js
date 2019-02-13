console.log('in crontest.js')

module.exports = cron => {    
    cron.schedule('1 * * * * *', () => {
        console.log('searching for mail once a minute');
    });
}