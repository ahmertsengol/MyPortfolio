const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

// Logger utility
const logger = {
    info: (message, data = null) => {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [INFO] ${message}`);
        if (data) console.log('Data:', data);
    },
    success: (message, data = null) => {
        const timestamp = new Date().toISOString();
        console.log('\x1b[32m%s\x1b[0m', `[${timestamp}] [SUCCESS] ${message}`);
        if (data) console.log('Data:', data);
    },
    error: (message, error = null) => {
        const timestamp = new Date().toISOString();
        console.error('\x1b[31m%s\x1b[0m', `[${timestamp}] [ERROR] ${message}`);
        if (error) console.error('Error details:', error);
    }
};

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// Request logging middleware
app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`, {
        headers: req.headers,
        query: req.query,
        body: req.method !== 'GET' ? req.body : undefined
    });
    next();
});

// Routes
app.get('/api/health', (req, res) => {
    logger.success('Health check successful');
    res.json({ status: 'OK', message: 'Server is running' });
});

// Serve frontend
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error('Unhandled error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
    logger.success(`Server is running on port ${PORT}`, {
        environment: process.env.NODE_ENV || 'development',
        port: PORT,
        pid: process.pid
    });
});