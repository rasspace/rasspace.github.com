function header()
{
    var xmlString = "<header><a href=\"index.html\"><img src=\"assets/logo.svg\" alt=\"\" class=\"logo\"></a><nav><a href=\"ion.html\"><p class=\"logotext\">Ion</p></a><a href=\"eos.html\"><p class=\"logotext\">Eos</p></a></nav></header>";
    var doc = new DOMParser().parseFromString(xmlString, "text/xml");
    document.body.append(doc)
}