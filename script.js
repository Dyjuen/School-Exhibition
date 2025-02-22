document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        let modal = document.querySelector('.modal');
        let modalContent = document.querySelector('.modal-content');
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

const images = [
    { src: "assets/image1.png", title: "Name 1", desc: "Description of Exhibit 1" },
    { src: "assets/image2.png", title: "Name 2", desc: "Description of Exhibit 2" },
    { src: "assets/image3.png", title: "Name 3", desc: "Description of Exhibit 3" },
    { src: "assets/image4.png", title: "Name 4", desc: "Description of Exhibit 4" },
    { src: "assets/image5.png", title: "Name 5", desc: "Description of Exhibit 5" },
    { src: "assets/image6.png", title: "Name 6", desc: "Description of Exhibit 6" }
];

let currentIndex = 0;

function updateGallery() {
    document.getElementById("gallery-image").src = images[currentIndex].src;
    document.getElementById("gallery-title").textContent = images[currentIndex].title;
    document.getElementById("gallery-desc").textContent = images[currentIndex].desc;
}

// Click event for left/right
document.getElementById("gallery-overlay").innerHTML = `
    <div onclick="prevImage()"></div>
    <div onclick="nextImage()"></div>
`;

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
}
