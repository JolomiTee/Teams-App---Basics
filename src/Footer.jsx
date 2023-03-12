const Footer = () => {
    var today = new Date();
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <footer>
                        <p className="">Team Member Allocation App {today.getFullYear()}</p>
                    </footer>
                
                </div>
            </div>
        </div>
    )
}

export default Footer