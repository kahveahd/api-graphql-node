import { GraphQLList } from "graphql";
import { Country } from "../../entities/country";
import { countryType } from "../typeDef/country";

export const get_all_countries = {
    type: new GraphQLList(countryType),
    async resolve() {
        return  await Country.find()
    }
}