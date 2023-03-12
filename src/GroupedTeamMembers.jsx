import { useState } from "react"


const GroupedTeamMembers = ({employees, selectedTeam, setTeam}) => {

    const [groupedEmployee, setGroupedEmployee] = useState(groupedTeamMembers())

    function groupedTeamMembers(){

    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10">
                    <header>
                        <h1 className="display-1">
                            Grouped Team Members
                        </h1>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default GroupedTeamMembers