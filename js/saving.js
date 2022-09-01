document.getElementById('saving-btn').addEventListener('click',function(){

    let income = get_value_form_input_Flied('income-id');

    let saving_amout = get_value_form_input_Flied('Savings-id');

    if(saving_amout > 100){
        alert("worng input3");
    }

     // % saving calculation starts here;

     let saving_amount_money = income  * (saving_amout / 100);
    //  console.log(saving_amount_money);

    

    set_value_in_screen_output('saving-amount', saving_amount_money);

    const balance_tag = document.getElementById('balance-id');
    const balance_String = balance_tag.innerText;
    let balance_value = parseFloat(balance_String);

    if(saving_amount_money >  balance_value){
        alert("wrong input2");
    }

    let Remaning_Balance = balance_value - saving_amount_money;
    
    set_value_in_screen_output('remaning-balance',Remaning_Balance);
})