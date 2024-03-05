
const request = require('request');

function getResult(url) {
    try {

        request(url, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                let str = body;
                let obj = JSON.parse(str);
                if(obj.isError){
                    console.log(url);
                }else{
                    console.log(obj.data.AtomicID);
                }
            } else {
                console.log(error);
            }
        });
        // request.get(url)
        //     .on('response',function (response){
        //         console.log(response.statusCode) // 200
        //         console.log(response.data)
        //         console.log(response.isError)
        //     });
    } catch (error) {
        console.error("Error fetching nonce:", error.message);
        throw error;
    }
}



function findData(){
    let num = 10000;
    for(var i = 99900;i < 99999;i++){
        var url = "https://server.atomicalmarket.com/mainnet/v1/atomical/"+i;
        setTimeout(function(){ getResult(url); }, 2000);
    }

}

findData();
