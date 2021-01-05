import React from 'react';
import c from './../Dialogs.module.css';


const Message = (props) => {
    return(
        <div className={c.message_container}>
            <div className={c.message_author_info_container}>
                <img className={c.dialogImg} src={props.authorAvatar}/>
                {props.author}
            </div>

            <div className={c.message}>{props.message}</div>
        </div>
    )
};


export default Message;