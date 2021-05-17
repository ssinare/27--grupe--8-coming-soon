function socials(selector, data) {
    //validation
    

    //logic
    const DOM = document.querySelector(selector);
    let HTML =  '';
  
   /* for (let i = 0; i < data.lenght; i++) {
        const social = data[i];
        console.log(social.icon);
    }
    */
    for (const social of data) {
        console.log(social.href, social.icon);
    }
    for (const social of data) {
        if socia
        HTML+= `<a href="${social.href}", social.icon);
    }

    //result return
    DOM.innerHTML = HTML; 
  
  
}
export { socials }