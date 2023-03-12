import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const Employees = ({employees, selectedTeam, handleEmployeeCardClick, handleTeamChange}) => {

  return (
      <main className="container">

          <div className="row justify-content-center mb-3 mt-3">
              <div className="col-6">
                  <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamChange} >
                      <option value="Team A">Team A</option>
                      <option value="Team B">Team B</option>
                      <option value="Team C">Team C</option>
                      <option value="Team D">Team D</option>
                  </select>
              </div>
          </div>


          <div className="row justify-content-center mb-3 mt-3">
              <div className="col-12">
                  <div className="card-collection">
                  {
                      employees.map((employee) =>(
                          <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>

                                <img src={employee.gender === 'female' ? femaleProfile : maleProfile} alt={employee.gender === 'female' ? 'femaleProfile' : 'maleProfile'} className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Full name: {employee.fullName}
                                    </h5>
                                    <p className="card-text">
                                        <b>Designation: </b> {employee.designation}
                                    </p>
                                </div>

                            </div>
                        ))
                    }
                  </div>
              </div>
          </div>
      </main>
  )
}

export default Employees