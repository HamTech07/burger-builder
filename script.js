let ingredient=document.getElementById('select');
let orderBtn = document.getElementById('orderBtn');
let giveorder= document.getElementById('giveorder');
let ordersLink=document.getElementById('ordersLink');
let logoutLink=document.getElementById('logoutLink');
let summaryIngredients=document.getElementById('summaryIngredients');
let summaryPrice=document.getElementById('summaryPrice');
let backToBuilder=document.getElementById('backToBuilder');
let cancelBtn=document.getElementById('cancelBtn');
let continueBtn=document.getElementById('continueBtn');
let continueOrderBtn=document.getElementById('continueOrderBtn');
const lastDiv = document.querySelector('.last'); 
let sm=document.getElementById('sm');



const finishBtn = document.getElementById('finish'); 
const contactForm = document.getElementById('cf'); 

const email = document.getElementById('email');
const password = document.getElementById('password');
const mainBtn = document.getElementById('mainBtn'); 
const toggleBtn = document.getElementById('toggleBtn');
const titleText = document.getElementById('titleText');
const topError = document.getElementById('topError');
const links = document.querySelectorAll('.links a');
const burgerLink = document.getElementById('burgerLink');
const loginpage = document.getElementById('loginpage');
const burgerBuilder = document.getElementById('burgerBuilder');
const burgerFooter = document.getElementById('burgerFooter');
const burgerHeader = document.getElementById('burgerHeader');
const signinLink = document.getElementById('signinLink'); 
let summaryg=document.getElementById('summaryg');
let summarycrice=document.getElementById('summarycrice');
const taste=document.getElementById('taste');
const orderSummaryModal = document.getElementById('orderSummaryModal');


let builder={
    name:'burger',
    
    salad:{
        qty:0,
        price:30
    },
    bacon:{
        qty:0,
        price:90
    },
    cheese:{
        qty:0,
        price:70
    },
     meat:{
        qty:0,
        price:370
    },
    baseprice:50,

    totalprice: function()
    {
        return this.baseprice
        +(this.salad.qty*this.salad.price)
        +(this.bacon.qty*this.bacon.price)
        +(this.cheese.qty*this.cheese.price)
        +(this.meat.qty*this.meat.price);
    }
};
let total=document.getElementById('price');
total.innerText= 'CURRENT PRICE:   ' + builder.totalprice()  +'RS' ;
let salads=[];
function shows ()
{
  let salaD=document.createElement('div');
salaD.id='salad';
let here=document.getElementById('here!');
 here.appendChild(salaD);

 salads.push(salaD);
ingredient.style.display='none';

builder.salad.qty+=1;
total.innerText= 'CURRENT PRICE: ' + builder.totalprice()  +'RS';

orderBtn.style.backgroundColor='yellow';
giveorder.style.backgroundColor='yellow'; 
}
function hides ()
{
   if (salads.length>0) {
        let lastsalad=  salads.pop();
        lastsalad.remove();     
    } else {
        alert("No salad exists!");
    }

    if(builder.salad.qty>0)
    {
        builder.salad.qty-=1;
    total.innerText= 'CURRENT PRICE: ' + builder.totalprice()  +'RS';
    }

    if(builder.baseprice==builder.totalprice())
    {
        ingredient.style.display='block';
        orderBtn.style.backgroundColor='grey';
        giveorder.style.backgroundColor='grey';
    }
}
let bacons=[];
function showb ()
{
  let bacoN=document.createElement('div');
 bacoN.id='bacon';
 let hereb=document.getElementById('here!');
 hereb.appendChild(bacoN);

 bacons.push(bacoN);
ingredient.style.display='none';

builder.bacon.qty+=1;
total.innerText= 'CURRENT PRICE: ' + builder.totalprice()  +'RS';
orderBtn.style.backgroundColor='yellow';
giveorder.style.backgroundColor='yellow';
}
function hideb ()
{
    if (bacons.length>0) {
        let lastbacon=  bacons.pop();
        lastbacon.remove();     
    } 
    else {
        alert("No bacon exists!");
    }
    if(builder.bacon.qty>0)
    {
        builder.bacon.qty-=1;
    total.innerText= 'CURRENT PRICE:' + builder.totalprice()  +'RS';
    }

    if(builder.baseprice==builder.totalprice())
    {
        ingredient.style.display='block';
        orderBtn.style.backgroundColor='grey';
        giveorder.style.backgroundColor='grey';
    }
    
}
let cheeses=[];
function showc ()
{
  let cheesE=document.createElement('div');
cheesE.id='cheese';
 let herec=document.getElementById('here!');
 herec.appendChild(cheesE);

 cheeses.push(cheesE);
ingredient.style.display='none';


builder.cheese.qty+=1;
total.innerText= 'CURRENT PRICE:' + builder.totalprice()  +'RS';
orderBtn.style.backgroundColor='yellow';
giveorder.style.backgroundColor='yellow';

}
function hidec ()
{

   if (cheeses.length>0) {
        let lastcheese=  cheeses.pop();
        lastcheese.remove();     
    }
    else {
        alert("No cheese exists!");
    }

    if(builder.cheese.qty>0)
    {
        builder.cheese.qty-=1;
    total.innerText= 'CURRENT PRICE:' + builder.totalprice()  +'RS';
    }

    if(builder.baseprice==builder.totalprice())
    {
        ingredient.style.display='block';
        orderBtn.style.backgroundColor='grey';
        giveorder.style.backgroundColor='grey';
    }
}
let meats=[];
function showm ()
{
 let meaT=document.createElement('div');
meaT.id='meat';
 let herem=document.getElementById('here!');
 herem.appendChild(meaT);

 meats.push(meaT);
ingredient.style.display='none';

builder.meat.qty+=1;
total.innerText= 'CURRENT PRICE:' + builder.totalprice()  +'RS';
orderBtn.style.backgroundColor='yellow';
giveorder.style.backgroundColor='yellow';

}
function hidem ()
{
   if (meats.length>0) {
        let lastmeat=  meats.pop();
        lastmeat.remove();     
    } 
    else {
        alert("No meat exists!");
    }

    if(builder.meat.qty>0)
    {
        builder.meat.qty-=1;
    total.innerText= 'CURRENT PRICE:' + builder.totalprice()  +'RS';
    }

    if(builder.baseprice==builder.totalprice())
    {
        ingredient.style.display='block';
        orderBtn.style.backgroundColor='grey';
        giveorder.style.backgroundColor='grey';
    }
}


let mode = "signin";

function validateEmail(emailValue){
    const regex = /^[a-zA-Z0-9._%+-]+@gmail\.[a-z]{2,}$/;
    return regex.test(emailValue);
}

function validatePassword(passValue){
    const regex = /^(?=.*[0-9])(?=.*[#])[A-Za-z0-9#]{8,}$/;
    return regex.test(passValue);
}

email.addEventListener('input', () => {
    if(!validateEmail(email.value)){
        email.classList.add('invalid');
        topError.style.display = "block";
        topError.innerText = "Please enter a valid email! (Must be a valid @gmail address)";
    } else {
        email.classList.remove('invalid');
        topError.innerText = "";
        topError.style.display = "none";
    }
});

password.addEventListener('input', () => {
    if(!validatePassword(password.value)){
        password.classList.add('invalid');
        topError.style.display = "block";
        topError.innerText = "Password must be 8+ chars, contain # and a number!";
    } else {
        password.classList.remove('invalid');
        topError.innerText = "";
        topError.style.display = "none";
    }
});


toggleBtn.addEventListener("click", () => {
    if(mode === "signin") {
        mode = "signup";
        titleText.innerText = "Sign Up";
        mainBtn.innerText = "Sign Up";
        toggleBtn.innerText = "Switch to Sign In";
    } else {
        mode = "signin";
        titleText.innerText = "Sign In";
        mainBtn.innerText = "Sign In";
        toggleBtn.innerText = "Switch to Sign Up";
    }

    topError.innerText = "";
    topError.style.display = "none";
});


mainBtn.addEventListener("click", () => {

    let userEmail = email.value.trim();
    let userPass = password.value.trim();

  
    if(!validateEmail(userEmail)){
        topError.style.display = "block";
        topError.innerText = "Invalid email! (Must be a valid @gmail address)";
        return;
    }

    if(!validatePassword(userPass)){
        topError.style.display = "block";
        topError.innerText = "Invalid password! (Must be 8+ chars, contain # and a number)";
        return;
    }
       
    if(mode === "signup"){
        let savedEmail = localStorage.getItem("savedEmail");

        if(userEmail === savedEmail) {
            topError.style.display = "block";
            topError.innerText = "EMAIL ALREADY EXIST";
            return;
        }

        localStorage.setItem("savedEmail", userEmail);
        localStorage.setItem("savedPass", userPass);
        
        alert("Account Created Successfully! Please Sign In.");
        
        mode = "signin";
        titleText.innerText = "Sign In";
        mainBtn.innerText = "Sign In";
        toggleBtn.innerText = "Switch to Sign Up";
        email.value = ""; 
        password.value = ""; 
        topError.style.display = "none";

    } else { 
         let savedEmail = localStorage.getItem("savedEmail");
        let savedPass = localStorage.getItem("savedPass");

        if(userEmail === savedEmail && userPass === savedPass){
            alert("Login Successful!");
            loginpage.style.display='none';
            burgerBuilder.style.display='block';
            burgerFooter.style.display='flex';
            burgerHeader.style.display='block';
            signinLink.style.display='none';
            logoutLink.style.display='inline'; 
            ordersLink.style.display='inline'; 
            orderBtn.style.display='none';
            giveorder.style.display='block';
            burgerLink.classList.add('active');
            if (builder.totalprice() > builder.baseprice) {
                giveorder.style.backgroundColor = 'yellow';
            } else {
                giveorder.style.backgroundColor = 'grey'; 
            }
            
            
        } else {
            topError.style.display = "block";
            topError.innerText = "Invalid email or password!";
        }
    }
});


window.addEventListener('DOMContentLoaded', () => {
    links.forEach(l => l.classList.remove('active'));
    burgerLink.classList.add('active'); 
});
links.forEach(link => {
    link.addEventListener('click', (e) => {
         if(link.id !== 'signinLink') {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
        else{
             e.preventDefault(); 
          loginpage.style.display='block';
          burgerBuilder.style.display='none';
           burgerFooter.style.display='none';
           burgerHeader.style.display='none';
        }
    });
});
orderBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(builder.totalprice() > builder.baseprice){
        loginpage.style.display='block';
        burgerBuilder.style.display='none';
        burgerFooter.style.display='none';
        burgerHeader.style.display='none';
    } else {
        alert("Add ingredients first!");
    }
});


links.forEach(link => {
    link.addEventListener('click', (e) => {
         if(link.id !== 'ordersLink') {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
        else{
             e.preventDefault(); 
          logoutLink.style.display='none';
          burgerBuilder.style.display='none';
           burgerFooter.style.display='none';
           burgerHeader.style.display='none';
           
           summaryIngredients.innerText='SALAD ('+builder.salad.qty+')'
           +'BACON ('+builder.bacon.qty+')'
           +'CHEESE ('+builder.cheese.qty+')'
           +'MEAT ('+builder.meat.qty+')';
           
           summaryPrice.innerText=builder.totalprice() + 'RS';
           burgerLink.style.display='none';
           ordersLink.style.display='none';
           giveorder.style.display='none';
           ordertaker.style.display='block';
           
        backToBuilder.addEventListener('click', (e) => {
         e.preventDefault();
            loginpage.style.display='none';
            burgerBuilder.style.display='block';
            burgerFooter.style.display='flex';
            burgerHeader.style.display='block';
            signinLink.style.display='none';
            logoutLink.style.display='inline'; 
            ordersLink.style.display='inline'; 
            orderBtn.style.display='none';
            giveorder.style.display='block';
             ordertaker.style.display='none';
              burgerLink.style.display='inline';
              links.forEach(l => l.classList.remove('active'));
            burgerLink.classList.add('active');
          
       });


        }
    });
});
giveorder.addEventListener('click', (e) => {
    e.preventDefault();

    if (builder.totalprice() > builder.baseprice) {
        summaryg.innerText='SALAD ('+builder.salad.qty+')'
           +'BACON ('+builder.bacon.qty+')'
           +'CHEESE ('+builder.cheese.qty+')'
           +'MEAT ('+builder.meat.qty+')';
         
        summarycrice.innerText = builder.totalprice(); 

        
        orderSummaryModal.classList.add('show-modal'); 

    } else {
        alert("Add ingredients first!");
    }
});
cancelOrderBtn.addEventListener('click', () => {
    orderSummaryModal.classList.remove('show-modal'); 
});

continueOrderBtn.addEventListener('click', (e) => {
      e.preventDefault();
      orderSummaryModal.classList.remove('show-modal'); 

      links.forEach(l => l.classList.remove('active'));
      burgerHeader.style.display='block';
      signinLink.style.display='none';
      logoutLink.style.display='inline'; 
      ordersLink.style.display='inline'; 
      burgerLink.style.display='inline';
      burgerBuilder.style.display='block';
      lastDiv.style.display='flex'; 
      burgerFooter.style.display='none'; 
      giveorder.style.display='none'; 
      taste.style.display='block';

});

cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginpage.style.display='none';
    burgerBuilder.style.display='block';
    burgerFooter.style.display='flex'; 
    burgerHeader.style.display='block';
    signinLink.style.display='none';
    logoutLink.style.display='inline'; 
    ordersLink.style.display='inline'; 
    orderBtn.style.display='none';
    giveorder.style.display='block';
    ordertaker.style.display='none';
    burgerLink.style.display='inline';
    links.forEach(l => l.classList.remove('active'));
    burgerLink.classList.add('active');
    lastDiv.style.display='none'; 
      taste.style.display='none';
});


continueBtn.addEventListener('click', (e) => {
    e.preventDefault();
     links.forEach(l => l.classList.remove('active'));
     logoutLink.style.display='inline'; 
    ordersLink.style.display='inline'; 
    burgerLink.style.display='inline';
      taste.style.display='block';
    lastDiv.style.display='none'; 
    burgerBuilder.style.display='none'; 
    sm.style.display='flex'; 
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (finishBtn.classList.contains('active')) {
        alert("Order Completed! Details submitted.");
        
        sm.style.display = 'none';
        burgerBuilder.style.display = 'block';
        burgerFooter.style.display = 'flex'; 
        giveorder.style.display='block';
        
        contactForm.reset(); 
        finishBtn.classList.remove('active');
        finishBtn.disabled = true;
        taste.innerText = ""; 
        
    } else {
        alert("Please fill all required fields before completing the order.");
    }
});


links.forEach(link => {
    link.addEventListener('click', (e) => {
         if(link.id !== 'logoutLink') {
            e.preventDefault();
            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
        else{
             e.preventDefault(); 
          logoutLink.style.display='none';
          burgerBuilder.style.display='block';
           burgerFooter.style.display='flex';
           burgerHeader.style.display='block';
           burgerLink.style.display='inline';
           ordersLink.style.display='none';
           giveorder.style.display='none';
           orderBtn.style.display='block';
            links.forEach(l => l.classList.remove('active'));
            burgerLink.classList.add('active');
            signinLink.style.display='inline';
              taste.style.display='none';
           
        }        
    });

});
const formInputs = [
    document.getElementById('nameInput'),
    document.getElementById('streetInput'),
    document.getElementById('postalCodeInput'),
    document.getElementById('countryInput'),
    document.getElementById('emailInput')
];

const checkFormValidity = () => {
    let allFieldsFilled = true;
    formInputs.forEach(input => {
        if (input.value.trim() === '' || input.checkValidity() === false) {
            allFieldsFilled = false;
        }
    });
    return allFieldsFilled;
};

const inputChangeHandler = () => {
    if (checkFormValidity()) {
        finishBtn.classList.add('active'); 
        finishBtn.disabled = false;
    } else {
        finishBtn.classList.remove('active');
        finishBtn.disabled = true;
    }
};

formInputs.forEach(input => {
    input.addEventListener('input', inputChangeHandler);
});
finishBtn.disabled = true;
