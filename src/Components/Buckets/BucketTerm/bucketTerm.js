import React from "react";

const productTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.numberOfFilesInBucket}</td>
        </tr>
    )
}