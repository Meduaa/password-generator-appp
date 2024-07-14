const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// let password1 = document.querySelector('#password')
// let password2 = document.querySelector('#password2')


function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return password;
}

function generatepassword() {
    const passwordLength = 15;
    const password1 = generatePassword(passwordLength);
    const password2 = generatePassword(passwordLength);
    document.getElementById('password').innerText = password1;
    document.getElementById('password2').innerText = password2;
}