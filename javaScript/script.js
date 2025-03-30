/*Cada vez que pasemos el ratón por encima de una de las opciones del menú
el fondo de estas cambiarán de color*/
function generarColorAleatorio() {
    const colores = ['#ff4d4d', '#ffadb8', '#6a9fb5', '#ffb84d', '#4dff88', '#b74dff'];
    return colores[Math.floor(Math.random() * colores.length)];
  }
  
  const menuItems = document.querySelectorAll('.menusticky ul li');
  
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = generarColorAleatorio();
    });
    
    item.addEventListener('mouseleave', () => {
      item.style.backgroundColor = '';
    });
  });