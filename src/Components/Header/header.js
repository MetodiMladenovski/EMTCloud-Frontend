import React from "react";
import {Link} from 'react-router-dom';

const header = (props) => {

    let authenticate
    let register
    let buckets
    let companies
    let emtcloud
    if (localStorage.getItem("JWT")) {
        authenticate = (<a className="btn btn-outline-info my-2 my-sm-0"
                                onClick={() => localStorage.removeItem("JWT")} href="/">Logout</a>);
        register = (<div></div>);
        buckets = (<Link className="nav-link" to={"/buckets"}>Buckets</Link>)
        companies = (<Link className="nav-link" to={"/companies"}>Companies</Link>)
        emtcloud = (<a style={{marginLeft: 10 + "em"}} className="navbar-brand" href="/buckets">EMTCloud</a>)


    } else {
        authenticate = (<Link className="btn btn-outline-info my-2 my-sm-0" to={"/"}>Login</Link>);
        register = (<Link className="btn btn-outline-info my-2 my-sm-0" to={"/register"}>Register</Link>);
        buckets = (<Link className="nav-link" to={"/"}>Buckets</Link>)
        companies = (<Link className="nav-link" to={"/"}>Companies</Link>)
        emtcloud = (<a style={{marginLeft: 10 + "em"}} className="navbar-brand" href="/">EMTCloud</a>)
    }



    return (
        <header>
            <nav style={{ borderRadius: 2 + "em"}} className="navbar navbar-expand-md navbar-light navbar-fixed bg-light">
                {emtcloud}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto" style={{marginRight: 40 + "em"}}>
                        <li className="nav-item active">
                            {buckets}
                        </li>
                        <li className="nav-item active">
                            {companies}
                        </li>

                    </ul>
                    <form className="form-inline mt-2 mt-md-0 ml-3">
                        {authenticate}
                    </form>
                    <form style={{marginLeft: 1 + "em"}} className="form-inline mt-2 mt-md-0 ml-3">
                        {register}
                    </form>
                </div>
            </nav>
        </header>
    )
}

export default header;