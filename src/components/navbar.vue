<template>
<div class="nav">
     <div class="list-itemes"><router-link to="/"><span>Home</span></router-link></div>
     <div class="list-itemes"><router-link to="/about"><span>About</span></router-link></div>
     <div class="list-itemes"><router-link to="/about"><span>About</span></router-link></div>
</div>

</template>


<style lang="scss" scoped>
.nav {
    display: flex;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, 0, endColorstr=#66000000, 0);
}

.list-itemes {
    color: white;
    text-align: center;
    padding: 1px;
    font-weight: 600;
    transition: .5s;
    margin: 20px;
    height: 100%;
    font-size: 1.2rem;
    a {
        text-decoration: none;
        transition: 0.5s;
        font-weight: 600;
        color: #fff;
        &:hover {
            color: #070707;
            border-bottom: none;
        }
    }

}

li a:hover {
    background-color: #111;
}
</style>


