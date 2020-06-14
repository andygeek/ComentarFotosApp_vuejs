Vue.component("info_foto", {
  template:
    `
    <div>
        <div class="d-flex flex-row flex-wrap justify-content-center">
            <div class="d-inline-flex mr-2 mb-2 ">
                <div :id="'carousel' + id_comp" class="carousel slide" data-ride="carousel" style="height: 300px; width: 300px;">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img :src="'https://source.unsplash.com/collection/' + numero()" class="d-block w-100" alt="img1" style="object-fit: cover; height: 300px; width: 300px;">
                        </div>
                        <div class="carousel-item">
                            <img :src="'https://source.unsplash.com/collection/' + numero()" class="d-block w-100" alt="img2" style="object-fit: fill; height: 300px; width: 300px;">
                        </div>
                        <div class="carousel-item">
                            <img :src="'https://source.unsplash.com/collection/' + numero()" class="d-block w-100" alt="img3" style="object-fit: fill; height: 300px; width: 300px;">
                        </div>
                    </div>
                    <a class="carousel-control-prev" :href="'#' + 'carousel'+ id_comp" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" :href="'#' + 'carousel'+ id_comp" role="button" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
            <div class="flex-fill">
                <div class="d-flex flex-row mb-2">
                    <div class="flex-fill">
                        <input type="text" class="form-control" v-model="nuevo" @keyup.enter="agregar()">
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div class="d-inline-flex w-50 ">
                        <button class="btn btn-danger mb-2 mr-2  btn-block" @click="eliminar()">Eliminar comentario</button>
                    </div>
                    <div class="d-inline-flex w-50 ">
                        <button class="btn btn-success mb-2 mr-2 btn-block" @click="agregar()">Agregar comentario</button>
                    </div>
                    
                </div>
                
                <ul class="list-group">
                    <li v-for="n of lista" class="list-group-item">{{n}}</li>
                </ul>
            </div>
        </div>
    </div>
    `,
    data(){
        return {
            numero: function () {
                return Math.round(Math.random()*100)   
            },
            lista: [],
            nuevo:'',
            agregar: function(){
                if(this.lista.length < 10 && this.nuevo != ''){
                    if(this.nuevo != ''){
                        this.lista.push(this.nuevo)
                    }
                    this.nuevo = ''
                }
            },
            eliminar: function () {
                if(this.lista.length > 0){
                    this.lista.splice(this.lista.length - 1, 1)
                }
            }
        }
    },
    props:['id_comp']
});
