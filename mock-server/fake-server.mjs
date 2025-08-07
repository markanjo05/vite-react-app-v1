import jsonServer from "json-server";
import cors from "cors";
import session from "express-session";
import data from "./data.mjs";
import bodyParser from "body-parser";
import crypto from "node:crypto";
import "module-alias/register.js";

import getUsers from "./handlers/sample/users/getUsers.mjs";

const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();

const corsOptions = {
	origin: [
		"http://localhost:8080",
		"http://localhost:5173",
		"http://localhost:5174",
		"http://localhost:4173",
		"http://localhost:3000",
	],
	methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
	allowedHeaders: ["Content-Type", "Authorization", "x-api-key"],
	optionsSuccessStatus: 200,
	credentials: true,
};

server.use(cors(corsOptions));
server.use(middlewares);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(
	session({
		secret: crypto.randomUUID(),
		resave: false,
		saveUninitialized: true,
	})
);

server.get("/api/users", getUsers());

server.use(router);

server.listen(8080, () => {
	console.log("Mock Server is running at port 8080");
});
