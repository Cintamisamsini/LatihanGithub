let btn= document.querySelector('#btn');

btn.addEventListener('contexmenu', (e) => {
    e.preventDefault();
});

btn.addEventListener('mouseup', (e) => {
    let msg = document.querySelector('#message');
    switch(e.button) {
        case 0:
            msg.textContent = 'left mouse button clicked';
            break;
        case 1:
            msg.textContent = 'middle mouse button clicked';
            break;
        case 2:
            msg.textContent = 'rigth mouse button clicked';
            break;
        default:
            msg.textContent = 'unknown mouse button code: ${event.button}';
    }
});