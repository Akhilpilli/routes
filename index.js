var fs = require('fs');


var express = require('express');
var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/prime', function(req, res) {
 	var Number = parseInt(req.body.number1);
	var ResponsData = JSON.parse(prime(Number));
	res.json(ResponsData);

});

function prime(Number){
Count = 1;
if(Number > 3){
	if(Number % 2 != 0){
		for(Counter = 3; Number >= (Counter * Counter); Counter += 2){
			if(Number % Counter == 0){
				Count = 0;
			}
		}
	}
	else{
			Count = 0;
	}
}
else{
	Count = 1;
}
if (Count == 1){
	return('{"isprime" : true}');
}
else{
	return('{"isprime" : false}');
}}
app.post('/sum', function(req, res){
	var FirstNumber = parseInt(req.body.number1);
	var SecondNumber = parseInt(req.body.number2);
	var Sum = FirstNumber + SecondNumber;
	var ResponsData = {"Sum" : Sum};
	res.json(ResponsData);
});

app.post('/naturalnumbers', function(req,res){
	var Number = parseInt(req.body.number2);
	var NaturalNumbers = [];
	NaturalNumbers = nNaturalNumbers(Number);
	NaturalNumbers.length = Number;
	var ResponsData = {"naturalnumber" : NaturalNumbers};
	res.json(ResponsData);
});

function nNaturalNumbers(Count){
	var Numbers = [];
	for(var Counter = 0; Counter <= Count; Counter++){
		Numbers[Counter] = Counter + 1;
		}
		return(Numbers);
	}

app.listen(3000, () => {
  console.log('server started');
});
