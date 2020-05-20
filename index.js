const fetch = require("node-fetch");
const fsp = require("fs").promises;
module.exports=function(url,client_id,client_secret,auth,page_start,page_end,page_size){
let doc = { table: []};

async function run() {
    console.log("Fetching and storing data. This may take a while. Please wait...")
    for (let i = page_start; i <= page_end; i++) {

        let data = await fetch(url+'?'+'client_id='+client_id+'&client_secret='+client_secret+'&page='+i+'&page_size='+page_size,{
              method:'GET',
              body:null,
              headers:{authorization: auth}
        }).then(res=>res.json());

        doc.table.push(data);
    }

    await fsp.writeFile("OUTPUT.json",JSON.stringify(doc));
    console.log("Done. Data stored in a file named \"OUTPUT\"");
}

run().catch(err => {
    console.log(err);
});}