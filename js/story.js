// Months you’ve been together (you can add future months too)
const months = [
    "May 2025", "June 2025", "July 2025", "August 2025",
    "September 2025", "October 2025", "November 2025", "December 2025",
    "January 2026", "February 2026", "March 2026", "April 2026",
    "May 2026"
];

const storyGrid = document.getElementById('storyGrid');

// Create cards dynamically
months.forEach(month => {
    const card = document.createElement('div');
    card.className = 'month-card';
    card.innerHTML = `
    <div class="month-label">${month}</div>
    <img src="images/placeholders.jpg" alt="No memory selected yet" id="img-${month}" />
    <input type="file" accept="image/*" id="file-${month}">
    <button class="upload-btn" onclick="uploadImage('${month}')">Add / Change</button>
  `;
    storyGrid.appendChild(card);

    // Load saved image from localStorage
    const saved = localStorage.getItem(`photo-${month}`);
    if (saved) {
        card.querySelector("img").src = saved;
    }
});

// Upload + save locally
function uploadImage(month) {
    const fileInput = document.getElementById(`file-${month}`);
    fileInput.click();
    fileInput.onchange = () => {
        const file = fileInput.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = e => {
            const dataUrl = e.target.result;
            localStorage.setItem(`photo-${month}`, dataUrl);
            document.getElementById(`img-${month}`).src = dataUrl;
        };
        reader.readAsDataURL(file);
    };
}
