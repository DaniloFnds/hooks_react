import React, {useState} from 'react';

const initialState = {
    number: 1234,
    text: 'Context com Hoook'
}
export const AppContext = React.createContext(initialState)

const Store = (props) => {
    const [state, setState] = useState(initialState)

    function updateState(key, novoValue) {
        //faz um spred do state, passando um novo
        setState({
            ...state,
            [key]: novoValue
        })
    }
    return (
        //forma de atualizar apenas oq é necessario no contexto
       <AppContext.Provider value={{
           number: state.number,
           text: state.text,
           setNumber: n => updateState('number', n),
           setText: t => updateState('text', t)
       }}>
           <div>
               {props.children}
           </div>
       </AppContext.Provider>
    );
};

export default Store
