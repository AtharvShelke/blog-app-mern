import jwt from 'jsonwebtoken';

const secret = 'asdfghjkl'

const generateToken = (res, username) => {
    const token = jwt.sign({ username }, secret, {
        expiresIn: '1d'
    });

    res.cookie('token', token, {
        httpOnly: true, // Prevents client-side JS access
        secure: process.env.NODE_ENV === 'production', // Only set for HTTPS in production
        sameSite: 'none', // Strict same-site policy
        domain:'https://blog-app-mern-backend-ci67.onrender.com',
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    });

    console.log('Token Generated:', token);
}

const deleteToken = (res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none',
    });

    console.log('Token Destroyed');
}

export { generateToken, deleteToken };