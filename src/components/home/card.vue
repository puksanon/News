<template>
    <div class="container">
        <div class="plx-card gold">
            <div class="pxc-bg"></div>
            <div class="pxc-avatar"><img src="../../assets/images/kmutt_logo.png"/></div>
            <div class="pxc-stopper">   </div>
            <div class="pxc-subcard">
                <div class="pxc-title">topic</div>
                <div class="pxc-sub">description</div>
                <div class="pxc-tags">
                <div>Feat Two</div>
                <div>Feat Two</div>
                <div>Feat Two</div>
                </div>
                <div class="bottom-row"> 
                    <div class="links">
                        <a class="site" uk-tooltip="WEBSITE"><i class="fas fa-globe-americas"> </i></a>
                        <a class="link discordLink" uk-tooltip="DISCORD SERVER"><i class="fab fa-discord"></i></a>
                        <a class="shop" uk-tooltip="EXCLUSIVE POLLUX SHOP"><i class="fas fa-shopping-bag"></i></a></div>
                </div>
            </div>
        </div>
         <div class="plx-card gold">
            <div class="pxc-bg"></div>
            <div class="pxc-avatar"><img src="../../assets/images/logo.png"/></div>
            <div class="pxc-stopper">   </div>
            <div class="pxc-subcard">
                <div class="pxc-title">topic</div>
                <div class="pxc-sub"> description</div>
                <!-- <div class="pxc-feats">
                    <span>Feat One</span>
                    <span> Feat Two</span>
                    <span> Feat One Hundred and Seventy Three</span>
                    <span> Feat Forty Five</span>
                </div> -->
                <div class="pxc-tags">
                <div>Feat Two</div>
                <div>Feat Two</div>
                <div>Feat Two</div>
                </div>
                <div class="bottom-row"> 
                    <div class="links">
                        <a class="site" uk-tooltip="WEBSITE"><i class="fas fa-globe-americas"> </i></a>
                        <a class="link discordLink" uk-tooltip="DISCORD SERVER"><i class="fab fa-discord"></i></a>
                        <a class="shop" uk-tooltip="EXCLUSIVE POLLUX SHOP"><i class="fas fa-shopping-bag"></i></a></div>
                </div>
            </div>
        </div>
    </div >
    
</template>

<script>
export default {
    name: 'card'
}
</script>

<style scoped>

.plx-card {
  transition: all 600ms ease;
  max-width: 1100px;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 40px 0;
  filter: drop-shadow(0 2px 1rem #112);
  border-radius: 4px;
}

@media screen and (min-width: 700px) {
  .plx-card.gold {
    height: 200px;
  }
}
@media screen and (max-width: 700px) {
  .plx-card {
    height: auto;
    width: auto;
    flex-direction: column;
    border-radius: 2px;
    margin: 25px 15px;
  }
}

.pxc-avatar {
  transition: all 600ms ease;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 150px;
  justify-content: space-around;
}

@media screen and (max-width: 700px) {
  .pxc-avatar {
    width: 100%;
    height: 100px;
    justify-content: space-around;
    align-items: center;
  }
}
.pxc-avatar img {
  transition: all 600ms ease;
  width: 100%;
  height: auto;
  max-height: 150px;
  /* border-radius: 100%;
  box-shadow: 0 1px 1rem rgba(10, 10, 25, 0.5); */
  position: relative;
  z-index: 1;
}
@media screen and (max-width: 900px) {
  .pxc-avatar img {
    width: 125px;
    height: 125px;
  }
}
@media screen and (max-width: 700px) {
  .pxc-avatar img {
    margin-top: 100px;
  }
}

.pxc-bg {
  background-image:url('../../assets/images/kmutt_contact.png');
  transition: all 600ms ease;
  border-radius: 2px;
  height: 100%;
  width: calc(100% - 75px);
  position: absolute;
  z-index: 0;
  pointer-events: none;
  left: 75px;
  background-size: cover;
  background-position: right;
  background-color: #2b2b95;
}

@media screen and (max-width: 900px) {
  .pxc-bg {
    left: 50px;
  }
}
@media screen and (max-width: 700px) {
  .pxc-bg {
    left: 0;
    top: 0;
    height: 200px;
    width: 100%;
    border-radius: 0;
  }
}

.pxc-subcard {
  transition: all 600ms ease;
  border-radius: 3px;
  background: #f881585e;
  width: 650px;
  margin: 25px 200px 25px -25px;
  z-index: 0;
  padding: 10px 20px 10px 40px;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1rem rgba(10, 10, 25, 0.3);
}

@media screen and (max-width: 900px) {
  .pxc-subcard {
    margin-right: 120px;
    margin-left: -32px;
  }
}
@media screen and (max-width: 700px) {
  .pxc-subcard {
    margin: 25px 15px 30px 15px;
    padding: 60px 25px 20px;
    width: auto;
    height: auto;
    flex: 1 0 auto;
  }
}

.pxc-stopper {
  transition: all 600ms ease;
  height: 100%;
  width: calc(60%);
  background: #FFF8;
  display: block;
  position: absolute;
  z-index: 0;
  left: 75px;
}
.bronze .pxc-stopper {
  display: none;
}
@media screen and (max-width: 900px) {
  .pxc-stopper {
    left: 50px;
  }
}
@media screen and (max-width: 700px) {
  .pxc-stopper {
    left: 0;
    width: 100%;
    top: 200px;
    height: calc(100% - 200px);
    background: white;
    border-radius: 0;
  }
}

.pxc-tags {
  position: absolute;
  bottom: -15px;
  right: 10px;
  height: 32px;
  overflow: hidden;
  text-align: right;
}

.pxc-tags div {
  color: white;
  display: inline-block;
  background: #8855DD;
  border-radius: 12px;
  padding: 2px 10px;
  line-height: 1.7;
  margin: 4px 4px;
  font-size: 12px;
  height: 20px;
}
@media screen and (max-width: 700px) {
  .pxc-tags {
    height: 64px;
    text-align: center;
    position: relative;
    width: 100%;
    bottom: 0;
    left: 0;
    margin-bottom: 10px;
  }
  .pxc-tags div {
    color: #8855DD;
    border: solid 1px #8855DD;
    background: transparent;
  }
}

.pxc-title {
  font-size: 24px;
  margin-bottom: 4px;
  color: rgb(0, 0, 0);
  width: calc(100% - 50px);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 0 0 auto;
}

@media screen and (max-width: 700px) {
  .pxc-title {
    font-size: 16px;
    white-space: initial;
    overflow: initial;
    text-overflow: initial;
  }
}

.pxc-sub {
  font-size: 14px;
  margin: 2px 0 8px 0;
  flex: 1 1 auto;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(black 80%, transparent 100%);
  color: #000000;
}

@media screen and (max-width: 700px) {
  .pxc-sub {
    font-size: 13px;
  }
}

.pxc-feats {
  font-size: 13px;
  color: #5f5f80;
  flex: 1 1 auto;
  padding-bottom: 5px;
  margin-bottom: 5px;
  line-height: 1.3;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(black 50%, transparent 100%);
}

@media screen and (max-width: 700px) {
  .pxc-feats {
    font-size: 12px;
    margin-top: 10px;
    text-align: center;
  }
}
.pxc-feats span:not(:first-child):before {
  content: " • ";
  margin: 3px;
}

.bottom-row {
  flex: 0 1 auto;
  margin-top: 10px;
  display: flex;
  justify-items: space-around;
  align-items: center;
}
@media screen and (max-width: 700px) {
  .bottom-row {
    border-top: solid 1px rgba(255, 255, 255, 0.05);
    padding-top: 5px;
  }
}
.bottom-row .pxc-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media screen and (max-width: 700px) {
  .bottom-row .pxc-info {
    position: absolute;
    bottom: -28px;
    left: -10px;
    justify-content: space-between;
    width: 100%;
  }
  .bottom-row .pxc-info .region {
    color: #112;
    font-size: 13px;
    text-transform: uppercase;
  }
}
.bottom-row .links {
  display: flex;
  align-content: flex-end;
  flex: 1 0 auto;
  justify-content: flex-end;
}
.bottom-row .links a {
  color: #99D;
  font-size: 28px;
  text-align: center;
  width: 48px;
  height: 48px;
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
}
.bronze .bottom-row .links a {
  display: none;
}
.bottom-row .links a:hover {
  color: #EEF;
}
@media screen and (max-width: 700px) {
  .bottom-row .links {
    justify-content: center;
    margin-top: 10px;
    margin-bottom: -10px;
  }
  .bottom-row .links a {
    color: #a6aad1;
  }
}
.bottom-row .flags {
  overflow: hidden;
  height: 23px;
}
.bottom-row .flags span {
  margin: 2px 6px;
  background: white;
  border-radius: 3px;
  width: 24px;
  height: 16px;
  display: inline-block;
}
.bottom-row .region {
  color: white;
  margin-left: 8px;
}

.bronze .discordLink {
  display: flex !important;
  position: absolute;
  left: -5px;
  bottom: 5px;
  justify-content: space-around;
  align-items: center;
}

</style>