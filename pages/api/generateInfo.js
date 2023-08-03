// Create a controller with the following specifications:

// 1. import the Configuration class and the OpenAIApi class from the openai npm module
// 2. create a new configuration object that includes the api key and uses the Configuration class from the openai module
// 3. create a new instance of the OpenAIApi class and pass in the configuration object
// 4. create an async function called generateInfo that accepts a request and response object as parameters
// 5. use try to make a request to the OpenAI completion api and return the response
// 6. use catch to catch any errors and return the error include a message to the user
// 7. export the generateInfo function as a module

// import the Configuration class and the OpenAIApi class from the openai npm module
const { Configuration, OpenAIApi } = require('openai');

// create a new configuration object that includes the api key and uses the Configuration class from the openai module
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
    basePath: 'https://api.openai.com/v1',
});

// create a new instance of the OpenAIApi class and pass in the configuration object
const openai = new OpenAIApi(configuration);

// create an async function called generateInfo that accepts a request and response object as parameters

const generateInfo = async (req, res) => {
    // use try to make a request to the OpenAI completion api and return the response
    try {
        const response = await openai.completions.create({
            engine: 'davinci',
            prompt: 'This is a course about',
            maxTokens: 60,
            temperature: 0.9,
            topP: 1,
            presencePenalty: 0,
            frequencyPenalty: 0,
            bestOf: 1,
            n: 1,
            stream: false,
            stop: ['\n'],
        });

        // return the response
        res.status(200).json(response.data);
    } catch (error) {
        // use catch to catch any errors and return the error include a message to the user
        res.status(500).json({ error: error.message });
    }
}

// export the generateInfo function as a module
module.exports = generateInfo;
