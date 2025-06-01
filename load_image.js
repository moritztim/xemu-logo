(() => {
    // Create a visible button to ensure user interaction
    const button = document.createElement('button');
    button.textContent = 'Click to upload and simulate drop';
    button.style.position = 'fixed';
    button.style.top = '20px';
    button.style.left = '20px';
    button.style.zIndex = '10000';
    button.style.padding = '10px';
    button.style.fontSize = '14px';
    button.style.background = '#007bff';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';

    button.onclick = () => {
        // Step 1: Create a hidden file input element
        const input = document.createElement('input');
        input.type = 'file';
        input.style.display = 'none';

        input.onchange = async (event) => {
            const file = event.target.files[0];
            if (!file) return;

            // Step 2: Read the file as DataURL
            const reader = new FileReader();
            reader.onload = () => {
                const canvas = document.getElementById('myUnitCanvas0');
                if (!canvas) {
                    console.error('Target canvas element not found.');
                    return;
                }

                // Step 3: Create DataTransfer with the file
                const dt = new DataTransfer();
                dt.items.add(file);

                // Step 4: Dispatch dragover
                const dragOverEvent = new DragEvent('dragover', {
                    bubbles: true,
                    cancelable: true,
                    dataTransfer: dt
                });
                canvas.dispatchEvent(dragOverEvent);

                // Step 5: Dispatch drop
                const dropEvent = new DragEvent('drop', {
                    bubbles: true,
                    cancelable: true,
                    dataTransfer: dt
                });
                canvas.dispatchEvent(dropEvent);

                console.log('Simulated drag & drop to #myUnitCanvas0 with:', file.name);
            };

            reader.readAsDataURL(file);
        };

        // Trigger the file dialog
        document.body.appendChild(input);
        input.click();

        // Clean up
        setTimeout(() => input.remove(), 1000);
    };

    document.body.appendChild(button);
})();

// This script was created by the generative AI "GPT-4o".
// https://declare-ai.org/1.0.0/total.html 