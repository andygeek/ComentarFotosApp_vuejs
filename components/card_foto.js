Vue.component('card_foto', {
    template: `
        <div class="card my-3">
            <div class="card-header bg-success text-white">
                Grupo de fotos {{codigo}}
            </div>
            <div class="card-body">
                <info_foto  :id_comp.number="codigo"></info_usuario>
            </div>
            
        </div>
        `,
    data(){
        return {
            saludo: 'Hola cuate'
        }
    },
    props:['codigo']
})