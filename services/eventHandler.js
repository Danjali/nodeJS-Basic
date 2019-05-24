const request = require("request");
const dbConnection = require("../services/dbConnection");

const getEventData = (req, res) => {
    let headers = {
        'Content-Type': 'application/json',
    };
    request({
        "url":'https://a63098cf-805e-4a20-9706-0203cb71b1cc.mock.pstmn.io/getEventData',
        "method": 'GET',
        "headers": headers 
        }, function(error, response, body){
        console.log(response);
        if(error) {
            console.log(error);
        } 
        else if(response.statusCode === 200){
          console.log(body);
         res.send(response.body);
        //  dbConnection();
        }
        return response;
});
}
 module.exports = getEventData;
