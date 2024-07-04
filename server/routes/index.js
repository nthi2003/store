const auth = require('./auth');
const admin = require('./admin');
const initRoutes = (app) => {
    app.use('/api/', auth  );
    app.use('/api/', admin  );
    return app.use('/', (req, res) => {
        res.send('server on...')

    })
    
}
module.exports = initRoutes;