let express = require('express');
const bodyParser = require('body-parser');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    let num1 = req.query.number1; // this should return 1
    let num2 = req.query.number2; // this should return 2
    let sum = parseInt(num1) + parseInt(num2);
    let obj = {statusCode:200, message:'success', data:sum}

    res.json(obj);
});

app.post('/calculate', (req, res) => {
    const { number1, number2, calType } = req.body;

    let num1 = parseInt(number1);
    let num2 = parseInt(number2);
    let operator = req.body.calType;
    let result;
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 + num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 0;

    }
    let obj = {statusCode:200, message:'success', data:result}

    res.json(obj);
});

app.listen(port, ()=>{
    console.log('server started - 2');
});