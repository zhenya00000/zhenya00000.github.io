let url = new URLSearchParams(window.location.search);

// redirect
const r = url.get("r");
// name
const n = url.get("n");

if(r != null)
    window.location.replace(r);
if(n != null)
    window.location.replace(`/loves?n=${n}`);