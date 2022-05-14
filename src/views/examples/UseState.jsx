import React, {useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
    //esse valor q esta no parentes é o estado atual, o segundo é uma funcao q vai alterar o valor
    //so eh possivel alterar o estado do count, chamando a funcao do useState setCount
    const [count, setCount] = useState(0)

    const [name, setName] = useState("assda")
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title={"Exercicio 1"}/>
            <div className="center">
                <span className={"text"}>{count}</span>
                <div>
                    {/*passo uma arrow function para o onClick e dentro dela eu chamo o setCount fazendo a alteracao do valor*/}
                    <button className="btn"
                            onClick={() => setCount(count - 1)}>+1
                    </button>
                    <button className="btn"
                            onClick={() => setCount(count - 1)}>-1
                    </button>

                    {/*é possivel passar uma funcao para dentro do setCount, assim vc tem o valor atual do estado e assim modificar ele*/}
                    <button className="btn"
                            onClick={() => setCount(current => current + 1000)}>+1000
                    </button>
                </div>
            </div>

            <SectionTitle title={"Exercicio 2"}/>
            <div className="center">
                {/*controlled componenet é um component controlado, e ele tem */}
                <input type="text" className="input" value={name}
                onChange={e => setName(e.target.value)}>

                </input>
                {/*esse é um component nao controlado, colocando o undefinied, ou colocando null..mas sugerem colocar o undefined*/}
                <input type="text" className="input" value={undefined} placeholder={"Component nao controlado"}/>
            </div>
        </div>
    )
}

export default UseState
