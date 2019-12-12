import React from 'react';

const Buildings = ({ buildings }) => {
    console.log(buildings);
    let keys = ["buildingname", "buildingzone", "id"]
    
    
    if (!!(buildings.data)) {
        let obj = {};
        buildings.data.items.map((building) => {obj[building.buildingname] = building});
        let sortedBuildings = Object.keys(obj).sort().map(buildingKeyName => obj[buildingKeyName]);
        const displayArray = sortedBuildings.map((building) => {
            let returnArray = Object.keys(building).map(ele => {
                if (keys.includes(ele)) {
                    return (
                <div> {`${ele}: ${building[ele]}`} </div>
                    )}
            })
        return <div><h1>{building.buildingname}</h1>{returnArray}<br /></div>
            })
        return (
            <div>
                <center><h1>Buildings List</h1></center>
                    <div className="card">
                        <div className="card-body">
                            {displayArray}
                        
                            {/* <h5 class="card-title">{contact.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                            <p class="card-text">{contact.company.catchPhrase}</p> */}
                        </div>
                    </div>
            </div>
        )
    } else {
        return <h5>Loading</h5>
    }
};

export default Buildings