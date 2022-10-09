/**
 * The Server Can be configured and created here...
 * 
 * You can find the JSON Data file here in the Data module. Feel free to impliment a framework if needed.
 */

/*
-- This is the product data, you can view it in the file itself for more details 
{
    "_id": "019",
    "isActive": "false",
    "price": "23.00",
    "picture": "/img/products/N16501_430.png",
    "name": "Damage Reverse Thickening Conditioner",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
        "ojon",
        "conditioner"
    ]
}
*/
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const data      = require('./data');
const hostname  = 'localhost';
const port      = 3035;

app.route('/search').get((req, res) => {
    let { name } = req.query;
    name = name.toLowerCase();
    const result = data.filter(item => item.name.toLowerCase().includes(name));
    res.send(result);
});

app.listen(port, () => {
  console.log(`[Server running on ${hostname}:${port}]`);
});