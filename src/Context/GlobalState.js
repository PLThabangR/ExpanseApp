import React ,{createContext,useReducer} from 'react';


//initial state
const initialState ={
    transactions:[
        {id:1 ,text: 'Flower', amount: -20},
        {id:2 ,text: 'Salary', amount: 150},
        {id:3 ,text: 'Book',   amount: -10},
        {id:4 ,text: 'Phone', amount: 400}

    ]
}

//Create context
export const GlobalContext = createContext(initialState);

//Provider component to wrap all our components