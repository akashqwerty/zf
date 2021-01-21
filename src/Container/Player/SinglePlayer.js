import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import formActionCreators from '../../store/CharacterList/action'

const mapDispatchToProps = dispatch => {
    return {
        createTeam: (player, actionType) => dispatch(formActionCreators.validateTeam(player, actionType))
    }
  }

const SinglePlayer = ({player, createTeam}) => {
                return (
                    <div className="col-6 col-md-3" style={{marginTop: 20}}>
                        <div>
                            <span className="capitalize">NAME : {player.name}</span>
                        </div>
                        <div>
                            <span className="id">ID: {player.id}</span>
                        </div>
                        <div>
                            <span className="capitalize">ROLE: {player.role}</span>
                        </div>
                        <div>
                            <span className="id">POINTS: {player.points}</span>
                        </div>
                        <div>
                            <button onClick={() => createTeam(player, 'ADD')}>Add</button>
                            <button onClick={() => createTeam(player, 'REMOVE')}>Remove</button>
                        </div>
                        {/* <div className="metaDetails" style={{backgroundColor: "rgb(51, 47, 47)"}}>
                            <table className="table">
                                <tr>
                                    <td className="text-left text-muted">STATUS </td>
                                    <td className="text-right text-warning">{character.status} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">SPECIES </td>
                                    <td className="text-right text-warning">{character.species} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">GENDER </td>
                                    <td className="text-right text-warning">{character.gender} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">ORIGIN </td>
                                    <td className="text-right text-warning">{character.origin.name} </td>
                                </tr>
                                <tr>
                                    <td className="text-left text-muted">LAST LOCATION </td>
                                    <td className="text-right text-warning">{character.location.name} </td>
                                </tr>
                            </table>
                        </div> */}
                    </div>
                    
                    )
}

export default connect(null, mapDispatchToProps)(SinglePlayer)


