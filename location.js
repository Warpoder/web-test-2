async function getLocation() {
  const ip = document.getElementById('ipInput').value;
  const token = '72244b8964d98e';
  const url = `https://ipinfo.io/${ip}?token=${token}`;

  const res = await fetch(url);
  const json = await res.json();

  if (json && json.ip && json.hostname && json.country && json.city && json.loc) {
    locationInfo = json;
    document.getElementById('locationInfo').innerText = JSON.stringify(locationInfo);
  } else {
    document.getElementById('locationInfo').innerText = 'No se pudo obtener la información de la ubicación.';
  }
}

function downloadLocation() {
  let formattedInfo = `IP: ${locationInfo.ip}\n`;
  formattedInfo += `Hostname: ${locationInfo.hostname}\n`;
  formattedInfo += `País: ${locationInfo.country}\n`;
  formattedInfo += `Ciudad: ${locationInfo.city}\n`;
  formattedInfo += `Localización: ${locationInfo.loc}\n`;

  const blob = new Blob([formattedInfo], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'locationInfo.txt';
  link.click();
}