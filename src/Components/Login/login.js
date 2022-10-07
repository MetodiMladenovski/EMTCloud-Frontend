import React from 'react';
import { useNavigate } from 'react-router-dom';
import EMTCloudRepository from "../../repository/emtCloudRepository";
import CenteredContainer from '../UtilComponents/CenteredContainer';
import jwt_decode from "jwt-decode";

const Login = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        EMTCloudRepository.login(formData.username, formData.password).then(resp => {
            const accessToken = resp.headers.authorization;
            const token = accessToken.slice(7);
            const decoded = jwt_decode(token);
            localStorage.setItem("JWT", resp.headers.authorization);
            localStorage.setItem("userId", decoded.id)
            props.onLogin();
            navigate("/companies");
        })

    }

    return (
        <CenteredContainer>
            <h3 style={{textAlign: "center", color: "#00CED1"}}>EMTCloud</h3>
            <h5 style={{textAlign: "center", color: "#00CED1"}}>Login to your account</h5>
            <hr></hr>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Username</label>
                        <input type="text"
                               className="form-control"
                               name="username"
                               required
                               placeholder="Enter username"
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="price">Password</label>
                        <input type="password"
                               className="form-control"
                               name="password"
                               placeholder="Enter password"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="btn btn-primary" >Submit</button>
                </form>
        </CenteredContainer>
    )
}

export default Login;
