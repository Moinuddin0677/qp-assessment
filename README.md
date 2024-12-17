# Grocery Booking API

This project is a backend API for a grocery booking system. It allows users to view available grocery items and book multiple items in a single order. The API is built using Node.js, Express, and PostgreSQL.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
- [Postman Collection](#postman-collection)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Add new grocery items to the system.
- View existing grocery items.
- Remove grocery items from the system.
- Update details (e.g., name, price) of existing grocery items.
- Manage inventory levels of grocery items.
- View the list of available grocery items.
- Book multiple grocery items in a single order.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL
- Docker (optional, for containerization)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/qp-assessment.git
   cd qp-assessment
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up the environment:**

   Create a `.env` file in the root directory and add your PostgreSQL database credentials:

   ```env
   PORT=3000
   DATABASE_URL=postgres://username:password@host:port/database
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

   For development with hot reloading:

   ```bash
   npm run dev
   ```

## Usage

### API Endpoints

#### Admin Endpoints

- **Add a New Grocery Item:**
  - **Endpoint:** `POST /admin/items`
  - **Request Body:**
    ```json
    {
      "name": "Apple",
      "price": 1.5,
      "inventory": 100
    }
    ```

- **View Existing Grocery Items:**
  - **Endpoint:** `GET /admin/items`

- **Remove a Grocery Item:**
  - **Endpoint:** `DELETE /admin/items/:id`

- **Update a Grocery Item:**
  - **Endpoint:** `PUT /admin/items/:id`
  - **Request Body:**
    ```json
    {
      "name": "Orange",
      "price": 2.0,
      "inventory": 150
    }
    ```

- **Manage Inventory Levels:**
  - **Endpoint:** `PUT /admin/items/:id/inventory`
  - **Request Body:**
    ```json
    {
      "inventory": 200
    }
    ```

#### User Endpoints

- **View Available Grocery Items:**
  - **Endpoint:** `GET /user/items`

- **Book Multiple Grocery Items:**
  - **Endpoint:** `POST /user/book`
  - **Request Body:**
    ```json
    {
      "items": [
        {
          "id": 1,
          "quantity": 2
        },
        {
          "id": 2,
          "quantity": 3
        }
      ]
    }
    ```

## Postman Collection

The Postman collection for this project is available in the repository. You can import it into Postman to test the API endpoints.


## Deployment

The application is deployed on Render. You can access the live API at:

- **URL:** [Deployed url](https://qp-assessment-7yt0.onrender.com)

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.
