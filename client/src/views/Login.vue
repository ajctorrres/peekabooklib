<template>
  <div class="login">
      <b-row>
        <b-col><img src="../assets/book2.jpg"></b-col>
        <b-col>
            <h5>PEEKABOOK</h5>
            <h2>User Login</h2>
            <b-form class="login-form">
                <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                        <b-icon icon="person-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                    id="email"
                    v-model="form.email" 
                    type="email" 
                    placeholder="USC Email"
                    required
                    ></b-form-input>
                </b-input-group>
                <b-input-group class="mb-2">
                    <b-input-group-prepend is-text>
                        <b-icon icon="lock-fill"></b-icon>
                    </b-input-group-prepend>
                    <b-form-input
                    id="password"
                    v-model="form.password" 
                    type="password" 
                    placeholder="Password"
                    required
                ></b-form-input>
                </b-input-group>

                <b-form-group id="logged" v-slot="{ ariaDescribedby }">
                    <b-form-checkbox-group
                    v-model="form.checked"
                    id="logged"
                    :aria-describedby="ariaDescribedby"
                    >
                    <b-form-checkbox value="me">Stay signed in</b-form-checkbox>
                    <b-link>Forgot Password?</b-link>
                    </b-form-checkbox-group>
                </b-form-group>

                <b-input-group>
                    <b-link href="/" id="login-btn">Login</b-link>
                </b-input-group>
            </b-form>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {
  },
  data(){
      return{
          form:{
              email: '',
              password: ''
          }
      }
  }

}

</script>
<style scoped>
.login{
    width: 75%;
    height: 33em;
    background: #387e8c;
    /* background:linear-gradient(#b9e1e9, #a0d0da); */
    margin: auto;
    margin-top: 3em;
    margin-bottom: 5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0;
    border-radius: 20px;
    box-shadow: 0 8px 10px -4px black;
    font-family: 'Sniglet', cursive;
}

input{ 
    font-size: 1em;
}

.login-form{
    margin: auto;
    background: #b9e1e9;
    padding: 2em;
    width: 80%;
    margin-right: 3.1em;
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    font-size: 1.2em;
}

img{
    width: 100%;
    height: 33em;
    border-radius: 20px 0 0 20px;
}

.col{
    padding: 0;
    padding-left:.8em ;
}

#login-btn{
    font-size: 1em;
    border-radius: 10px;
    border:2px solid #3f4c6b;
    background: none;
    padding: .5em;
    padding-left: 1.5em;
    padding-right: 1.5em;
    color: #3f4c6b;
    text-decoration: none;
    margin:auto;
}

#login-btn:hover{
    background: #3f4c6b;
    opacity: 90%;
    color: #fff;
}

h2{
    text-align: center;
    color: #fff;
    margin-top: .5em;
}

h5{
    text-align: center;
    margin-top: 1em;
    color: #fff;
}

a{
    color: #136a8a;
}
</style>