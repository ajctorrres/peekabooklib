<template>
    <div id="navigation">
        <div id="headlogo"></div>
        <div id="navbar">
            <b-navbar toggleable="sm">
                <b-navbar-toggle right target="nav-text-collapse"></b-navbar-toggle>
                <b-navbar-brand>Peekabook</b-navbar-brand>

                <b-collapse id="nav-text-collapse" is-nav>
                    <b-navbar-nav id="leftNav">
                        <b-nav-item href="/">Home</b-nav-item>
                        <b-nav-item href="/library">Library</b-nav-item>
                        <b-nav-item href="/services">Services</b-nav-item>
                    </b-navbar-nav>

                    <b-navbar-nav id="rightNav" class="ml-auto">
                        <b-nav-item href="#"><b-icon icon="bell" aria-hidden="true" scale="1.5" class="mt-2"></b-icon><span class="navName">Notification</span></b-nav-item>
                        <b-nav-item href="/mysaved"><b-icon icon="bookmark-heart-fill" aria-hidden="true" scale="1.5" class="mt-2"></b-icon><span class="navName">My Saved Books</span></b-nav-item>
                        <b-nav-item href="/account"><b-avatar variant="dark"></b-avatar><span class="navName">Account</span></b-nav-item>
                        <b-nav-text>Welcome, User</b-nav-text>
                        <b-nav-item-dropdown right> 
                            <b-dropdown-item href="/account">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                        </b-nav-item-dropdown>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style scoped>

#headlogo{
  width:100%;
  height: 10em;
  background-image: url('~@/assets/usclb.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  
}

#navbar{
    background: #40798C;
}

#leftNav{
    font-size: 1.2em;
    width: 50%;
    justify-content: space-evenly;
}

#rightNav{
    margin-right: 1.5em;
}
.navbar-light .navbar-nav .nav-link{
  padding: .5em;
  color: #fff;
}

#rightNav li{
    margin-left: 1.5em; 
}

.navName{
  display: none;
  /* padding: .5em; */

}

svg{
    color:#CFE0C3;
}


.navbar-text{
    margin: auto;
}

.navbar-brand{
    display: none;
}

@media screen and (max-width:600px){
    #headlogo{
        display: none;
    }
    .navbar-brand{
        display: inline;
    }
}

</style>
