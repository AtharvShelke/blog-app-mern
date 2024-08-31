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

const deleteToken = (res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });

    console.log('Token Destroyed');
}

export  {generateToken, deleteToken};