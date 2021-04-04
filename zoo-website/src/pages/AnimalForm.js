import React, {useState} from "react"
import './Form1.css'

export default function Form1(){
    var [AnimalName, setAnimalName] = useState("")
    var [ID, setID] = useState("")
    var [Breed, setBreed] = useState("")
    var [Species, setSpecies] = useState("")
    var [Diet, setDiet] = useState("")
    var [Sex, setSex] = useState("")
    var [DOB, setDOB] = useState("")

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
