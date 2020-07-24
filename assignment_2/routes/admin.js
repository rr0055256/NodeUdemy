const express = require(`express`);
const path = require(`path`);
const rootDir = require(`../utils/path`);

const router = express.Router();

router.get('/add-product',(req,res,next) =>{
    res.sendFile(path.join(rootDir,'views',`add-product.html`));
});

router.use('/product',(req,res,next) =>{
    console.log(req.body);
    res.redirect(`/admin/add-product`)
});


module.exports = router;