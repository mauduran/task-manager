const TestSchema = require("../models/test.model");
let counter = 1;

class TestController {
    createTestAction = async (req, res) => {
        let newTestObj = {
            value: counter,
        };
    
        console.log("CREATE");
        let newTest = TestSchema(newTestObj);
    
        try {
            let savedDoc = await newTest.save();
            res.status(201).json({
                success: true,
                test: savedDoc,
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                error: "Unable to process request",
            })
        }  
    }

    getTestActions = async (req, res) => {
        try {
            let tests = await TestSchema.find();
            res.status(200).json({
                success: true,
                tests,
            })
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                error: "Unable to process request",
            })
        }
    }
}

module.exports = new TestController();