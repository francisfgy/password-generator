const numOfCharacters = document.getElementById("numCharacters");
const includeUppercase = document.getElementById("uppercase");
const includeSymbols = document.getElementById("symbols");
const includeNumbers = document.getElementById("numbers");
const passwordResult = document.getElementById("result");


const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%^&*?";
const numbers = "12345667890";

const alphabet = lowercaseLetters + uppercaseLetters;
const allCharacters = alphabet + numbers + symbols;
const lettersAndSymbols = alphabet + symbols;
const lettersAndNumbers = alphabet + numbers;
const symbolsAndNumbers = symbols + numbers;

let password = lowercaseLetters;

function determinePasswordRequirements()
{
    if(includeUppercase.checked && includeSymbols.checked && includeNumbers.checked)
    {
        password += allCharacters;
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    else if(includeUppercase.checked && includeSymbols.checked)
    {
        password += uppercaseLetters + symbols;
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    else if(includeUppercase.checked && includeNumbers.checked)
    {
        password += uppercaseLetters + numbers;
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    else if(includeNumbers.checked && includeSymbols.checked)
    {
        password += symbolsAndNumbers;
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    else if(includeSymbols.checked)
    {
        password += symbols;
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    else if(includeNumbers.checked)
    {
        password += numbers;
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    else if(includeUppercase.checked)
    {
        password += uppercaseLetters;
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    else
    {
        passwordResult.innerText = password.split("").sort(
            function () {
                            return 0.5 - Math.random();
                        })
        .slice(0, numOfCharacters.value)
        .join("");
    }
    function clearGenerator() {
        location.reload();
        console.log("cleared");
      }
}


