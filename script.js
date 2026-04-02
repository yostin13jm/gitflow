let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function mostrarUsuarios() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";
  usuarios.forEach((usuario, index) => {
    lista.innerHTML += `
      <li>
        ${usuario} 
        <button onclick="editarUsuario(${index})">Editar</button>
        <button onclick="eliminarUsuario(${index})">Eliminar</button>
      </li>
    `;
  });
}

function crearUsuario() {
  const nombre = document.getElementById("nombre").value;
  if (!nombre.trim()) {
    alert("El nombre no puede estar vacío");
    return;
  }
  usuarios.push(nombre);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
  document.getElementById("nombre").value = "";

}

function editarUsuario(index) {
  const nuevoNombre = prompt("Nuevo nombre:", usuarios[index]);
  if (nuevoNombre) {
    usuarios[index] = nuevoNombre;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    mostrarUsuarios();
  }
}

function eliminarUsuario(index) {
  usuarios.splice(index, 1);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  mostrarUsuarios();
}

mostrarUsuarios();

