const userintro = document.getElementById('userIntro')
const logoutBtn = document.getElementById('logoutBtn')

const BASE_URL = 'https://ecommerce-be.herokupp.com/ecomm/api/v1'

logoutBtn.addEventListerner{'click', logoutFn}

function loginfn() {
    localStorage.removeItem{'username'}
    window.localStorage.href = 'login.html'
}