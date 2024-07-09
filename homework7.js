var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

function trustedEmail(array)
{
    let regEx = /^[a-zA-Z0-9]{2,}(.[a-zA-Z0-9]{2,})?\@(gmail|yahoo)(.com)/;
    let trustedEmails = [];

    for(let i in array)
    {
        if(regEx.test(array[i].email))
            trustedEmails.push(array[i].email);
    }
    return trustedEmails;
}

console.log(trustedEmail(arr));