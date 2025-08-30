module.exports = {
  PORT: process.env.PORT || 4000,
  DB: {
    PGHOST: process.env.PGHOST || 'localhost',
    PGUSER: process.env.PGUSER || 'admin',
    PGDATABASE: process.env.PGDATABASE || 'ecommerce_project',
    PGPASSWORD: process.env.PGPASSWORD || 'password',
    PGPORT: process.env.PGPORT || 5432
  },
  SESSION_SECRET: process.env.SESSION_SECRET || 'fallback_secret'
};