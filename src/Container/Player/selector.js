
 const getMyTeam = (state) => {
    let myTeam = []
    const teamIds = state.getPlayerListReducer.team
    const allPlayers = state.getPlayerListReducer.playerList.default
    for(let i=0; i < teamIds.length; i++) {
        const findPlayer = allPlayers.find(player => player.id === teamIds[i].id)
        myTeam = [...myTeam, findPlayer]
    }
    return myTeam
 }

 export {
    getMyTeam
 }