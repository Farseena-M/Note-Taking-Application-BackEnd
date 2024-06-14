const User = require("../model/userScheme")
const generateToken = require("../util/generateToken")

const SignUp = async (req, res) => {
    
    try {
        const { name, email, password } = req.body
        const Exist = await User.findOne({ name })
        if (Exist) {
            return res.status(409).json({
                error: 'User already exists'
            })
        }
        const newUser = new User({
            name: name,
            email: email,
            password: password,
        })
        await newUser.save()

        return res.status(201).json({
            status: 'Success',
            data: newUser
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            status: 'Error',
            message: 'Internal server error'
        })
        console.log(error);
    }
}


const Login = async (req, res) => {
    const { email, password } = req.body
    if (!email && !password) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const findUser = await User.findOne({ email }).select('+password')
    if (!findUser || !(await findUser.comparePasswordInDb(password, findUser.password))) {
        return res.status(404).json({ message: 'Incorrect email or password' })
    }

    const token = generateToken(findUser._id)

    return res.status(200).json({
        message: 'Success',
        token,
        findUser
    })
}

module.exports = {
    SignUp,
    Login
}