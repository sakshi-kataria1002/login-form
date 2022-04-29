import { USER_ACTION_TYPES } from "./user.type"

//To validate the values entered are valid or not
export const getValues = (inputs) => {
    return(
        {
            type:USER_ACTION_TYPES.GET_VALUES,
            payload: inputs
        }
    )
}

