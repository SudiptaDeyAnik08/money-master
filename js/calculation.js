function get_value_form_input_Flied(id){
    const tag = document.getElementById(id);
    const String = tag.value;
    const value = parseFloat(String);

    return value;
}


function set_value_in_screen_output(id,value){
    const tag = document.getElementById(id);
    tag.innerText = value;
}

function input_Validation1(variable){
 let a =   isNaN(variable);
   return a;

}

function input_Validation2(variable){
    if(variable < 0){
        return true;
    }
    else{
        return false;
    }
}

document.getElementById('calculate-btn').addEventListener('click',function(){
    let income = get_value_form_input_Flied('income-id');

   

    let food_cost = get_value_form_input_Flied('food-id');

    let rent_cost = get_value_form_input_Flied('rent-id');

    let cloth_cost = get_value_form_input_Flied('cloths-id');

    if(input_Validation1(income) === false && input_Validation1(food_cost) === false && input_Validation1(rent_cost) === false && input_Validation1(cloth_cost) === false  && 
    
    input_Validation2(income) === false && input_Validation2(food_cost) === false && input_Validation2(rent_cost) === false && input_Validation2(cloth_cost) === false
    
    
    ){
       
        
        let total_Expence = food_cost + rent_cost + cloth_cost ;
        
        if(income < total_Expence){
            alert('worng input');
        }


        let balance = income - total_Expence;
    
        set_value_in_screen_output('total-expenses-id',total_Expence);
    
        set_value_in_screen_output('balance-id',balance);
    }
    else{
        alert('Input a number Nothing Else');

    }


  



   
})

