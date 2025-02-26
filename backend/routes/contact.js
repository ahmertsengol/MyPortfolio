const express = require('express');
const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        // Burada e-posta gönderme, veritabanına kaydetme gibi işlemler yapılabilir
        // Şimdilik sadece konsola yazdıralım
        console.log('Contact Form Submission:', {
            name,
            email,
            message,
            timestamp: new Date()
        });

        res.status(200).json({ message: 'Message received successfully' });
    } catch (error) {
        console.error('Error handling contact form:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router; 