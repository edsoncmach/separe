const getItems = localStorage.getItem('items');
const dataItems = JSON.parse(getItems);
const listItem = document.getElementById('list-items')

const getUser = localStorage.getItem('token');
if(getUser) {
    const dataUser = JSON.parse(getUser);

    const nameUser = document.getElementById('name-user')
    nameUser.innerHTML = "<strong>" + dataUser.name + "</strong>"
} else {
    window.location.href = 'login.html'
}

function sair() {
    localStorage.removeItem('token')
    window.location.href = 'index.html'
}
    
function render(dataItems){

    let list = ''

    if(dataItems.length <= 0) {
        list += `<p class="text-danger fs-6">Nenhum item cadastrado!</p>`
    } else {
        dataItems.forEach((dataItems, index) => {
            const img = dataItems.imgItem.substring(12)

            list += `
                <li class="d-flex bg-white shadow-sm p-3 gap-5">
                    <div class="li-image">
                        <img src="./assets/img/${img}" alt="">
                    </div>
                    <div class="li-details d-flex flex-column w-50 justify-content-start">
                        <h6 class="fw-bold">${dataItems.name}</h6>
                        <span class="text-white bg-success rounded-1 p-1" style="width: 80px; font-size: .8rem;">${dataItems.category}</span>
                        <span class="fw-semibold">${dataItems.city}</span>
                        <p style="font-size: .8rem;">${dataItems.description}</p>
                    </div>
                    <div class="li-offer d-flex flex-column gap-2 w-25">
                        <div class="li-offer-title">
                                <h5>Ofertas</h5>
                        </div>
                        <div class="li-offer-user d-flex gap-2 justify-content-start">
                            <span class="fw-semibold" style="font-size: .8rem;">Usuário: </span>
                            <span style="font-size: .8rem;">edson@gmail.com</span>
                        </div>
                        <div class="li-offer-value d-flex gap-2 justify-content-start">
                            <span class="fw-semibold" style="font-size: .8rem;">Maior lance R$: </span>
                            <span style="font-size: .8rem;">150,00</span>
                        </div>
                        <div class="li-offer-msg d-flex gap-2 justify-content-start">
                            <span class="fw-semibold" style="font-size: .8rem;">Mensagem: </span>
                            <span style="font-size: .8rem;">Estou precisando de telhas pois as minhas quebraram devido ás chuvas.</span>
                        </div>
                        <div class="li-offer-buttons">
                            <button class="btn btn-sm btn-success" style="font-size: .8rem;">Aceitar</button>
                            <button class="btn btn-sm btn-danger" style="font-size: .8rem;">Recusar</button>
                        </div>
                    </div>
                </li>
                </li>`
        })
    }

    listItem.innerHTML = list
}

render(dataItems)

