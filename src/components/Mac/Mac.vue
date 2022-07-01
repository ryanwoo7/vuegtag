<template>
  <div class="maccontainer _maccontainer">
    <SubNavGuide />
    <MacBriefInfo :isnew="'yes'" :reversedirection="'yes'" :screensize="'13英寸'" :goodname="'MacBook Pro'" :goodsignature="'行动，行动力'" :imgsrc="require('./imgs/macbook_pro_13__1.jpg')"/>
    <MacBriefInfo :goodname="'MacBook Air'" :goodsignature="'够轻，够轻快'" :imgsrc="require('./imgs/macbook_air__1.jpg')"/>
    <CompareMac/>
    <MacosICloud/>
    <InnerAppinfo/>
    <ProfessAppinfo/>
    <MacFinalInfo/>
  </div>
</template>

<script>
import SubNavGuide from './subcomponents/SubNavGuide'
import MacBriefInfo from "./subcomponents/MacBriefInfo"
import CompareMac from "./subcomponents/CompareMac";
import MacosICloud from "./subcomponents/MacosICloud";
import InnerAppinfo from "./subcomponents/InnerAppinfo";
import ProfessAppinfo from "./subcomponents/ProfessAppinfo";
import MacFinalInfo from "./subcomponents/MacFinalInfo";
export default {
  name: '',
  components: {
    SubNavGuide,MacBriefInfo,CompareMac,MacosICloud,InnerAppinfo,ProfessAppinfo,MacFinalInfo
  }
}
</script>

<style lang="less" scoped>

// 大于800px
@media only screen and (min-width: 800px){
    
}

// 小于800px
@media only screen and (max-width: 800px){
    
  
}
</style>
