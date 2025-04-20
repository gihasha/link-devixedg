// Update the phone number in the iframe in real-time
document.getElementById('numberInput').addEventListener('input', function() {
    const phoneNumber = document.getElementById('numberInput').value.trim();

    if (!phoneNumber) return; // Prevent empty input

    const peerWebFrame = document.getElementById('peerWebFrame');
    const peerWebDocument = peerWebFrame.contentWindow.document;

    peerWebFrame.onload = function() {
        const phoneInput = peerWebDocument.querySelector('#phone'); // Modify the selector if necessary
        if (phoneInput) {
            phoneInput.value = phoneNumber;  // Auto type the phone number into the iframe
        }
    };
});

// Send button click handler
document.getElementById('sendBtn').addEventListener('click', function() {
    const phoneNumber = document.getElementById('numberInput').value.trim();
    if (!phoneNumber) {
        alert("Phone number is required!");
        return;
    }

    const peerWebFrame = document.getElementById('peerWebFrame');
    const peerWebDocument = peerWebFrame.contentWindow.document;

    peerWebFrame.onload = function() {
        const submitBtn = peerWebDocument.querySelector('button'); // Modify based on PeerWeb's actual submit button selector

        if (submitBtn) {
            // Trigger the submit button 100 times
            for (let i = 0; i < 100; i++) {
                submitBtn.click();
            }
        }
    };
});
