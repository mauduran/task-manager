const TaskRoute = require("./task.route");
const UserRoute = require("./user.route");

const Routes = {
    "task": TaskRoute,
    "user": UserRoute,
}

module.exports = Routes;