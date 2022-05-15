import React, {useEffect, useRef, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {

    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")
    /*
    ele retorna sempre a msm referencial do objeto.
    ,ele tem uma variavel chamada current, q sempre vai retornar o objeto
    qd o ref é alterado, nao é necessario rendereizar o component...

    vc pode alterar o valor do current, sem precisar atualizar o component
     */
    const count = useRef(0)
    //isso nao vai causar uma nova renderizacao, causado pelo loop do estado..mas sempre q causar a renderizacao do component
    count.current = count.current + 1;

    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    //pode ser colocado dentro d eum useEffect, para qd é apenas o valor alterado
    useEffect(function () {
        count.current = count.current + 1;
        myInput2.current.focus()
    }, [value1])

    useEffect(function () {
        count.current = count.current + 1;
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title={"Exercicio 1"}/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value1}</span>
                    <span className="text red">{count.current}</span>
                </div>
                {/*podemos colocar o ref do elemento para uma varivel, podemos acessar o elemento*/}
                <input type="text" className="text" value={value1} onChange={e => setValue1(e.target.value)}
                       ref={myInput1}/>
            </div>
            <SectionTitle title={"Exercicio 1"}/>
            <div className="center">
                <input type="text" className="text" value={value2} onChange={e => setValue2(e.target.value)} ref={myInput2}/>
            </div>

        </div>

    )
}

export default UseRef
