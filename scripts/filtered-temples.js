const year = document.querySelector('#currentyear');
const today = new Date();
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector('#lastModified');
lastModified.innerHTML = (document.lastModified);

const hamButton = document.querySelector("#hamburger");
const ul = document.querySelector("ul");

hamButton.addEventListener("click", () => {
    ul.classList.toggle("open-ul");
    hamButton.classList.toggle("open");
});

// Footer JS ^^^

// Temple Images
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "images/aba-nigeria-temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "images/manti-temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "images/payson-utah-temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "images/yigo_guam_temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "images/washington_dc_temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "images/lima-peru-temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "images/mexico-city-temple.jpeg"
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here below...
    {
      templeName: "Oklahoma City Oklahoma Temple",
      location: "Oklahoma City, Oklahoma, United States",
      dedicated: "2000, July, 30",
      area: 10890,
      imageUrl: "images/mexico-city-temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oklahoma-city-oklahoma/400x250/2-Oklahoma-City-Temple-2231525.jpg"
    },
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6-24",
      area: 382207,
      imageUrl: "images/slc-temple.jpeg",
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg"
    },
    {
      templeName: "St. George Utah Temple",
      location: "St. George, Utah, United States",
      dedicated: "1877, April, 6-8",
      area: 143969,
      imageUrl: "images/st-george-utah-temple.jpeg"
    //   "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-utah-temple-clouds-922212-wallpaper.jpg"
    },
  ];

// --- Original Idea ---
// const createTempleCard = temples.map(function (temple) {
//     return `<div id="temple-card">
//     <h2>${temple.templeName}</h2>
//     <p>Location: ${temple.location}</p>
//     <p>Dedicated: ${temple.dedicated}</p>
//     <p>Size: ${temple.area}</p>
//     <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
//     </div>`;
// });
// document.querySelector("#temple-img").innerHTML = createTempleCard.join("");

function createTempleCard(templeList) {
    document.querySelector("#temple-img").innerHTML = "";
    templeList.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location: <span>${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated: <span>${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size: <span>${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "400");
        img.setAttribute("height", "250");

        card.setAttribute("id", "temple-card")
        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector("#temple-img").appendChild(card);
    });
}

const homeFilter = document.querySelector("#home-button");
homeFilter.addEventListener("click", () => {
    createTempleCard(temples);
});

const oldFilter = document.querySelector("#old-button");
oldFilter.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => Number(temple.dedicated.slice(0,4)) < 1900));
});

const newFilter = document.querySelector("#new-button");
newFilter.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => Number(temple.dedicated.slice(0,4)) > 2000));
});

const largeFilter = document.querySelector("#large-button");
largeFilter.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallFilter = document.querySelector("#small-button");
smallFilter.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000))
})

createTempleCard(temples);