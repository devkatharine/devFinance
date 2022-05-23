    
    const Modal = {
         open(){
            //abrir o modal
            //adicionar a classe active
            document.querySelector('.modal-overlay')
            .classList.add('active')
            
         },
         close(){
            //Fechar o modal
            //remover a classe active
            document.querySelector('.modal-overlay')
            .classList.remove('active')
         }
       }
       
    