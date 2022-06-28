import React from 'react'


export default function Header() {

    return (
        <>

            <header>
                <main>
                    <div className='py-5 w-100'>
                        <div className="container">

                            <div className="row">
                                <div className="col text-center">
                                    <h2 className="text-white">User Email: </h2>
                                    <h2 className="text-white">User UID: </h2>
                                    <button className="btn btn-danger">Logout</button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                    <div className="card p-2 p-md-4 p-lg-5">
                                        <h2 className="text-center mb-4">Login Form</h2>
                                        <form >
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <input type="email" className="form-control" placeholder="Email" name='email' />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col">
                                                    <input type="password" className="form-control" placeholder="Password" name='password' />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col text-center">
                                                    <button className='btn btn-outline-success w-50'>Login</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </header>
        </>
    )
}
