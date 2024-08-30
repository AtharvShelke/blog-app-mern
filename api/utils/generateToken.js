import jwt from 'jsonwebtoken';
const secret = 'asdfghjkl'

const generateToken = (res, userId) => {
    const token = jwt.sign({userId}, secret, {expiresIn:'1d'});
    res.cookie('token', token, {
        withCredentials:true,
        httpOnly:false,
    })
}
export default generateToken;