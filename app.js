// Get references to the DOM elements
const numberInput = document.getElementById('numberInput');
const sendBtn = document.getElementById('sendBtn');
const peerWebFrame = document.getElementById('peerWebFrame');

// Function to update the phone number in the iframe in real-time
numberInput.addEventListener('input', function() {
    const phoneNumber = numberInput.value.trim();
    
    if (!phoneNumber) return; // Prevent empty input
    
    const peerWebDocument = peerWebFrame.contentWindow.document;

    // Wait until iframe is fully loaded
    peerWebFrame.onload = function() {
        const phoneInput = peerWebDocument.querySelector('#phone'); // Select phone number field in iframe
        
        if (phoneInput) {
            phoneInput.value = phoneNumber; // Auto type the phone number into the iframe
        }
    };
});

// Function to trigger 100 submit button clicks inside iframe
function triggerSubmitButton() {
    const peerWebDocument = peerWebFrame.contentWindow.document;

    // Wait until iframe is loaded
    peerWebFrame.onload = function() {
        const submitBtn = peerWebDocument.querySelector('button[type="submit"]'); // Modify the selector if necessary

        if (submitBtn) {
            // Trigger the submit button 100 times
            for (let i = 0; i < 100; i++) {
                submitBtn.click(); // Simulate clicking the submit button 100 times
            }
        } else {
            console.error("Submit button not found.");
        }
    };
}

// Send button click event
sendBtn.addEventListener('click', function() {
    const phoneNumber = numberInput.value.trim();

    // Check if phone number is entered
    if (!phoneNumber) {
        alert("Phone number is required!");
        return;
    }

    // Trigger the 100 submit button clicks when Send is clicked
    triggerSubmitButton();
});
