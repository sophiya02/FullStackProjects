const login = async (req, res)=>{
    res.status(200).send('Fake login register');
}

const dashboard =async (req, res)=>{
    const luckyNumber= Math.random()*100;
    res.status(200).send(`Welcome your lucky number is${luckyNumber}`);
}

module.exports ={
    login, 
    dashboard
}