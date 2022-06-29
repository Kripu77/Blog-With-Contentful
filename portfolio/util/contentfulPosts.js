
let spaceID = "s59oscfk00b4";
let accessT = "VcL6-995jJ8lnJULQ_S27cDHMULZDAVExLHgpNza7Mg";

const {createClient} = require('contentful');

let options = {
  space: spaceID, 
  accessToken: accessT
}

const client = createClient(options)


async function fetchEntries (){

 const data = await client.getEntries()
const items = data.items;
const allItems = items.map((item)=>{

  return item.fields

})

return allItems

}


export default fetchEntries;