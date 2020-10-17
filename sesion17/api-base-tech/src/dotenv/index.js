// *** dotenv ****

// objeto base
// console.log(process.env)

// nodos del objeto process.env
console.log(process.env.DB_HOST);
console.log(process.env.JWT_SECRET);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.NODE_ENV);

// código para entornos no productivos
if (process.env.NODE_ENV !== 'production') {
    console.log('Running in development mode')
}