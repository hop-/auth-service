export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  db: {
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER || 'api',
    password: process.env.DB_PASSWD,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expire: '900s',
  },
});
