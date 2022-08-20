let url = new URLSearchParams(window.location.search);

// redirect
const r = url.get("r");
// name
const n = url.get("n");

if(r != null)
    window.open(r, "_blank");
if(n != null)
    window.open(`/loves?n=${n}`, "_blank");