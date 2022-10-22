export default function handler(req, res){
    // res.writeHead(200, {'content-type':'text/html'})
    console.log(req.url)
res.status(200).end("<h1>This API route will spit back all the blogs that are available in the blogs folder </h1>")
}