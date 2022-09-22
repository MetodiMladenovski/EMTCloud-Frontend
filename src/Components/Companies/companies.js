import React from "react";

const companies = (props) => {
    return(
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <div className={"row"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>City</th>
                            <th scope={"col"}>Street</th>
                            <th scope={"col"}>Number</th>
                            <th scope={"col"}>Number of employees in company</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.companies.map((term) => {
                            return(
                                <tr>
                                    <td>{term.name}</td>
                                    <td>{term.address.city}</td>
                                    <td>{term.address.street}</td>
                                    <td>{term.address.number}</td>
                                    <td>{term.numberOfEmployees}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default companies;