import jwt from 'jsonwebtoken';

const secret = 'asdfghjkl'

const generateToken = (res, username)=>{
    const token = jwt.sign({username}, secret, {
        expiresIn:'1d'
    });
    res.cookie('token', token, {
        httpOnly:true,
        
        maxAge: 1000 * 60 * 60 *24
    })
    console.log('Token Generated:', token);
}

export default generateToken;