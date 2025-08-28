function calcularGypsum() {
  let area = parseFloat(document.getElementById("area").value);
  if (isNaN(area) || area <= 0) {
    document.getElementById("resultado").innerHTML = "Por favor ingresa un valor válido.";
    return;
  }

  // 🔹 Rendimientos estimados por m² (ejemplo, se pueden ajustar según normas locales)
  let plancha = 1 / 3;        // 1 plancha (1.22x2.44m ≈ 3m²)
  let tornillos = 25;         // 25 tornillos por m²
  let primarios = 1 / 1.2;    // 1 metro de perfil primario cada 1.2m²
  let secundarios = 1 / 0.6;  // 1 metro de perfil secundario cada 0.6m²
  let romeral = 1 / 2.5;      // 1 metro lineal de romeral cada 2.5m²

  let totalPlanchas = Math.ceil(area * plancha);
  let totalTornillos = Math.ceil(area * tornillos);
  let totalPrimarios = (area * primarios).toFixed(1);
  let totalSecundarios = (area * secundarios).toFixed(1);
  let totalRomeral = (area * romeral).toFixed(1);

  document.getElementById("resultado").innerHTML = `
    <p>✅ Para <b>${area} m²</b> necesitas aproximadamente:</p>
    <ul>
      <li><b>${totalPlanchas}</b> planchas de gypsum</li>
      <li><b>${totalTornillos}</b> tornillos</li>
      <li><b>${totalPrimarios}</b> m de perfil primario</li>
      <li><b>${totalSecundarios}</b> m de perfil secundario</li>
      <li><b>${totalRomeral}</b> m de romeral</li>
    </ul>
  `;
}
