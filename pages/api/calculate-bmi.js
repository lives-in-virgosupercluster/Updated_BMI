export default function handler(req, res) {
   const {method}=req;
   if(method==="POST"){
    const {weight,height,weightUnit,unit}=req.body;
    let finweight=0;
    let finheight=0;
    if(weightUnit==='pounds'){
        finweight=0.453592*weight;

    }
    if(weightUnit==='kilograms'){
        finweight=weight;
    }
    if(unit==='feet'){
        finheight=height.feet*0.3048;
        finheight+=height.inches*0.0254;
    }
    if(unit==='cm'){
        finheight=height.cm*0.01;
    }
   // console.log(finheight);
   // console.log(finweight);
    let bmivalue=finweight/(finheight*finheight);
   

    res.status(200).json({bmi:Number(bmivalue.toFixed(2)),weight:finweight,height:finheight});
   }
  }
  