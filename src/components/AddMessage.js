import React from 'react'
import { Segment, Input } from 'semantic-ui-react'
import { useDispatch } from 'react-redux';
import { addMessage} from '../actions';
const AddMessage = () => {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('');

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            dispatch(addMessage(e.target.value, 'Me'));
            setValue('');
        }
    }
    const handleChange = e => setValue(e.target.value);
    
    return (
        <Segment style={{ maxHeight: '70px' }}>
            <Input icon="play" placeholder="Type a message" 
                fluid
                value={value} 
                onChange={handleChange}
                onKeyPress={handleKeyPress}/>
        </Segment>
    )
}

export default AddMessage
