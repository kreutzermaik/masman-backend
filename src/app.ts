import server from './server';

const port = parseInt(process.env.PORT || '20001');

const starter = new server().start(port)
    .then(port => console.log(`Server is up and running on port ${port}`))
    .catch(error => {
        console.log(error)
    });

export default starter;
