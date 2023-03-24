import React, {ChangeEvent} from 'react';

type PropsType = {
    checked: boolean
    callBack: (checked: boolean)=> void
}

export const CheckBox: React.FC<PropsType> = ({checked, callBack}) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>)=>{
        callBack(e.currentTarget.checked)
    }

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={onChangeHandler}/>
        </div>
    );
};
