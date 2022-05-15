import React, {useContext} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from "../../data/DataContext";

//uma forma de passar valroes para os componenets de menor nivel na arvore, sem precisar ficar passando entre components
//ehj possivel deixar os valores do context persistente
//ele sempre pega o ultimo valor mais atualizado no contexto
const UseContext = (props) => {

    const context = useContext(DataContext)

    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <div className="center">
                <span className="text">{context.text}</span>
            </div>
        </div>
    )
}

export default UseContext
