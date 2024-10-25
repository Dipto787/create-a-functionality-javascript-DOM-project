document.getElementById('show-innertext').addEventListener('click', function(){
    // step 1:- name add
    const accessories=document.getElementById('settexts-one');
    const accessoriesinner=document.getElementById('Accessories-text');
    const accessoriestext=accessoriesinner.innerText;
    accessories.innerText='1.   '+accessoriestext;

    // step 2:- price add
    const settextsprice=document.getElementById('Accessories-price');
    const settextspriceinner= settextsprice.innerText;
    const settextspriceinnermakenumber=parseFloat(settextspriceinner);

    const settextspriceinneraddprice=document.getElementById('total-price');
    const addprice=settextspriceinneraddprice.innerText; 

    settextspriceinneraddprice.innerText=settextspriceinnermakenumber; 
    


})



document.getElementById('card-tow').addEventListener('click', function(){
    // step 1:- name add
    const accessories=document.getElementById('settexts-tow');
    const accessoriesinner=document.getElementById('card-tow-texts');
    const accessoriestext=accessoriesinner.innerText;
    accessories.innerText='2.'+accessoriestext;

    // step 2:- price add
    const settextsprice=document.getElementById('card-tow-price');
    const settextspriceinner= settextsprice.innerText;
    const settextspriceinnermakenumber=parseFloat(settextspriceinner);

    const settextspriceinneraddprice=document.getElementById('total-price');
    const addprice=settextspriceinneraddprice.innerText; 
    
    const settextsprices=document.getElementById('Accessories-price');
    const settextspriceinners= settextsprices.innerText;
    const settextspriceinnermakenumbers=parseFloat(settextspriceinners);
    settextspriceinneraddprice.innerText=settextspriceinnermakenumber+settextspriceinnermakenumbers; 
    


})








document.getElementById('card-theree').addEventListener('click', function(){
    // step 1:- name add
    const accessories=document.getElementById('settexts-theree');
    const accessoriesinner=document.getElementById('card-theree-texts');
    const accessoriestext=accessoriesinner.innerText;
    accessories.innerText='3.'+accessoriestext;

    // step 2:- price add
    const settextsprice=document.getElementById('card-theree-price');
    const settextspriceinner= settextsprice.innerText;
    const settextspriceinnermakenumber=parseFloat(settextspriceinner);

    const settextspriceinneraddprice=document.getElementById('total-price');
    const addprice=settextspriceinneraddprice.innerText; 
    
    const settextsprices=document.getElementById('Accessories-price');
    const settextspriceinners= settextsprices.innerText;
    const settextspriceinnermakenumbers=parseFloat(settextspriceinners);
    settextspriceinneraddprice.innerText=settextspriceinnermakenumber+settextspriceinnermakenumbers+settextspriceinnermakenumber; 
    

     
     
    // const makenumber=parseFloat(addprice);
    console.log(addprice);

    if(addprice>40){
        const abble=document.getElementById('apply-button');
        abble.removeAttribute('disabled');
    }


})




    