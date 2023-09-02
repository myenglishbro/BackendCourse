
class TicketMaster {
    #precioBaseDeGanancia=15
    constructor(){
        this.eventos=[]
    }
    generarId(){
        const counter=this.eventos.length
        let id
        if(counter===0){
        return id=1
        }
        else{
            return this.eventos[counter-1].id + 1
        }
    }
    agregarEvento(nombre,lugar,precio,capacidad=50,fecha=new Date()){
        const idgenerado=this.generarId()
     const eventonuevo={
        id:idgenerado,
       nombre,
       lugar,
       precio:precio+this.#precioBaseDeGanancia,
       capacidad,
       fecha,
       participantes:[]
     }
     this.eventos.push(eventonuevo);

    }
    getEventos(){
        return this.eventos

    }

    agregarUsuario(id_evento, id_usuario) {
        const evento = this.eventos.find((e) => e.id === id_evento);
        if (!evento) {
            console.log("El evento no existe.");
            return;
        }

        if (evento.participantes.includes(id_usuario)) {
            console.log("El usuario ya está registrado en este evento.");
            return;
        }

        evento.participantes.push(id_usuario);
        console.log(`Usuario ${id_usuario} registrado en el evento ${id_evento}.`);
    }

    ponerEventoEnGira(id_evento, newplace, newdate) {
        const evento = this.eventos.find((e) => e.id === id_evento);
        if (!evento) {
            console.log("El evento no existe.");
            return;
        }

        const eventoEnGira = {
            ...evento,
            id: this.generarId(), // Generar un nuevo ID
            lugar: newplace,
            fecha: newdate,
            participantes: [], // Reiniciar la lista de participantes
        };

        this.eventos.push(eventoEnGira);
        console.log(`Evento ${id_evento} puesto en gira en ${newplace} el ${newdate}.`);
    }
}

const evento = new TicketMaster();
evento.agregarEvento("lola", "argentina", 150, 1000);
evento.agregarEvento("vxr", "peru", 90, 2000);

console.log(evento.getEventos());

// Ejemplo de uso de los nuevos métodos
evento.agregarUsuario(1, 123);
evento.ponerEventoEnGira(2, "Chile", new Date(2023, 11, 1));

