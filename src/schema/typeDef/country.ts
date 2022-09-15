import { GraphQLObjectType,GraphQLString,GraphQLID } from "graphql";

export const countryType = new GraphQLObjectType({
    name: "country",
    fields:{
        id: {type: GraphQLID},
        country_name: {type: GraphQLString},
        city_name: {type: GraphQLString}
    }
})