
const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('closeModalBtn');

// Show Modal 
openBtn.onclick = () => {
    modal.style.display = 'flex';
}

// Hide Modal on close button
closeBtn.onclick = () => {
    modal.style.display = 'none';
}

// Hide Modal when clicking out
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = 'none'
    }
}