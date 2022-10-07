import React from "react";
import {useNavigate} from "react-router-dom";
import CenteredContainer from "../UtilComponents/CenteredContainer";

const register = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [formData, updateFormData] = React.useState({
        fullName : "",
        email : "",
        password : "",
        repeatedPassword : "",
        cityAddress : "",
        numberAddress : "",
        streetAddress : "",
        company : ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()

        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const fullName = formData.fullName
        const email = formData.email
        const password = formData.password
        const repeatedPassword = formData.repeatedPassword
        const cityAddress = formData.cityAddress
        const numberAddress = formData.numberAddress
        const streetAddress = formData.streetAddress
        const company = formData.company

        props.onRegisterUser(fullName, email, password, repeatedPassword, cityAddress, numberAddress, streetAddress, company);
        navigate("/login")
    }

    return(
        <CenteredContainer>
            <h3 style={{textAlign: "center", color: "#00CED1"}}>Register Account</h3>
            <br></br>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">Full name</label>
                        <input type="text"
                               className="form-control"
                               id="fullName"
                               name="fullName"
                               required
                               placeholder="John Doe"
                               style={{height: 100 + "%"}}
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               name="email"
                               placeholder="johndoe@email.com"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                               placeholder="moreCharacters@123"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="repeatedPassword">Repeat Password</label>
                        <input type="password"
                               className="form-control"
                               id="repeatedPassword"
                               name="repeatedPassword"
                               placeholder="moreCharacters@123"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="cityAddress">City Address</label>
                        <input type="text"
                               className="form-control"
                               id="cityAddress"
                               name="cityAddress"
                               placeholder="New York"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="streetAddress">Street Address</label>
                        <input type="text"
                               className="form-control"
                               id="streetAddress"
                               name="streetAddress"
                               placeholder="Times Square"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label htmlFor="numberAddress">Number Address</label>
                        <input type="text"
                               className="form-control"
                               id="numberAddress"
                               name="numberAddress"
                               placeholder="1000"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Company</label>
                        <select name="company" className="form-control" onChange={handleChange}>
                            {props.companies.map((term) =>
                                <option value={term.id.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <br></br>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
        </CenteredContainer>
    )

}

export default register;