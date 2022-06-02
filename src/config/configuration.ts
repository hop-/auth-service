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
    privateKey: process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    publicKey: process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n'),
    expire: '900s',
  },
});
