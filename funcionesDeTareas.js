const fs = require('fs');

let archivoTareas = {
    archivo: 'tareas.json',
    leerArchivo: function () {
        return JSON.parse(fs.readFileSync(this.archivo, 'utf-8'));
    },
    escribirJSON: function (arrayDeTareas) {
        fs.writeFileSync("./tareas.json", JSON.stringify(arrayDeTareas), "utf-8")
    },
    guardarTarea : function (tarea){
        let listaDeTareas = this.leerArchivo();
        listaDeTareas.push(tarea);
        this.escribirJSON(listaDeTareas)
    },
    filtrarPorEstado: function (estado) {
        let listaDeTareas = this.leerArchivo();
        let tareasFiltradas = listaDeTareas.filter((tarea) => tarea.estado === estado);
        return tareasFiltradas;
    }
}
module.exports = archivoTareas;