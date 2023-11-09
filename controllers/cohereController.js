const getCohereResponse = require("../utils/generatePrompt");

const generateFromPrompt = async(req,res) => {
    try {
        const { prompt } = req.body;
        const prediction = await getCohereResponse(prompt);

        if(!prediction) {
            res.status(500).json({
                message : "Generation unsuccessful",
            })
        }

        res.status(200).json({
            message : "Generation successful",
            prediction
        })
    } catch(error) {
        console.error(error);
        res.status(500).json({
            message : "Error in generation",
            error : error.message
        })
    }
}

module.exports = { 
    generateFromPrompt
};