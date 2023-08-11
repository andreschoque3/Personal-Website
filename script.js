// About section functionality

let tablinks = document.getElementsByClassName("tab-links");
let tabconts = document.getElementsByClassName("tab-conts");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("act-link");
    }

    for(tabcont of tabconts) {
        tabcont.classList.remove("act-tab");
    }

    event.currentTarget.classList.add("act-link");

    document.getElementById(tabname).classList.add("act-tab");
}

// Responsive view for menu 'burger' 

let menus = document.getElementById("menus");

function openmenu(){
    menus.style.right = "0";
}

function closemenu() {
    menus.style.right = "-200px";
}

// Google Sheets API inspired from https://github.com/jamiewilson/form-to-google-sheets.git

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyiMFJxNG-Oe1735pct_MGwOk1EhP7t5LKAu9u4KHLdk_NqJIPJiSrXQrbs6Lzco8j7/exec'
  const form = document.forms['submit-to-google-sheet']

  const submitMsg = document.getElementById("submit-msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => { 
        submitMsg.innerHTML = "Message Submitted"
        setTimeout(function() {
            submitMsg.innerHTML = ""
        }, 5000)
        form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })