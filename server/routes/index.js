const auth = require('./auth');
const admin = require('./admin');
const category = require('./category');
const initRoutes = (app) => {
    app.use('/api/', auth  );
    app.use('/api/', admin  );
    app.use('/api/', category  );
    return app.use('/', (req, res) => {
        res.send('server on...')

    })
    
}
module.exports = initRoutes;