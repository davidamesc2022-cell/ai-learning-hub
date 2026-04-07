const fs = require('fs');
const { execSync } = require('child_process');

try {
  // 1. Crear carpeta temporal y extraer
  console.log("Extrayendo DOCX...");
  execSync('mkdir "documentos/temp_docx"');
  execSync('cd "documentos/temp_docx" && tar -xf "../IA_Practica_para_Emprendedores_Metodo_4C (3).docx"');

  // 2. Leer XML principal donde está el texto
  console.log("Leyendo XML...");
  const xml = fs.readFileSync('documentos/temp_docx/word/document.xml', 'utf8');

  // 3. Limpiar tags XML para dejar solo el texto, poniendo doble salto de línea por cada párrafo
  let text = xml.replace(/<\/w:p>/g, '\n\n');
  text = text.replace(/<[^>]+>/g, '');
  
  // Limpiar entidades XML comunes
  text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');

  // 4. Guardar archivo markdown
  fs.writeFileSync('documentos/IA_Practica.md', text, 'utf8');
  console.log("¡Archivo guardado con éxito como IA_Practica.md!");

  // Limpiar temporal
  execSync('rmdir /S /Q "documentos\\temp_docx"');
} catch (e) {
  console.error("Error al procesar el documento:", e.message);
}
