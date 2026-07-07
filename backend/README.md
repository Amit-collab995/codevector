# CodeVector Backend

A RESTful API for the CodeVector product catalogue, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── controllers/
│   │   └── productController.js # CRUD logic
│   ├── models/
│   │   └── Product.js          # Mongoose schema
│   ├── routes/
│   │   └── productRoutes.js    # Express router
│   ├── scripts/
│   │   └── seed.js             # DB seeder (Faker)
│   ├── app.js                  # Express app config
│   └── server.js               # Entry point
├── .env
├── .gitignore
└── package.json
```

---

## ⚙️ Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment** — edit `.env`:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/codevector
   NODE_ENV=development
   ```

3. **Run in development**
   ```bash
   npm run dev
   ```

4. **Seed the database** (50 fake products)
   ```bash
   npm run seed
   ```

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                          |
|--------|----------------------|--------------------------------------|
| GET    | `/api/products`      | Get all products (with filters)      |
| POST   | `/api/products`      | Create a new product                 |
| GET    | `/api/products/:id`  | Get a single product by ID           |
| PUT    | `/api/products/:id`  | Update a product                     |
| DELETE | `/api/products/:id`  | Delete a product                     |

### Query Parameters for `GET /api/products`

| Param      | Type   | Example             | Description               |
|------------|--------|---------------------|---------------------------|
| `search`   | string | `?search=shoes`     | Search by name            |
| `category` | string | `?category=Books`   | Filter by category        |
| `minPrice` | number | `?minPrice=10`      | Minimum price filter      |
| `maxPrice` | number | `?maxPrice=100`     | Maximum price filter      |
| `page`     | number | `?page=2`           | Page number (default: 1)  |
| `limit`    | number | `?limit=20`         | Items per page (default: 10) |

---

## 🛠️ Scripts

| Command        | Description                        |
|----------------|------------------------------------|
| `npm start`    | Start production server            |
| `npm run dev`  | Start with nodemon (auto-reload)   |
| `npm run seed` | Seed database with 50 fake products|
