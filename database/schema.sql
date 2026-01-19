CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name TEXT NOT NULL,
    whatsapp_number TEXT NOT NULL,
    business_need TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
