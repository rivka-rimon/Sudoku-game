
// check if the user can get in
function checkLogin() {
    
    let userName = document.getElementById('name').value;
    let password = document.getElementById('password').value;
    if (userName != 'abcd'){
        document.getElementById('worng_name').innerHTML = 'Worng User Name!';
    }
    if(password != '1234'){
        document.getElementById('worng_password').innerHTML = 'Worng password!';
    }

    if (userName == 'abcd' && password == '1234'){
        let link = document.getElementById('link').innerHTML = window.location.href= "file:///C:/Users/%D7%91%D7%99%D7%AA%20%D7%94%D7%9E%D7%93%D7%A8%D7%A9/Documents/%D7%A7%D7%95%D7%A8%D7%A1%20%D7%91%D7%A0%D7%99%D7%99%D7%AA%20%D7%90%D7%AA%D7%A8%D7%99%D7%9D%20-%20%D7%94%D7%9B%D7%9C/%D7%A7%D7%95%D7%A8%D7%A1%20%D7%91%D7%A0%D7%99%D7%99%D7%AA%20%D7%90%D7%AA%D7%A8%D7%99%D7%9D/sudoku/chooseLevel.html";
        return link;
    }
       
 }


//  signIn page
let rememberUser = [];

function signIn() {
    
    let UserName =  document.getElementById('name').value;
    let password =  document.getElementById('password').value;
    let confirmPassword =  document.getElementById('confirmPassword').value;
    let email =  document.getElementById('email').value;

    let flag = true;

    // check User Name
    if (UserName.length < 8){
        flag = false;
        document.getElementById('worng_name').innerHTML = 'User Name is not legal';
    }

    // check password
    if (password.length < 8 || password != confirmPassword ){
        flag = false;
        document.getElementById('worng_pass').innerHTML = 'password is not legal';
        document.getElementById('worng_confirm').innerHTML = 'password is not legal';
    }

    // check email 
        let at = email.indexOf ('@'); 
        let dot = email.lastIndexOf('.'); 

        // min 5 Characters
        if (email.length < 10){
            flag = false;
            document.getElementById('worng_email').innerHTML = 'email is not legal';
        
        }
    
        // the index of @ and .
        else if (at == -1 || at < 2 || at > email.length-3 || dot == -1 || dot < at || dot > email.length-3){
            flag = false;
            document.getElementById('worng_email').innerHTML = 'email is not legal';
            
        }

        for (i = dot+1 ; i < email.length ; i++){
            if (email.charAt (i) >= '0' && email.charAt (i) <= '9'){
                flag = false;
                document.getElementById('worng_email').innerHTML = 'email is not legal';
            }
        }
        
        if (flag == true){

            
            rememberUser.push 
            ({name: UserName,
            password: password,
            email: email,});

            let link = document.getElementById('link').innerHTML = window.location.href="file:///C:/Users/%D7%91%D7%99%D7%AA%20%D7%94%D7%9E%D7%93%D7%A8%D7%A9/Documents/%D7%A7%D7%95%D7%A8%D7%A1%20%D7%91%D7%A0%D7%99%D7%99%D7%AA%20%D7%90%D7%AA%D7%A8%D7%99%D7%9D%20-%20%D7%94%D7%9B%D7%9C/%D7%A7%D7%95%D7%A8%D7%A1%20%D7%91%D7%A0%D7%99%D7%99%D7%AA%20%D7%90%D7%AA%D7%A8%D7%99%D7%9D/sudoku/page1.html";
            return link;
        }    
}


// function check() {
//     debugger;
//     var userName = localStorage.getItem('UserName');
//     var psw = localStorage.getItem('password');

//     let userName1 = document.getElementById('name').value;
//     let psw1 = document.getElementById('password').value;


//     if (userName != userName1){
//         document.getElementById('worng_name').innerHTML = 'Worng User Name!'
//         return false;
//     }
//     if (psw != psw1){
//         document.getElementById('worng_password').innerHTML = 'Worng password!'
//         return false;
//     }
//     else{
//         let link = document.getElementById('link').innerHTML = window.location.href= "chooseLevel.html";
//         return link;

//     }
    
    
// }