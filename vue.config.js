module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/pet-adoption-project/'
        : '/'
}