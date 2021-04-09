function init(){
    //new: costruttore di classe
    new Vue({
        //el ci definisce dove viene montato il framework
        'el':'#app',
        'data':{
            toDoList:[
                'Fare la spesa','Allenarsi','Lavorare','Giocare','Leggere un libro'
            ],
            nuovoTask: '',
        },
        //methods é un oggetto in cui inseriamo tutte le nostre funzioni
        'methods':{
            rimuoviTodo: function (parametroIndice) {
                //meto, dove eliminare,quanti da eliminare
                // console.log(parametroIndice);
                this.toDoList.splice(parametroIndice,1);
            },
            aggiungiTask: function(){
                if(this.nuovoTask.length>0){
                    
                    this.toDoList.push(this.nuovoTask[0].toUpperCase()+this.nuovoTask)
                    
                    this.nuovoTask="";
                }else{ console.log('Non hai scritto nulla');}

                // cancello il valore di nuovoTask
            }

        }
    });

}
document.addEventListener('DOMContentLoaded',init);//eseguire la funzione messa nel secondo argomento dopo che si ricarica il DOM
