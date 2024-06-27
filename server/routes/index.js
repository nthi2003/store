const auth = require('./auth');
const initRoutes = (app) => {
    app.use('/api/', auth );
    return app.use('/', (req, res) => {
        res.send('server on...')

    })
}
module.exports = initRoutes;