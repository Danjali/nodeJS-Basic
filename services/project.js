const request = require("request");

const postProjectData = (req, res, next) => {
    let data = req.body;
    // let headers = {
    //         'Content-Type': 'application/json'
    //     };
     const base64 = require('base-64'),
      username = 'd930106',
      password = 'asD@1907';
      let headers={
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + base64.encode(username + ':' + password)
    };
    request({
        // url: 'https://2a051b39-ee78-48c3-ae04-8df326acdd13.mock.pstmn.io/rest/api/2/issue/', // Mock URL to hit
        url:'https://jira.ae.sda.corp.telstra.com/rest/api/2/issue/',
        qs: data,
        "body": JSON.stringify(data),
        "method": 'POST',
        "headers": headers 
        }, function(error, response, body){
        console.log(response.statusCode);
        if(error) {
            console.log(error);
        } 
        else if(response.statusCode === 201){
          console.log(body);
          res.send(response.body); 
        }
        return response;
});
}
 module.exports = postProjectData;