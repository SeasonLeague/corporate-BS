document.getElementById("generate-btn").addEventListener("click", fetchBSPhrase);

    function fetchBSPhrase() {
      const url = "https://sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com/";
      const headers = {
        "X-RapidAPI-Key": "e5c039e6e7msh013425c48454853p157efbjsnebdbb788322f",
        "X-RapidAPI-Host": "sameer-kumar-corporate-bs-generator-v1.p.rapidapi.com"
      };

      fetch(url, { headers: headers })
        .then(response => response.json())
        .then(data => {
          const bsPhrase = data.phrase;
          document.getElementById("bs-phrase").textContent = bsPhrase;
        })
        .catch(error => {
          document.getElementById("bs-phrase").textContent = "Oops, something went wrong!";
          console.error(error);
        });
    }