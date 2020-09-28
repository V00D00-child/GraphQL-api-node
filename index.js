const { ApolloServer, gql } = require('apollo-server');

// Define Schema
const typeDefs = gql`
type Query {
    sessions: [Session]
}
type Session {
    id: ID!,
    title: String!,
    description: String,
    startAt: String,
    endsAt: String,
    day: String,
    format: String,
    track: String,
    level:String
}`

const server = new ApolloServer({ typeDefs });

server
    .listen({ port: process.env.PORT || 4000})
    .then(({ url }) => {
        console.log(`graphQL running at ${url}`);
    });