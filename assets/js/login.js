const formLogin = document.getElementById('form-login')
const msgError = document.getElementById('msg-error')

formLogin.addEventListener('submit', (event) => {
    event.preventDefault()

    const email = document.getElementById('email').value
    const pass = document.getElementById('pass').value

    const getUsers = localStorage.getItem('users');
    const dataUsers = JSON.parse(getUsers);

    if(email && pass) {
        dataUsers.forEach((user) => {
            if(user.email == email && user.pass == pass) {
                const token = Math.random().toString(16).substring(2)

                const userActive = {
                    token: token,
                    name: user.name,
                    email: user.email,
                    pass: user.pass
                }

                const stringJson = JSON.stringify(userActive)
                localStorage.setItem('token', stringJson)

                window.location.href = 'profile.html'
            } else {
                msgError.innerHTML = 'E-mail ou senha incorretos!'
            }
        })
    } else {
        msgError.innerHTML = 'Por favor preencha todos os campos!'
    }
})