 const Header = ({selectedTeam, teamMemberCount}) => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <header>
                        <h1 className="display-1">
                            Team Member Allocation
                        </h1>
                        <h3 className="display-5">
                            {selectedTeam} has {teamMemberCount} Members
                        </h3>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Header