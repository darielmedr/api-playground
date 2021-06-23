export default {
    host: process.env.API_HOST || 'localhost',
    port: parseInt(<string>process.env.API_PORT, 10) || 3001,
    simpleArray: process.env.SIMPLE_ARRAY?.split(',') || ['post', 'get', 'put', 'delete'],
    countriesApiUri: process.env.API_URL || 'https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8'
}