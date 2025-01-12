const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    pets: [Pet]
  }

  enum PetType {
    CAT
    DOG
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String!
    user: User
  }

  input PetInput {
    name: String
    type: String
  }

  type Query {
    pets(input: PetInput): [Pet]!
    pet(id: ID!): Pet
    user: User
  }

  input CreatePetInput {
    name: String!
    type: String!
  }

  type Mutation {
    createPet(input: CreatePetInput!): Pet!
  }
`;

module.exports = typeDefs;
