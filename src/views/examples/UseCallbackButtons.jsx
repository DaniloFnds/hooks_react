import React from 'react';

const UseCallbackButtons = (props) => {
    return (
        <div>
            <button className="btn" onClick={e => props.inc(6)}>+6</button>
            <button className="btn" onClick={e => props.inc(12)}>+12</button>
            <button className="btn" onClick={e => props.inc(18)}>+18</button>
        </div>
    );
};
//ele vai criar um cache desse componenet, ele so vai ser renderizado qd as propriedades mudarem
export default React.memo(UseCallbackButtons);
