// 1 დავალება 1: უნივერსიტეტის მონაცემები შექმენით university ობიექტი, რომელიც შეიცავს შემდეგ თვისებებს:
// name - უნივერსიტეტის სახელი
// departments - ფაკულტეტების რაოდენობა
// website - უნივერსიტეტის ვებსაიტი
// ratings - ჩაშენებული ობიექტი, სადაც იქნება 3 სტუდენტის შეფასება

let university = {
    name: "Goal-Oriented Academy",
    departments: 10,
    website: "htpps://Goal-Oriented Academy",
    ratings: {
        student1: 9.9,
        student2: 8.7,
        student3: 7.7
    }
}
// 1.1 გამოიტანეთ ობიექტის ყველა თვისება და მნიშვნელობა.

let keyvalue = Object.entries(university)

console.log(university);

// 1.2 შეამოწმეთ, გააჩნია თუ არა scholarship თვისება.

console.log(Object.hasOwn(university, "scholarship"));

// 1.3 დაამატეთ studentsCount ახალი ობიექტის გაერთიანებით.

let add= { studentsCount: 200 }
Object.assign(university, add)

// 1.4 გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.

Object.freeze(university)

university.departments = 345

university.website = "htpps//Magari.com"

// 1.5 შეამოწმეთ, გაყინულია თუ არა ობიექტი.

Object.isFrozen(university)

// =====================================================================

// 2 დავალება 2: სპორტული კლუბის მონაცემები შექმენით sportsClub ობიექტი, რომელიც შეიცავს:clubName,sportType,foundedYear
// achievements (ჩაშენებული ობიექტი, სადაც იქნება 3 მოგებული ტიტულის ინფორმაცია)

let sportsClub = {
    clubName: "FC Barcelona",
    sportType: "Football",
    foundedYear: 1899,
    achievements: {
        leagueTitles: 27,
        championsLeague: 5,
        domesticCups: 31
    }
}

// 2.1 გამოიტანეთ ობიექტის თვისებების სია.

console.log(Object.keys(sportsClub));

// 2.2 გამოიტანეთ ობიექტის მნიშვნელობების სია.

console.log(Object.values(sportsClub));

// 2.3 შეამოწმეთ, არსებობს თუ არა sponsors.

console.log(Object.hasOwn(sportsClub, "sponsors"));

// 2.4 დაამატეთ ახალი თვისება stadiumCapacity ახალი ობიექტით გაერთიანების გზით.

let add1 = { stadiumCapacity: 87653 }
Object.assign(sportsClub, add1)

console.log(sportsClub);

// 2.5 გაყინეთ ობიექტი და სცადეთ მისი ცვლილება.

Object.freeze(sportsClub)

sportsClub.clubName = "Realmadrid"

sportsClub.sportType = "Basketball"

// 2.6 შეამოწმეთ, გაყინულია თუ არა ობიექტი.

console.log(Object.isFrozen(sportsClub))

// ===================================================================================================

// დავალება 3: სასტუმროს მართვა შექმენით hotel ობიექტი, რომელიც შეიცავს: hotelName, stars (რეიტინგი 1-დან 5-მდე)
// location, guestReviews (ჩაშენებული ობიექტი 3 სტუმრის შეფასებით)

let hotel = {
    hotelName: " Goa Grand Hotel",
    stars: 5,
    location: "Tbilisi, George",
    guestReviews: {
        guest1: 9.8,
        guest2: 9.5,
        guest3: 8.9
    }
}

// 3.1 გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.

let keyvalue1 = Object.entries(hotel)

console.log(hotel);


// 3.2 შეამოწმეთ, გააჩნია თუ არა spa ველი.

console.log(Object.hasOwn(hotel, "spa"));

// 3.3 დაამატეთ roomsCount ახალი ობიექტის გაერთიანებით.

let add2 = { roomsCount: 345 }
Object.assign(hotel, add2)

// 3.4 გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.

Object.freeze(hotel)

// 3.5 შეამოწმეთ, გაყინულია თუ არა ობიექტი.

hotel.hotelName = "Magari"
hotel.roomsCount = 999

console.log(hotel);

console.log(Object.isFrozen(hotel));


// ==========================================================================

// დავალება 4: კინოს მონაცემთა ბაზა შექმენით cinema ობიექტი, რომელიც შეიცავს:cinemaName, moviesCount
// location, movieReviews (ჩაშენებული ობიექტი, სადაც იქნება 3 მომხმარებლის შეფასება)

let cinema = {
    cinemaName: "Goa Grand Movie ",
    moviesCount: 20,
    location: "Tbilisi, George",
    movieReviews: {
        wacher1: 9.7,
        wacher2: 8.5,
        wacher3: 7.8
    }
}

// 4.1 გამოიტანეთ ობიექტის თვისებები და მათი მნიშვნელობები.

let keyvalue2 = Object.entries(cinema)

console.log(cinema);

// 4.2 შეამოწმეთ, გააჩნია თუ არა vipSeats ველი.

console.log(Object.hasOwn(cinema, "vipSeats"));

// 4.3 დაამატეთ ticketPrice ახალი ობიექტის გაერთიანებით.

let add3 = { ticketPrice: "10$" }
Object.assign(cinema, add3)

// 4.4 გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.

Object.freeze(cinema);

cinema.cinemaName = "Magari Cinema"
cinema.ticketPrice = "15$"

console.log(cinema);

// 4.5 შეამოწმეთ, გაყინულია თუ არა ობიექტი.

console.log(Object.isFrozen(cinema));
