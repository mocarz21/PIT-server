const express = require("express");

const router = express.Router();

const CertificatesControllers = require('./controllers/certificates')
router.get('/certificates', CertificatesControllers.showAll )
router.post('/certificates', CertificatesControllers.save )
router.post('/certificates/:id/remove', CertificatesControllers.remove )

const  ReferencesControllers = require('./controllers/references')
router.get('/references',)
router.post('/references',)
router.post('/references/:id/remove',)





module.exports = router;