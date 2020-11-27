<template>
    <div id="bookDisplay">
<!-- 
        <vueper-slides
        class="no-shadow"
        :visible-slides="3"
        slide-multiple
        :gap="3"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
        
            <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" />

        </vueper-slides> -->
        <vueper-slides
            class="no-shadow"
            :visible-slides="6"
            :arrows="false"
            :slide-ratio="1 / 4"
            :gap="3"
            :dragging-distance="70">
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
            { image: require('../assets/books/hp7.jpg') }
        ]
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