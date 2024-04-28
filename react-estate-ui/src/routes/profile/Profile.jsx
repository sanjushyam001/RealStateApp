import React from 'react'
import List from '../../components/list/List';
import "./Profile.scss"
import Chat from '../../components/chat/Chat';
import apiRequest from '../../lib/apiRequest';
import { useNavigate } from 'react-router-dom';
const Profile = () => {
    const navigate = useNavigate();
    const handleLogout = async (e) => {
        console.log("handleLogout invoked");
        try {

            const resp = await apiRequest.post("/auth/logout")
            localStorage.removeItem("user")
            navigate("/")

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='profile'>
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Avatar: <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" alt="" /></span>
                        <span>Username: <b>John Doe</b></span>
                        <span>E-mail: <b>john@gmail.com</b></span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button >Add New Post</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chat">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Profile
