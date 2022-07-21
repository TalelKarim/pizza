var fake_database =[]

var identif = document.querySelector('#identifiant');
var Email = document.querySelector('#mail');

var passwd = document.querySelector('#psw');

const sign_up = document.querySelector('.sub');

sign_up.addEventListener('click',(e) => {
    Sign_Up()
})

function Sign_Up(){
   var identifiant = '';
   var mail ='';
   var password = '';

   identifiant = identif.value;
    mail = Email.value;
    password = passwd.value;
   fake_database = [...fake_database,
{
  identifiant: identifiant,
  mail: mail ,
  password: password 
} 
]
console.log(fake_database)
}

function verif(){

    const psw = document.querySelector("#psw").value;
    const psw1 = document.querySelector("#psw1").value;
    console.log(psw,psw1);
    const check = document.querySelector("#check");
    if (psw != psw1 )
    check.textContent="Password No match"; 
    check.style.backgroundColor =  "transparant";
    check.style.boxShadow =  "5px 5px 25px rgba(255,255,255,0.8)";
    check.style.border = "1px solid red";


}

