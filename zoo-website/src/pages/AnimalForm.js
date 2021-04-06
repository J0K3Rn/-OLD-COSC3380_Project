import React from "react"
import DataService from "../services/service"
import './Form1.css'


export default class AnimalForm extends React.Component{
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeBreed = this.onChangeBreed.bind(this);
        this.onChangeArrivalDate = this.onChangeArrivalDate.bind(this);
        this.onChangeSpecies = this.onChangeSpecies.bind(this);
        this.onChangeDiet = this.onChangeDiet.bind(this);
        this.onChangeSex = this.onChangeSex.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.isNumeric = this.isNumeric.bind(this);
        this.onChangeCarerID = this.onChangeCarerID.bind(this);
        this.onChangeAttractionName = this.onChangeAttractionName.bind(this);
        
        this.state = {
            Name: "",
            ID: "",
            Breed: "",
            ArrivalDate: "",
            Species: "",
            Diet: "",
            Sex: "",
            DOB: "",
            CarerID: "",
            AttractionName:""
        };
    }
    isNumeric(str){
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
    }

    onChangeName(e) {
        this.setState({
            Name: e.target.value
        });
    }
    onChangeID(e) {
        this.setState({
            ID: e.target.value
        });
    }
    onChangeBreed(e) {
        this.setState({
            Breed: e.target.value
        });
    }
    onChangeArrivalDate(e) {
        this.setState({
            ArrivalDate: e.target.value
        });
    }
    onChangeSpecies(e) {
        this.setState({
            Species: e.target.value
        });
    }
    onChangeDiet(e) {
        this.setState({
            Diet: e.target.value
        });
    }
    onChangeSex(e) {
        this.setState({
            Sex: e.target.value
        });
    }
    onChangeDOB(e) {
        this.setState({
            DOB: e.target.value
        });
    }
    onChangeCarerID(e) {
        this.setState({
            CarerID: e.target.value
        });
    }
    onChangeAttractionName(e) {
        this.setState({
            AttractionName: e.target.value
        });
    }
    handleSubmit(event){
        event.preventDefault()
        if(this.state.Name.length === 0)
            alert("Must put animal name")
        else if(this.state.ID.length === 0)
            alert("Must put ID number")
        else if(!this.isNumeric(this.state.ID))
            alert("ID is not a number")
        else if(this.state.Breed.length === 0)
            alert("Must put breed")
        else if(this.state.ArrivalDate.length === 0)
            alert("Must put Arrival Date")
        else if(this.state.Species.length === 0)
            alert("Must put species")
        else if(this.state.Diet.length === 0)
            alert("Must put diet")
        else if(this.state.Sex.length === 0)
            alert("Must put sex")
        else if(this.state.Sex !== 'M' && this.state.Sex !== 'F')
            alert("Sex must be M or F")
        else if(this.state.DOB.length === 0)
            alert("Must enter DOB")
        else if(this.state.CarerID.length === 0)
            alert("Must put CarerID number")
        else if(this.state.AttractionName.length === 0)
            alert("Must put attractionName")
        else{//all fields are valid
            var values = " VALUES('" + this.state.Name + "', " + this.state.ID + ", '" + this.state.Breed + "', STR_TO_DATE('" + this.state.ArrivalDate + "','%M %d,%Y'), '" + this.state.Species + "' , '" + this.state.Diet + "', '" + this.state.Sex + "', STR_TO_DATE('January 01, 1111','%M %d,%Y'), STR_TO_DATE('" + this.state.DOB + "','%M %d,%Y'), " + this.state.CarerID + ", '" + this.state.AttractionName + "', " + this.state.CarerID + ");"
            var data = "INSERT INTO animal (Name, ID, Breed, ArrivalDate, Species, Diet, Sex, DeceasedDate, DOB, CarerID, Attraction_Name, Employee_ID)"  + values
            //data is the query statement
            // this function is located in file "/services/service.js" and is what calls the backend, the .then specifies this program to wait for that function to return something
            DataService.createAnimal(data)
                .then(response => {

                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    render(){
        return(
            <div class="Form1">
                <h2>New Animal Form</h2>
            <form class="form" id="forms" onSubmit={this.handleSubmit}>
                
                <label>Animal Name</label>
                <input type="text" id="AnimalName" onChange={this.onChangeName}></input>
                
                <label>ID</label>
                <input type="text" id="ID" onChange={this.onChangeID}></input>

                <label>Breed</label>
                <input type="text" id="Breed" onChange={this.onChangeBreed}></input>

                <label>ArrivalDate</label>
                <input type="text" id="Breed" onChange={this.onChangeArrivalDate}></input>
                
                <label>Species</label>
                <input type="text" id="Species" onChange={this.onChangeSpecies}></input>

                <label>Diet</label>
                <input type="text" id="Diet" onChange={this.onChangeDiet}></input>

                <label>Sex</label>
                <input type="text" placeholder="M/F" id="Sex" onChange={this.onChangeSex}></input>

                <label>DOB</label>
                <input type="text" placeholder="##-##-####" id="DOB" onChange={this.onChangeDOB}></input>

                <label>CarerID</label>
                <input type="text" id="Breed" onChange={this.onChangeCarerID}></input>

                <label>AttractionName</label>
                <input type="text" id="Breed" onChange={this.onChangeAttractionName}></input>
                <div classname="buttons">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        )
    }
}

/*
export default function AnimalForm(){
    var [AnimalName, setAnimalName] = useState("")
    var [ID, setID] = useState("")
    var [Breed, setBreed] = useState("")
    var [Species, setSpecies] = useState("")
    var [Diet, setDiet] = useState("")
    var [Sex, setSex] = useState("")
    var [DOB, setDOB] = useState("")

    //checks if string is a number
    function isNumeric(str) {
        return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
               !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
      }

    function handleSubmit(event){
        event.preventDefault()
        if(AnimalName.length === 0)
            alert("Must put animal name")
        else if(ID.length === 0)
            alert("Must put ID number")
        else if(!isNumeric(ID))
            alert("ID is not a number")
        else if(Breed.length === 0)
            alert("Must put breed")
        else if(Species.length === 0)
            alert("Must put species")
        else if(Diet.length === 0)
            alert("Must put diet")
        else if(Sex.length === 0)
            alert("Must put sex")
        else if(Sex !== 'M' && Sex !== 'F')
            alert("Sex must be M or F")
        else if(DOB.length === 0)
            alert("Must enter DOB")
        else
            alert("Form submitted")
    }

    return(
        <div class="Form1">
                <h2>New Animal Form</h2>
            <form class="form" id="forms" onSubmit={handleSubmit}>
                
                <label>Animal Name</label>
                <input type="text" id="AnimalName" onChange={(e) => setAnimalName(e.target.value)}></input>
                
                <label>ID</label>
                <input type="text" id="ID" onChange={(e) => setID(e.target.value)}></input>
                
                <label>Breed</label>
                <input type="text" id="Breed" onChange={(e) => setBreed(e.target.value)}></input>
                
                <label>Species</label>
                <input type="text" id="Species" onChange={(e) => setSpecies(e.target.value)}></input>

                <label>Diet</label>
                <input type="text" id="Diet" onChange={(e) => setDiet(e.target.value)}></input>

                <label>Sex</label>
                <input type="text" placeholder="M/F" id="Sex" onChange={(e) => setSex(e.target.value)}></input>

                <label>DOB</label>
                <input type="text" placeholder="##-##-####" id="DOB" onChange={(e) => setDOB(e.target.value)}></input>
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
*/
