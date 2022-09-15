import { GraphQLString, GraphQLID } from "graphql";    
import { Country } from "../../entities/country";


export const deleteCountry = {
    type:GraphQLString,
    args: {
        id: {type:GraphQLID}
    },
    async resolve(_: any, {id}: any){
        const resultDelete = await Country.delete(id)
        if(resultDelete.affected === 1){
            console.log(resultDelete)
            return 'The country has ben delete'
        }
        else{
           console.log(resultDelete)
           return 'Country not found '
        }
    }
}