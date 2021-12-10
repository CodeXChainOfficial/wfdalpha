import React, {
    createContext,
    useContext,
    useReducer,
    useCallback,
} from 'react'
import {
    StdFee,
    MsgExecuteContract,
    LCDClient,
    WasmAPI,
    BankAPI,
} from '@terra-money/terra.js'

const StoreContext = createContext()

const initialState = {
    allNativeCoins: [],
    wallet: {},
    managementContractAddress: "terra1058mm88gvwe99lll7m8ar6tyng9ev0ksg4rqxz",
    projectName: "demo1",
    ustBalance: 0,
    projectData: {},
    lcd_client: new LCDClient({
        URL: 'https://tequila-lcd.terra.dev/',
        chainID: 'tequila-0004',
    }),
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'setWallet':
            return {
                ...state,
                wallet: action.message,
            }
        case 'setAllNativeCoins':
            return {
                ...state,
                allNativeCoins: action.message,
            }
        case 'setUstBalance':
            return {
                ...state,
                ustBalance: action.message,
            }
        case 'setManagementContractAddress':
            return{
                ...state,
                managementContractAddress: action.message,
            }
        case 'setProjectName':
            return{
                ...state,
                projectName: action.message,
            }
        case 'setProjectData':
            return{
                ...state,
                projectData: action.message,
            }
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStore = () => useContext(StoreContext)
