document.addEventListener('DOMContentLoaded', () => {
    // --- STATE MANAGEMENT ---
    const appState = {
        model: '017',
        parts: {
            headGroup: null,
            body: null,
            shockmount: null
        },
        shield: {
            metal: 'gold',
            color2: null,
            customImage: null
        },
        config: window.SOYUZ_CONFIG || {}
    };

    // --- INITIALIZATION ---
    function initializeApp() {
        if (!appState.config.models) {
            console.error("Configuration not found. Aborting initialization.");
            return;
        }
        buildColorPickers();
        setupEventListeners();
        updateMicrophonePreview(); // Set initial preview
        document.body.classList.add('soyuz-app-initialized');
    }

    // --- UI BUILDING ---
    function buildColorPickers() {
        const pickers = document.querySelectorAll('.soyuz-ral-picker');
        pickers.forEach(picker => {
            appState.config.ral_colors.forEach(color => {
                const swatch = document.createElement('div');
                swatch.classList.add('soyuz-ral-swatch');
                swatch.style.backgroundColor = color.hex;
                swatch.dataset.ral = color.ral;
                picker.appendChild(swatch);
            });
        });
    }

    // --- EVENT LISTENERS ---
    function setupEventListeners() {
        // Accordion
        const accordionHeaders = document.querySelectorAll('.soyuz-accordion-header');
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const currentItem = header.parentElement.parentElement;
                accordionHeaders.forEach(otherHeader => {
                    const otherItem = otherHeader.parentElement.parentElement;
                    if (otherItem !== currentItem) otherItem.classList.remove('active');
                });
                currentItem.classList.toggle('active');
            });
        });

        // Model Toggle
        document.getElementById('soyuz-model-toggle').addEventListener('change', (e) => {
            appState.model = e.target.checked ? '023' : '017';
            updateMicrophonePreview();
        });

        // Color Swatches
        document.querySelectorAll('.soyuz-ral-swatch').forEach(swatch => {
            swatch.addEventListener('click', handleColorSelection);
        });

        // Nameplate Metal
        document.querySelectorAll('.soyuz-button-group .soyuz-button').forEach(button => {
            button.addEventListener('click', (e) => {
                appState.shield.metal = e.target.dataset.value;
                document.querySelectorAll('.soyuz-button-group .soyuz-button').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                updateMicrophonePreview();
            });
        });

        // Logo Upload
        document.getElementById('soyuz-logo-upload').addEventListener('change', handleLogoUpload);

        // Modal
        document.querySelector('.soyuz-submit-button').addEventListener('click', () => {
            document.getElementById('soyuz-submission-modal').style.display = 'block';
        });
        document.getElementById('soyuz-modal-close').addEventListener('click', () => {
            document.getElementById('soyuz-submission-modal').style.display = 'none';
        });
        document.getElementById('soyuz-order-form').addEventListener('submit', handleFormSubmission);
    }

    // --- HANDLERS ---
    function handleColorSelection(event) {
        const swatch = event.target;
        const selectedRal = swatch.dataset.ral;
        const part = swatch.closest('.soyuz-accordion-content').dataset.part;
        if (part === 'shield') {
            appState.shield.color2 = selectedRal;
        } else {
            appState.parts[part] = selectedRal;
        }
        swatch.parentElement.querySelectorAll('.soyuz-ral-swatch').forEach(s => s.classList.remove('selected'));
        swatch.classList.add('selected');
        updateMicrophonePreview();
    }

    function handleLogoUpload(event) {
        const file = event.target.files[0];
        if (file && file.size <= 5 * 1024 * 1024) {
            const reader = new FileReader();
            reader.onload = (e) => {
                appState.shield.customImage = e.target.result;
                updateWoodenBoxPreview();
            };
            reader.readAsDataURL(file);
        } else if (file) {
            alert('File size exceeds 5MB limit.');
        }
    }

    function handleFormSubmission(event) {
        event.preventDefault();
        const finalOrder = {
            customization: {
                model: appState.model,
                parts: appState.parts,
                shield: appState.shield,
            },
            userInfo: {
                name: document.getElementById('soyuz-user-name').value,
                phone: document.getElementById('soyuz-user-phone').value,
                email: document.getElementById('soyuz-user-email').value,
            }
        };
        console.log(JSON.stringify(finalOrder, null, 2));
        alert('Order submitted! Check the console for the JSON data.');
        document.getElementById('soyuz-submission-modal').style.display = 'none';
    }

    // --- UI UPDATES ---
    function updateMicrophonePreview() {
        const modelData = appState.config.models.find(m => m.id === appState.model);
        const assetPath = appState.config.asset_path || '';

        if (modelData) {
            const preview = document.querySelector('.soyuz-microphone-preview');
            preview.style.width = modelData.dimensions.width;
            preview.style.height = modelData.dimensions.height;

            // Set layer images
            preview.querySelector('.soyuz-layer--shadow').style.backgroundImage = `url(${assetPath}${modelData.images.shadow})`;
            preview.querySelector('.soyuz-layer--highlight').style.backgroundImage = `url(${assetPath}${modelData.images.highlight})`;
            // In a real implementation, we'd also set masks and textures here.
        }

        // Head Group Color
        const headColor = appState.config.ral_colors.find(c => c.ral === appState.parts.headGroup)?.hex || 'transparent';
        document.getElementById('soyuz-headgroup-mask').style.backgroundColor = headColor;

        // Body Color
        const bodyColor = appState.config.ral_colors.find(c => c.ral === appState.parts.body)?.hex || 'transparent';
        document.getElementById('soyuz-body-mask').style.backgroundColor = bodyColor;
    }

    function updateWoodenBoxPreview() {
        const logoImg = document.getElementById('soyuz-box-logo');
        if (appState.shield.customImage) {
            logoImg.src = appState.shield.customImage;
            logoImg.style.display = 'block';
        } else {
            logoImg.style.display = 'none';
        }
    }

    // --- START ---
    initializeApp();
});
