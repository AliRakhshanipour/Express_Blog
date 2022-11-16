const { GraphQLObjectType, GraphQLSchema } = require("graphql");
// query , mutation, schema , types
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {},
});
const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {},
});

const graghQLSchema = new GraphQLSchema();
