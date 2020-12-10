<template>
    <div id="bookDisplay">
        <vueper-slides
            class="no-shadow"
            :visible-slides="4"
            slide-multiple
            :breakpoints="breakpoints"
            :gap="3"
            :dragging-distance="50">
            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />
        </vueper-slides>
    </div>
</template>

<script>
// @ is an alias to /src
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'BookDisplay',
    components: { VueperSlides, VueperSlide },
    data: () => ({
        slides: [
            { image: require('../assets/books/hp1.jpg') },
            { image: require('../assets/books/hp2.jpg') },
            { image: require('../assets/books/hp3.jpg') },
            { image: require('../assets/books/hp4.jpg') },
            { image: require('../assets/books/hp5.jpg') },
            { image: require('../assets/books/hp6.jpg') },
            { image: require('../assets/books/hp7.jpg') },
            { image: require('../assets/books/hp1.jpg') },
            { image: require('../assets/books/hp2.jpg') },
            { image: require('../assets/books/hp3.jpg') },
            { image: require('../assets/books/hp4.jpg') },
            { image: require('../assets/books/hp5.jpg') },
            { image: require('../assets/books/hp6.jpg') },
            { image: require('../assets/books/hp7.jpg') }
        ],
        breakpoints: {
            1200: {
                slideRatio: 1 / 4
            },
            900: {
                slideRatio: 1 / 4
            },
            600: {
                slideRatio: 1 / 2,
                arrows: false,
                bulletsOutside: true
            },
            // The order you list breakpoints does not matter, Vueper Slides will sort them for you.
            1100: {
                slideRatio: 1 / 4
            }
        }
    })
    
}

</script>

<style scoped>
#bookDisplay{
    width: 75%;
    margin: auto;
    margin-top: 5em;
    margin-bottom: 5em;
    padding: auto;
}

</style>