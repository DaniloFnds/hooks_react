import React, {useContext, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from "../../data/DataContext";
import {AppContext} from "../../data/Store";

//uma forma de passar valroes para os componenets de menor nivel na arvore, sem precisar ficar passando entre components
//ehj possivel deixar os valores do context persistente
//ele sempre pega o ultimo valor mais atualizado no contexto
const UseContext = (props) => {

    const context = useContext(DataContext)

    const {number,text, setNumber, setText} = useContext(AppContext)

    useEffect(function () {
        if(number > 1250) {
            setText('Eitaa')
        }
    }, [number])

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                <span className="text">{number}</span>
                <span className="text">{text}</span>
                <div>
                    <button className="btn" onClick={() => setNumber(number - 1)}>-1</button>
                </div>

                <div>
                    <button className="btn" onClick={() => setNumber(number + 1)}>+1</button>
                </div>

            </div>
        </div>
    )
}

export default UseContext
