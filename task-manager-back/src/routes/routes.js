const TestRoute = require("./test.route");
const TaskRoute = require("./task.route");
const UserRoute = require("./user.route");

const Routes = {
    "test": TestRoute,
    "task": TaskRoute,
    "user": UserRoute,
}

module.exports = Routes;