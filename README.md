# FinanceTracker API

* A robust RESTful API built with **Node.js**, **Express**, and **PostgreSQL** for managing personal finances. 
* This backend serves as the core engine for tracking income, expenses, and generating real-time financial summaries[cite: 3].

## Features
* **Full CRUD Operations**: Create, retrieve, update, and delete financial transactions.
* **Smart Summaries**: Automated calculation of total income, total expenses, current balance, and category-based breakdowns.
* **User Management**: Simple user profile handling (username-based) with JWT authentication support[cite: 15, 22].
* **Data Persistence**: Relational data storage using PostgreSQL to ensure financial data integrity[cite: 12, 15].
* **Secure Middleware**: Integrated authentication layers and centralized error handling[cite: 17, 22].

---

## Live Demo
The Backend API is deployed and ready for testing:  
 **[FinanceTracker API Live URL](https://finance-tracker-backend-36nj.onrender.com)** 

## Technologies Used
* **Node.js**: Backend runtime environment[cite: 10].
* **Express.js**: Web framework for handling RESTful routing[cite: 10].
* **PostgreSQL**: Relational database for persistent storage[cite: 12].
* **Prisma/Sequelize**: (Suggested) ORM for database interaction and migrations.
* **JWT**: Secure JSON Web Token authentication.
* **Dotenv**: Environment variable management.


## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/EphriamHab/finance-tracker-backend.git
cd finance-tracker-backend
```
## 2. Install Dependencies

```bash
npm install
```
## 3. Database Setup

Run migrations to create the necessary tables:

```bash
npx prisma migrate dev --name init
```
## 5. Run the Server

### Development Mode

```bash
npm run dev
```

## Run with Docker

```bash
docker compose up --build .
docker run -p 5000:5000 finance_backend
```

## API Endpoints

###  User & Auth

| Method | Endpoint              | Description                         |
|--------|----------------------|-------------------------------------|
| POST   | `/api/auth/register` | Register a new user profile         |
| POST   | `/api/auth/login`    | Login and receive a JWT             |
| GET    | `/api/users/me`      | Retrieve current user profile info  |

---

###  Transactions

| Method | Endpoint              | Description                              |
|--------|----------------------|------------------------------------------|
| GET    | `/api/transactions`  | Get all transactions for the user        |
| POST   | `/api/transactions`  | Create a new transaction (income/expense) |
| PUT    | `/api/transactions/:id` | Update an existing transaction        |
| DELETE | `/api/transactions/:id` | Delete a transaction                  |

---

###  Summary

| Method | Endpoint       | Description                                         |
|--------|--------------|-----------------------------------------------------|
| GET    | `/api/summary` | Get totals (income, expense, balance) & category data |


##  Deployment on Render
1. Push your code to **GitHub**.  
2. Create a new **Web Service** in [Render](https://render.com/).  
3. Connect your GitHub repo.  
4. Add **Environment Variables** in Render’s dashboard:  
   - `PORT=10000` (Render will auto-assign a port)  
   - `MONGODB_URI` = your MongoDB Atlas connection string  
   - `NODE_ENV=production`  
5. Deploy and get your live API URL.  

---

## 👨‍💻 Author
**Ephrem Habtamu**  
🔗 [GitHub](https://github.com/EphriamHab)
