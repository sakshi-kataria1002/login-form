const LoginForm = () => {
    return(
        <>
            <div className="container">
                <h1>Login Form</h1>
                    Name: <input type='text' placeholder='Enter your name' /> <br/> <br/>
                    Email: <input type='text' placeholder='abc@gmail.com' /> <br/> <br/>
                    password: <input type='password' placeholder='password' /><br/> <br/>
                    <button>Submit</button>
            </div>
        </>
    )
}

export default LoginForm