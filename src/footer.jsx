function Footer() {
    return(
<>      

<div className={"project-section p-4"}>
            <div className="row container d-flex p-4 justify-content-center align-items-center">
                <h1>Discover</h1>
                <div className="col mb-4 col-sm-5 col-md-5 col-lg-4">
                  <p> Etiam et id tincidunt faucibus mollis a sociis pretium fermentum quis magna faucibus lacus.</p>
                </div>
                <div className="col mb-4 col-sm-4 col-md-4 col-lg-4">
                <p> MarkeetPlace</p>
                </div>
                <div className="col mb-4 col-sm-4 col-md-4 col-lg-4">
                <p> Company</p>
                </div>
               
                <div className="col mb-4 col-sm-4 col-md-4 col-lg-4">
                <p> Contact</p>
                </div>
            </div>
        </div>
   




        <div className={"bg-dark p-4 text-white"}>
            <p className="text-center">
                copyright @{new Date().getFullYear()} by <a className={"text-white"} target={"_blank"} href="https://www.iba-suk.edu.pk" rel="noreferrer">Gaslur</a>
            </p>
        </div>
        </>

    )
}

export default Footer;