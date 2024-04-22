//Allergi filter function
document.addEventListener("DOMContentLoaded", function() {
    const filterTags = document.querySelectorAll(".filter-tag");
    filterTags.forEach(tag => {
        tag.addEventListener("click", function() {
            this.classList.toggle("selected");
            updateTags();
        });
    });

    function updateTags() {
        const hveteFilterButton = document.querySelector('[data-tag="hvete"]');
        const rugFilterButton = document.querySelector('[data-tag="rug"]');
        const byggFilterButton = document.querySelector('[data-tag="bygg"]');
        const havreFilterButton = document.querySelector('[data-tag="havre"]');
        const speltFilterButton = document.querySelector('[data-tag="spelt"]');
        const korasanhveteFilterButton = document.querySelector('[data-tag="korasanhvete"]');
        const skalldyrFilterButton = document.querySelector('[data-tag="skalldyr"]');
        const eggFilterButton = document.querySelector('[data-tag="egg"]');
        const fiskFilterButton = document.querySelector('[data-tag="fisk"]');
        const peanotterFilterButton = document.querySelector('[data-tag="peanotter"]');
        const soyaFilterButton = document.querySelector('[data-tag="soya"]');
        const melkFilterButton = document.querySelector('[data-tag="melk"]');
        const mandlerFilterButton = document.querySelector('[data-tag="mandler"]');
        const hasselnotterFilterButton = document.querySelector('[data-tag="hasselnotter"]');
        const valnotterFilterButton = document.querySelector('[data-tag="valnotter"]');
        const kasjunotterFilterButton = document.querySelector('[data-tag="kasjunotter"]');
        const pekannotterFilterButton = document.querySelector('[data-tag="pekannotter"]');
        const pistasjenotterFilterButton = document.querySelector('[data-tag="pistasjenotter"]');
        const paranotterFilterButton = document.querySelector('[data-tag="paranotter"]');
        const macadamianotterFilterButton = document.querySelector('[data-tag="macadamianotter"]');
        const selleriFilterButton = document.querySelector('[data-tag="selleri"]');
        const sennepFilterButton = document.querySelector('[data-tag="sennep"]');
        const sesamfroFilterButton = document.querySelector('[data-tag="sesamfro"]');
        const sulfittFilterButton = document.querySelector('[data-tag="sulfitt"]');
        const lupinFilterButton = document.querySelector('[data-tag="lupin"]');
        const blotdyrFilterButton = document.querySelector('[data-tag="blotdyr"]');
        
        // Locked and option
        const hveteLockedTags = document.querySelectorAll('.tags.hvete[id="hvete locked"]');
        const hveteOptionTags = document.querySelectorAll('.tags.hvete[id="hvete option"]');

        const rugLockedTags = document.querySelectorAll('.tags.rug[id="rug locked"]');
        const rugOptionTags = document.querySelectorAll('.tags.rug[id="rug option"]');

        const byggLockedTags = document.querySelectorAll('.tags.bygg[id="bygg locked"]');
        const byggOptionTags = document.querySelectorAll('.tags.bygg[id="bygg option"]');
        
        const havreLockedTags = document.querySelectorAll('.tags.havre[id="havre locked"]');
        const havreOptionTags = document.querySelectorAll('.tags.havre[id="havre option"]');

        const speltLockedTags = document.querySelectorAll('.tags.spelt[id="spelt locked"]');
        const speltOptionTags = document.querySelectorAll('.tags.spelt[id="spelt option"]');

        const korasanhveteLockedTags = document.querySelectorAll('.tags.korasanhvete[id="korasanhvete locked"]');
        const korasanhveteOptionTags = document.querySelectorAll('.tags.korasanhvete[id="korasanhvete option"]');

        const skalldyrLockedTags = document.querySelectorAll('.tags.skalldyr[id="skalldyr locked"]');
        const skalldyrOptionTags = document.querySelectorAll('.tags.skalldyr[id="skalldyr option"]');

        const eggLockedTags = document.querySelectorAll('.tags.egg[id="egg locked"]');
        const eggOptionTags = document.querySelectorAll('.tags.egg[id="egg option"]');

        const fiskLockedTags = document.querySelectorAll('.tags.fisk[id="fisk locked"]');
        const fiskOptionTags = document.querySelectorAll('.tags.fisk[id="fisk option"]');

        const peanotterLockedTags = document.querySelectorAll('.tags.peanotter[id="peanotter locked"]');
        const peanotterOptionTags = document.querySelectorAll('.tags.peanotter[id="peanotter option"]');

        const soyaLockedTags = document.querySelectorAll('.tags.soya[id="soya locked"]');
        const soyaOptionTags = document.querySelectorAll('.tags.soya[id="soya option"]');

        const melkLockedTags = document.querySelectorAll('.tags.melk[id="melk locked"]');
        const melkOptionTags = document.querySelectorAll('.tags.melk[id="melk option"]');

        const mandlerLockedTags = document.querySelectorAll('.tags.mandler[id="mandler locked"]');
        const mandlerOptionTags = document.querySelectorAll('.tags.mandler[id="mandler option"]');

        const hasselnotterLockedTags = document.querySelectorAll('.tags.hasselnotter[id="hasselnotter locked"]');
        const hasselnotterOptionTags = document.querySelectorAll('.tags.hasselnotter[id="hasselnotter option"]');

        const valnotterLockedTags = document.querySelectorAll('.tags.valnotter[id="valnotter locked"]');
        const valnotterOptionTags = document.querySelectorAll('.tags.valnotter[id="valnotter option"]');

        const kasjunotterLockedTags = document.querySelectorAll('.tags.kasjunotter[id="kasjunotter locked"]');
        const kasjunotterOptionTags = document.querySelectorAll('.tags.kasjunotter[id="kasjunotter option"]');

        const pekannotterLockedTags = document.querySelectorAll('.tags.pekannotter[id="pekannotter locked"]');
        const pekannotterOptionTags = document.querySelectorAll('.tags.pekannotter[id="pekannotter option"]');

        const pistasjenotterLockedTags = document.querySelectorAll('.tags.pistasjenotter[id="pistasjenotter locked"]');
        const pistasjenotterOptionTags = document.querySelectorAll('.tags.pistasjenotter[id="pistasjenotter option"]');

        const paranotterLockedTags = document.querySelectorAll('.tags.paranotter[id="paranotter locked"]');
        const paranotterOptionTags = document.querySelectorAll('.tags.paranotter[id="paranotter option"]');

        const macadamianotterLockedTags = document.querySelectorAll('.tags.macadamianotter[id="macadamianotter locked"]');
        const macadamianotterOptionTags = document.querySelectorAll('.tags.macadamianotter[id="macadamianotter option"]');

        const selleriLockedTags = document.querySelectorAll('.tags.selleri[id="selleri locked"]');
        const selleriOptionTags = document.querySelectorAll('.tags.selleri[id="selleri option"]');

        const sennepLockedTags = document.querySelectorAll('.tags.sennep[id="sennep locked"]');
        const sennepOptionTags = document.querySelectorAll('.tags.sennep[id="sennep option"]');

        const sesamfroLockedTags = document.querySelectorAll('.tags.sesamfro[id="sesamfro locked"]');
        const sesamfroOptionTags = document.querySelectorAll('.tags.sesamfro[id="sesamfro option"]');

        const sulfittLockedTags = document.querySelectorAll('.tags.sulfitt[id="sulfitt locked"]');
        const sulfittOptionTags = document.querySelectorAll('.tags.sulfitt[id="sulfitt option"]');

        const lupinLockedTags = document.querySelectorAll('.tags.lupin[id="lupin locked"]');
        const lupinOptionTags = document.querySelectorAll('.tags.lupin[id="lupin option"]');  

        const blotdyrLockedTags = document.querySelectorAll('.tags.blotdyr[id="blotdyr locked"]');
        const blotdyrOptionTags = document.querySelectorAll('.tags.blotdyr[id="blotdyr option"]');  

        [hveteLockedTags, hveteOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (hveteFilterButton.classList.contains("selected")) {
                    if (tags === hveteLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [rugLockedTags, rugOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (rugFilterButton.classList.contains("selected")) {
                    if (tags === rugLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [byggLockedTags, byggOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (byggFilterButton.classList.contains("selected")) {
                    if (tags === byggLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [havreLockedTags, havreOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (havreFilterButton.classList.contains("selected")) {
                    if (tags === havreLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [speltLockedTags, speltOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (speltFilterButton.classList.contains("selected")) {
                    if (tags === speltLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [korasanhveteLockedTags, korasanhveteOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (korasanhveteFilterButton.classList.contains("selected")) {
                    if (tags === korasanhveteLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [skalldyrLockedTags, skalldyrOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (skalldyrFilterButton.classList.contains("selected")) {
                    if (tags === skalldyrLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [eggLockedTags, eggOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (eggFilterButton.classList.contains("selected")) {
                    if (tags === eggLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [fiskLockedTags, fiskOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (fiskFilterButton.classList.contains("selected")) {
                    if (tags === fiskLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [peanotterLockedTags, peanotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (peanotterFilterButton.classList.contains("selected")) {
                    if (tags === peanotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [soyaLockedTags, soyaOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (soyaFilterButton.classList.contains("selected")) {
                    if (tags === soyaLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [melkLockedTags, melkOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (melkFilterButton.classList.contains("selected")) {
                    if (tags === melkLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [mandlerLockedTags, mandlerOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (mandlerFilterButton.classList.contains("selected")) {
                    if (tags === mandlerLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [hasselnotterLockedTags, hasselnotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (hasselnotterFilterButton.classList.contains("selected")) {
                    if (tags === hasselnotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [valnotterLockedTags, valnotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (valnotterFilterButton.classList.contains("selected")) {
                    if (tags === valnotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [kasjunotterLockedTags, kasjunotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (kasjunotterFilterButton.classList.contains("selected")) {
                    if (tags === kasjunotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [pekannotterLockedTags, pekannotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (pekannotterFilterButton.classList.contains("selected")) {
                    if (tags === pekannotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [pistasjenotterLockedTags, pistasjenotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (pistasjenotterFilterButton.classList.contains("selected")) {
                    if (tags === pistasjenotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [paranotterLockedTags, paranotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (paranotterFilterButton.classList.contains("selected")) {
                    if (tags === paranotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [macadamianotterLockedTags, macadamianotterOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (macadamianotterFilterButton.classList.contains("selected")) {
                    if (tags === macadamianotterLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [selleriLockedTags, selleriOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (selleriFilterButton.classList.contains("selected")) {
                    if (tags === selleriLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [sennepLockedTags, sennepOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (sennepFilterButton.classList.contains("selected")) {
                    if (tags === sennepLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [sesamfroLockedTags, sesamfroOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (sesamfroFilterButton.classList.contains("selected")) {
                    if (tags === sesamfroLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [sulfittLockedTags, sulfittOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (sulfittFilterButton.classList.contains("selected")) {
                    if (tags === sulfittLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [lupinLockedTags, lupinOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (lupinFilterButton.classList.contains("selected")) {
                    if (tags === lupinLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });

        [blotdyrLockedTags, blotdyrOptionTags].forEach(tags => {
            tags.forEach(tag => {
                if (blotdyrFilterButton.classList.contains("selected")) {
                    if (tags === blotdyrLockedTags) {
                        tag.classList.add("locked");
                    } else {
                        tag.classList.add("option");
                    }
                } else {
                    tag.classList.remove("locked", "option");
                }
            });
        });
    }
});

//Button active or inactive
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
});

//Dropdown of content
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    var toggleButton = document.getElementById("toggleButton");
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none"; // Skjul dropdown-innholdet
      toggleButton.innerHTML = "Vis allergifiltre &#x2BC6;"; // Endre teksten til "Vis Informasjon" med pil ned
    } else {
      dropdownContent.style.display = "block"; // Vis dropdown-innholdet
      toggleButton.innerHTML = "Skjul allergifiltre &#x2BC5;"; // Endre teksten til "Skjul Informasjon" med pil opp
    }
  }  

//Overlay
document.addEventListener("DOMContentLoaded", function() {
    var overlay = document.getElementById('overlay');
    var closeButton = document.createElement('button'); // Create close button
    closeButton.textContent = 'Lukk'; // Set text content
    closeButton.id = 'closeButton'; // Set ID
    closeButton.style.cursor = 'pointer'; // Add cursor style
    document.getElementById('popup').appendChild(closeButton); // Append button to popup

    var popupTriggers = document.querySelectorAll('.popup-trigger');

    function openOverlay(title, description, price) {
      var popupContent = `
        <div class="overlay-card">
        <h2>${title}</h2>
        <p>${price} kr</p>
        <p>${description}</p>
        </div>
      `;
      document.getElementById('popup').innerHTML = popupContent;
      overlay.style.display = 'block';
    }

    function closeOverlay() {
      overlay.style.display = 'none';
    }

    closeButton.addEventListener('click', closeOverlay);

    overlay.addEventListener('click', function(event) {
      if (event.target === overlay) { // Check if click happened on overlay itself
        closeOverlay();
      }
    });

    popupTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        var title = this.getAttribute('data-title');
        var description = this.getAttribute('data-description');
        var price = this.getAttribute('data-price');
        openOverlay(title, description, price);
      });
    });
  });

//Remove # from URL
$("a[href^='#']").click(function(e){
  e.preventDefault();
  var elem = $($(this).attr('href'));
  /* check for broken link */
  if(elem.length)
    $(window).animate('scrollTop' , elem.offset().top)
})

//New code
