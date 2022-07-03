
let spaceID = "s59oscfk00b4";
let accessT = "PbnQIeZOlJB3YuDzCCl3EOaaTC7sEL9uyasQht7vIy4";
// console.log(process.env.NEXT_PUBLIC_SPACEID);
// console.log(process.env.NEXT_PUBLIC_ACCESSTOKEN);

const {createClient} = require('contentful');

let options = {
  space: spaceID, 
  accessToken: accessT
}

const client = createClient(options)


async function fetchEntries (){

 const data = await client.getEntries()
 const items = data.items;
 const fields = items.map((singleField)=>singleField.fields)


 return fields




}


 export default fetchEntries;