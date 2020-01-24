
              function myFunction() {
                var input, filter, ul, li, a, i, txtValue;
                input = document.getElementById("myInput");
                filter = input.value.toUpperCase();
                ul = document.getElementById("queries");
                li = ul.getElementsByTagName("li");
                for (i = 0; i < li.length; i++) {
                    a = li[i].getElementsByTagName("a")[0];
                    txtValue = a.textContent || a.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        li[i].style.display = "";
                    } else {
                        li[i].style.display = "none";
                    }
                }
            }
              
              var acc = document.getElementsByClassName("accordion");
              var i;
              
              for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var panel = this.nextElementSibling;
                  if (panel.style.display === "block") {
                    panel.style.display = "none";
                  } else {
                    panel.style.display = "block";
                  }
                });
              }

              