//FIXME: dont need to be a class component

import React from 'react';

const DynamicForm = (props) => {
    return (
        <div>
            <div className={`Dynamic-form ${props.additionalClass}`}>
                {props.model.map((element, index) => (
                    <label key={index}>
                        {element.name}
                        <input type='number' value={element.value} onChange={(e) => props.handleOnChange(e.target.getAttribute('data-key'), e.target.value)} data-key={element.key}/>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default DynamicForm;
