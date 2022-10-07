import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Buckets = (props) => {

    const [enteredBucket, setEnteredBucket] = useState("");

    const [formData, updateFormData] = React.useState({
        name: "",
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }
    const navigate = useNavigate();

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const userId = localStorage.getItem("userId");
        props.onCreateBucket(userId, name);
        navigate("/buckets");
    }
 

    return (

      <div className={"container mm-4 mt-5"}>
          <h3 style={{textAlign: "center", color: "#00CED1"}}>Buckets</h3>
          <br></br>
          <form onSubmit={onFormSubmit}>
          <div className="form-group" style={{width: 15 + "em", display: "inline-block", marginRight: 2 + "em"}}>
                        <label htmlFor="name">Bucket name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder="FirstBucket"
                               onChange={handleChange}
                        />
                    </div>
          <button id="submit" type="submit" className="btn btn-primary" style={{position: "inline"}}>Create Bucket</button>
          </form>
          <br></br>
          <br></br>
          <div className={"row"}>
              <div className={"row"}>
                  <table className={"table table-striped"}>
                      <thead>
                      <tr>
                          <th scope={"col"}>Name</th>
                          <th scope={"col"}>Number of files in bucket</th>
                      </tr>
                      </thead>
                      <tbody>
                      {props.buckets.map((term) => {
                          return(
                              <tr>
                                  <td scope={"col"}>{term.name}</td>
                                  <td scope={"col"}>{term.numberOfFilesInBucket}</td>
                                  <td scope={"col"} className={"text-right"}>
                                      <a title={"Delete"} className={"btn btn-danger"}
                                         onClick={() => props.onDelete(term.id.id)}>Delete</a>
                                  </td>
                                  <td scope={"col"} className={"text-right"}>
                                      <a title={"Enter"} className={"btn btn-danger"}
                                      onClick={() => {
                                        setEnteredBucket(term.id.id)
                                        props.onEnter(term.id.id)}}>
                                          Enter</a>
                                  </td>
                              </tr>
                          )
                      })}
                      </tbody>
                  </table>
              </div>
          </div>

              <div className={"container mm-4 mt-5"}>
                  <h3 style={{textAlign: "center", color: "#00CED1"}}>Files</h3>
                  <br></br>
                  <div className={"row"}>
                      <div className={"row"}>
                          <table className={"table table-striped"}>
                              <thead>
                              <tr>
                                  <th scope={"col"}>Name</th>
                                  <th scope={"col"}>DownloadURL</th>
                                  <th scope={"col"}>Type</th>
                              </tr>
                              </thead>
                              <tbody>
                              {props.files.map((term) => {
                                  return(
                                      <tr>
                                          <td scope={"col"}>{term.name}</td>
                                          <td scope={"col"}>{term.url}</td>
                                          <td scope={"col"}>{term.type}</td>
                                          <td scope={"col"} className={"text-right"}>
                                                <a title={"Delete"} className={"btn btn-danger"}
                                                     onClick={() => props.onDeleteFile(term.id.id, enteredBucket)}>Delete</a>
                                            </td>
                                            <td scope={"col"} className={"text-right"}>
                                                <a title={"Enter"} className={"btn btn-danger"} style={{backgroundColor: "limegreen", borderColor: "green"}}
                                                    onClick={() => props.onDownload(term.id.id, enteredBucket, term.name)}>
                                            Download</a>
                                  </td>
                                      </tr>
                                  )
                              })}
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
    );
}

export default Buckets;