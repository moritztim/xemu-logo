(() => {
    // Step 1: Create a hidden file input element
    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';

    input.onchange = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        // Step 2: Read the file as DataURL (mimicking FileReader use)
        const reader = new FileReader();
        reader.onload = () => {
            const canvas = document.getElementById('myUnitCanvas0');
            if (!canvas) {
                console.error('Target canvas element not found.');
                return;
            }

            // Step 3: Create a DataTransfer with the file
            const dt = new DataTransfer();
            dt.items.add(file);

            // Step 4: Dispatch dragover event
            const dragOverEvent = new DragEvent('dragover', {
                bubbles: true,
                cancelable: true,
                dataTransfer: dt
            });
            canvas.dispatchEvent(dragOverEvent);

            // Step 5: Dispatch drop event
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

    // Clean up after use
    input.remove();
})();

// This script was created by the generative AI "GPT-4o".
// https://declare-ai.org/1.0.0/total.html 