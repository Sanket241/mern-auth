const home = async (req, resp) => {
    try {
        console.log("ROUTER")
        resp.status(200).send("HELLO")

    } catch (error) {
        console.log(error)
    }
}
const register = async (req, resp) => {
    try {
        console.log(req.body);
        console.log("REGISTER")
        resp.status(200).send({message:req.body})
    } catch (error) {
        resp.status(200).send({ msg: "page not found" })

    }
}
// const login = async (req, resp) => {
//     try {
//         console.log("LOGIN")
//         resp.status(200).send("LOGIN")
//     } catch (error) {
//         resp.status(200).send({ msg: "page not found" })

//     }
// }
module.exports = { home, register }