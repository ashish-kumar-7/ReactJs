import React from 'react'

export default function About(props) {
  return (
    <>
    <div className="container" style={{color: props.theme==="dark" ? "white" : "black"}}>
        <h1 className="my-3 p-3">Welcome to About Page</h1>
        <div className="container mt-5 p-3">
            <p className="ml-auto">Hi everyone, Hope you all are good! I am Ashish Kumar.</p>
            <p className="ml-auto"> Thanks for visiting my website</p>
        </div>
    </div>
    </>
  )
}
