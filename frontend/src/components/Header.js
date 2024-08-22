import React from "react";


function Header(){

    return (
      <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#EBD3F8" }}>
        <div className="container-fluid" >
          <a className="navbar-brand" href="#">
            Student Management System
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/add">
                Add Student
              </a>
              
              <form className="d-flex" role="search" style={{marginLeft: 200}}>
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default  Header;  //exporting the component