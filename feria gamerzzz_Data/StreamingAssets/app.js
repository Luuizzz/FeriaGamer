// 1. ESTADO DEL JUEGO
const estado = {
  escena: 1,
  evidencia: 0,
  confianza_camila: 1,
  sospechoso_identificado: false,
  decision_final: null,
  acciones: []
};
// 2. ESTRUCTURA DE DATOS: ESCENAS
const escenas = [
  {
    id: 1,
    nombre: 'Entrada campus',
    descripcion: 'Valentina llega al campus y descubre CampusApp',
    completada: false,
    publicacionesVisibles: ['p1','p2','p3','p4','p5']
  },
  {
    id: 2,
    nombre: 'El acoso escala',
    descripcion: 'Camila es identificada directamente en el feed',
    completada: false,
    publicacionesVisibles: ['p1','p2','p3','p4','p5','p6','p7']
  },
  {
    id: 3,
    nombre: 'Valentina atacada',
    descripcion: 'Valentina también se convierte en objetivo',
    completada: false,
    publicacionesVisibles: ['p1','p2','p3','p4','p5','p6','p7','p8','p9']
  }
];

// 3. PUBLICACIONES
const publicaciones = [
  {
    id: 'p1', toxico: false,
    usuario: '@martamolina', iniciales: 'MM',
    colorAvatar: '#185FA5', bgAvatar: '#E6F1FB',
    tiempo: 'hace 5 min',
    cuerpo: 'cancelaron cálculo 😭 ahora qué hacemos con todo ese tiempo libre',
    likes: 18, likeActivo: false, guardadoActivo: false, esEvidencia: false,
    comentarios: [
      { usuario: '@julianc', texto: 'DIOS SÍ', toxico: false },
      { usuario: '@sofi_arts', texto: 'por fin algo bueno jajaja', toxico: false }
    ]
  },
  {
    id: 'p2', toxico: false,
    usuario: '@julianc', iniciales: 'JC',
    colorAvatar: '#534AB7', bgAvatar: '#EEEDFE',
    tiempo: 'hace 12 min',
    cuerpo: '¿alguien perdió un cargador tipo C en el piso 3 de Casa Estudio?',
    likes: 3, likeActivo: false, guardadoActivo: false, esEvidencia: false,
    comentarios: []
  },
  {
    id: 'p3', toxico: true,
    usuario: '@sombracampus', iniciales: '?',
    colorAvatar: '#A32D2D', bgAvatar: '#FCEBEB',
    tiempo: 'hace 18 min',
    cuerpo: 'Pilas con la de Sistemas que anda de noviecita por ahí. Guarden a sus novios que esas son las que más hambre tienen… o pásenle mi número.',
    likes: 23, likeActivo: false, guardadoActivo: false, esEvidencia: true,
    comentarios: [
      { usuario: '@anonimo44', texto: 'Reaaaaal. No tiene vergüenza esa tipa.', toxico: true },
      { usuario: '@lurker99', texto: 'solo quiere atención', toxico: true }
    ]
  },
  {
    id: 'p4', toxico: false,
    usuario: '@sofi_arts', iniciales: 'SA',
    colorAvatar: '#854F0B', bgAvatar: '#FAEEDA',
    tiempo: 'hace 22 min',
    cuerpo: 'sobreviviendo a parciales ☕📚',
    likes: 47, likeActivo: false, guardadoActivo: false, esEvidencia: false,
    comentarios: [
      { usuario: '@martamolina', texto: 'ánimo bb 💪', toxico: false }
    ]
  },
  {
    id: 'p5', toxico: true,
    usuario: '@sombracampus', iniciales: '?',
    colorAvatar: '#A32D2D', bgAvatar: '#FCEBEB',
    tiempo: 'hace 31 min',
    cuerpo: 'hay gente que viene del interior y cree que puede hacer lo que quiera aquí :// tbh, ni me sorprende',
    likes: 31, likeActivo: false, guardadoActivo: false, esEvidencia: true,
    comentarios: [
      { usuario: '@anon_u', texto: 'literal', toxico: true },
      { usuario: '@campu_voice', texto: 'la universidad cada vez peor. dejan entrar a cualquiera', toxico: true }
    ]
  },
  {
    id: 'p6', toxico: true,
    usuario: '@sombracampus', iniciales: '?',
    colorAvatar: '#A32D2D', bgAvatar: '#FCEBEB',
    tiempo: 'hace 2 min',
    cuerpo: 'Aquí tienen el ig de la joya: @camilasooto2 — Camila S., segundo semestre. Tienen carta blanca.',
    likes: 52, likeActivo: false, guardadoActivo: false, esEvidencia: true,
    comentarios: [
      { usuario: '@anon55', texto: 'ya sabemos quién es JAJA', toxico: true },
      { usuario: '@campu09', texto: 'yo no me sentiría cómodo estudiando con alguien así', toxico: true }
    ]
  },
  {
    id: 'p7', toxico: true,
    usuario: '@anonimo_u', iniciales: '??',
    colorAvatar: '#854F0B', bgAvatar: '#FAEEDA',
    tiempo: 'hace 4 min',
    cuerpo: 'lo peor no es que sea lesbiana sino que lo presume. qué necesidad',
    likes: 37, likeActivo: false, guardadoActivo: false, esEvidencia: true,
    comentarios: [
      { usuario: '@lurker22', texto: 'vayan a decirle algo', toxico: true }
    ]
  },
  {
    id: 'p8', toxico: true,
    usuario: '@sombracampus', iniciales: '?',
    colorAvatar: '#A32D2D', bgAvatar: '#FCEBEB',
    tiempo: 'hace 1 min',
    cuerpo: 'la nueva de Sistemas defendiendo lesbianas JAJA quién se lo pidió',
    likes: 29, likeActivo: false, guardadoActivo: false, esEvidencia: true,
    comentarios: [
      { usuario: '@anon_c', texto: 'heroína de CampusApp 💀', toxico: true },
      { usuario: '@otro44', texto: 'devuélvete a tu pueblito', toxico: true }
    ]
  },
  {
    id: 'p9', toxico: true,
    usuario: '@campu_voz', iniciales: 'CV',
    colorAvatar: '#534AB7', bgAvatar: '#EEEDFE',
    tiempo: 'hace 3 min',
    cuerpo: 'las raritas siempre se juntan 💀',
    likes: 17, likeActivo: false, guardadoActivo: false, esEvidencia: false,
    comentarios: [
      { usuario: '@anon_f', texto: 'no falla nunca', toxico: true }
    ]
  }
];

// 4. PERFILES PARA EL MINI-RETO

const perfiles = [
  {
    id: 'lucas',
    usuario: '@lucas_m', nombre: 'Lucas Martínez',
    iniciales: 'LM', colorAvatar: '#185FA5', bgAvatar: '#E6F1FB',
    bio: 'Ingeniería Civil · futbol los sábados ⚽',
    esSospechoso: false,
    publicaciones: [
      'nos vemos en el partido del viernes',
      'alguien tiene los apuntes de fluidos?',
      'parcial de termodinámica fue brutal'
    ]
  },
  {
    id: 'sebastian',
    usuario: '@sebasmartinez', nombre: 'Sebastián Martinez',
    iniciales: 'SM', colorAvatar: '#854F0B', bgAvatar: '#FAEEDA',
    bio: 'Sistemas · tbh la gente exagera todo',
    esSospechoso: true,
    publicaciones: [
      'la gente rara siempre necesita atención tbh',
      'no falta la que cree que todo gira alrededor de ella',
      'si no quieren atención, no publiquen cosas :/'
    ]
  },
  {
    id: 'diana',
    usuario: '@diana_r', nombre: 'Diana Rodríguez',
    iniciales: 'DR', colorAvatar: '#993556', bgAvatar: '#FBEAF0',
    bio: 'Psicología · café y libros ☕',
    esSospechoso: false,
    publicaciones: [
      'el café del bloque C es el mejor del campus',
      'examen de estadística mañana 😭',
      'alguien va a la feria de bienestar?'
    ]
  }
];


// 5. CREAR TARJETA DE PUBLICACIÓN

function crearTarjeta(pub) {
  const clasePost = pub.toxico ? 'post toxico' : 'post';
  const etiqueta = pub.esEvidencia
    ? '<span class="etiqueta-evidencia">evidencia</span>'
    : '';
  const comentariosHTML = pub.comentarios.map(c => {
    const clase = c.toxico ? 'comentario toxico' : 'comentario';
    return `<p class="${clase}"><strong>${c.usuario}</strong> ${c.texto}</p>`;
  }).join('');

  return `
    <div class="${clasePost}" id="post-${pub.id}">
      <div class="post-header">
        <div class="avatar" style="background:${pub.bgAvatar};color:${pub.colorAvatar}">
          ${pub.iniciales}
        </div>
        <div>
          <p class="post-usuario">${pub.usuario}</p>
          <p class="post-tiempo">${pub.tiempo}</p>
        </div>
      </div>
      <p class="post-cuerpo">${pub.cuerpo}</p>
      <div class="post-acciones">
        <button class="btn-accion" id="like-${pub.id}" onclick="toggleLike('${pub.id}')">
          <i class="fa-regular fa-heart"></i>
        </button>
        <button class="btn-accion" id="guardar-${pub.id}" onclick="toggleGuardar('${pub.id}')">
          <i class="fa-regular fa-bookmark"></i>${etiqueta}
        </button>
        <button class="btn-accion">
          <i class="fa-regular fa-comment"></i>
        </button>
        <button class="btn-accion btn-compartir">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
      <p class="post-likes" id="likes-${pub.id}">${pub.likes} likes</p>
      <div>${comentariosHTML}</div>
    <div class="comentario-input-fila">
        <div class="avatar avatar-mini" style="background:#EAF3DE;color:#3B6D11">V</div>
        <input
          class="input-comentario"
          type="text"
          placeholder="Agrega un comentario..."
          id="input-${pub.id}"
          onkeydown="if(event.key==='Enter') enviarComentario('${pub.id}')"
        />
        <button class="btn-enviar" onclick="enviarComentario('${pub.id}')">
          <i class="fa-solid fa-paper-plane"></i>
        </button>
      </div>
    </div>
  `;
}


// 6. RENDERIZAR FEED

function renderFeed() {
  const contenedor = document.getElementById('feed');
  const escenaActual = escenas.find(e => e.id === estado.escena);
  const pubsVisibles = publicaciones.filter(p =>
    escenaActual.publicacionesVisibles.includes(p.id)
  );
  contenedor.innerHTML = pubsVisibles.map(p => crearTarjeta(p)).join('');
}


// 7. TOGGLE LIKE

function toggleLike(id) {
  const pub = publicaciones.find(p => p.id === id);
  if (!pub) return;
  pub.likeActivo = !pub.likeActivo;
  pub.likes += pub.likeActivo ? 1 : -1;
  document.getElementById('likes-' + id).textContent = pub.likes + ' likes';
  const btn = document.getElementById('like-' + id);
  btn.innerHTML = pub.likeActivo
    ? '<i class="fa-solid fa-heart"></i>'
    : '<i class="fa-regular fa-heart"></i>';
  btn.className = pub.likeActivo ? 'btn-accion activo-like' : 'btn-accion';
  registrarAccion('like', { post: id, activo: pub.likeActivo });
}


// 8. TOGGLE GUARDAR (evidencia)

function toggleGuardar(id) {
  const pub = publicaciones.find(p => p.id === id);
  if (!pub) return;
  pub.guardadoActivo = !pub.guardadoActivo;
  if (pub.esEvidencia) {
    estado.evidencia = pub.guardadoActivo
      ? Math.min(estado.evidencia + 1, 3)
      : Math.max(estado.evidencia - 1, 0);
  }
  const etiqueta = pub.esEvidencia
    ? '<span class="etiqueta-evidencia">evidencia</span>'
    : '';
  const btn = document.getElementById('guardar-' + id);
  btn.innerHTML = pub.guardadoActivo
    ? `<i class="fa-solid fa-bookmark"></i>${etiqueta}`
    : `<i class="fa-regular fa-bookmark"></i>${etiqueta}`;
  btn.className = pub.guardadoActivo ? 'btn-accion activo-guardar' : 'btn-accion';
  registrarAccion('guardar', { post: id, activo: pub.guardadoActivo, esEvidencia: pub.esEvidencia });
}


// 9. REGISTRAR ACCIÓN Y ACTUALIZAR TODO

function registrarAccion(tipo, detalle) {
  estado.acciones.push({ tipo, detalle, timestamp: Date.now() });
  actualizarPanelEstado();
  actualizarJSON();
}


// 10. ACTUALIZAR BARRAS DE ESTADO

function actualizarPanelEstado() {
  document.getElementById('barra-ev').style.width = (estado.evidencia / 3 * 100) + '%';
  document.getElementById('val-ev').textContent = estado.evidencia + '/3';
  document.getElementById('barra-cc').style.width = (estado.confianza_camila / 3 * 100) + '%';
  document.getElementById('val-cc').textContent = estado.confianza_camila + '/3';
  const nombres = { 1: '1 — Entrada campus', 2: '2 — El acoso escala', 3: '3 — Valentina atacada' };
  document.getElementById('val-escena').textContent = nombres[estado.escena];
}


// 11. ACTUALIZAR JSON

function actualizarJSON() {
  const jsonData = {
    escena_actual: estado.escena,
    evidencia: estado.evidencia,
    confianza_camila: estado.confianza_camila,
    sospechoso_identificado: estado.sospechoso_identificado,
    decision_final: estado.decision_final
  };

  const jsonString = JSON.stringify(jsonData);

  // 1. SI USAS VUPLEX (El estándar de pago, muy potente)
  if (window.vuplex) {
    window.vuplex.postMessage({ type: 'ACTUALIZAR_ESTADO', data: jsonString });
  } 
  // 2. SI USAS UNITY WEBVIEW (Alternativa gratuita popular)
  else if (window.Unity) {
    window.Unity.call(jsonString);
  }
  // 3. RESPALDO: Si estás probando la web en un navegador normal, mantiene tu descarga original
  else {
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const btn = document.getElementById('btn-exportar');
    if (btn) {
      btn.href = url;
      btn.download = 'game_state.json';
    }
  }
}


// 12. CAMBIAR ESCENA

function cambiarEscena(numero) {
  // 1. Actualizamos el número de escena en el estado conceptual
  estado.escena = numero;
  
  // 2. Buscamos los botones de cambio de escena (si es que existen en el HTML actual)
  document.querySelectorAll('.btn-escena').forEach(b => b.classList.remove('activa'));
  
  const botonActivo = document.getElementById('btn-e' + numero);
  if (botonActivo) {
    botonActivo.classList.add('activa');
  }
  
  // 3. Renderizamos el Feed con las publicaciones de la nueva escena y actualizamos interfaces
  renderFeed();
  actualizarPanelEstado();
  
  // 4. Le devolvemos el JSON a Unity para confirmar que la Web ya se enteró del cambio
  actualizarJSON();
}


// 13. CAMBIAR VISTA (pestañas)

function cambiarVista(nombre, btnClickeado) {
  document.querySelectorAll('.vista').forEach(v => v.classList.remove('activa'));
  document.getElementById('vista-' + nombre).classList.add('activa');
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('activo-nav'));
  btnClickeado.classList.add('activo-nav');
  if (nombre === 'perfil') renderPerfilValentina();
}


// 14. BUSCAR PERFIL

function buscarPerfil(texto) {
  const contenedor = document.getElementById('resultados-buscar');
  const resultados = texto.trim() === ''
    ? perfiles
    : perfiles.filter(p =>
        p.nombre.toLowerCase().includes(texto.toLowerCase()) ||
        p.usuario.toLowerCase().includes(texto.toLowerCase())
      );
  if (resultados.length === 0) {
    contenedor.innerHTML = '<p style="color:#8e8e8e;font-size:13px">No se encontraron usuarios</p>';
    return;
  }
  contenedor.innerHTML = resultados.map(p => `
    <div class="tarjeta-perfil" onclick="verPerfil('${p.id}')">
      <div class="avatar" style="background:${p.bgAvatar};color:${p.colorAvatar};width:44px;height:44px;flex-shrink:0">
        ${p.iniciales}
      </div>
      <div>
        <p class="perfil-nombre">${p.nombre}</p>
        <p class="perfil-bio">${p.usuario} · ${p.bio}</p>
      </div>
    </div>
  `).join('');
}


// 15. VER PERFIL INDIVIDUAL

function verPerfil(id) {
  const perfil = perfiles.find(p => p.id === id);
  if (!perfil) return;
  if (perfil.esSospechoso && !estado.sospechoso_identificado) {
    estado.sospechoso_identificado = true;
    estado.evidencia = Math.min(estado.evidencia + 1, 3);
    registrarAccion('identificar_sospechoso', { perfil: id });
    alert('¡Captura guardada! Las publicaciones de ' + perfil.nombre + ' coinciden con @sombracampus');
  }
  const pubsHTML = perfil.publicaciones.map(pub => `
    <div style="background:#f5f5f5;border-radius:8px;padding:10px;margin-bottom:8px;font-size:13px;color:#262626">
      ${pub}
    </div>
  `).join('');
  const contenedor = document.getElementById('resultados-buscar');
  contenedor.innerHTML = `
    <button onclick="buscarPerfil('')" style="background:none;border:none;color:#3B6D11;font-size:13px;cursor:pointer;margin-bottom:12px">
      ← volver
    </button>
    <div class="tarjeta-perfil" style="flex-direction:column;align-items:flex-start">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px">
        <div class="avatar" style="background:${perfil.bgAvatar};color:${perfil.colorAvatar};width:54px;height:54px">
          ${perfil.iniciales}
        </div>
        <div>
          <p class="perfil-nombre">${perfil.nombre}</p>
          <p class="perfil-bio">${perfil.usuario}</p>
          <p class="perfil-bio" style="margin-top:4px">${perfil.bio}</p>
        </div>
      </div>
      <div style="width:100%">
        <p class="capturas-titulo" style="margin-bottom:8px">Publicaciones recientes</p>
        ${pubsHTML}
      </div>
    </div>
  `;
}


// 16. PERFIL DE VALENTINA

function renderPerfilValentina() {
  const capturasGuardadas = publicaciones.filter(p => p.guardadoActivo);
  const capturasHTML = capturasGuardadas.length === 0
    ? '<p class="sin-capturas"><i class="fa-regular fa-bookmark"></i><br>No hay capturas guardadas aún</p>'
    : `<div class="capturas-grid">
        ${capturasGuardadas.map(p => `
          <div class="captura-item">${p.usuario}<br>${p.cuerpo.substring(0, 40)}...</div>
        `).join('')}
       </div>`;
  document.getElementById('perfil-valentina').innerHTML = `
    <div class="perfil-container">
      <div class="perfil-header">
        <div class="perfil-avatar-grande">V</div>
        <div>
          <p style="font-size:16px;font-weight:bold;margin-bottom:8px">valentina_s</p>
          <div class="perfil-stats">
            <div class="stat"><strong>0</strong><span>posts</span></div>
            <div class="stat"><strong>${capturasGuardadas.length}</strong><span>capturas</span></div>
            <div class="stat"><strong>1er sem</strong><span>semestre</span></div>
          </div>
        </div>
      </div>
      <p class="perfil-bio-grande">Sistemas · nueva en el campus 📍<br>@uninorte</p>
      <p class="capturas-titulo">Capturas guardadas como evidencia</p>
      ${capturasHTML}
    </div>
  `;
}
 function enviarComentario(id) {
  const input = document.getElementById('input-' + id);
  const texto = input.value.trim();
  if (!texto) return;

  const pub = publicaciones.find(p => p.id === id);
  if (!pub) return;

  // agrega el comentario al array
  pub.comentarios.push({ usuario: '@valentina_s', texto: texto, toxico: false });

  // si es la publicación p8 (escena 3), sube confianza camila
  if (id === 'p8') {
    estado.confianza_camila = Math.min(estado.confianza_camila + 1, 3);
  }

  input.value = '';
  registrarAccion('comentar', { post: id, texto: texto });

  // re-renderiza solo esa tarjeta para mostrar el comentario nuevo
  document.getElementById('post-' + id).outerHTML = crearTarjeta(pub);
}

// ARRANQUE

renderFeed();
actualizarPanelEstado();
actualizarJSON();
buscarPerfil('');
