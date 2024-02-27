export default function handler(req, res) {
   const {method}=req;
   // why get method?
   //The main use case for the GET method is to retrieve data from a server without changing the state of the server or the data on it
   if(method==="GET"){
    const { weight,  weightUnit, unit,heightfeet,heightinch,heightcm } = req.query;

    let finweight = 0;
    let finheight = 0;

    if (weightUnit === 'pounds') {
      finweight = 0.453592 * parseFloat(weight);
    } else if (weightUnit === 'kilograms') {
      finweight = parseFloat(weight);
    }

    // Parse the height back to an object
  

    if (unit === 'feet') {
      finheight = heightfeet * 0.3048;
      finheight += heightinch * 0.0254;
    } else if (unit === 'cm') {
      finheight =heightcm * 0.01;
    }

    let bmivalue = finweight / (finheight * finheight);
    let category;
    let upper;
    let lower;

    if (bmivalue < 18.5) {
      category = "UnderWeight";
    } else if (bmivalue >= 18.5 && bmivalue <= 24.9) {
      category = "Healthy";
    } else if (bmivalue >= 24.9 && bmivalue <= 29.9) {
      category = "OverWeight";
    } else if (bmivalue > 29.9) {
      category = "Obese";
    }

    lower = 18.5 * (finheight) * (finheight);
    upper = 24.9 * (finheight) * (finheight);
    lower = lower.toFixed(0);
    upper = upper.toFixed(0);

    res.status(200).json({ bmi: Number(bmivalue.toFixed(2)), weight: finweight, height: finheight, category, lower, upper });
   }
  }
  