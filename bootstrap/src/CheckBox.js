import React, { useState } from 'react';

const CheckBox =({ CheckBoxes}) => {
    const [checkedState, setCheckedState] = useState(
        new Array(CheckBoxes.length).fill(false)
        
    );
    const handleOnChange = (position) => {

        const updateCheckedState = checkedState.map((item, index) => index === position ? !item:item
        );
        setCheckedState(updateCheckedState);
    };
    return(
        <div>
            {CheckBoxes.map((item, index) => (
                <div key={index}>
                    <label>
                        <input type="checkbox" checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                        />
                        {item}
                    </label>
                    </div>
            ))}
        </div>
    );
};

export default CheckBox;