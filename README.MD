# 🧩 HNG Backend Stage 0 — Dynamic Profile Endpoint

A simple RESTful API endpoint built with **Node.js and Express** that returns user information, the current UTC timestamp, and a random cat fact fetched from an external API.

---

## 🚀 Live Endpoint

👉 **GET** [https://hng-backend0.pxxl.click/me](https://hng-backend0.pxxl.click/me)

---

## 📦 Example Response

```json
{
  "status": "success",
  "user": {
    "email": "promiseduke@gmail.com",
    "name": "Promise Duke",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T00:39:15.393Z",
  "fact": "A cat lover is called an Ailurophilia (Greek: cat+lover)."
}
