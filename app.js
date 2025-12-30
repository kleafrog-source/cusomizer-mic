document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const sphereVariations = [
        { id: 'style017', name: 'Стиль 017', color: '#e2dbd2', imageSet: { top: 'spheres_top_preset2.png', bottom: 'spheres_bottom_preset2.png' } },
        { id: 'style023', name: 'Стиль 023', color: '#bd0000', imageSet: { top: 'spheres_top_preset3.png', bottom: 'spheres_bottom_preset3.png' } },
        { id: 'wax', name: 'Стареющая латунь', color: '#b8a88a', imageSet: { top: 'spheres_top_preset2.png', bottom: 'spheres_bottom_preset2.png' } },
        { id: 'color', name: 'Цвет', isColorPicker: true, imageSet: { top: 'spheres_top_preset1.png', bottom: 'spheres_bottom_preset1.png' } }
    ];
    const bodyVariations = [
        { id: 'cream', name: 'Cream', color: '#e2dbd2', imageSet: { body: 'body_preset2.png' } },
        { id: 'style023', name: 'Стиль 023', color: '#bd0000', imageSet: { body: 'body_preset3.png' } },
        { id: 'dark', name: 'Темный', color: '#4a3113', imageSet: { body: 'body_preset2.png' } },
        { id: 'color', name: 'Цвет', isColorPicker: true, imageSet: { body: 'body_preset1.png' } }
    ];
    const badgeVariations = [
        { id: 'style017', name: 'Стиль 017', imageSet: { badge: 'badge_style017.png' } },
        { id: 'style023', name: 'Стиль 023', imageSet: { badge: 'badge_style023.png' } },
        { id: 'custom', name: 'Свой шильдик', isCustomUpload: true }
    ];
    const shockmountVariations = [
        { id: 'cream', name: 'Кремовый', color: '#e2dbd2' },
        { id: 'color', name: 'Цвет', isColorPicker: true }
    ];

    // --- STATE ---
    const initialState = {
        model: '017',
        spheres: { variation: 'style017', color: '#e2dbd2' },
        body: { variation: 'style023', color: '#bd0000' },
        badge: { variation: 'style017', customImage: null },
        shockmount: { variation: 'cream', color: '#e2dbd2' },
        caseLogo: { customImage: null }
    };
    let state = { ...initialState };
    let expandedMenu = null;

    // --- DOM ELEMENTS ---
    const menuItems = {
        spheres: document.getElementById('menu-item-spheres'),
        body: document.getElementById('menu-item-body'),
        badge: document.getElementById('menu-item-badge'),
        shockmount: document.getElementById('menu-item-shockmount'),
    };
    const submenus = {
        spheres: document.getElementById('submenu-spheres'),
        body: document.getElementById('submenu-body'),
        badge: document.getElementById('submenu-badge'),
        shockmount: document.getElementById('submenu-shockmount'),
    };
    const chevrons = {
        spheres: document.getElementById('spheres-chevron'),
        body: document.getElementById('body-chevron'),
        badge: document.getElementById('badge-chevron'),
        shockmount: document.getElementById('shockmount-chevron'),
    };
    const subtitles = {
        spheres: document.getElementById('spheres-subtitle'),
        body: document.getElementById('body-subtitle'),
        badge: document.getElementById('badge-subtitle'),
        shockmount: document.getElementById('shockmount-subtitle'),
    };
    const colorPreviews = {
        spheres: document.getElementById('spheres-color-preview'),
        body: document.getElementById('body-color-preview'),
        shockmount: document.getElementById('shockmount-color-preview'),
    };
    const previewImages = {
        topSphere: document.getElementById('top-sphere-img'),
        bottomSphere: document.getElementById('bottom-sphere-img'),
        body: document.getElementById('body-img'),
        badge: document.getElementById('badge-img'),
    };
    const colorOverlays = {
        topSphere: document.getElementById('top-sphere-color'),
        bottomSphere: document.getElementById('bottom-sphere-color'),
        body: document.getElementById('body-color'),
        shockmount: document.getElementById('shockmount-color-overlay'),
    };
    const shockmountLayers = {
        color: document.getElementById('shockmount-color-layer'),
        cream: document.getElementById('shockmount-cream-layer'),
    };
    const badgeUploadInput = document.getElementById('badge-upload');
    const caseLogoUploadInput = document.getElementById('case-logo-upload');
    const caseLogoSubtitle = document.getElementById('case-logo-subtitle');
    const modelButtons = {
        '017': document.getElementById('model-017'),
        '023': document.getElementById('model-023'),
    };
    const microphoneContainer = document.getElementById('microphone-container');
    const caseLogoContainer = document.createElement('div');
    caseLogoContainer.className = 'absolute w-full h-full';
    document.querySelector('.absolute.h-\\[894\\.91px\\]').appendChild(caseLogoContainer);


    // --- LOGIC ---
    function handleCaseLogoUpload(e) {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                state.caseLogo.customImage = event.target?.result;
                render();
            };
            reader.readAsDataURL(file);
        }
    }

    function handleModelChange(modelId) {
        state.model = modelId;
        // Also update the badge to the default for that model
        state.badge.variation = `style${modelId}`;
        state.badge.customImage = null;
        render();
    }

    function handleBadgeUpload(e) {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                state.badge.customImage = event.target?.result;
                state.badge.variation = 'custom';
                expandedMenu = null;
                render();
            };
            reader.readAsDataURL(file);
        }
    }
    function handleVariationChange(section, variationId, defaultColor) {
        if (section === 'badge') {
            state.badge.variation = variationId;
        } else {
            state[section].variation = variationId;
            if (defaultColor) {
                state[section].color = defaultColor;
            }
        }
        if (!badgeVariations.find(v => v.id === variationId)?.isCustomUpload) {
            expandedMenu = null;
        }
        render();
    }

    function handleColorChange(section, color) {
        state[section].color = color;
        render();
    }

    function toggleSubmenu(menu) {
        expandedMenu = expandedMenu === menu ? null : menu;
        render();
    }

    function createSubMenuItem(item, section) {
        const div = document.createElement('div');
        div.className = 'border-t border-[rgba(0,0,0,0.05)]';
        let content = `
            <div class="px-[clamp(10px,2vw,20px)] py-[15px] flex items-center gap-[12px] cursor-pointer hover:bg-[#ebe6e0] transition-colors">
                <div class="size-[31px] rounded-full flex items-center justify-center overflow-hidden shrink-0 border-2 ${state[section].variation === item.id ? 'border-[#007187]' : 'border-[rgba(0,0,0,0.2)]'}">
                    ${item.color ? `<div class="w-[85%] h-[85%] rounded-full" style="background-color: ${item.color};"></div>` : ''}
                    ${item.isCustomUpload ? '<svg class="size-[20px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>' : ''}
                </div>
                <p class="flex-1 font-['Inter:Semi_Bold',sans-serif] text-[clamp(10px,2vw,18px)] text-[#4a3113] opacity-60 truncate">${item.name}</p>
                <p class="font-['Inter:Semi_Bold',sans-serif] text-[clamp(8px,1.5vw,16px)] text-[#4a3113] opacity-60 tracking-[-0.16px] shrink-0">+1500₽</p>
            </div>
        `;
        if (item.isColorPicker && state[section].variation === 'color') {
            content += `
                <div class="px-[clamp(10px,2vw,20px)] pb-[15px] flex items-center gap-3">
                    <input type="color" value="${state[section].color}" class="w-16 h-16 rounded-lg border-2 border-gray-300 cursor-pointer">
                    <input type="text" value="${state[section].color}" class="flex-1 px-4 py-2 border-2 border-gray-300 rounded-lg font-mono text-sm" placeholder="#000000">
                </div>
            `;
        }
        div.innerHTML = content;

        if (item.isCustomUpload) {
            div.querySelector('.cursor-pointer').addEventListener('click', () => document.getElementById('badge-upload')?.click());
        } else {
            div.querySelector('.cursor-pointer').addEventListener('click', () => handleVariationChange(section, item.id, item.color));
        }

        if (item.isColorPicker) {
            const colorInput = div.querySelector('input[type="color"]');
            const textInput = div.querySelector('input[type="text"]');
            if (colorInput && textInput) {
                colorInput.addEventListener('input', (e) => handleColorChange(section, e.target.value));
                textInput.addEventListener('input', (e) => handleColorChange(section, e.target.value));
            }
        }
        return div;
    }

    function populateSubmenus() {
        sphereVariations.forEach(v => submenus.spheres.appendChild(createSubMenuItem(v, 'spheres')));
        bodyVariations.forEach(v => submenus.body.appendChild(createSubMenuItem(v, 'body')));
        badgeVariations.forEach(v => submenus.badge.appendChild(createSubMenuItem(v, 'badge')));
        shockmountVariations.forEach(v => submenus.shockmount.appendChild(createSubMenuItem(v, 'shockmount')));
    }

    function getCurrentVariationName(section, variations) {
        const current = variations.find(v => v.id === state[section].variation);
        if (current?.isColorPicker) return `Свой цвет: ${state[section].color}`;
        if (current?.isCustomUpload && state.badge.customImage) return 'Свой шильдик';
        return current?.name || '';
    }

    // --- RENDER ---
    function render() {
        // Update menu subtitles and previews
        subtitles.spheres.textContent = getCurrentVariationName('spheres', sphereVariations);
        subtitles.body.textContent = getCurrentVariationName('body', bodyVariations);
        subtitles.badge.textContent = getCurrentVariationName('badge', badgeVariations);
        subtitles.shockmount.textContent = getCurrentVariationName('shockmount', shockmountVariations);
        caseLogoSubtitle.textContent = state.caseLogo.customImage ? 'Свой логотип' : 'Фирменный СОЮЗ';

        colorPreviews.spheres.style.backgroundColor = state.spheres.color;
        colorPreviews.body.style.backgroundColor = state.body.color;
        colorPreviews.shockmount.style.backgroundColor = state.shockmount.color;

        // Update submenus
        Object.keys(submenus).forEach(key => {
            if (expandedMenu === key) {
                submenus[key].classList.remove('hidden');
                chevrons[key].innerHTML = '<path d="m6 9 6 6 6-6"/>';
            } else {
                submenus[key].classList.add('hidden');
                chevrons[key].innerHTML = '<path d="m9 18 6-6-6-6"/>';
            }
        });

        // Update submenu content only when necessary
        if (expandedMenu) {
            const key = expandedMenu;
            submenus[key].innerHTML = '';
            const variations = key === 'spheres' ? sphereVariations : key === 'body' ? bodyVariations : key === 'badge' ? badgeVariations : shockmountVariations;
            variations.forEach(v => submenus[key].appendChild(createSubMenuItem(v, key)));
        }

        // Update product preview
        const assetPath = window.SOYUZ_CONFIG.asset_path;

        // Model
        const selectedModel = window.SOYUZ_CONFIG.models.find(m => m.id === state.model);
        microphoneContainer.style.width = selectedModel.dimensions.width;
        microphoneContainer.style.height = selectedModel.dimensions.height;

        Object.keys(modelButtons).forEach(modelId => {
            if (modelId === state.model) {
                modelButtons[modelId].style.backgroundColor = '#007187';
                modelButtons[modelId].style.color = 'white';
            } else {
                modelButtons[modelId].style.backgroundColor = 'transparent';
                modelButtons[modelId].style.color = '#4a3113';
            }
        });

        // Spheres
        const spheresUseColor = state.spheres.variation === 'color';
        const sphereVar = sphereVariations.find(v => v.id === state.spheres.variation);
        previewImages.topSphere.src = assetPath + sphereVar.imageSet.top;
        previewImages.bottomSphere.src = assetPath + sphereVar.imageSet.bottom;
        colorOverlays.topSphere.style.backgroundColor = state.spheres.color;
        colorOverlays.bottomSphere.style.backgroundColor = state.spheres.color;
        colorOverlays.topSphere.style.opacity = spheresUseColor ? 1 : 0;
        colorOverlays.bottomSphere.style.opacity = spheresUseColor ? 1 : 0;

        // Body
        const bodyUseColor = state.body.variation === 'color';
        const bodyVar = bodyVariations.find(v => v.id === state.body.variation);
        previewImages.body.src = assetPath + bodyVar.imageSet.body;
        colorOverlays.body.style.backgroundColor = state.body.color;
        colorOverlays.body.style.opacity = bodyUseColor ? 1 : 0;

        // Badge
        if (state.badge.variation === 'custom' && state.badge.customImage) {
            previewImages.badge.src = state.badge.customImage;
        } else {
            const badgeVar = badgeVariations.find(v => v.id === state.badge.variation);
            previewImages.badge.src = assetPath + badgeVar.imageSet.badge;
        }

        // Shockmount
        const shockmountUseColor = state.shockmount.variation === 'color';
        shockmountLayers.color.style.opacity = shockmountUseColor ? 1 : 0;
        shockmountLayers.cream.style.opacity = shockmountUseColor ? 0 : 1;
        colorOverlays.shockmount.style.backgroundColor = state.shockmount.color;
        colorOverlays.shockmount.style.opacity = shockmountUseColor ? 0.92 : 0;

        // Case Logo
        if (state.caseLogo.customImage) {
            caseLogoContainer.innerHTML = `<img src="${state.caseLogo.customImage}" style="width: 50%; height: auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); filter: sepia(1) contrast(0.8) brightness(0.9);">`;
        } else {
            caseLogoContainer.innerHTML = '';
        }
    }

    // --- INITIALIZATION ---
    document.getElementById('menu-item-case').addEventListener('click', () => caseLogoUploadInput.click());
    Object.keys(menuItems).forEach(key => {
        menuItems[key].addEventListener('click', () => toggleSubmenu(key));
    });
    badgeUploadInput.addEventListener('change', handleBadgeUpload);
    caseLogoUploadInput.addEventListener('change', handleCaseLogoUpload);
    modelButtons['017'].addEventListener('click', () => handleModelChange('017'));
    modelButtons['023'].addEventListener('click', () => handleModelChange('023'));

    populateSubmenus();
    render();
});
