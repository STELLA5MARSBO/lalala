//Carregar dados do arquivo JSON (exemplo)
async function loadWomen() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

// Mostrar mulheres na lista
function displayWomen(women) {
    const list = document.getElementById('women-list');
    list.innerHTML = '';
    women.forEach(woman => {
        const item = document.createElement('div');
        item.classList.add('woman-item');
        item.innerHTML = `
            <img src="${woman.image}" alt="${woman.name}" />
            <h3>${woman.name}</h3>
            <p><strong>Área:</strong> ${woman.field}</p>
            <p>${woman.description}</p>
        `;
        list.appendChild;(TouchEvent)
    });
}

// Pesquisa de mulheres
document.getElementById('search-button').addEventListener('click', async () => {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const women = await loadWomen();
    const filteredWomen = women.filter(woman => woman.name.toLowerCase().includes(searchInput));
    displayWomen(filteredWomen);
});

// Envio do formulário de contato
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    document.getElementById('contact-form').reset();
});

// Carregar mulheres na inicialização
window.addEventListener('load', async () => {
    const women = await loadWomen();
    displayWomen(women);
});