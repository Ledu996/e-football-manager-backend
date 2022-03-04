



const getApropriateAsset = (teamObj, modelArr) => {
    return modelArr.find(({team_id}) => team_id === teamObj.team_id); // {}
}

    
exports.handleTeamStructure = (model) => { // 20 objekata
    let teamStructure = [];

    teamStructure = model[0].map((team, index) => {
    const stadiumObj = getApropriateAsset(model[0][index], model[1]);
    const budgetObj = getApropriateAsset(model[0][index], model[2]);
    const descriptionObj = getApropriateAsset(model[0][index], model[3]);
    const locationObj = getApropriateAsset(model[0][index], model[4]);
    return({
        id : team.team_id,
        name: team.team_name,
        logo: team.team_logo,
        stadium: {
            name: stadiumObj.name,
            capacity: stadiumObj.capacity
        },
        budget  : {
            budget_id: budgetObj.id,              
            transfer_budget: budgetObj.transfer_budget 
        },
        description : {
            nickname: descriptionObj.nickname,       
            descr: descriptionObj.descr            
        },
        location : {
            city: locationObj.name,         
            photo: locationObj.photo          
        }
    })
});
    return teamStructure;
    
}





/*

Code Garbage

let asset;
    for(let i = 0; i < model[0].length; i++) {
        for(let j = 1; j < model.length; j++) {
            asset = getApropriateAsset(model[0][i], model[j]);
             
        }
        teamStructure.push({
            id : model[0][i].team_id,
            name: model[0][i].team_name,
            logo: model[0][i].team_logo,
            stadium: {
                stadium_name: asset.stadium_name,
                stadium_capacity: asset.capacity
            },
            budget  : {
                budget_id: asset.id,              
                tranfer_budget: asset.transfer_budget 
            },
            description : {
                nickaname: asset.nickaname,       
                descr: asset.descr            
            },
            location : {
                city: asset.name,         
                photo: asset.photo          
            }
        })
    }*/
    






