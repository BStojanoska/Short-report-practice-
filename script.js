// Coding challenge

// Parks and streets share name and build year - common class

class ObjInfo {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    };
};

// Parks - 3
// Should also have: number of trees, park area
// Formulas for tree density (trees / area), average age (sum of all ages / number of parks), and the name of the park that has > 1000 trees

const allParks = [];

class Parks extends ObjInfo {
    constructor(name, buildYear, trees, area) {
        super(name, buildYear);
        this.trees = trees;
        this.area = area;

        allParks.push(this);
    };
};


const park1 = new Parks('Glados Park', 1996, 249, 1);
const park2 = new Parks('Hearth', 1978, 879, 4);
const park3 = new Parks('Green Park', 1865, 1833, 10);


const parkReport = function() {
    console.log('-------- PARKS REPORT --------');

    allParks.forEach(({ name, trees, area }) => console.log(`${name} has a tree density of ${trees / area} trees per square km.`));

    const sumAge = allParks.reduce((prev, park) => prev + (new Date().getFullYear() - park.buildYear), 0);
    console.log(`Our ${allParks.length} parks have an average age of ${(sumAge / allParks.length).toFixed(2)} years.`)

    allParks.forEach( park => { 
        if (park.trees > 1000 ) { 
            console.log(`${park.name} has more than 1000 trees.`)
        }});
};


// Streets - 4
// Should also have: length of the street, size classification (tiny, small, normal, big, huge)
// Formulas for total and average length of the streets, and size classification of the streets

const allStreets = [];

class Streets extends ObjInfo {
    constructor(name, buildYear, strLength, sizeClass) {
        super(name, buildYear);
        this.strLength = strLength;
        this.sizeClass = sizeClass;

        allStreets.push(this);
    };
};

const str1 = new Streets('Narrow Street', 1878, 10, 'small');
const str2 = new Streets('Bellvue', 1760,  2, 'tiny');
const str3 = new Streets('Blue cradle', 1997, 40, 'big');
const str4 = new Streets('Crawl Street', 2005, 105, 'huge');


const streetReport = function() {
    console.log('------- STREETS REPORT --------')
    const sumLength = allStreets.reduce((prev, street) => prev + street.strLength, 0);
    console.log(`Our ${allStreets.length} streets have a total length of ${sumLength} km, with an average of ${sumLength / allStreets.length} km.`);

    allStreets.forEach( street => console.log(`${street.name}, build in ${street.buildYear}, is a ${street.sizeClass} street.`));
}


const init = function() {
    parkReport();
    streetReport();
}();




























