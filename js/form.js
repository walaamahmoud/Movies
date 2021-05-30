export class Validation {
    constructor() {
        this.name = document.getElementById("name");
        this.email = document.getElementById("email");
        this.phone = document.getElementById("phone");
        this.age = document.getElementById("age");
        this.password = document.getElementById("password");
        this.rePassword = document.getElementById("rePassword");
        this.all = document.querySelectorAll('.all');
        this.namealert = document.getElementById("namealert");
        this.emailalert = document.getElementById("emailalert");
        this.phonealert = document.getElementById("phonealert");
        this.agealert = document.getElementById("agealert");
        this.passwordalert = document.getElementById("passwordalert");
        this.repasswordalert =document.getElementById("repasswordalert");
        this.submitBtn = document.getElementById("submitBtn");
        this.name.addEventListener('keyup',this.validateName.bind(this));
        this.email.addEventListener('keyup',this.validateEmail.bind(this));
        this.phone.addEventListener('keyup',this.validatePhone.bind(this));
        this.age.addEventListener('keyup',this.validateAge.bind(this));
        this.password.addEventListener('keyup',this.validatePassword.bind(this));
        this.rePassword.addEventListener('keyup',this.validateRePassword.bind(this));
        this.all.forEach(item => {
            item.addEventListener('focus',this.checkFocus.bind(this))
           });
        
        
      
    }
    validateName()
    {
        let rejex = /^([0-9]|[a-z]|[A-Z]){1,}$/;
        if (rejex.test(this.name.value) == true)
        {
            this.namealert.classList.replace("d-block", "d-none");
            return true;
        }
        else 
        {
            this.namealert.classList.replace("d-none", "d-block");
            return false;
        }
    }
    validateEmail()
    {
        let rejex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
        if (rejex.test(this.email.value) == true)
        {
            this.emailalert.classList.replace("d-block", "d-none");
            return true;
        }
        else 
        {
            this.emailalert.classList.replace("d-none", "d-block");
            return false;
        }
    }
    validatePhone()
    {
        let rejex = /^[0-9]{10,12}$/;
        if (rejex.test(this.phone.value) == true)
        {
            this.phonealert.classList.replace("d-block", "d-none");
            return true;
        }
        else 
        {
            this.phonealert.classList.replace("d-none", "d-block");
            return false;
        }
    }
    validateAge()
    {
        let rejex = /^([1-9]|[1-9][0-9]|100)$/;
        if (rejex.test(this.age.value) == true)
        {
            this.agealert.classList.replace("d-block", "d-none");
            return true;
        }
        else 
        {
            this.agealert.classList.replace("d-none", "d-block");
            return false;
        }
    }
    validatePassword()
    {
        let rejex = /^(?=.*[0-9])(?=.*([a-z]|[A-Z])).{7,32}$/;
        if (rejex.test(this.password.value) == true)
        {
            this.passwordalert.classList.replace("d-block", "d-none");
            return true;
        }
        else 
        {
            this.passwordalert.classList.replace("d-none", "d-block");
            return false;
        }
    }
    validateRePassword()
    {
       
        if (this.rePassword.value == this.password.value)
        {
            this.repasswordalert.classList.replace("d-block", "d-none");
            return true;
        }
        else 
        {
            this.repasswordalert.classList.replace("d-none", "d-block");
            return false;
        }
    }
    checkFocus()
    {
        if((this.name.value == " ") ||( this.validateName()== false))
        {
           
           this.all.forEach(item => {
            item.addEventListener('focus',this.validateName.bind(this))
           });
          
        }
        else if(( this.validateName()== true) &&( (this.email.value == " ") ||( this.validateEmail()== false)))
        {
            
            this.all.forEach(item => {
                item.addEventListener('focus',this.validateEmail.bind(this))
               });
        }
        else if((( this.validateName()== true)&& ( this.validateEmail()== true)) &&( (this.phone.value == " ") ||( this.validatePhone()== false)))
        {
           
            this.all.forEach(item => {
                item.addEventListener('focus',this.validatePhone.bind(this))
               });
        }
        else if((( this.validateName()== true)&& ( this.validateEmail()== true) && (this.validatePhone()==true)) &&(( this.validateAge()== false)))
        {
            this.age.addEventListener('focus',this.validateAge.bind(this));
        }
        else if((( this.validateName()== true)&& ( this.validateEmail()== true) && (this.validatePhone()==true)) &&( (this.password.value == " ") ||( this.validatePassword()== false)))
        {
            
            this.all.forEach(item => {
                item.addEventListener('focus',this.validatePassword.bind(this))
               });
        }
        else if((( this.validateName()== true)&& ( this.validateEmail()== true) && (this.validatePhone()==true) && ( this.validatePassword()== true)) &&( (this.rePassword.value == " ") ||( this.validateRePassword()== false)))
        {
            
            this.all.forEach(item => {
                item.addEventListener('focus',this.validateRePassword.bind(this))
               });
        }

      
    }
}

