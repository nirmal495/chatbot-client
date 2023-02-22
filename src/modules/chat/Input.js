import Attachment from '../../Icons/Attachment';
import Send from '../../Icons/Send';

const Input = () => {
    return (
        <div className="inputContainer">
            <input
                type="text"
                name="userMessageInput"
                id="userMessageInput"
                className="userMessageInput"
                placeholder="Type your message..."
            />
            <button>
                <Attachment />
            </button>
            <button>
                <Send />
            </button>
        </div>
    );
};

export default Input;
