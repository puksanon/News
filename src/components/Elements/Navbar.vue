<template>
    <div>
        <nav class="nav_con">
            <ul>
                <li><a href="https://facebook.com">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Work</a></li>
            </ul>
            <div class="button">
                <a class="btn-open"><i class="material-icons btn_manu">menu_open</i></a>
            </div>
        </nav>
            <div class="overlay">
                <div class="wrap">
                    <ul class="wrap-nav">
                        <li><a href="#">About</a>
                        <ul>
                            <li><a href="#">About Company</a></li>
                            <li><a href="#">Designers</a></li>
                            <li><a href="#">Developers</a></li>
                            <li><a href="#">Pets</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Services</a>
                        <ul>
                            <li><a href="https://www.google.hr/">Web Design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Apps</a></li>
                            <li><a href="#">Graphic design</a></li>
                            <li><a href="#">Branding</a></li>
                        </ul>
                        </li>
                        <li><a href="#">Work</a>
                        <ul>
                            <li><a href="#">Web</a></li>
                            <li><a href="#">Graphic</a></li>
                            <li><a href="#">Apps</a></li>
                        </ul>
                        </li>
                    </ul>
                    <div class="social">
                        <a href="http://mario-loncarek.from.hr/">
                        <div class="social-icon">
                            <i class="fab fa-facebook-square"></i>
                        </div>
                        </a>
                        <a href="#">
                        <div class="social-icon">
                            <i class="fab fa-twitter"></i>
                        </div>
                        </a>
                        <a href="#">
                        <div class="social-icon">
                            <i class="fab fa-codepen"></i>
                        </div>
                        </a>
                        <a href="#">
                        <div class="social-icon">
                            <i class="fab fa-behance"></i>
                        </div>
                        </a>
                        <a href="#">
                        <div class="social-icon">
                            <i class="fab fa-dribbble"></i>
                        </div>
                        </a>
                        
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
import "../../../static/js/Navbar"
export default {
    name: "Navbar",
    data () {
      return {
        activeBtn: 1,
      }
    },
    
    methods: {

    }
}
</script>

<style scoped>
    .nav_con{
        background-color: #FFEB3B;
    }
    ul {
        margin:0;
        padding:0;
        text-decoration:none;
        list-style:none;
    }
    li {
        padding:0;
        margin:0;
    }
    nav {
        text-align:center;
        width:100%;
        position:relative;
        height:auto;
        overflow:hidden;
        background:none;
        box-shadow: rgb(68, 68, 68, 0.62) 2px 1px 5px 0px;
    }
    nav ul {
        text-align:center;
    }
    nav ul li {
        display:inline-block;
    }
    nav ul li a {
        color:rgb(255, 255, 255);
        display:inline-block;
        padding:1em 3em;
        text-decoration:none;
        transition-property:all .2s linear 0s;
        -moz-transition:all .2s linear 0s;
        -webkit-transition:all .2s linear 0s;
        -o-transition:all .2s linear 0s;
        font-size:16px;
    }
    nav ul li a:hover {
        color: rgb(255, 255, 255);
    }

    .btn_manu{
        color: #fff;
        font-size: 26px;
    }
    /*styling open close button*/
    .button {
        display:inline;
        position:absolute;
        right:50px;
        top:6px;
        z-index:999;
        font-size:30px;
    }
    .button a {
        text-decoration:none;
    }
    .btn-open:after {
        color: #fff;
        transition-property:all .2s linear 0s;
        -moz-transition:all .2s linear 0s;
        -webkit-transition:all .2s linear 0s;
        -o-transition:all .2s linear 0s;
    }
    .btn-open:hover:after {
        color:rgb(255, 251, 0);
    }
    .btn-close:after {
        color:#fff;
        transition-property:all .2s linear 0s;
        -moz-transition:all .2s linear 0s;
        -webkit-transition:all .2s linear 0s;
        -o-transition:all .2s linear 0s;
    }
    .btn-close:hover:after {
        color: rgb(255, 251, 0);
    }
    /*overlay*/
    .overlay {
        display:none;
        position:fixed;
        top:0;
        height:100%;
        width:100%;
        background:#2e2e2ef5;
        overflow:auto;
        z-index:99;
    }
    .wrap {
        color:#e9e9e9;
        text-align:center;
        max-width:90%;
        margin:0 auto;
    }
    .wrap ul.wrap-nav {
        border-bottom:1px solid #575757;
        text-transform:capitalize;
        padding:150px 0px 100px;
    }
    .wrap ul.wrap-nav li {
        font-size:20px;
        display:inline-block;
        vertical-align:top;
        width:24%;
        position:relative;
    }
    .wrap ul.wrap-nav li a {
        color:rgb(255, 251, 0);
        display:block;
        padding:8px 0;
        text-decoration:none;
        transition-property:all .2s linear 0s;
        -moz-transition:all .2s linear 0s;
        -webkit-transition:all .2s linear 0s;
        -o-transition:all .2s linear 0s;
    }
    .wrap ul.wrap-nav li a:hover {
        color:#f0f0f0;
    }
    .wrap ul.wrap-nav ul {
        padding:20px 0;
    }
    .wrap ul.wrap-nav ul li {
        display:block;
        font-size:13px;
        width:100%;
        color:#e9e9e9;
    }
    .wrap ul.wrap-nav ul li a {
        color:#f0f0f0;
    }
    .wrap ul.wrap-nav ul li a:hover {
        color:rgb(255, 251, 0);
    }
    .social {
        font-size:25px;
        padding:20px;
    }
    .social p {
        margin:0;
        padding:20px 0 5px 0;
        line-height:30px;
        font-size:13px;
    }
    .social p a {
        color:rgb(255, 251, 0);
        text-decoration:none;
        margin:0;
        padding:0;
    }
    .social-icon {
        width:80px;
        height:50px;
        background:#e9e9e9;
        color:#333;
        display:inline-block;
        margin:0 20px;
        transition-property:all .2s linear 0s;
        -moz-transition:all .2s linear 0s;
        -webkit-transition:all .2s linear 0s;
        -o-transition:all .2s linear 0s;
    }
    .social-icon:hover {
        background:rgb(255, 251, 0);
        color:#f0f0f0;
    }
    .social-icon i {
        margin-top:12px;
    }
    @media screen and (max-width:48em) {
        .wrap ul.wrap-nav>li {
            width:100%;
            padding:20px 0;
            border-bottom:1px solid #575757;
        }
        .wrap ul.wrap-nav {
            padding:30px 0px 0px;
        }
        nav ul {
            opacity:0;
            visibility:hidden;
        }
        .social {
            color:#c1c1c1;
            font-size:25px;
            padding:15px 0;
        }
        .social-icon {
            width:100%;
            height:50px;
            background:#fff;
            color:#333;
            display:block;
            margin:5px 0;
        }
    }
    .content {
        width:100%;
        margin-top:200px;
        font-size:20px;
        color:#575757;
        text-align: center;
    }
</style>