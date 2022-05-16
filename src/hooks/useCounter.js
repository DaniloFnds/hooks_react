import {useState} from 'react';


//dentro dew um custom hook vc pode usar  ouitros hooks
export const useCounter = initialValue => {
    const [count, setCount] = useState(initialValue)

    function inc() {
        setCount(count + 1)
    }

    function dec() {
        setCount(count - 1)
    }

    return [count, inc, dec]
}
