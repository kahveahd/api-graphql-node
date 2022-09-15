import { GraphQLString, GraphQLID } from "graphql";    
import { Country } from "../../entities/country";

export const putCountry = {
    type:GraphQLString,
    args: {
        id: {type: GraphQLID},
        country_name: {type:GraphQLString},
        city_name: {type:GraphQLString}
    },
    async resolve(_: any, args: any){
        const {id, country_name,city_name} = args
        const resultUpdate = await Country.update({id},{country_name,city_name})
        if(resultUpdate.affected === 1){
            console.log(resultUpdate)
            return 'The country has ben updated'
        }
        else{
           console.log(resultUpdate)
           return 'Country not found '
        }
    }
}