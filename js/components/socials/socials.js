function socials(selector, data) {
    
    //validation
    

    //logic
   const DOM = document.querySelector(selector);
    let HTML =  '';
  /*
   for (let i = 0; i < data.length; i++) {
        const social = data[i];
        console.log(social.href, social.icon);
    }
   
    for (const social of data) {
        console.log(social.href, social.icon);
    } // siuo budu netenkama indekso i, neaisku kelintasis elementas islogintas
    */

   for (const social of data) {
       if (social.active) {
       HTML+= `<a href="${social.href}" target="_blank" class="social fa fa-${social.icon}"></a>`;
        }
    }

   //for (const {href, icon} of data) {
   //   HTML+= `<a href="${social.href}" target="_blank" class="fa fa-${social.icon}"></a>`;
   // } neveikia??

    //result return
   DOM.innerHTML += HTML; // pridejus + prisideda ir tas raudonas mygtukas apvalus
  
  
}
export { socials }