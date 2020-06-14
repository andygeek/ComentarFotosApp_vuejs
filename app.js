const myapp = new Vue({
    el:'#myapp',
    data:{
        dato: 'Hola',
        cantidad: 1
    },
    methods:{
        eliminar: function () {
            if(this.cantidad > 0){
                this.cantidad--
            }
        },
        agregar: function () {
            if(this.cantidad < 50){
                this.cantidad++
            }
        }
    }
})