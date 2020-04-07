import React ,{createContext,useReducer} from 'react';
import AppReducer from './Reducer'
import transaction from '../component/transaction';

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
export const GlobalProvider = ({children}) =>{
 //use reducer to access states and dispatch
    const [state,dispatch] = useReducer(AppReducer,initialState);

//Actions for delete
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
             payload : id  //Any data we wanna send
        })
    }

    //Action add transaction
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload :transaction
        })
    }

    return (<GlobalContext.Provider value ={{
        transactions : state.transactions,
        deleteTransaction,addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
}