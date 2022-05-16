import React, {useReducer} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import {numberAdd2} from "../../actions/number";

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0,
}

//vai receber a ultima versao do estado e uma acao,
/*
toda acao vem com um tipo,
o objeto é pegar o estado atual, (inititaState) e para cada acao q acontecer, vc vai evoluindo os atribuidos do initialState

 */
/*
qd
e executado a funcao q foi pasasdo no useReducer, com um action, ela sera chamada

 */
function reducer(state, action) {
    switch (action.type) {
        case 'add2ToNumber':
            return {...state, number: state.number + 2}
        case 'login':
            return {...state, user: {name: action.name  || 'Danilo'}}
        default:
            return state
    }
}

const UseReducer = (props) => {

    //passa a funcao, e o estado atual
    /*
    a funcao dispatch sera a funcao usada nos estados no components, entao qd chamar sera passado o action para a funcao reducer
#78
     */
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                {
                    state.user ? <span className="text">{state.user.name}</span>
                    : <span className="text">Nao Logado</span>
                }

                <button className="btn" onClick={() => dispatch({type: 'login', name: 'Fernandes'})}>Logar</button>

                <span className="text">
                    {state.number}
                </span>
                <div>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
