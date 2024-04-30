import React, { useContext, useEffect } from "react";
import List from "../../components/list/List";
import "./Profile.scss";
import Chat from "../../components/chat/Chat";
import apiRequest from "../../lib/apiRequest";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Profile = () => {
    const navigate = useNavigate();
    const { updateUser, currentUser } = useContext(AuthContext);

    /*useEffect(() => {

        if (!currentUser) {
            navigate("/login")
        }
    }, [currentUser, navigate])
    */
    const handleLogout = async (e) => {
        console.log("handleLogout invoked");
        try {
            const resp = await apiRequest.post("/auth/logout");
            updateUser(null);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        /*currentUser &&*/
        (<div className="profile">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <Link to={"/profile/update"}>
                            <button>Update Profile</button>
                        </Link>
                    </div>
                    <div className="info">
                        <span>
                            Avatar: <img src={currentUser.avatar || "/pet.png"} alt="" />
                        </span>
                        <span>
                            Username: <b>{currentUser.username}</b>
                        </span>
                        <span>
                            E-mail: <b>{currentUser.email}</b>
                        </span>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Add New Post</button>
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
        </div>)
    );
};

export default Profile;
