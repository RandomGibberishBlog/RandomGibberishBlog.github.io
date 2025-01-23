
function cryptmail(e,n,p) 
{   
    emailE = decrypt(p)
    emailE = (decrypt(n) + '@' + emailE)
    emailE = (':' + emailE + decrypt(e))
    linktype = 'mailto'
    window.location = linktype+emailE;
}

function decrypt(text){
        const passphrase = "Socke123";
        const bytes = CryptoJS.AES.decrypt(text, passphrase);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
}


