export default {
    host: process.env.HOST || 'localhost',
    port: parseInt(<string>process.env.PORT, 10) || 3001,
    simpleArray: process.env.SIMPLE_ARRAY?.split(',') || ['post', 'get', 'put', 'delete'],
    countriesApiUri: 'https://api.jsonbin.io/b/5f69afbe65b18913fc510ce8'
}