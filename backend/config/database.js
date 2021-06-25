module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'bunreal'),
        username: env('DATABASE_USERNAME', 'postgres'),
        password: env('DATABASE_PASSWORD', 'huongdangyeu'),
        ssl: env.bool('DATABASE_SSL', false),
        // host: env('DATABASE_HOST', 'postgres.longvb.tech'),
        // port: env.int('DATABASE_PORT', 5432),
        // database: env('DATABASE_NAME', 'bunreal'),
        // username: env('DATABASE_USERNAME', 'yourlight'),
        // password: env('DATABASE_PASSWORD', 'yourlight'),
        // ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
