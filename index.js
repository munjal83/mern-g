const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const { MONGODB } = require('./config')
const resolvers = require('./graphql/resolvers')
const typeDefs = require('./graphql/typeDefs')

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req })
});

mongoose.connect(MONGODB, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    return server.listen({ port: 5000 })
}).then(res => {
    console.log(`Server running at ${res.url}`)
})
