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
  
    let bmivalue=finweight/(finheight*finheight);
    let category;
    let upper;
    let lower;
    if(bmivalue<18.5){
      category="UnderWeight";
    }
    else if(bmivalue>=18.5 && bmivalue<=24.9){
      category="Healthy"
   
    }
    else if(bmivalue>=24.9 && bmivalue<=29.9){
      category="OverWeight";
     
      
    }
    else if(bmivalue>29.9){
      category="Obese";
      
    }
    //console.log(bmi);
    
    lower=18.5*(finheight)*(finheight);
    upper=24.9*(finheight)*(finheight);
    lower=lower.toFixed(0);
    upper=upper.toFixed(0);
    console.log(lower);
   

    res.status(200).json({bmi:Number(bmivalue.toFixed(2)),weight:finweight,height:finheight,category,lower,upper});
   }
  }
  