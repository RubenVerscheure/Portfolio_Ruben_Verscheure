const navLinks = document.querySelectorAll('.nav-item') //select all items from class and store
const menuToggle = document.getElementById('navcol-1') //select element
const bsCollapse = new bootstrap.Collapse(menuToggle, { //make sure menu starts collapsed when new constant is added
  toggle: false
})
navLinks.forEach((l) => { //iterate for every link in the navbar
    l.addEventListener('click', () => { //checks if link is clicked
        if(bsCollapse._isShown()){ //given that navbar is shown
            bsCollapse.hide() // close on click
        }
    })
})