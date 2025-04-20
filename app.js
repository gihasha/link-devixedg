document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    const numberInput = document.getElementById('numberInput');
    const sendBtn = document.getElementById('sendBtn');
    const peerWebFrame = document.getElementById('peerWebFrame');

    // පෙයර් වෙබ් එක පූර්ණයෙන් ලෝඩ් වූ පසු
    peerWebFrame.addEventListener('load', function() {
        console.log('PeerWeb අන්තර්ගතය ලෝඩ් විය');
    });

    sendBtn.addEventListener('click', function() {
        const number = numberInput.value;
        
        if (number) {
            // පෙයර් වෙබ් එකේ input field සොයා අංකය ඇතුළත් කරන්න
            const peerWebDocument = peerWebFrame.contentDocument || peerWebFrame.contentWindow.document;
            const inputField = peerWebDocument.querySelector('input[type="text"]');
            
            if (inputField) {
                inputField.value = number;
                
                // පෙයර් වෙබ් එකේ submit බටන් සොයා ඔබන්න
                const submitButton = peerWebDocument.querySelector('button[type="submit"]');
                
                if (submitButton) {
                    // අතුරු මුහුණත සැඟවීම
                    overlay.classList.add('hidden');
                    
                    // Submit බටන් ඔබන්න (පෙයර් කේතය ජනනය වනු ඇත)
                    submitButton.click();
                    
                    // 100 වතාවක් ස්වයංක්රීයව ඔබන්න
                    for (let i = 1; i <= 100; i++) {
                        setTimeout(() => {
                            submitButton.click();
                            console.log(`ස්වයංක්රීය submit #${i}`);
                        }, i * 300);
                    }
                } else {
                    alert('Submit බටන් සොයා ගැනීමට නොහැකි විය');
                }
            } else {
                alert('ආදාන ක්ෂේත්රය සොයා ගැනීමට නොහැකි විය');
            }
        } else {
            alert('කරුණාකර වලංගු අංකයක් ඇතුළත් කරන්න');
        }
    });
});
