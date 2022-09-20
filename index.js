const app = require("./src/app");
const sequelize = require("./src/db/db");
require('./src/models/contacts');

const main = async () => {
    try {
        await sequelize.sync({ force: true });
    } catch (error) {
        console.log(error)
    }
    app.listen(3001, () => console.log('%server is listening on port 3001'));
}

main(); 