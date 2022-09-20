const app = require("./src/app");
const sequelize = require("./src/db/db");

const main = async () => {
    try {
        await sequelize.authenticate();
    } catch (error) {
        console.log(error)
    }
    app.listen(3001, () => console.log('%server is listening on port 3001'));
}

main();