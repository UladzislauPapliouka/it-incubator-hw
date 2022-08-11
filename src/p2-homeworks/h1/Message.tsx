import React from 'react'
import MessageStyles from "./Message.module.scss"

interface Props {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: Props) {
    return (
        <div className={MessageStyles.message}>

            <img className={MessageStyles.userAvatar} src={props.avatar} alt="User Avatar"/>
            <div className={MessageStyles.textBlock}>
                <div className={MessageStyles.messagePointer}/>
                <span className={MessageStyles.userName}>{props.name}</span>
                <div className={MessageStyles.messageText}>{props.message}
                    <span className={MessageStyles.messageTime}>{props.time}</span>
                    <div className={MessageStyles.messageTimeMask}/>
                </div>

            </div>
        </div>
    )
}

export default Message
