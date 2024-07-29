const auth = require('./auth');
const admin = require('./admin');
const category = require('./category');
const product = require('./product');
const initRoutes = (app) => {
    app.use('/api/', auth  );
    app.use('/api/', admin  );
    app.use('/api/', category  );
    app.use('/api/', product)
    return app.use('/', (req, res) => {
        res.send('server on...')

    })
    
}
module.exports = initRoutes;