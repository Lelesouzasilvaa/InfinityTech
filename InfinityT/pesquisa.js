
bancos_classe.style.display = 'none';
var string = "Banco não encontrado";
    function search() {
        let input = document.getElementById('search').value.toLowerCase();
        let x = document.getElementsByClassName('banco');
    
        if(input === '') {
            // Se a barra de pesquisa estiver vazia, oculta todos os elementos
            for(let i = 0; i < x.length; i++) {
                x[i].style.display = 'none';
            }
              
        } else {
            for(let i = 0; i < x.length; i++) {
                if(!x[i].innerHTML.toLowerCase().includes(input)) {
                    x[i].style.display = 'none';
                    
                } else {
                    x[i].style.display = 'list-item';
                }
            }
            // Mostra o elemento bancos_classe, se existir
            let bancos_classe = document.getElementById('bancos_classe');
            if(bancos_classe) {
                bancos_classe.style.display = 'list-item';
               
                
            }
            
        }
    }


