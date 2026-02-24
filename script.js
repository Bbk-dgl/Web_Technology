
// Explore Dolakha - Main Script

document.addEventListener("DOMContentLoaded", function () {

    console.log("Explore Dolakha site loaded!");


    const heroCarousel = document.querySelector('#heroCarousel');
    if (heroCarousel) {
        new bootstrap.Carousel(heroCarousel, {
            interval: 3000,
            ride: 'carousel'
        });
    }


    // PLACES MODAL DETAILS

   const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');

if (modalTitle && modalContent) {

    const details = {
        "Kalinchok": `
            <h3 class="mb-3">Kalinchok</h3>

            <img src="./image/download (1).jpg" 
                 class="img-fluid rounded mb-3" 
                 alt="Kalinchok">

            <p>
                A famous hill station and pilgrimage site with Kalinchok Bhagwati Temple 
                and stunning Himalayan mountain views.
                Kalinchowk is a Rural municipality located within the Dolakha district of the Bagmati province of Nepal. The municipality spans 132.49 square kilometres (51.15 sq mi) of area, with a total population of 22,954 according to a 2011 Nepal census.[1][2]

                On March 10, 2017, the Government of Nepal restructured the local level bodies into 753 new local level structures.[3][4] The previous Kalinchowk, Babare, Lamidanda, Lapilang, Sunakhani, and Sundrawati VDCs were merged to form Kalinchowk Rural Municipality. Kalinchowk is divided into 9 wards, with Sunakhani declared the administrative center of the rural municipality.

             Kalinchowk is a hill station and a tourist hotspot. It is located at 3842 meters of altitude and about 150km northeast from national capital Kathmandu. The place is best known for trekking and skiing.[5] During the December, January and February (mainly Paush and Magh in Nepali months) snowfalls in Kalinchowk.[6]
            </p>

            <ul>
                <li><strong>Location:</strong> Dolakha, Nepal</li>
                <li><strong>Kathmandu Distance:</strong> 150 km</li>
                <li><strong>Altitude:</strong> 3,842 m (12,605 ft)</li>
                <li><strong>Trekking Starting Point:</strong> Charikot</li>
                <li><strong>Difficulty:</strong> Easy to Moderate</li>
                <li><strong>Famous for:</strong> Kalinchok Bhagwati Temple</li>
                <li><strong>Snowfall Time:</strong> December to February</li>
            </ul>

            <div class="ratio ratio-16x9 mt-3">
         <iframe width="1011" height="334" src="https://www.youtube.com/embed/kArEpln6TJk" title="Kalinchowk | Kalinchowk Kuri Village | कालिन्चोक कुरी Village | Kalinchowk Snowfall" frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="ratio ratio-16x9 mt-3">
            <iframe width="1011" height="334" src="https://www.youtube.com/embed/xviUO-Bw_dA" title="KALINCHOWK BHAGAWATI DOLAKHA 2080" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `,

        "Sailung": `
            <h3 class="mb-3">Sailung</h3>

            <img src="./image/download.jpg" 
                 class="img-fluid rounded mb-3" 
                 alt="Sailung">

            <p>
                Known for its wide grasslands, panoramic mountain views,
                and peaceful trekking routes.
                Sailung:“Sai-hundred, Lung-hills” land of hundred hills, Thulo Sailung is located at the height of 3,146m which is the best viewpoint for the Himalayan panoramas which is located in the border of Ramechhap and Dolakha but it is VDC of Ramechhap district. Sailung has been gaining popularity for trekking as the Indigenous trail; its unique landscape and amazing views allure most of the travellers. This trekking provides 
                fantastic Himalayan panoramas views stretching from Dhauligiri and Annapurna in the West, Langtang Range, Ganesh Himal region & Rolwaling region.
                 Almost 90% of mountains range can be seen from this place and this is another attraction of this place.
            </p>

            <ul>
                <li><strong>Altitude:</strong> 3,500 m</li>
                <li><strong>Best Season:</strong> April to September</li>
                <li><strong>Activities:</strong> Trekking, Camping, Hiking</li>
                <li><strong>Facilities:</strong> Local homestays</li>
            </ul>

            <div class="ratio ratio-16x9 mt-3">
                <iframe width="1011" height="334" src="https://www.youtube.com/embed/c-M8TIrIcRo" title="Drone view Sailung Dolakha" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

              <div class="ratio ratio-16x9 mt-3">
               <iframe width="339" height="602" src="https://www.youtube.com/embed/yuAGluvW2Zs" title="SAILUNG,
                DOLAKHA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `,

        "Tsho Lake": `
            <h3 class="mb-3">Tsho Rolpa Lake</h3>

            <img src="./image/download (2).jpg" 
                 class="img-fluid rounded mb-3" 
                 alt="Tsho Lake">

            <p>
                A serene lake surrounded by peaceful natural beauty,
                perfect for photography and relaxation.
                Tsho Rolpa (also Cho Rolpa) is one of the biggest glacial lakes in Nepal. The lake, which is located at an altitude of 4,580 metres (15,030 ft) in the Rolwaling Valley, Dolakha District, has grown considerably over the last 50 years due to glacial melting in the Himalayas.[1][2][3]

               Tsho Rolpa (also Cho Rolpa)
            </p>

            <ul>
                <li><strong>Location:</strong> Dolakha District</li>
                <li><strong>Best Season:</strong> March–May, Sept–Nov</li>
                <li><strong>Activities:</strong> Nature walks, Picnics</li>
            </ul>

            <div class="ratio ratio-16x9 mt-3">
              <iframe width="1011" height="334" src="https://www.youtube.com/embed/ncjAyf5eAkg" title="Tsho Rolpa Glacial Lake, Dolakha, 
              Nepal #tshorolpa #glaciallake #glacier #nepal #treaking" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="ratio ratio-16x9 mt-3">
            <iframe width="957" height="538" src="https://www.youtube.com/embed/036zj-5cm6Q" title="Rolwaling Valley - Tsho Rolpa Lake Travel Guide - Trekking in the Himalayas of Nepal" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        `,

        "Jiri": `
            <h3 class="mb-3">Jiri</h3>

            <img src="./image/download (3).jpg" 
                 class="img-fluid rounded mb-3" 
                 alt="Jiri">

            <p>
            
                Jiri offers beautiful trekking routes and natural scenery.
                Jiri – The Original Gateway to Mount Everest
Long before planes began landing in Lukla, Jiri was the launch point for Everest trips. In the 1950s and 60s, famous climbers like Sir Edmund Hillary and Tenzing Norgay Sherpa began their Everest journeys from this place.

The classic “Jiri to Everest Base Camp trail” leads travelers through hills, forests, and Sherpa villages. It then connects to the main Everest route at Namche Bazaar. This path offered a gradual altitude gain, helping trekkers acclimatize naturally.

Most modern trekkers fly directly to Lukla, but those who begin their journey from Jiri enjoy a far deeper cultural experience. They follow the same path once taken by the early pioneers of mountaineering.

Even if you don’t plan to trek all the way to Everest, spending just a few days on this historic trail offers a glimpse of Nepal’s authentic countryside — simple, natural, and deeply rooted in tradition.
            </p>

            <ul>
                <li><strong>Altitude:</strong> 1,900 - 2000 m</li>
                <li><strong>Best Season:</strong> March–May, Sept–Nov</li>
                <li><strong>Activities:</strong> Trekking, Cultural Tours</li>
            </ul>

            <div class="ratio ratio-16x9 mt-3">
               <iframe width="957" height="538" src="https://www.youtube.com/embed/QvZfOvD6LuA" title="स्वर्गको एक टुक्रा जिरी Switzerland of Nepal Jiri / प्रकृतिको भरिपूर्ण मनै आनन्दित बनाउने ठाउ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

             <div class="ratio ratio-16x9 mt-3">
                <iframe width="339" height="602" src="https://www.youtube.com/embed/HUOBJCqX_b8" 
                title="Jiri Dolkha .Swizerland of nepal . Great time in Jiri with nature views. #explorenepal #rider" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                 referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

            <div class="ratio ratio-16x9 mt-3">
              <iframe width="339" height="602" src="https://www.youtube.com/embed/A9oiuyuNpp0" title="Jiri Dolakha.#nepal #switzerlandofnepal" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        `
    };

    document.querySelectorAll('.view-details').forEach(btn => {
        btn.addEventListener('click', () => {
            const name = btn.getAttribute('data-name');
            modalTitle.textContent = name;
            modalContent.innerHTML = details[name] || "Details coming soon!";
        });
    });
}
    // LOGIN PAGE
    
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");
    const loginForm = document.getElementById("loginForm");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", () => {
            const type = passwordInput.type === "password" ? "text" : "password";
            passwordInput.type = type;

            togglePassword.innerHTML = type === "password"
                ? '<i class="bi bi-eye-fill text-success"></i>'
                : '<i class="bi bi-eye-slash-fill text-success"></i>';
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const email = document.getElementById("email").value;
            alert(`Logged in as: ${email}`);
        });
    }

    
    // BOOKING FORM

    const bookingForm = document.getElementById('bookingForm');

    if (bookingForm) {
        bookingForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const attraction = document.getElementById('attraction').value;
            const date = document.getElementById('date').value;

            if (!name || !email || !attraction || !date) {
                alert('Please fill in all fields.');
                return;
            }

            alert(`Thank you, ${name}!\nYour booking for ${attraction} on ${date} has been received.`);
            bookingForm.reset();
        });
    }

});

// contact js
// Contact Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const subject = document.getElementById('contactSubject').value;
    const message = document.getElementById('contactMessage').value;

    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thank you, ${name}! Your message regarding "${subject}" has been received.`);
    contactForm.reset();
  });
});

// Myprofile js
// Profile Form Submission
document.addEventListener('DOMContentLoaded', () => {
  const profileForm = document.getElementById('profileForm');
  profileForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('profileName').value;
    const email = document.getElementById('profileEmail').value;
    const phone = document.getElementById('profilePhone').value;

    alert(`Profile Updated!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
  });
});