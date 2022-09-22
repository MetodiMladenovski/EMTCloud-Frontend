import React from "react";
import {useNavigate} from "react-router-dom";

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
        const companyId = formData.companyId

        props.onRegisterUser(fullName, email, password, repeatedPassword, cityAddress, numberAddress, streetAddress, companyId);
        navigate("/buckets")
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="fullName">User full name</label>
                        <input type="text"
                               className="form-control"
                               id="fullName"
                               name="fullName"
                               required
                               placeholder="Full name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text"
                               className="form-control"
                               id="email"
                               name="email"
                               placeholder="Email"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                               className="form-control"
                               id="password"
                               name="password"
                               placeholder="Password"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="repeatedPassword">Repeat Password</label>
                        <input type="password"
                               className="form-control"
                               id="repeatedPassword"
                               name="repeatedPassword"
                               placeholder="Repeat Password"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cityAddress">City Address</label>
                        <input type="text"
                               className="form-control"
                               id="cityAddress"
                               name="cityAddress"
                               placeholder="City Address"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numberAddress">Number Address</label>
                        <input type="text"
                               className="form-control"
                               id="numberAddress"
                               name="numberAddress"
                               placeholder="Number Address"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetAddress">Street Address</label>
                        <input type="text"
                               className="form-control"
                               id="streetAddress"
                               name="streetAddress"
                               placeholder="Street Address"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="company" className="form-control" onChange={handleChange}>
                            {props.companies.map((term) =>
                                <option value={term.id.id}>{term.name}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )

}

export default register;