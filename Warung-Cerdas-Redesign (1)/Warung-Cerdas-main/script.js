// ===============================
// DATA PRODUK
// ===============================

const products = [
    // ===== MAKANAN =====
    {
        id: 1,
        name: "Mie gelas",
        category: "makanan",
        price: 2000,
        image: "images/1.jpg"
    },
    {
        id: 2,
        name: "Nabati Wafer",
        category: "makanan",
        price: 2500,
        image: "images/2.jpg"
    },
    {
        id: 3,
        name: "Mie Rebus/Goreng",
        category: "makanan",
        price: 10000,
        image: "images/3.jpg"
    },
    {
        id: 4,
        name: "Agar-Agar",
        category: "makanan",
        price: 2000,
        image: "images/20.png"
    },
    {
        id: 5,
        name: "Mikako",
        category: "makanan",
        price: 1000,
        image: "images/5.jpg"
    },
    {
        id: 6,
        name: "Aqua Gelas",
        category: "makanan",
        price: 1000,
        image: "images/6.jpg"
    },
    {
        id: 7,
        name: "Kopi",
        category: "makanan",
        price: 2500,
        image: "images/7.jpg"
    },
    {
        id: 8,
        name: "Kuku Bima",
        category: "makanan",
        price: 3000,
        image: "images/8.jpg"
    },
    {
        id: 9,
        name: "Susu Indomilk",
        category: "makanan",
        price: 2000,
        image: "images/9.jpg"
    },
    {
        id: 10,
        name: "Es Teh",
        category: "makanan",
        price: 5000,
        image: "images/10.jpg"
    },
    {
        id: 11,
        name: "Tahu Crispy",
        category: "makanan",
        price: 1000,
        image: "images/11.jpg"
    },
    {
        id: 12,
        name: "Makaroni",
        category: "makanan",
        price: 2000,
        image: "images/12.jpg"
    },
    {
        id: 13,
        name: "Basreng",
        category: "makanan",
        price: 2000,
        image: "images/13.jpg"
    },
    {
        id: 14,
        name: "Tempe Mendoan",
        category: "makanan",
        price: 1000,
        image: "images/14.jpg"
    },
    {
        id: 15,
        name: "Bola Ubi Kopong",
        category: "makanan",
        price: 1000,
        image: "images/15.jpg"
    },
    {
        id: 16,
        name: "Tela-Tela",
        category: "makanan",
        price: 5000,
        image: "images/16.jpg"
    },
    {
        id: 17,
        name: "Nugget Mie",
        category: "makanan",
        price: 5000,
        image: "images/17.jpg"
    },
    {
        id: 18,
        name: "Sosis Goreng",
        category: "makanan",
        price: 7000,
        image: "images/18.jpg"
    },
    {
        id: 19,
        name: "Teajus/Jajus",
        category: "makanan",
        price: 2000,
        image: "images/19.jpg"
    },
    {
        id: 20,
        name: "Susu Puding",
        category: "makanan",
        price: 4000,
        image: "images/4.png"
    },

    // ===== BARANG =====
    {
        id: 21,
        name: "Spidol",
        category: "barang",
        price: 10000,
        image: "images/barang1.jpg"
    },
    {
        id: 22,
        name: "Pena Merah",
        category: "barang",
        price: 6000,
        image: "images/barang2.jpg"
    },
    {
        id: 23,
        name: "Pensil",
        category: "barang",
        price: 3000,
        image: "images/barang3.png"
    },
    {
        id: 24,
        name: "Penggaris",
        category: "barang",
        price: 5000,
        image: "images/barang4.jpg"
    },
    {
        id: 25,
        name: "Type-X",
        category: "barang",
        price: 8000,
        image: "images/barang5.jpg"
    },
    {
        id: 26,
        name: "Pena Hitam",
        category: "barang",
        price: 7000,
        image: "images/barang6.jpg"
    },
    {
        id: 27,
        name: "Sampul Buku",
        category: "barang",
        price: 2000,
        image: "images/barang7.jpg"
    },
    
    {
        id: 28,
        name: "Isi Binder Kecil",
        category: "barang",
        price: 13000,
        image: "images/barang8.jpg"
    },
    {
        id: 29,
        name: "Sapu Kelas",
        category: "barang",
        price: 28000,
        image: "images/barang9.jpg"
    },
    {
        id: 30,
        name: "Sekop",
        category: "barang",
        price: 15000,
        image: "images/barang10.jpg"
    },
    {
        id: 31,
        name: "Sapu Lidi",
        category: "barang",
        price: 20000,
        image: "images/barang11.jpg"
    },
    {
        id: 32,
        name: "Penghapus Papan Tulis",
        category: "barang",
        price: 6000,
        image: "images/barang12.jpg"
    },
    {
        id: 33,
        name: "kain Pel",
        category: "barang",
        price: 35000,
        image: "images/barang13.jpg"
    },
    {
        id: 34,
        name: "Super Pel",
        category: "barang",
        price: 18000,
        image: "images/barang14.jpg"
    },
    {
        id: 35,
        name: "Wiper",
        category: "barang",
        price: 13000,
        image: "images/barang15.jpg"
    },
    {
        id: 36,
        name: "Gunting",
        category: "barang",
        price: 5000,
        image: "images/barang16.jpg"
    },
    {
        id: 37,
        name: "Tisu",
        category: "barang",
        price: 12000,
        image: "images/barang17.jpg"
    },
    {
        id: 38,
        name: "Ember",
        category: "barang",
        price: 12000,
        image: "images/barang18.jpg"
    },
    {
        id: 39,
        name: "Kain Lap",
        category: "barang",
        price: 12000,
        image: "images/barang19.jpg"
    },
    {
        id: 40,
        name: "Penghapus",
        category: "barang",
        price: 3000,
        image: "images/barang20.jpg"
    },
    {
        id: 41,
        name: "Isi Binder Besar",
        category: "barang",
        price: 16000,
        image: "images/barang8.jpg"
    },
];


// ===============================
// VARIABEL
// ===============================

let currentProducts = products;
let cart = [];


// ===============================
// FORMAT RUPIAH
// ===============================

function formatRupiah(number) {
    return "Rp" + Number(number).toLocaleString("id-ID");
}


// ===============================
// TAMPILKAN PRODUK
// ===============================

function displayProducts(data) {

    const productList =
        document.getElementById("productList") ||
        document.getElementById("daftarProduk");

    if (!productList) {
        console.error("Element productList / daftarProduk tidak ditemukan.");
        return;
    }

    productList.innerHTML = "";

    if (data.length === 0) {
        productList.innerHTML = `
            <p style="text-align:center; width:100%;">
                Produk tidak ditemukan.
            </p>
        `;
        return;
    }

    data.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img 
                src="${product.image}" 
                alt="${product.name}"
                onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'"
            >

            <h3>${product.name}</h3>

            <p class="price">
                ${
                    product.priceText
                    ? product.priceText
                    : formatRupiah(product.price)
                }
            </p>

            <button 
                class="add-btn"
                onclick="addToCart(${product.id})"
            >
                + Keranjang
            </button>
        `;

        productList.appendChild(card);
    });
}


// ===============================
// FILTER PRODUK
// ===============================

function filterProduct(category, button) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(btn => btn.classList.remove("active"));

    if (button) {
        button.classList.add("active");
    }

    if (category === "semua") {

        currentProducts = products;

    } else {

        currentProducts = products.filter(
            product => product.category === category
        );

    }

    displayProducts(currentProducts);
}


// ===============================
// PENCARIAN
// ===============================

function searchProduct() {

    const searchInput = document.getElementById("searchInput");

    if (!searchInput) {
        return;
    }

    const keyword = searchInput.value
        .toLowerCase()
        .trim();

    const result = products.filter(product =>
        product.name.toLowerCase().includes(keyword)
    );

    displayProducts(result);
}


// Jalankan pencarian saat mengetik
const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("input", searchProduct);
}


// ===============================
// TAMBAH KE KERANJANG
// ===============================

function addToCart(id) {

    const product = products.find(
        product => product.id === id
    );

    if (!product) {
        console.error("Produk tidak ditemukan:", id);
        return;
    }

    const existing = cart.find(
        item => item.id === id
    );

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1
        });

    }

    updateCart();

    alert(product.name + " berhasil ditambahkan!");
}


// ===============================
// UPDATE KERANJANG
// ===============================

function updateCart() {

    const cartCount =
        document.getElementById("cartCount") ||
        document.getElementById("jumlahKeranjang");

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    if (cartCount) {
        cartCount.textContent = totalItems;
    }

    displayCart();
}


// ===============================
// TAMPILKAN ISI KERANJANG
// ===============================

function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const cartTotal =
        document.getElementById("cartTotal");

    if (!cartItems) {
        return;
    }

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p style="text-align:center;">
                Keranjang masih kosong.
            </p>
        `;

        if (cartTotal) {
            cartTotal.textContent = "Rp0";
        }

        return;
    }

    let total = 0;

    cart.forEach(item => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <div>
                <strong>${item.name}</strong>
                <br>
                ${formatRupiah(item.price)}
            </div>

            <div class="cart-controls">

                <button onclick="decreaseQuantity(${item.id})">
                    −
                </button>

                <span>${item.quantity}</span>

                <button onclick="increaseQuantity(${item.id})">
                    +
                </button>

                <button onclick="removeFromCart(${item.id})">
                    Hapus
                </button>

            </div>
        `;

        cartItems.appendChild(div);
    });

    if (cartTotal) {
        cartTotal.textContent = formatRupiah(total);
    }
}


// ===============================
// TAMBAH JUMLAH
// ===============================

function increaseQuantity(id) {

    const item = cart.find(
        item => item.id === id
    );

    if (!item) return;

    item.quantity++;

    updateCart();
}


// ===============================
// KURANGI JUMLAH
// ===============================

function decreaseQuantity(id) {

    const item = cart.find(
        item => item.id === id
    );

    if (!item) return;

    item.quantity--;

    if (item.quantity <= 0) {

        cart = cart.filter(
            item => item.id !== id
        );

    }

    updateCart();
}


// ===============================
// HAPUS PRODUK
// ===============================

function removeFromCart(id) {

    cart = cart.filter(
        item => item.id !== id
    );

    updateCart();
}


// ===============================
// BUKA KERANJANG
// ===============================

function bukaKeranjang() {

    const modal =
        document.getElementById("cartModal");

    if (!modal) {
        console.error("cartModal tidak ditemukan.");
        return;
    }

    modal.style.display = "block";

    displayCart();
}


// ===============================
// TUTUP KERANJANG
// ===============================

function tutupKeranjang() {

    const modal =
        document.getElementById("cartModal");

    if (!modal) {
        return;
    }

    modal.style.display = "none";
}


// Nama fungsi alternatif
function openCart() {
    bukaKeranjang();
}

function closeCart() {
    tutupKeranjang();
}


// ===============================
// CHECKOUT WHATSAPP
// ===============================

function checkoutWhatsApp() {

    if (cart.length === 0) {

        alert("Keranjang masih kosong!");

        return;
    }

    let message =
        "Halo, saya ingin memesan:%0A%0A";

    let total = 0;

    cart.forEach(item => {

        const subtotal =
            item.price * item.quantity;

        total += subtotal;

        message +=
            `${item.name} x${item.quantity} = ${formatRupiah(subtotal)}%0A`;

    });

    message +=
        `%0ATotal: ${formatRupiah(total)}`;

    const phone =
        "6281270870746";

    const url =
        "https://wa.me/" +
        phone +
        "?text=" +
        encodeURIComponent(
            decodeURIComponent(message)
        );

    window.open(url, "_blank");
}


// ===============================
// KLIK DI LUAR MODAL
// ===============================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("cartModal");

    if (modal && event.target === modal) {

        modal.style.display = "none";

    }

});

/// ===============================
// PEMBAYARAN QRIS
// ===============================

function pembayaranQRIS() {

    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
    });

    const qrisModal = document.getElementById("qrisModal");
    const qrisTotal = document.getElementById("qrisTotal");

    if (!qrisModal || !qrisTotal) {
        alert("QRIS belum terpasang dengan benar.");
        return;
    }

    // Tampilkan total pembayaran
    qrisTotal.textContent = formatRupiah(total);

    // Tampilkan QRIS
    qrisModal.style.display = "flex";
}


// ===============================
// TUTUP QRIS
// ===============================

function tutupQRIS() {

    const qrisModal = document.getElementById("qrisModal");

    if (qrisModal) {
        qrisModal.style.display = "none";
    }
}


// ===============================
// SUDAH BAYAR
// ===============================

function sudahBayar() {

    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    let message = "Halo, saya sudah melakukan pembayaran QRIS.%0A%0A";

    let total = 0;

    cart.forEach(item => {

        const subtotal = item.price * item.quantity;

        total += subtotal;

        message +=
            `${item.name} x${item.quantity} = ${formatRupiah(subtotal)}%0A`;
    });

    message += `%0ATotal: ${formatRupiah(total)}`;

    message +=
        "%0A%0ASaya sudah melakukan pembayaran melalui QRIS.";

    const nomorWhatsApp = "6283159036997";

    const url =
        "https://wa.me/" +
        nomorWhatsApp +
        "?text=" +
        message;

    window.open(url, "_blank");
}


// Tutup QRIS kalau klik di luar kotak
window.addEventListener("click", function(event) {

    const modal = document.getElementById("qrisModal");

    if (event.target === modal) {
        tutupQRIS();
    }

});


// ===============================
// JALANKAN WEBSITE
// ===============================

displayProducts(products);

updateCart();
