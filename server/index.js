const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
const allServer = conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server iniciado en el puerto ${process.env.PORT}`);
  });
});

module.exports = { allServer };
