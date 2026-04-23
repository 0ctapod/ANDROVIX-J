
//Cargando CSS si no está cargado
function ensureCss(href)
{
  if (document.querySelector(`link[href="${href}"]`)) return Promise.resolve();
  
  return new Promise((res) =>
    {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.onload = () => res();
      link.onerror = () => { console.warn('CSS failed:', href); res(); };
      document.head.appendChild(link);
    });
}

//Cargando HTML y CSS de un componente
async function loadComponent(id, name)
{
  const css = `componentes/${name}/${name}.css`;
  const htmlPath = `componentes/${name}/${name}.html`;

  await ensureCss(css);
  const r = await fetch(htmlPath);
  
  if (!r.ok) throw new Error(`${r.status}`);
  
  const html = await r.text();
  document.getElementById(id).innerHTML = html;
}

