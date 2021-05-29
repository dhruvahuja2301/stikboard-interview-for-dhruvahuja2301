import Password from './formComponents/Password';
import Email from './formComponents/Email';
import Name from './formComponents/Name';
import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {}
    }

    render() {
        return (
            <div className="container d-flex justify-content-center align-items-center my-3">
                <div className="row w-100 mt-5 pt-4">
                    <div className="col-md-6 offset-md-3 col-xl-4 offset-xl-4">
                        <div className="card shadow">
                            {/* <img src="https://images.unsplash.com/photo-1502218808493-e5fd26249efc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="" className="card-img-top" /> */}
                            <div className="card-body py-5 mx-3">
                                <h5 className="text-center card-title">Sign Up</h5>
                                <form action="/register" className="mt-3 needs-validation" noValidate method="POST">
                                    <Email />
                                    <Name />
                                    <Password />
                                    <br />
                                    <button className="btn btn-success btn-block">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp