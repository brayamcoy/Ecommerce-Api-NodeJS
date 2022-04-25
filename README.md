# Commands

# Create migrations
npx sequelize-cli db:migrate

# Undo migrations
npx sequelize-cli db:migrate:undo:all

# Create seeds
npx sequelize-cli db:seed:all

# Undo seeds 
npx sequelize-cli db:seed:undo:all

# Env vars
PORT
DB_USERNAME
DB_DIALECT
DB_PASSWORD
DB_HOST
DB_DATABASE
API_VERSION
JWT_SECRET
NODEMAILER_HOST
NODEMAILER_PORT
NODEMAILER_USER      
NODEMAILER_PASSWORD
STRIPE_KEY