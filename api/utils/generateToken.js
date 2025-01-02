import jwt from 'jsonwebtoken';

const secret = 'asdfghjkl'

const generateToken = (res, username) => {
    const token = jwt.sign({ username }, secret, {
        expiresIn: '1d'
    });

    res.cookie('token', token, {
        httpOnly: true, // Prevents client-side JS access
        secure: true, // Only set for HTTPS in developement
        sameSite: 'None',
        domain:'blogappmern-azure.vercel.app.com',
        maxAge: 1000 * 60 * 60 * 24 // 1 day
    });

    console.log('Token Generated:', token);
}

const deleteToken = (res) => {
    res.clearCookie('token', {
        httpOnly: true,
        secure:true,
        sameSite: 'None',
    });

    console.log('Token Destroyed');
}

export { generateToken, deleteToken };