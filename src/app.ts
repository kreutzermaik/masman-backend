import server from './server';
import loggerConfig from "./config/logger.config";

const port = parseInt(process.env.PORT || '8080');

const starter = new server().start(port)
    .then(port => console.log(`Server is up and running on port ${port}`))
    .catch(error => {
        console.log(error)
    });

export default starter;
