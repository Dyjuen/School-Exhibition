document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        let modal = document.querySelector('.modal');
        let modalImg = document.querySelector('.modal img');
        let modalText = document.querySelector('.modal-text');

        modal.style.display = 'flex';
        setTimeout(() => {
            modal.classList.add('show');
        }, 10); // Small delay for smooth animation

        modalImg.src = this.querySelector('img').src;
        modalText.innerHTML = `<h2>${this.dataset.title}</h2><p>${this.dataset.description}</p>`;
    });
});

document.querySelector('.close').addEventListener('click', function() {
    let modal = document.querySelector('.modal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300); // Match transition duration
});

function openModal(imageSrc, title, description) {
    console.log(imageSrc, title, description); // Debugging: Check if values are correct
    document.getElementById('modal-img').src = imageSrc;
    document.getElementById('modal-title').textContent = title; // Sets the name
    document.getElementById('modal-desc').textContent = description; // Sets the description
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}