import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../images/login.png";

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="my-auto col-12 col-lg-6">
                        <h2>Login Your Account!!!</h2>
                        <form onSubmit="" className='mt-3'>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email :</label>
                                <div className="col-sm-10">
                                    <input type="email" className="form-control" name="email" onBlur="" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password :</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" name="password" onBlur="" required />
                                </div>
                            </div>

                            <input type="submit" value="Login" className="bg-success px-3 py-2 rounded-3 text-white" />
                        </form>

                        {
                            // isLoading && <div className="d-flex justify-content-center">
                            //     <div className="spinner-border" role="status">
                            //         <span className="visually-hidden">Loading...</span>
                            //     </div>
                            // </div>
                        }

                        {
                            // user?.email && <div className="alert alert-success mt-3" role="alert">
                            //     Login Successful!
                            // </div>
                        }

                        {
                            // authError && <div className="alert alert-danger mt-3" role="alert">
                            //     {authError}
                            // </div>
                        }
                        <h1 className="my-3 textColor fw-bold">or,</h1>

                        <button onClick="" className="btn btn-danger" >Sign In With Google</button>

                        <p className="pt-3 text-dark fw-bold">New to RetroCycle? <Link style={{ color: 'white' }} to="/register">Create an account</Link></p>
                    </div>
                    <div className="my-auto col-12 col-lg-6">
                        <img className='img-fluid' src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;