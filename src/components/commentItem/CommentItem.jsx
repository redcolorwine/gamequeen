import React from 'react'
import cmedia from './commentItem.module.css';

const CommentItem = (props) => {
    return (
        <div className={cmedia.commentItem}>
            <p><span>{props.content}</span></p>
            <div className={cmedia.commentAbout}>
                <p>{props.email}</p>
                <p className={cmedia.commentDate}>{props.createdAt}</p>
            </div>

        </div>
    )
}

export default CommentItem