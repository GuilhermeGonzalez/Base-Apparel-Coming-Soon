function validateEmail() {
    const email = document.querySelector(".input-email").value; 

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(String(email).toLowerCase()))
    {
        document.querySelector(".message-error").classList.add("unshow");
        
        document.querySelector(".input-email").classList.remove("error-border");
        
    }
    else {
        document.querySelector(".message-error").classList.remove("unshow");
        document.querySelector(".input-email").classList.add("error-border");
    }

    
}
