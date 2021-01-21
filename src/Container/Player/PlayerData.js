import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import SinglePlayer from './SinglePlayer'
import { getMyTeam } from './selector'

const mapStateToProps = state => {
    return {
        PlayerList: state.getPlayerListReducer.playerList.default,
        myTeam: getMyTeam(state),
        error: state.getPlayerListReducer.error
    };
  };
const PlayerData = ({PlayerList, myTeam, error}) => {
    return(
        <>
        {error !== '' && <div style={{backgroundColor: 'red'}}><strong>{error}</strong></div>}
            <div className="row" style={{marginTop: 20}}>
                {
                    PlayerList && PlayerList.length > 0 && PlayerList.map(player => {
                        return (
                            <SinglePlayer player={player} key={player.id}/>
                        )
                    })
                }
            </div>
            <h2>MY TEAM</h2>
            <div>
            {
                    myTeam && myTeam.length > 0 && myTeam.map(player => {
                        return (
                            <SinglePlayer player={player} key={player.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}

PlayerData.propTypes = {
    PlayerList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        role: PropTypes.string,
        points: PropTypes.string,
      }))
  }
export default connect(mapStateToProps, null)(PlayerData)


