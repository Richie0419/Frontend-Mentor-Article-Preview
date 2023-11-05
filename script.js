const shareBtn = document.getElementById('share-btn');
const shareBox = document.getElementById('share-box');

shareBtn.addEventListener('click', () => {
    shareBox.classList.toggle('hidden');
})