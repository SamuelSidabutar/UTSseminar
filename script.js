// Seminar schedule data
const seminars = [
    { title: "Web Development Basics", date: "2024-12-01", time: "10:00 AM" },
    { title: "Advanced JavaScript Techniques", date: "2024-12-05", time: "2:00 PM" },
    { title: "Mastering Tailwind CSS", date: "2024-12-10", time: "6:00 PM" },
  ];
  
  // Populate seminar schedule dynamically
  const seminarList = document.getElementById("seminar-list");
  seminars.forEach((seminar) => {
    const seminarItem = document.createElement("li");
    seminarItem.className = "bg-white p-4 rounded shadow flex justify-between";
    seminarItem.innerHTML = `
      <span class="font-bold">${seminar.title}</span>
      <span>${seminar.date} - ${seminar.time}</span>
    `;
    seminarList.appendChild(seminarItem);
  });
  
  // Handle contact form submission
  document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
  });
  // Data foto (URL dan deskripsi)
const photos = [
  { src: "img/foto.jpeg", alt: "Photo 1" },
  { src: "https://via.placeholder.com/300x200", alt: "Photo 2" },
  { src: "https://via.placeholder.com/300x200", alt: "Photo 3" },
  { src: "https://via.placeholder.com/300x200", alt: "Photo 4" },
];

// Ambil elemen container galeri
const photoGrid = document.getElementById("photo-grid");

// Loop untuk menambahkan foto ke galeri
photos.forEach((photo) => {
  // Buat elemen kartu foto
  const photoCard = document.createElement("div");
  photoCard.className = "overflow-hidden rounded-lg shadow bg-white";

  // Isi konten kartu foto
  photoCard.innerHTML = `
    <img src="${photo.src}" alt="${photo.alt}" class="w-full h-48 object-cover">
    <div class="p-4">
      <p class="text-sm text-gray-600">${photo.alt}</p>
    </div>
  `;

  // Tambahkan kartu foto ke dalam grid
  photoGrid.appendChild(photoCard);
});

  