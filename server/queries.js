const { Pool } = require("pg");
const pool = new Pool({
	user: "bradabayor",
	host: "localhost",
	database: "api",
	password: "password",
	port: 5432,
	idleTimeoutMillis: 30000
});

pool.on("error", (err, client) => {
	console.error("Unexpected error on idle client", err);
	process.exit(-1);
});

pool.on("connect", () => {
	console.log("connected to the Database");
});

pool.on("remove", () => {
	console.log("client removed");
	process.exit(0);
});

module.exports = {
	pool
};

require("make-runnable");
