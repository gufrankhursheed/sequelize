import User from "../model/user.model.js"

const createUser = async(req, res) => {
    try {
        const user = await User.create(req.body)
        return res.status(200).json({message: "User created", user})
    } catch (error) {
        console.log("Error creating user:", error)
    }
}

export {
    createUser
}