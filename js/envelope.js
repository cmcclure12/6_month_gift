// Envelope opening animation
document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    const tapInstruction = document.getElementById('tapInstruction');
    const envelopeContainer = document.getElementById('envelopeContainer');

    if (!envelope || !letter) return;

    let isOpened = false;

    envelope.addEventListener('click', () => {
        if (isOpened) return;

        isOpened = true;

        // Hide instruction
        if (tapInstruction) {
            tapInstruction.style.opacity = '0';
            setTimeout(() => {
                tapInstruction.style.display = 'none';
            }, 300);
        }

        // Add opening animation to envelope
        envelope.classList.add('opening');

        // Show letter after envelope opens
        setTimeout(() => {
            letter.classList.add('revealed');

            // Optionally hide envelope after letter is shown
            setTimeout(() => {
                envelope.style.opacity = '0';
                setTimeout(() => {
                    envelope.style.display = 'none';
                }, 500);
            }, 800);
        }, 1000);
    });
});
