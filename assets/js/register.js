const formRegister = document.getElementById('form-register')
const msgError = document.getElementById('msg-error')

formRegister.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value

    const newUser = {
        name: name,
        email: email,
        pass: pass
    }

    const ls = localStorage.getItem('users')

    if(ls) {
        let users = JSON.parse(ls)
        users.push(newUser)
        users = JSON.stringify(users)
        localStorage.setItem("users", users)
    } else {
        localStorage.setItem("users", JSON.stringify([newUser]));
    }

    msgError.innerHTML = 'Usuário cadastrado com sucesso!'

    setTimeout(() => {
        window.location.href = 'login.html'
    }, 2000)
})