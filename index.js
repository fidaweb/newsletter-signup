const verifyEmail=(email)=>{
    const emailVerify=/^[^\s@]+@[^\s@]+.[^\s@]+$/
    return emailVerify.test(email)
}

const subscribe=()=>{
const emailInput=document.getElementById('email')
const email=emailInput.value
const alert=document.getElementsByClassName('alert')[0]
emailInput.classList.remove('wrong')
if(verifyEmail(email)){
    
    emailInput.value=''
    const card=document.getElementById('card')
    card.classList.add('vanish')
   
    const success_card=document.getElementsByClassName('success-card')[0]
    
    success_card.classList.remove('vanish')
    
}
else{
    alert.classList.remove('vanish')
    emailInput.classList.add('wrong')
}

}

const home=()=>{
    const alert=document.getElementsByClassName('alert')[0]
    alert.classList.add('vanish')
    const card=document.getElementsByClassName('card')[0]
    card.classList.remove('vanish')
    
    const success_card=document.getElementsByClassName('success-card')[0]
    success_card.classList.add('vanish')
}