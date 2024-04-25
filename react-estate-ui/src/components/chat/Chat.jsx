import React from 'react'
import "./Chat.scss"
const Chat = () => {
    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet.....</p>
                </div>
                <div className="message">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet.....</p>
                </div>
                <div className="message">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet.....</p>
                </div>
                <div className="message">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet.....</p>
                </div>
                <div className="message">
                    <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet.....</p>
                </div>
            </div>
            <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" />
                        John Doe

                    </div>
                    <span className="close">X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Lorem, ipsum....</p>
                        <span> 1 hr ago </span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum....</p>
                        <span> 1 hr ago </span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum....</p>
                        <span> 1 hr ago </span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum....</p>
                        <span> 1 hr ago </span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum....</p>
                        <span> 1 hr ago </span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum....</p>
                        <span> 1 hr ago </span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea ></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Chat
