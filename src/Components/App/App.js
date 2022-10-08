import './App.css';
import React, {Component} from "react";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Buckets from "../Buckets/BucketList/buckets";
import Companies from "../Companies/companies";
import Header from "../Header/header"
import Register from "../RegisterUser/register"
import EMTCloudService from "../../repository/emtCloudRepository";
import Login from '../Login/login';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            buckets: [],
            companies: [],
            files: [],
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className={"container"}>
                        <Routes>
                            <Route path={"/"} element={<Login onLogin={this.fetchData}/>}/>
                            <Route path={"/login"} element={<Login onLogin={this.fetchData}/>}/>
                            <Route path={"/register"} element={<Register companies={this.state.companies} onRegisterUser={this.registerUser}/>}/>
                            <Route path={"/buckets"} element={<Buckets buckets={this.state.buckets} files={this.state.files} 
                            onDelete={this.deleteBucket} 
                            onEnter={this.loadFiles} 
                            onDeleteFile={this.deleteFile} 
                            onDownload={this.downloadFile}
                            onCreateBucket={this.createBucket}
                            onUpload={this.uploadFile}/>}/>
                            <Route path={"/companies"} element={<Companies companies={this.state.companies}/>}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        )
    }

    loadBuckets = () => {
        EMTCloudService.fetchBuckets()
            .then((data) => {
                this.setState({
                    buckets: data.data
                })
            })
    }

    loadCompanies = () => {
        EMTCloudService.fetchCompanies()
            .then((data) => {
                this.setState({
                    companies: data.data
                })
            })
    }
    loadFiles = (id) => {
        EMTCloudService.fetchFilesInBucket(id)
            .then((data) => {
                this.setState({
                    files: data.data,
                })
            })
    }

    deleteBucket = (bucketId) => {
        EMTCloudService.deleteBucket(bucketId)
            .then(() => {
                this.loadBuckets();
            })
    }
    createBucket = (userId, name) => {
        EMTCloudService.createBucket(userId, name)
            .then(() => {
                this.loadBuckets();
            })
    }

    deleteFile = (fileId, bucketId) => {
        EMTCloudService.deleteFile(fileId)
            .then(() => {
                this.loadFiles(bucketId);
                this.loadBuckets();
            })
    }

    registerUser = (fullName, email, password, repeatedPassword, cityAddress, numberAddress, streetAddress, company) => {
        EMTCloudService.registerUser(fullName, email, password, repeatedPassword, cityAddress, numberAddress, streetAddress, company)
            .then(() => {
                this.loadBuckets();
            })
    }

    downloadFile = (fileId, bucketId, fileName) => {
        EMTCloudService.downloadFile(fileId)
            .then((resp) => {
                const url = window.URL.createObjectURL(new Blob([resp.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", fileName);
                document.body.appendChild(link);
                link.click();
                this.loadBuckets();
                this.loadFiles(bucketId);
            })
    }
    uploadFile = (data, bucketId) => {
        EMTCloudService.uploadFile(data, bucketId)
            .then((resp) => {
                console.log(resp.data)
                this.loadBuckets();
                this.loadFiles(bucketId);
                alert("File uploaded successfully")
            })
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () =>  {
        this.loadBuckets();
        this.loadCompanies();
    }
}

export default App;
