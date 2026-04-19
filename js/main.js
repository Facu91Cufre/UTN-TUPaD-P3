const btnMenu = document.querySelector(".header__menu-btn");
const nav = document.querySelector(".nav");

const cargarCategorias = () => {
  const lista = document.getElementById("lista-categorias");
  categorias.forEach((categoria) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = categoria;
    li.append(a);
    lista.append(li);
  });
};

const cargarProductos = () => {
  const contProductos = document.getElementById("contenedor-productos");
  productos.forEach((producto) => {
    const article = document.createElement("article");
    article.classList.add("card-producto");
    article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="card-producto__imagen">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            <button>Ver Detalles</button>
            <button class="btn-agregar">Agregar al Carrito</button>
        `;
    const btnAgregar = article.querySelector(".btn-agregar");
    btnAgregar.addEventListener("click", () => {
      alert(`Agregaste ${producto.nombre} al carrito`);
    });
    contProductos.appendChild(article);
  });
};

btnMenu.addEventListener("click", () => {
  nav.classList.toggle("nav--show")
});

cargarCategorias();
cargarProductos();
