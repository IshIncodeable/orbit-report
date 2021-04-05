export class Satellite {
    name: string;
    type: string;
    operational: boolean;
    orbitType: string;
    launchDate: string;

    constructor(name: string, type: string, operational: boolean,  orbitType: string, launchDate: string ) {
        this.name = name;
        this.type = type;
        this.operational = operational;
        this.orbitType = orbitType;
        this.launchDate = launchDate;

    }

    shouldShowWarning(){
        //Part 6: Highlight Space Debris
        /*if ( this.type.toLowerCase() === "space debris") {

        }*/
           
        return (this.type.toLowerCase() === "space debris")
    }
    
}
