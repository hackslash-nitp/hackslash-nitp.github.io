export default function Members(req, res){
    const url = process.env.FIREBASE_DB_URL + "/members.json?apiKey=" + process.env.FIREBASE_API_KEY;
    if(req.method === 'GET'){
        fetch(url)
        .then(response => response.json())
        .then(data => res.status(200).json(data))
    }else{
        res.json("Invalid request")
    }
}
