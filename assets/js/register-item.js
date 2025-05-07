const formRegister = document.getElementById('form-register')
const msgError = document.getElementById('msg-error')
const items = []

formRegister.addEventListener('submit', (event) => {
    event.preventDefault()

    const name = document.getElementById('name').value
    const category = document.getElementById('category')
    const categorySelect = category.options[category.selectedIndex].text
    const city = document.getElementById('city')
    const citySelect = city.options[city.selectedIndex].text
    const value = document.getElementById('value').value
    const description = document.getElementById('description').value
    const imgItem = document.getElementById('img-item').value

    const newItem = {
        name: name,
        category: categorySelect,
        city: citySelect,
        value: value,
        description: description,
        imgItem: imgItem
    }

    const ls = localStorage.getItem('items')

    if(ls) {
        let items = JSON.parse(ls)
        items.push(newItem)
        items = JSON.stringify(items)
        localStorage.setItem("items", items)
    } else {
        localStorage.setItem("items", JSON.stringify([newItem]));
    }

    msgError.innerHTML = 'Item cadastrado com sucesso!'

    setTimeout(() => {
        window.location.href = 'itens.html'
    }, 2000)
})