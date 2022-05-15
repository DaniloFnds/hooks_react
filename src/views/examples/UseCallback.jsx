import React, {useCallback, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {

    //forma de memorizar uma funcao, para q nao seja renderizado, e s'o seja renderizado qd modificar a funcao
    //#71
    const [count, setCount] = useState(0)

    //so vai criar a funcao novamente, qd o setCount mudar...pq estou usando o callback do setCount
    useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount])

    function inc(delta) {
    }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">
                    {count}
                </span>
                <div>

                    <UseCallbackButtons inc={inc}/>

                </div>
            </div>
        </div>
    )
}

export default UseCallback
