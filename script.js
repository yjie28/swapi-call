const swapiData = document.getElementById("swapi-data");

fetch('https://swapi.co/api/people/')
  .then(response => response.json())
  .then(dataSet => appendData(dataSet.results))
  .catch(err => console.log(`Oops something went wrong .. The error is ${err}`));

const appendData = (dataSet) => {
  dataSet.map((data) => {
    const div = document.createElement("div");
    div.innerHTML = `Name: ${data.name}
                      <br>Height: ${data.height}
                      <br>Mass: ${data.mass}
                      <br>Birth Year: ${data.birth_year}`;
    swapiData.appendChild(div);
  })
}
