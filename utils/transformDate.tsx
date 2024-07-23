export default function transformDate(date: string) {
  const fechaOriginal: string = date;
  const partes: string[] = fechaOriginal.split("/");
  const fechaFormateada: string = `${partes[2]}/${partes[1]}/${partes[0]}`;
  return fechaFormateada;
}
