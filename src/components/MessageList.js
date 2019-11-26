import React from 'react'
import { Segment } from 'semantic-ui-react'
import { useSelector } from 'react-redux';

const MessageList = () => {
    const messages = useSelector(state => state.messages);
    return (
        <Segment>
            <h2>All messages</h2>
            <ul style={{listStyleType: 'none', padding: 0}}>
                {messages && messages.map(item => <li key={item.id}><b>{item.author}</b>: {item.message}</li>)}
            </ul>
        </Segment>
    )
}

export default MessageList
