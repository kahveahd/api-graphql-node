import { GraphQLString } from "graphql";    
import { Country } from "../../entities/country";
import { countryType } from "../typeDef/country";

export const postCountry = {
    type:countryType,
    args: {
        country_name: {type:GraphQLString},
        city_name: {type:GraphQLString}
    },
    async resolve(_: any, args: any){
        const {country_name,city_name} = args
        if(country_name && city_name){
            const resultPost = await Country.insert({city_name,country_name})
            return {...args,id:resultPost.identifiers[0].id}
        }
        return {...args,id:''}
    }
}