/**
 * Here are your Resolvers for your Schema. They must match
 * the type definitions in your scheama
 */

module.exports = {
  Query: {
    pets: (_, { input }, ctx) => {
      if (input) {
        return ctx.models.Pet.findMany({ ...input });
      }

      return ctx.models.Pet.findMany();
    },
    pet: (_, { id }, ctx) => {
      return ctx.models.Pet.findOne({ id: id });
    },
    user: (_, __, ctx) => {
      return ctx.models.User.findOne();
    },
  },
  Mutation: {
    createPet: (_, { input }, ctx) => {
      return ctx.models.Pet.create({ ...input });
    },
  },
  Pet: {
    //   img(pet) {
    //     return pet.type === "DOG"
    //       ? "https://placedog.net/300/300"
    //       : "http://placekitten.com/300/300";
    //   },
    user: (_, __, ctx) => {
      return ctx.models.User.findOne();
    },
  },
  User: {
    pets: (user, __, ctx) => {
      return ctx.models.Pet.findMany({ userId: user.id });
    },
  },
};
