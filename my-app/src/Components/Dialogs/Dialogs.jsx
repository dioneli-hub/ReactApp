import React from 'react';
import c from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                <div className={c.dialog}>
                    Diana
                </div>
                <div className={c.dialog + ' ' + c.active}>
                    Vadim
                </div>
                <div className={c.dialog}>
                    Yana
                </div>
                <div className={c.dialog}>
                    Nastya
                </div>
            </div>
            <div className={c.messages}>
                <div className={c.message}>Hi</div>
                <div className={c.message}>Hi, how are u?</div>
                <div className={c.message}>GREAT!!!</div>
            </div>
        </div>
    )
};

export default Dialogs;