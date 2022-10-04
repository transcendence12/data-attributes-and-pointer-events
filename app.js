document.addEventListener('click', (e) => {
    // console.log(e) => Pointer event
    // console.log(e.target.dataset.heart) click event outside icon =>undefined
    // you need to check if target is icon itself
    if(e.target.dataset.heart) {
        console.log(e.target.dataset.heart)
    } else if (e.target.dataset.share) {
        console.log(e.target.dataset.share)
    }
})