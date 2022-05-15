import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)


    /*
    use effect é um efeito colateral em um component, q seria fdazer com q altere um component
    sempre q outro for alterado,
    entao passamos para o useEffect uma funcao, q sera responsavel por alterar o component q sofreu o efeito colateral, e
    segundo parametro é o valor(elemento) q precisa ser ouvido para qd é alterado
     */
    useEffect(function () {
        setFatorial(number + 10) // semopre q o valor "number" for alterado,
        // é chamado essa funcao e assim alterado o estado do component setFatorial
    }, [number])


    const [status, setStatus] = useState("impar")

    useEffect(function () {
        setStatus(number % 2 === 0 ? "Par" : "iMpar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title={"Exercico 1"}></SectionTitle>
            <div className="center">
                <div>
                    <span>Fatorial: {fatorial}</span>
                </div>
                <input type="number" className="input" value={number} onChange={e => setNumber(parseInt(e.target.value))}>

                </input>
            </div>
            <SectionTitle title={"Exercico 1"}></SectionTitle>
            <div className="center">
                <span className={"text"}>Status</span>
                <span className={"text"}>{status}</span>
            </div>

        </div>
    )
}

export default UseEffect
