import React from "react";
import {Link} from "react-router-dom";

const buckets = (props) => {
    return (

      <div className={"container mm-4 mt-5"}>
          <h3>Buckets</h3>
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
                                      onClick={() => props.onClick(term.id.id)}>
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
                  <h3>Files</h3>
                  <div className={"row"}>
                      <div className={"row"}>
                          <table className={"table table-striped"}>
                              <thead>
                              <tr>
                                  <th scope={"col"}>Name</th>
                                  <th scope={"col"}>DownloadURL</th>
                                  <th scope={"col"}>Type</th>
                                  <th scope={"col"}>File Content ID</th>
                              </tr>
                              </thead>
                              <tbody>
                              {props.files.map((term) => {
                                  return(
                                      <tr>
                                          <td scope={"col"}>{term.name}</td>
                                          <td scope={"col"}>{term.url}</td>
                                          <td scope={"col"}>{term.type}</td>
                                          <td scope={"col"}>{term.fileContentId}</td>
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

export default buckets;