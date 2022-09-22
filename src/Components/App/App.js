import './App.css';
import React, {Component} from "react";
import {Routes, BrowserRouter as Router, Route} from "react-router-dom";
import Buckets from "../Buckets/BucketList/buckets";
import Companies from "../Companies/companies";
import Header from "../Header/header"
import Register from "../RegisterUser/register"
import EMTCloudService from "../../repository/emtCloudRepository";

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
                            <Route path={"/register"} element={<Register companies={this.state.companies} onRegisterUser={this.registerUser}/>}/>
                            <Route path={"/buckets"} element={<Buckets buckets={this.state.buckets} files={this.state.files} onDelete={this.deleteBucket} onClick={this.loadFiles}/>}/>
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

    registerUser = (fullName, email, password, repeatedPassword, cityAddress, numberAddress, streetAddress, company) => {
        EMTCloudService.registerUser(fullName, email, password, repeatedPassword, cityAddress, numberAddress, streetAddress, company)
            .then(() => {
                this.loadBuckets();
            })
    }

    componentDidMount() {
        this.loadBuckets();
        this.loadCompanies();
    }
}

export default App;
