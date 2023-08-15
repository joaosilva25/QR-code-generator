let input=document.querySelector('input');
let h5=document.querySelector('h5');
let btn=document.querySelector('.btn')
let baixar=document.querySelector('.baixar');

async function generate() {
    if(input.value) {
        h5.innerText="Processando..."
            try {
                let encodedInput = encodeURIComponent(input.value);
                let response= await fetch(`http://api.qrserver.com/v1/create-qr-code/?data=${encodedInput}&size=150x150`)

                let qrCodeimg= await response.arrayBuffer();

                        let qrCodeBlob= new Blob([qrCodeimg], {type:'img/png'})
                        let qrCodeUrl = URL.createObjectURL(qrCodeBlob);
                
                        let img= document.querySelector('img');

                        img.setAttribute('src',qrCodeUrl);
                        btn.style.display = 'inline';
                        baixar.href=qrCodeUrl
                        baixar.link='Imagem/png';
                    }
            catch {
                alert("erro na requisição")
            }
            finally{
                h5.innerText="";
            }
    }
    else if(!input.value) {
        h5.innerText="Preencha o campo com uma URL válida..."
    }

}


