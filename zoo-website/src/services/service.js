import axios from "axios"

class DataService{
    //this sends "data" to the backend
    createAnimal(data){
        return axios
            .post("http://localhost:8080/api/CreateAnimal", {
                data
            })
    }
}

export default new DataService();