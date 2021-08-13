var express = require('express');
const router = express.Router();


router.get("/",(res,req) => {
    res.json({
        message:'connected',
        code : 'connected'
    })
})

module.exports = router;