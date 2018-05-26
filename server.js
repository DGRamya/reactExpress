const express = require('express');

const app = express();

//create router
app.get('/api/customers', (req,res) => {
    const customers = [
        {id:1, firstName: 'Ramya', lastName:'DG'},
        {id:2, firstName: 'Dhanu', lastName:'DG'},
        {id:3, firstName: 'Gaanvi', lastName:'DG'},

    ];
    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
