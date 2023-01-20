fetch("https://api.covid19api.com/summary")
  .then((response) => response.json())
  .then((data) => {
    // Iterate through each country in the data
    data.Countries.forEach((country) => {
      // Create a new card element
      const card = document.createElement("div");
      card.classList.add("card");

      // Create an h2 element for the country name
      const name = document.createElement("h2");
      name.textContent = country.Country;

      // Create a p element for the confirmed cases
      const confirmed = document.createElement("p");
      confirmed.textContent = `Confirmed: ${country.TotalConfirmed}`;

      // Create a p element for the recovered cases
      const recovered = document.createElement("p");
      recovered.textContent = `Recovered: ${country.TotalRecovered}`;

      // Create a p element for the deaths
      const deaths = document.createElement("p");
      deaths.textContent = `Deaths: ${country.TotalDeaths}`;

      // Append the elements to the card
      card.appendChild(name);
      card.appendChild(confirmed);
      card.appendChild(recovered);
      card.appendChild(deaths);

      // Append the card to the card container
      document.querySelector(".card-container").appendChild(card);
    });
   
    // Get the search input and search button
    const searchInput = document.querySelector("#search-input");
    const searchButton = document.querySelector("#search-button");

    // Add an event listener to the search button
    searchButton.addEventListener("click", () => {
      // Get the search query
      const query = searchInput.value.toLowerCase();

      // Iterate through each country in the data
      data.Countries.forEach((country) => {
        // Check if the country name includes the search query
        if (country.Country.toLowerCase().includes(query)) {
          // Show the card
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
