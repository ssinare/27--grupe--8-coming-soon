function progressBar(selector, data) {
    // validation
    
    // logic
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (const progress of data) {
        HTML += `<div class="progress-bar">
                    <div class="top">
                    <div class="label">${progress.label}</div>
                    <div class="value">${progress.value}</div>
                    </div>
                    <div class="bottom">
                        <div class="progress" style="width: ${progress.value}%;">
                        <div class="bar"></div>
                        </div>
                    </div>
                </div>`;
    }

    //result return
    //DOM.innerHTML += HTML; // butinai =+, nes kitaip galima pamesti turini, tiesiog perrasyti naujais ant virsaus
    DOM.insertAdjacentHTML('beforeend', HTML);
//afterend
const allProgressBarDOM = DOM.querySelectorAll('.progress-bar');
console.log(allProgressBarDOM);

//event
document.addEventListener('scroll', () => {
    console.log(scrollY);
    for (const bar of allProgressBarDOM) {
        if (bar.offsetTop + bar.offsetHeight <= scrollY + innerHeight) {
            bar.classlist.add ('animate');
            console.log(fff);
        }
    }
})
}

export { progressBar }