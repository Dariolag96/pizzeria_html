const toggleButton = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

const menuPizze = [
  {
    nome: "Margherita",
    prezzo: "6€",
    ingredienti: ["Pomodoro", "Mozzarella", "Basilico"]
  },
  {
    nome: "Diavola",
    prezzo: "7€",
    ingredienti: ["Pomodoro", "Mozzarella", "Salame piccante"]
  },
  {
    nome: "Quattro Formaggi",
    prezzo: "8€",
    ingredienti: ["Mozzarella", "Gorgonzola", "Fontina", "Grana"]
  },
  {
    nome: "Capricciosa",
    prezzo: "8€",
    ingredienti: ["Pomodoro", "Mozzarella", "piselli", "uovo"]
  },
  {
    nome: "Primavera",
    prezzo: "8€",
    ingredienti: ["Pomodoro", "Mozzarella", , "Prosciutto cotto", "Funghi"]
  }
];


menuPizze.forEach(pizza => {
  const item = document.createElement('div');
  item.classList.add('menu__item');
  item.innerHTML = `
    <h3>${pizza.nome}</h3>
    <p><strong>Prezzo:</strong> ${pizza.prezzo}</p>
    <p><strong>Ingredienti:</strong> ${pizza.ingredienti.join(', ')}</p>
  `;
  menu.appendChild(item);
});

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('menu--hidden');

  if (menu.classList.contains('menu--hidden')) {
    toggleButton.textContent = 'Mostra Menu';
  } else {
    toggleButton.textContent = 'Chiudi Menu';
  }
});
