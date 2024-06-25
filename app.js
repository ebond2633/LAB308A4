
async function initialLoad() {
  const breeds = await fetchBreeds();
  populateBreeds(breeds);
  breedSelect.addEventListener("change", handleBreedSelect);
}

async function fetchBreeds() {
  const response = await fetch(`${API_URL}/breeds`, {
    headers: {
      
    },
  });
  


    