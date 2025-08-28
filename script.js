function calcularGypsum() {
  let area = parseFloat(document.getElementById("area").value);
  if (isNaN(area) || area <= 0) {
    document.getElementById("resultado").innerHTML = 
      "<p style='color:red;'>⚠️ Por favor ingresa un valor válido.</p>";
    return;
  }

  // 🔹 Rendimientos aproximados por m² (pueden ajustarse según normas locales)
  let plancha = 1 / 3;          // 1 plancha de 1.22x2.44 cubre ~3m²
  let tornillos = 25;           // 25 tornillos por m²
  let primarios = 1 / 10;       // 1 perfil primario cada 10m²
  let secundarios = 1 / 5;      // 1 perfil secundario cada 5m²
  let romeral = 1 / 8;          // 1 kg romeral cada 8m²
  let empaste = 1 / 20;         // 1 saco de 25kg cada 20m²
  let cinta = 1 / 25;           // 1 rollo por 25m²
  let pintura = 0.2;            // 0.2 galones por m² (2 manos)

  // 🔹 Cálculos
  let totalPlanchas = Math.ceil(area * plancha);
  let totalTornillos = Math.ceil(area * tornillos);
  let totalPrimarios = Math.ceil(area * primarios);
  let totalSecundarios = Math.ceil(area * secundarios);
  let totalRomeral = (area * romeral).toFixed(1);
  let totalEmpaste = Math.ceil(area * empaste);
  let totalCinta = Math.ceil(area * cinta);
  let totalPintura = (area * pintura).toFixed(1);

  // 🔹 Mostrar resultados
  document.getElementById("resultado").innerHTML = `
    <h3>📋 Resultados para <b>${area} m²</b>:</h3>
    <ul>
      <li>🪵 <b>${totalPlanchas}</b> planchas de gypsum</li>
      <li>🔩 <b>${totalTornillos}</b> tornillos</li>
      <li>📏 <b>${totalPrimarios}</b> perfiles primarios</li>
      <li>📐 <b>${totalSecundarios}</b> perfiles secundarios</li>
      <li>⚖️ <b>${totalRomeral}</b> kg de romeral</li>
      <li>🪣 <b>${totalEmpaste}</b> sacos de empaste (25kg)</li>
      <li>📎 <b>${totalCinta}</b> rollos de cinta malla de vidrio</li>
      <li>🎨 <b>${totalPintura}</b> galones de pintura (2 manos)</li>
    </ul>
  `;
}
