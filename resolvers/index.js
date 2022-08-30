const Query = require("./query");
const Mutation = require("./mutation");
const Session = require("./sessions");
const User = require("./users");
const Speaker = require("./speakers");
const resolvers = { Query, Mutation, Session, Speaker, User };

module.exports = resolvers;
