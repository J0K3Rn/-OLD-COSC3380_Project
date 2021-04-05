const mysql = require('mysql')

let pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo'
})


exports.createanimal = (req, res) => {
    let query = req.body.data;       //req.data is what was sent to the backend from the frontend
    console.log('Create animal function called')
    //must add async keyword to be able to use await
    pool.getConnection( async function(err, connection) {
        if(err){
            return console.error('error:' + err.message)
        }

        console.log(query)
        //this is what is sent to database, whatever is returned is put into result
        connection.query(query, function(err, result, fields){
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
