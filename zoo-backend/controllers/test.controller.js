const mysql = require('mysql')

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo'
})


exports.createanimal = (req, res) => {
    let query = req.data;       //req.data is what was sent to the backend from the frontend

    //must add async keyword to be able to use await
    pool.getConnection( async function(err, connection) {
        if(err){
            return console.error('error:' + err.message)
        }    
        console.log('Create animal function called')

        //this is what is sent to database, whatever is returned is put into result
        connection.query(insert, function(err, result, fields){
            if (err) throw err;
            console.log("Insert was successful")
            //this is what gets sent to the front end
            res.status(200).send({
                message: "Insert was successful"
            })
        })
        connection.release();
    })
};
