export const userService = {
    getLoggedinUserEmail,
    getLoggedinUserName
}

const loggedinUser = {
    email: 'user@appsus.com',
    fullname: 'Mahatma Appsus'
}
   

function getLoggedinUserEmail() {
    return loggedinUser.email
}

function getLoggedinUserName() {
    return loggedinUser.fullname
}