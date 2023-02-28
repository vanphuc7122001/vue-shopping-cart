<template>
    <ul>
        
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
</template>

<script>



export default {

}
</script>

<style scoped>
    ul {
        display: flex;
        justify-content: center;
        align-content: center;
        line-height: 50px;
        padding: 0 20px;
    }

    ul li {
        display: inline-block;
        margin: 0 20px;
    }

    ul li a {
        display: block;
        text-decoration: none;
        color: #000;
    }

    ul li:hover a{
        color: rgba(0, 0, 0, 0.6);
    }
</style>