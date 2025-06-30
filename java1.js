let docs;
let x;
let y;
function create()
{
    docs=
    {
        nam: document.getElementById('name').value,
        number:document.getElementById('number').value,
        address:document.getElementById('address').value,
        email:document.getElementById('e-mail').value,
        password:document.getElementById('password').value,
    }
    if(docs.nam&&docs.number&&docs.email&&docs.password){
    x=localStorage.setItem('profile1',JSON.stringify(docs));
    alert('Profile created!!')
    document.querySelector('#profiles').innerHTML=`<button onclick="showprofile1()">View</button><br><br>`;
    }
    else{
        alert('Please fill all details!!')
    }
}
function showprofile1()
{
    document.getElementById('content').innerHTML=`<p>Name: ${docs.nam}</p><p>Number: ${docs.number}</p><div>Address: ${docs.address}</div><p>E-mail: ${docs.email}</p><p>Password: ${docs.password}</p><br>`;  
}
function backtologin()
{
    window.location.href="index1-1.html"
}
function login()
{
    const nam1=document.getElementById('name1').value;
    const password1=document.getElementById('password1').value;
    y=JSON.parse(localStorage.getItem('profile1'));
    if(nam1===y.nam&&password1===y.password){
        window.open('index1-3.html', '_blank');
    }
    else{
        alert('Wrong password!!!');
    }  
   
}
function createprofile()
     {
       window.open("index1-2.html", "_blank");
     }
