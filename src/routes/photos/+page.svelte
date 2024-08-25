<script>
import { base } from "$app/paths";

let count = $state(1);

function select() {
   count +=1;
   if (count > 3) 
      {count = 1;}
}
</script>

<div>
   <h1>Photos</h1>
   <button onclick={select}> <b>Click to select next photo</b></button>
   <br />

   {#if count==1}
   <h4>{count}: Australian Catholic University, Strathfield Campus, NSW, Australia</h4>
   <img src="{base}/acupy.jpg" alt="acu">
   {/if}

   {#if count==2}
   <h4>{count}: University of Technology Sydney, Building 5</h4>
   <img src="{base}/uts-bldg5.jpg" alt="uts">
   {/if}

   {#if count==3}
   <h4>{count}: Homebush Public School, Homebush, NSW, Australia</h4>
   <img src="{base}/hps.jpg" alt="hps">
   {/if}   
</div>

<style scoped>
img {
   max-width: 100%;
   height: auto;
}
</style>
