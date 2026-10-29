// Car configurations with realistic proportions - BIGGER AND ALIGNED
const carConfigs = {
    sedan: {
        name: 'Sedan',
        outline: `
            <svg viewBox="0 0 400 650" xmlns="http://www.w3.org/2000/svg">
                <!-- Car body outline -->
                <path d="M 100 40 
                         Q 100 25, 115 20
                         L 285 20
                         Q 300 25, 300 40
                         L 315 120
                         L 320 400
                         L 315 560
                         L 310 610
                         Q 305 625, 290 630
                         L 110 630
                         Q 95 625, 90 610
                         L 85 560
                         L 80 400
                         L 85 120
                         Z" 
                      fill="rgba(255, 215, 0, 0.08)" stroke="#ffd700" stroke-width="3" opacity="0.7"/>
                
                <!-- Engine bay -->
                <rect x="95" y="30" width="210" height="110" 
                      fill="rgba(50, 50, 50, 0.4)" 
                      stroke="#555" stroke-width="1.5" opacity="0.9"/>
                <text x="200" y="90" font-size="16" fill="#666" text-anchor="middle" opacity="0.9">ENGINE</text>
                
                <!-- Trunk -->
                <rect x="95" y="510" width="210" height="110" 
                      fill="rgba(50, 50, 50, 0.4)" 
                      stroke="#555" stroke-width="1.5" opacity="0.9"/>
                <text x="200" y="570" font-size="16" fill="#666" text-anchor="middle" opacity="0.9">TRUNK</text>
            </svg>
        `,
        interiorZone: { x: 105, y: 310, width: 190, height: 190 },
        dashboard: { x: 105, y: 150, width: 190, height: 110 },
        steeringWheel: { x: 140, y: 205, r: 30 },
        driverSeat: { x: 120, y: 270, width: 50, height: 65 }
    },
    suv: {
        name: 'SUV',
        outline: `
            <svg viewBox="0 0 420 680" xmlns="http://www.w3.org/2000/svg">
                <!-- SUV body outline (wider) -->
                <path d="M 85 40 
                         Q 85 22, 105 15
                         L 315 15
                         Q 335 22, 335 40
                         L 352 125
                         L 360 410
                         L 352 580
                         L 345 635
                         Q 340 653, 320 660
                         L 100 660
                         Q 80 653, 75 635
                         L 68 580
                         L 60 410
                         L 68 125
                         Z" 
                      fill="rgba(255, 215, 0, 0.08)" stroke="#ffd700" stroke-width="3" opacity="0.7"/>
                
                <!-- Engine bay -->
                <rect x="85" y="28" width="250" height="120" 
                      fill="rgba(50, 50, 50, 0.4)" 
                      stroke="#555" stroke-width="1.5" opacity="0.9"/>
                <text x="210" y="95" font-size="16" fill="#666" text-anchor="middle" opacity="0.9">ENGINE</text>
                
                <!-- Cargo area -->
                <rect x="85" y="532" width="250" height="120" 
                      fill="rgba(50, 50, 50, 0.4)" 
                      stroke="#555" stroke-width="1.5" opacity="0.9"/>
                <text x="210" y="595" font-size="16" fill="#666" text-anchor="middle" opacity="0.9">CARGO</text>
            </svg>
        `,
        interiorZone: { x: 100, y: 340, width: 220, height: 180 },
        dashboard: { x: 100, y: 158, width: 220, height: 120 },
        steeringWheel: { x: 140, y: 218, r: 33 },
        driverSeat: { x: 120, y: 288, width: 55, height: 70 }
    },
    truck: {
        name: 'Pickup Truck',
        outline: `
            <svg viewBox="0 0 420 720" xmlns="http://www.w3.org/2000/svg">
                <!-- Truck cab -->
                <path d="M 80 40 
                         Q 80 20, 102 12
                         L 318 12
                         Q 340 20, 340 40
                         L 357 125
                         L 367 370
                         L 357 425
                         L 345 450
                         L 75 450
                         L 63 425
                         L 53 370
                         L 53 125
                         Z" 
                      fill="rgba(255, 215, 0, 0.08)" stroke="#ffd700" stroke-width="3" opacity="0.7"/>
                
                <!-- Truck bed -->
                <rect x="60" y="465" width="300" height="240" 
                      fill="rgba(30, 30, 30, 0.2)" 
                      stroke="#ffd700" stroke-width="3" 
                      stroke-dasharray="10,5" opacity="0.5"/>
                <text x="210" y="590" font-size="18" fill="#555" text-anchor="middle" opacity="0.7">TRUCK BED</text>
                
                <!-- Engine bay -->
                <rect x="83" y="25" width="254" height="125" 
                      fill="rgba(50, 50, 50, 0.4)" 
                      stroke="#555" stroke-width="1.5" opacity="0.9"/>
                <text x="210" y="95" font-size="16" fill="#666" text-anchor="middle" opacity="0.9">ENGINE</text>
            </svg>
        `,
        interiorZone: { x: 95, y: 300, width: 230, height: 140 },
        dashboard: { x: 95, y: 160, width: 230, height: 110 },
        steeringWheel: { x: 140, y: 215, r: 35 },
        driverSeat: { x: 115, y: 280, width: 58, height: 68 }
    }
};

// Component SVG templates - SMALLER AND PROPORTIONAL
const componentSVGs = {
    shelf: {
        width: 60,
        height: 25,
        svg: `<svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="3" width="58" height="8" fill="#3a3a3a" stroke="#ffd700" stroke-width="1.5" rx="1"/>
            <rect x="4" y="11" width="5" height="12" fill="#2a2a2a" stroke="#555" stroke-width="1"/>
            <rect x="51" y="11" width="5" height="12" fill="#2a2a2a" stroke="#555" stroke-width="1"/>
        </svg>`
    },
    speaker: {
        width: 40,
        height: 40,
        svg: `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="18" fill="#1a1a1a" stroke="#ffd700" stroke-width="1.5"/>
            <circle cx="20" cy="20" r="14" fill="#0a0a0a" stroke="#444" stroke-width="1"/>
            <circle cx="20" cy="20" r="10" fill="#222" stroke="#444" stroke-width="1"/>
            <circle cx="20" cy="20" r="6" fill="#0a0a0a"/>
            <circle cx="20" cy="20" r="2.5" fill="#ffd700"/>
        </svg>`
    },
    'storage-box': {
        width: 55,
        height: 48,
        svg: `<svg viewBox="0 0 55 48" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="51" height="44" fill="#2a2a2a" stroke="#ffd700" stroke-width="1.5" rx="2"/>
            <rect x="5" y="5" width="45" height="38" fill="#1a1a1a" stroke="#555" stroke-width="1"/>
            <rect x="10" y="22" width="35" height="1.5" fill="#444"/>
            <circle cx="27.5" cy="27" r="4" fill="none" stroke="#ffd700" stroke-width="1.5"/>
            <rect x="26" y="25" width="3" height="4" fill="#ffd700"/>
        </svg>`
    },
    cupholder: {
        width: 32,
        height: 32,
        svg: `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="14" fill="#1a1a1a" stroke="#ffd700" stroke-width="1.5"/>
            <circle cx="16" cy="16" r="11" fill="#0a0a0a" stroke="#333" stroke-width="1"/>
            <ellipse cx="16" cy="14.5" rx="9" ry="2.5" fill="#222"/>
            <ellipse cx="16" cy="14.5" rx="7" ry="1.8" fill="#0a0a0a"/>
        </svg>`
    },
    screen: {
        width: 70,
        height: 48,
        svg: `<svg viewBox="0 0 70 48" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="66" height="44" fill="#0a0a0a" stroke="#ffd700" stroke-width="1.5" rx="2"/>
            <rect x="5" y="5" width="60" height="38" fill="#1a3a52"/>
            <rect x="8" y="8" width="54" height="12" fill="#0d2636"/>
            <text x="35" y="17" font-size="8" fill="#ffd700" text-anchor="middle" font-weight="bold">DISPLAY</text>
            <circle cx="14" cy="32" r="2" fill="#555"/>
            <circle cx="22" cy="32" r="2" fill="#555"/>
            <circle cx="30" cy="32" r="2" fill="#555"/>
        </svg>`
    },
    minibar: {
        width: 62,
        height: 35,
        svg: `<svg viewBox="0 0 62 35" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="58" height="31" fill="#2a2a2a" stroke="#ffd700" stroke-width="1.5" rx="2"/>
            <rect x="5" y="5" width="52" height="25" fill="#1a1a1a"/>
            <circle cx="16" cy="17.5" r="5" fill="#0a0a0a" stroke="#555" stroke-width="1"/>
            <circle cx="31" cy="17.5" r="5" fill="#0a0a0a" stroke="#555" stroke-width="1"/>
            <circle cx="46" cy="17.5" r="5" fill="#0a0a0a" stroke="#555" stroke-width="1"/>
        </svg>`
    }
};

// State
let currentCarType = 'sedan';
let placedComponents = [];
let selectedComponent = null;
let draggedComponentType = null;
let draggedElement = null;
let isDraggingFromLibrary = false;
let isMovingComponent = false;
let dragOffset = { x: 0, y: 0 };
let componentCounter = 0;

// DOM Elements
const carTypeBtns = document.querySelectorAll('.car-type-btn');
const carContainer = document.getElementById('carContainer');
const componentItems = document.querySelectorAll('.component-item');
const clearAllBtn = document.getElementById('clearAll');
const carTypeInfo = document.getElementById('carTypeInfo');
const componentCount = document.getElementById('componentCount');
const dragPreview = document.getElementById('dragPreview');
const componentMenu = document.getElementById('componentMenu');
const moveBtn = document.getElementById('moveBtn');
const rotateBtn = document.getElementById('rotateBtn');
const deleteBtn = document.getElementById('deleteBtn');

// Initialize
function init() {
    setupCarTypeButtons();
    setupComponentDragging();
    setupClearButton();
    setupMenuButtons();
    setupClickOutside();
    drawCar();
    updateCarInfo();
}

// Car Type Selection
function setupCarTypeButtons() {
    carTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            carTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCarType = btn.dataset.type;
            drawCar();
            clearAllComponents();
            updateCarInfo();
        });
    });
}

// Draw complete car with fixed elements
function drawCar() {
    const config = carConfigs[currentCarType];
    
    carContainer.innerHTML = `
        <!-- Car outline SVG overlay -->
        <div class="car-outline-overlay">
            ${config.outline}
        </div>
        
        <!-- Fixed dashboard -->
        <div class="dashboard-fixed" style="
            position: absolute;
            left: ${config.dashboard.x}px;
            top: ${config.dashboard.y}px;
            width: ${config.dashboard.width}px;
            height: ${config.dashboard.height}px;
            background: #1a1a1a;
            border: 2px solid #ffd700;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffd700;
            font-weight: bold;
            font-size: 14px;
            pointer-events: none;
            z-index: 50;
        ">
            <div style="text-align: center;">
                <div style="font-size: 22px; margin-bottom: 5px;">88:88</div>
                <div style="font-size: 10px;">DASHBOARD</div>
            </div>
        </div>
        
        <!-- Steering wheel -->
        <svg style="
            position: absolute;
            left: ${config.steeringWheel.x - config.steeringWheel.r}px;
            top: ${config.steeringWheel.y - config.steeringWheel.r}px;
            width: ${config.steeringWheel.r * 2}px;
            height: ${config.steeringWheel.r * 2}px;
            pointer-events: none;
            z-index: 51;
        " viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="46" fill="#0a0a0a" stroke="#ffd700" stroke-width="3"/>
            <circle cx="50" cy="50" r="36" fill="none" stroke="#ffd700" stroke-width="3.5"/>
            <circle cx="50" cy="50" r="10" fill="#ffd700"/>
            <line x1="50" y1="14" x2="50" y2="33" stroke="#ffd700" stroke-width="3"/>
        </svg>
        
        <!-- Driver seat -->
        <div class="driver-seat-fixed" style="
            position: absolute;
            left: ${config.driverSeat.x}px;
            top: ${config.driverSeat.y}px;
            width: ${config.driverSeat.width}px;
            height: ${config.driverSeat.height}px;
            background: #2a2a2a;
            border: 2px solid #ffd700;
            border-radius: 5px;
            pointer-events: none;
            z-index: 49;
        ">
            <div style="
                margin: 5px;
                height: calc(100% - 10px);
                background: #1a1a1a;
                border-radius: 3px;
            "></div>
        </div>
        
        <!-- Customizable interior zone -->
        <div id="interiorZone" class="interior-zone" style="
            position: absolute;
            left: ${config.interiorZone.x}px;
            top: ${config.interiorZone.y}px;
            width: ${config.interiorZone.width}px;
            height: ${config.interiorZone.height}px;
        "></div>
    `;
}

// Get interior zone bounds
function getInteriorZone() {
    const zone = document.getElementById('interiorZone');
    if (!zone) return null;
    return zone.getBoundingClientRect();
}

// Component Dragging
function setupComponentDragging() {
    componentItems.forEach(item => {
        item.addEventListener('mousedown', startDragFromLibrary);
    });
    
    document.addEventListener('mousemove', handleDragMove);
    document.addEventListener('mouseup', handleDragEnd);
}

function startDragFromLibrary(e) {
    e.preventDefault();
    const componentType = e.currentTarget.dataset.component;
    draggedComponentType = componentType;
    isDraggingFromLibrary = true;
    
    const componentData = componentSVGs[componentType];
    dragPreview.innerHTML = componentData.svg;
    dragPreview.style.width = componentData.width + 'px';
    dragPreview.style.height = componentData.height + 'px';
    dragPreview.classList.add('active');
    
    updateDragPreview(e.clientX, e.clientY);
}

function handleDragMove(e) {
    if (draggedComponentType && isDraggingFromLibrary) {
        updateDragPreview(e.clientX, e.clientY);
        checkDragValidity(e.clientX, e.clientY);
    } else if (isMovingComponent && draggedElement) {
        movePlacedComponent(e.clientX, e.clientY);
    }
}

function updateDragPreview(x, y) {
    const componentData = componentSVGs[draggedComponentType];
    dragPreview.style.left = (x - componentData.width / 2) + 'px';
    dragPreview.style.top = (y - componentData.height / 2) + 'px';
}

function checkDragValidity(x, y) {
    const componentData = componentSVGs[draggedComponentType];
    const zone = getInteriorZone();
    
    if (!zone) {
        dragPreview.classList.add('invalid');
        dragPreview.classList.remove('valid');
        return false;
    }
    
    const compLeft = x - componentData.width / 2;
    const compTop = y - componentData.height / 2;
    const compRight = compLeft + componentData.width;
    const compBottom = compTop + componentData.height;
    
    const valid = compLeft >= zone.left && 
                  compTop >= zone.top && 
                  compRight <= zone.right && 
                  compBottom <= zone.bottom;
    
    if (valid) {
        dragPreview.classList.add('valid');
        dragPreview.classList.remove('invalid');
    } else {
        dragPreview.classList.add('invalid');
        dragPreview.classList.remove('valid');
    }
    
    return valid;
}

function handleDragEnd(e) {
    if (draggedComponentType && isDraggingFromLibrary) {
        const valid = checkDragValidity(e.clientX, e.clientY);
        if (valid) {
            placeComponent(e.clientX, e.clientY);
        }
        
        dragPreview.classList.remove('active', 'valid', 'invalid');
        draggedComponentType = null;
        isDraggingFromLibrary = false;
    } else if (isMovingComponent) {
        isMovingComponent = false;
        draggedElement = null;
    }
}

// Place component
function placeComponent(x, y) {
    const componentData = componentSVGs[draggedComponentType];
    const containerRect = carContainer.getBoundingClientRect();
    
    const relX = x - containerRect.left - componentData.width / 2;
    const relY = y - containerRect.top - componentData.height / 2;
    
    const component = {
        id: `component-${componentCounter++}`,
        type: draggedComponentType,
        x: relX,
        y: relY,
        width: componentData.width,
        height: componentData.height,
        rotation: 0
    };
    
    placedComponents.push(component);
    renderComponent(component);
    updateComponentCount();
}

function renderComponent(component) {
    const componentData = componentSVGs[component.type];
    const div = document.createElement('div');
    div.className = 'placed-component valid';
    div.id = component.id;
    div.innerHTML = componentData.svg;
    div.style.position = 'absolute';
    div.style.left = component.x + 'px';
    div.style.top = component.y + 'px';
    div.style.width = component.width + 'px';
    div.style.height = component.height + 'px';
    div.style.transform = `rotate(${component.rotation}deg)`;
    div.style.cursor = 'pointer';
    div.style.zIndex = '10';
    
    // Click to select
    div.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectedComponent && selectedComponent.id === component.id) {
            // Already selected, do nothing
            return;
        }
        selectComponent(component.id);
    });
    
    carContainer.appendChild(div);
    checkComponentValidity(component);
}

function startMovingComponent(component) {
    isMovingComponent = true;
    draggedElement = component;
    document.body.style.cursor = 'move';
    
    const moveHandler = (e) => {
        if (!isMovingComponent) return;
        const containerRect = carContainer.getBoundingClientRect();
        draggedElement.x = e.clientX - containerRect.left - draggedElement.width / 2;
        draggedElement.y = e.clientY - containerRect.top - draggedElement.height / 2;
        
        const element = document.getElementById(draggedElement.id);
        element.style.left = draggedElement.x + 'px';
        element.style.top = draggedElement.y + 'px';
        
        checkComponentValidity(draggedElement);
        updateMenuPosition(draggedElement);
    };
    
    const stopHandler = () => {
        isMovingComponent = false;
        draggedElement = null;
        document.body.style.cursor = 'default';
        document.removeEventListener('mousemove', moveHandler);
        document.removeEventListener('mouseup', stopHandler);
    };
    
    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('mouseup', stopHandler);
}

function movePlacedComponent(x, y) {
    if (!draggedElement) return;
    
    const containerRect = carContainer.getBoundingClientRect();
    draggedElement.x = x - containerRect.left - draggedElement.width / 2;
    draggedElement.y = y - containerRect.top - draggedElement.height / 2;
    
    const element = document.getElementById(draggedElement.id);
    element.style.left = draggedElement.x + 'px';
    element.style.top = draggedElement.y + 'px';
    
    checkComponentValidity(draggedElement);
    updateMenuPosition(draggedElement);
}

function checkComponentValidity(component) {
    const zone = getInteriorZone();
    if (!zone) return;
    
    const containerRect = carContainer.getBoundingClientRect();
    const compLeft = component.x + containerRect.left;
    const compTop = component.y + containerRect.top;
    const compRight = compLeft + component.width;
    const compBottom = compTop + component.height;
    
    const valid = compLeft >= zone.left && 
                  compTop >= zone.top && 
                  compRight <= zone.right && 
                  compBottom <= zone.bottom;
    
    const element = document.getElementById(component.id);
    if (valid) {
        element.classList.add('valid');
        element.classList.remove('invalid');
    } else {
        element.classList.add('invalid');
        element.classList.remove('valid');
    }
}

// Component selection and menu
function selectComponent(componentId) {
    document.querySelectorAll('.placed-component').forEach(el => {
        el.classList.remove('selected');
    });
    
    const component = placedComponents.find(c => c.id === componentId);
    if (component) {
        selectedComponent = component;
        const element = document.getElementById(componentId);
        element.classList.add('selected');
        showComponentMenu(component);
    }
}

function showComponentMenu(component) {
    const element = document.getElementById(component.id);
    const rect = element.getBoundingClientRect();
    
    // Position ABOVE the component, centered
    const menuWidth = 130; // 3 buttons * ~40px + padding
    componentMenu.style.left = (rect.left + rect.width / 2 - menuWidth / 2) + 'px';
    componentMenu.style.top = (rect.top - 50) + 'px';
    componentMenu.classList.add('active');
}

function updateMenuPosition(component) {
    if (selectedComponent && selectedComponent.id === component.id) {
        showComponentMenu(component);
    }
}

function hideComponentMenu() {
    componentMenu.classList.remove('active');
    document.querySelectorAll('.placed-component').forEach(el => {
        el.classList.remove('selected');
    });
    selectedComponent = null;
}

function setupMenuButtons() {
    moveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectedComponent) {
            startMovingComponent(selectedComponent);
        }
    });
    
    rotateBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectedComponent) {
            selectedComponent.rotation = (selectedComponent.rotation + 90) % 360;
            const element = document.getElementById(selectedComponent.id);
            element.style.transform = `rotate(${selectedComponent.rotation}deg)`;
            showComponentMenu(selectedComponent);
        }
    });
    
    deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectedComponent) {
            removeComponent(selectedComponent.id);
            hideComponentMenu();
        }
    });
}

// Click outside to deselect
function setupClickOutside() {
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.placed-component') && 
            !e.target.closest('.component-menu') &&
            !e.target.closest('.component-item')) {
            hideComponentMenu();
        }
    });
}

// Remove component
function removeComponent(componentId) {
    const element = document.getElementById(componentId);
    if (element) {
        element.remove();
    }
    
    placedComponents = placedComponents.filter(c => c.id !== componentId);
    updateComponentCount();
}

// Clear all components
function setupClearButton() {
    clearAllBtn.addEventListener('click', clearAllComponents);
}

function clearAllComponents() {
    document.querySelectorAll('.placed-component').forEach(el => el.remove());
    placedComponents = [];
    hideComponentMenu();
    updateComponentCount();
}

// Update UI
function updateCarInfo() {
    const config = carConfigs[currentCarType];
    carTypeInfo.textContent = `Current: ${config.name}`;
}

function updateComponentCount() {
    componentCount.textContent = `Components: ${placedComponents.length}`;
}

// Start the app
init();
