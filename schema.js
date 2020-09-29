const { gql } = require('apollo-server');

// Define Schema
module.exports = gql`
type Query {
    sessions(
        id: ID
        title: String
        description: String
        startAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String 
        level:String
    ): [Session],
    sessionById(id: ID): Session,
    speakers: [Speaker],
    speakerById(id: ID): Speaker
}

type Speaker {
    id: ID!
    bio: String
    name: String
    sessions: [Session]
}

type Session {
    id: ID!
    title: String!
    description: String
    startAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String 
    @deprecated(
        reason:"Too many seesion do not fit into a single track, we will be mirating to a tags based system the future..."
        )
    level:String
    speakers: [Speaker]
}`;