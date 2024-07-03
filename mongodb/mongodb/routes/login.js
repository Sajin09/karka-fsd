

routes.post('/login', async(req, res) => {
    try{
        const {username, password} = req.body;
        let database = await db.getDataBase(); 
        const collection = database.collection('users');
        const user = await collection.findOne({username : username});
        console.log(user);
        if(!user){
            return res.status(400).send("User not found");
        }
       
        var validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return res.status(400).send("Password is incorrect");
        }
        const data = {name : username};
        const accessToken = jwt.sign(data,process.env.ACCESS_TOKEN,{expiresIn:'1h'});
        return res.status(200).json({'accessToken' : accessToken});   
    }
    catch(error){
        console.log(error);
    }
})

const verifyToken = (req , res , next) =>{
    const token = req.body.token;
    if(!token){
        return res.status(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err,user) => {
        if(err){
            return res.status(401)
        }
        req.user = user
        next()  
    })
}


routes.post('/add-products' , verifyToken , (req,res) => {
    console.log(req, "req");
    return res.json()
})