import { GraphQLSchema,GraphQLObjectType } from "graphql";
import { get_all_countries } from "./queries/getCountry";
import { postCountry } from "./mutations/postCountry";
import { putCountry } from "./mutations/putCountry";
import { deleteCountry } from "./mutations/deleteCountry";

const getCountryQuery = new GraphQLObjectType({
    name:'getCountry',
    fields:{
        getCountry:get_all_countries
    }
})

const CountryMutation = new GraphQLObjectType({
    name:'CountryMutation',
    fields:{
        postCountry:postCountry,
        putCountry:putCountry,
        deleteCountry:deleteCountry
    }
})

export const schema = new GraphQLSchema({
    query:getCountryQuery,
    mutation:CountryMutation
})