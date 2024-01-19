// zod ki madat se schema kiya hai usko validate to karna padega na mere bhai 
// const schema = require('../validators/auth-validator')

const validate = (schema) => async (req, resp, next) => {
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        const message ='Failed the input properly'
        const status = 422;
        const extraDetaile = err.errors[0].message;
        const error={
            status,
            message,
            extraDetaile
        }
        // const message = err.errors[1].message;
        // const message = err.errors[2].message;
        // const message = err.errors[3].message;
        // const message = err.errors[4].message;
        console.log(error);
        next(error);
        // resp.status(400).json({ msg: message })
    }

}
module.exports = validate;