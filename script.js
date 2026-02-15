// Booking form validation
document.getElementById('bookingForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const attraction = document.getElementById('attraction').value;
    const date = document.getElementById('date').value;

    if (!name || !email || !attraction || !date) {
        alert('Please fill in all fields before submitting!');
        return;
    }

    // Simple email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(`Booking submitted successfully!\nName: ${name}\nAttraction: ${attraction}\nDate: ${date}`);
    this.reset();
});

// Contact form validation
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields before sending!');
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert(`Message sent successfully!\nName: ${name}\nEmail: ${email}`);
    this.reset();
});

// Attraction details modal
function showDetails(name) {
    const attractions = {
        "Kalinchok": {
            img: "images/kalinchok.jpg",
            description: "Kalinchok is famous for Kalinchok Bhagwati Temple and beautiful mountain views.",
            details: [
                "Location: 2,700 m above sea level",
                "Best Season: March to November",
                "Activities: Trekking, Photography, Pilgrimage",
                "Facilities: Guesthouses, Local eateries"
            ]
        },
        "Sailung": {
            img: "images/sailung.jpg",
            description: "Sailung offers expansive grasslands and trekking opportunities with stunning views.",
            details: [
                "Location: 3,500 m above sea level",
                "Best Season: April to September",
                "Activities: Trekking, Camping, Hiking",
                "Facilities: Local homestays, Tea shops"
            ]
        },
        "Tsho Lake": {
            img: "images/tsho_lake.jpg",
            description: "Tsho Lake is a peaceful lake surrounded by pristine nature.",
            details: [
                "Location: Dolakha District, Nepal",
                "Best Season: March to May, September to November",
                "Activities: Nature walks, Photography, Picnics",
                "Facilities: Local guides available"
            ]
        },
        "Jiri": {
            img: "images/jiri.jpg",
            description: "Jiri is the gateway to Everest region with amazing trekking trails.",
            details: [
                "Location: 1,900 m above sea level",
                "Best Season: March to May, September to November",
                "Activities: Trekking, Sightseeing, Cultural tours",
                "Facilities: Guesthouses, Restaurants, Trekking guides"
            ]
        }
    };

    // Populate modal
    document.getElementById('attractionModalLabel').innerText = name;
    document.getElementById('attractionImage').src = attractions[name].img;
    document.getElementById('attractionImage').alt = name;
    document.getElementById('attractionDescription').innerText = attractions[name].description;

    // Populate details list
    const detailsList = document.getElementById('attractionDetails');
    detailsList.innerHTML = "";
    attractions[name].details.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        detailsList.appendChild(li);
    });

    // Show modal
    const attractionModal = new bootstrap.Modal(document.getElementById('attractionModal'));
    attractionModal.show();
}
