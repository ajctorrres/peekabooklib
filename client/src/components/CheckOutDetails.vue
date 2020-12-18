<template>
  <div class="resultsSearch">
    <div class="results">
        <div class="list">
            <h3>Book List</h3>
            <div class="single">
                <b-button v-b-tooltip.hover title="Delete" variant="light" class="add"> 
                    <b-icon icon="trash-fill" aria-hidden="true" scale="1.5"></b-icon>
                </b-button>
                <figure class="figure">
                    <img src="../assets/books/hp1.jpg" class="figure-img img-fluid z-depth-1" alt="..." style="width: 400px">
                    <figcaption class="figure-caption">Harry Potter and the Philosopher's Stone<br>by J.K Rowling</figcaption>
                </figure>
                <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill" class="add"> 
                    <b-icon :icon="fill ? 'bookmark-heart' : 'bookmark-heart-fill'" aria-hidden="true" scale="1.5"></b-icon>
                </b-button>
            </div>
            <div class="single">
                <b-button v-b-tooltip.hover title="Delete" variant="light" class="add"> 
                    <b-icon icon="trash-fill" aria-hidden="true" scale="1.5"></b-icon>
                </b-button>
                <figure class="figure">
                    <img src="../assets/books/hp2.jpg" class="figure-img img-fluid z-depth-1" alt="..." style="width: 400px">
                    <figcaption class="figure-caption">Harry Potter and the Chambers of Secrets<br>by J.K Rowling</figcaption>
                </figure>
                <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill" class="add"> 
                    <b-icon :icon="fill ? 'bookmark-heart' : 'bookmark-heart-fill'" aria-hidden="true" scale="1.5"></b-icon>
                </b-button>
            </div>
            <div class="single">
                <b-button v-b-tooltip.hover title="Delete" variant="light" class="add"> 
                    <b-icon icon="trash-fill" aria-hidden="true" scale="1.5"></b-icon>
                </b-button>
                <figure class="figure">
                    <img src="../assets/books/hp3.jpg" class="figure-img img-fluid z-depth-1" alt="..." style="width: 400px">
                    <figcaption class="figure-caption">Harry Potter and the Prisoner of Azkaban<br>by J.K Rowling</figcaption>
                </figure>
                <b-button v-b-tooltip.hover title="Add to My Collection" variant="light" v-on:click="fill = !fill" class="add"> 
                    <b-icon :icon="fill ? 'bookmark-heart' : 'bookmark-heart-fill'" aria-hidden="true" scale="1.5"></b-icon>
                </b-button>
            </div>
        </div>


        <div class="details">    
            <h3>Check Out Details</h3>
            <p>Please choose an option:</p>
            <b-form-group v-slot="{ ariaDescribedby }">
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="pickup" value="Pickup" class="mr-3">Pickup</b-form-radio>
                <b-form-radio v-model="selected" :aria-describedby="ariaDescribedby" name="delivery" value="Delivery">Delivery</b-form-radio>
            </b-form-group>

            <div class="mt-3"><strong>You selected: {{ selected }}</strong></div>
            
            <p v-if="selected==='Pickup'">The address where to pickup your books will be sent to your email.</p>
            <b-button class="co">Cancel</b-button>
            <b-button class="co">Confirm</b-button>
        </div>

    </div>

  </div>
</template>

<script>

export default {
    name: "CheckOutDetails",
    data() {
        return {
            selected:'',
            Icon:{
                name: 'bookmark-heart-fill'
                },
            fill: false
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    font-family: 'Nunito', sans-serif;
}

.list{
    width: 50%;
    background: #ccdfe3;
    margin-left: 2em;
    margin-top: 2.5em;
    padding: 1em;
}

h5{
  margin-bottom: 1.5em;
}

.details{
    width:40%;
    background: #D7DDE8;
    margin-left: 1em;
    margin-top: 2.5em;
    padding: 1em;
    padding-left:2em;
}

img{
  width:62%;
}

p{
    margin-top: 1em;
    margin-bottom: 1em;
    font-size: 1.5em;
}


.co{
    border-radius: 20px;
    margin-top: 2em;
    margin-right: 1em;
    vertical-align: right;
    border:2px solid #3f4c6b;
    background: none;
    color: #3f4c6b;
}

.co:hover{
    background: #3f4c6b;
    opacity: 90%;
    color: #fff;

}

.single{
    padding: .5em;
    padding-top: 0em;
    width: 40%;
    height: 19em;
    text-align: center;
    display: inline-block;
    flex-direction: row;
    flex-flow: wrap;
    align-content: flex-start;
}

.check{
  margin-top: 5em;
}

figure{
  width: 60%;
}

img{
  width:60%;
}

.custom-control{
  display: inline;
}

svg{
  color: #2c3e50;
}

.add{
    padding-left: .5em;
    padding-top: 0;
    background: none;
    border: none;
    outline: none !important;
    vertical-align: top;
    margin-top: .5em; 
}

.add:focus{
  border: none;
  outline: none;
}

figcaption{
  color: black;
}

h3{
    text-align: center;
    margin-bottom: 1em;
}
</style>
