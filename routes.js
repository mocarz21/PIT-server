const express = require("express");

const router = express.Router();

const CertificatesControllers = require('./controllers/certificates')
router.get('/certificates/', CertificatesControllers.showAll )
router.post('/certificates', CertificatesControllers.save )
router.post('/certificates/:id/remove', CertificatesControllers.remove )






module.exports = router;