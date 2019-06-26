import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID aa10ef6dff3a9a5ed8f40104b040b2aae8d47c2cff635e80cc61e3fd7d9f2a90'
    }
});