//llamado a un node del DOM
let root = document.querySelector("#root");

root.innerHTML = `Hola mundo`;

//elemento de tipo div con un atributo class
let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios";

//lista de textos
let formularios =   [
    {nombre:"login", link:"componentes/longin/login.html"},
    {nombre:"Formulario De contacto", link:"componentes/FormularioDeContacto/FormularioDeContacto.html"},
    {nombre:"Formulario De Registro", link:"componentes/FormularioDeRegistro/FormularioDeRegistro.html"},
    {nombre:"Formulario De Busqueda", link:"componentes/FormularioDeBusqueda/FormularioDeBusqueda.html"},
    {nombre:"Formulario De Pedido Compras", link:"componentes/FormularioDePedidoCompras/FormularioDePedidoCompras.html"},
    {nombre:"Formulario De Comentarios Reseñas", link:"componentes/FormularioDeComentarios/FormularioDeComentarios.html"},
     ];

//forEach (for)
formularios.forEach(itemLista =>{ 
    let div_item = document.createElement("a");
    div_item.className = "div-item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);

