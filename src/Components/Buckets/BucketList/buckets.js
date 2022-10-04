import React, { useState } from "react";
import {Link} from "react-router-dom";

const Buckets = (props) => {
    const [enteredBucket, setEnteredBucket] = useState("");

    return (

      <div className={"container mm-4 mt-5"}>
          <h3 style={{textAlign: "center", color: "#00CED1"}}>Buckets</h3>
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
                                                <a title={"Enter"} className={"btn btn-danger"}
                                                    onClick={() => props.onDownload(term.id.id)}>
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