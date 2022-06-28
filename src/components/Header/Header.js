import React from 'react'
const initialState = { email: "", password: "" }

export default function Header() {
   
const handleSubmit = (e)=>{
    e.preventDefault();
}

return (
    <>
        <main>
            <header>
                <main>
                    <div className='py-5 w-100'>
                        <div className="container">
                            {user.email
                                ? <div className="row">
                                    <div className="col text-center">
                                        <h2 className="text-white">User Email: {user.email}</h2>
                                        <h2 className="text-white">User UID: {user.uid}</h2>
                                        <button className="btn btn-danger">Logout</button>
                                    </div>
                                </div>
                                :
                                <div className="row">
                                    <div className="col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                        <div className="card p-2 p-md-4 p-lg-5">
                                            <h2 className="text-center mb-4">Login Form</h2>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <input type="email" className="form-control" placeholder="Email" name='email' onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        <input type="password" className="form-control" placeholder="Password" name='password' onChange={handleChange} />
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
                            }
                        </div>
                    </div>
                </main>
            </header>
        </main>
    </>
)
}
