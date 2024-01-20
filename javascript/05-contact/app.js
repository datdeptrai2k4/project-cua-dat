let elName=document.getElementById('name');
let elEmail=document.getElementById('email');
let elJob=document.getElementById('job');
let btn=document.getElementById('button');
let name=localStorage.getItem("name")
let email=localStorage.getItem("email")
let job=localStorage.getItem("job")
elName.value=name;
elEmail.value=email;
elJob.value=job;
btn.addEventListener('click',function () {
    localStorage.setItem("name", elName.value);
    localStorage.setItem("email", elEmail.value);
    localStorage.setItem("job", elJob.value);
    
})

