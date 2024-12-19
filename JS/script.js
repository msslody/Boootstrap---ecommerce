
    const products = [
        { id: 1, name: "Iphone 16 Pro Max", price: 1549.99, category: "phone", image: "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75" },
        { id: 2, name: "Oppo Find X8", price: 1199.99, category: "phone", image: "https://www.oppo.com/content/dam/oppo/product-asset-library/find/find-x8-series/en/oppo-find-x8/main/assets/images-color-b-1-mo.png" },
        { id: 3, name: "Samsung Galaxy s24 ultra", category: "phone", price: 969, image: "https://http2.mlstatic.com/D_NQ_NP_965147-MLA74440098915_022024-O.webp" },
        { id: 4, name: "Samsung Galaxy Z Flip 6", category: "phone", price: 1199, image: "https://images.samsung.com/my/smartphones/galaxy-z-flip6/buy/product_color_peach_MO_v2.png" },
        { id: 5, name: "OPPO A59 5G", price: 160, category: "phone", image: "https://credsell.com/wp-content/uploads/2023/12/OPPO-A59-5G-1-1.webp" },
        { id: 6, name: "VIVO Y28", price: 179, category: "phone", image: "https://assets.gadgetandgear.com/upload/media/1719983159812679.jpeg" },
        { id: 7, name: "VIVO V40 5G", price: 499, category: "phone", image: "https://angkormeas.com/wp-content/uploads/2024/10/v40-pro-v2.jpg?v=1728548290" },
        { id: 8, name: "MacBook Pro 16 2023 M3 Pro", price: 2399, category: "laptop", image: "https://soklyphone.com/storage/Apple/Macbook/MacBook-Pro-M3/16/Silver/silver-2-1702356666gUqec.png" },
        { id: 9, name: "Xiaomi Redmi Buds 5 Pro ", category: "accessory", price: 19, image: "https://dam.which.co.uk/IC21776-0290-00-front-800x600.jpg" },
        { id: 10, name: "Sony WH-1000XM5 Wireless", category: "accessory", price: 339, image: "https://xtrasure.store/cdn/shop/files/Sony_WH-1000XM5_Wireless_Over-ear_Industry_Leading_Noise_Canceling_Headphones_with_Microphone.jpg?v=1721903658&width=800" },
        { id: 11, name: "JBL Tune 720BT", price: 99, category: "accessory", image: "https://m.media-amazon.com/images/I/61luAAnLJ7L._AC_UF894,1000_QL80_.jpg" },
        { id: 12, name: "Power Bank Redmi-30000mAh", category: "accessory", price: 38, image: "https://www.revenes.com/wp-content/uploads/2023/02/Redmi-30000mAh-18W-Power-Bank-1.png" },
        { id: 13, name: "Anker Power Bank 20,000mAh", category: "accessory", price: 49, image: "https://www.tccq.com/image/cache/catalog/1209129/Anker-Power-Bank-20-000-mAh-22-5W-Built-in-Cable-Type-C-A1647H-in-Qatar-600x600.jpg" },
        { id: 14, name: "JBL Flip6 ", price: 109, category: "accessory", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4nLoPaq0L5MHZEz6mmn-pAiY68Yj5Ys1og&s" },
        { id: 15, name: "JBL BooM Box-2 ", price: 329, category: "accessory", image: "https://cdn.multitronic.fi/images/prod/4/5/JBLBOOMBOX2SQUADEU-1.jpg" },
        { id: 16, name: "Samsung Wireless Charger Pad ", category: "accessory", price: 25, image: "https://mobilexchangebd.com/storage/products/samsung-wireless-charging-pad.jpg" },
        { id: 17, name: "HOCO Wireless charger for Apple watch", category: "accessory", price: 18, image: "https://angkormeas.com/wp-content/uploads/2024/08/Hoco_Wireless-Charger_v1.jpg" },
        { id: 18, name: "Apple Watch SE-2 2023 ", price: 79.99, category: "watch", image: "https://bestbuycyprus.com/5449590-large_default/watch-apple-watch-se2-2023-gps-44mm-starlight-aluminium-case-with-sport-band-m-l-starlight.jpg" },
        { id: 19, name: "Apple Watch Series 10 Stainless Steel ", category: "watch", price: 899, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/s10-case-unselect-gallery-1-202409_FMT_WHH?wid=376&hei=360&fmt=jpeg&qlt=95&.v=1724620929305" },
        { id: 20, name: "Anker PowerDrive-II 2 Port Alloy", price: 19, category: "accessory", image: "https://nelooq.com/liveimages/nelooq_cms_products/2203376541.jpg" },
        { id: 21, name: "Anker PowerLine III Flow ", price: 22, category: "accessory", image: "https://www.itmegabyte.com/wp-content/uploads/2021/12/Anker-PowerLine-III-Flow-USB-C-to-Lightning-Cable-1.8-Meter-White-02.jpg" },
        { id: 22, name: "iPad Air6 13″ M2 ", price: 759, category: "tablet", image: "https://www.godukkan.com/media/catalog/product/cache/1e956416f23a3189dd109399e2010303/i/p/apple-ipad-air-m2-6th-generation-11-inch.jpg" },
        { id: 23, name: "iPad Pro 11 Chip M2", price: 759, category: "tablet", image: "https://evgruas4ous.exactdn.com/wp-content/uploads/2024/02/Untitled-12.png?strip=all&lossy=1&ssl=1" },
        { id: 24, name: "Galaxy Tab S10 Plus 256G", price: 999, category: "tablet", image: "https://raidersraitis.lv/cdn/shop/files/f30a01c3-7a74-4dc6-8b0f-b8a29db30d6a.jpg?v=1729238059" },
        { id: 25, name: "MacBook Air 13” M3 2024 8C", price: 1069, category: "laptop", image: "https://www.iworldconnect.com/cdn/shop/files/MacBook_Air_13-in_M3_Chip_Space_Gray_Pure_Front_Screen__USEN_2ee3a1dc-07e5-4db4-8106-bb75180e94e7_large.jpg?v=1709848999" },
        { id: 26, name: "iMac 24″ M3 Chip 8C", price: 1299, category: "laptop", image: "https://soklyphone.com/storage/Apple/iMac/iMac-24-M3/Green/green-1-1703153373OcEDu.jpg" },
        { id: 27, name: "Apple Watch Series 7", price: 399, category: "watch", image: "https://m.media-amazon.com/images/I/71BP-tK1O4L.jpg" },
    ];

    const productGrid = document.getElementById("productGrid");
    const categoryDropdown = document.getElementById("sort");


function renderProducts(filteredProducts) {
    productGrid.innerHTML = ""; 
    filteredProducts.forEach(product => {
        const productCard = `
            <div class="col-md-4 col-sm-6">
                <div class="product-card card">
                    <img src="${product.image}" class="card-img-top object-fit-contain p-2" alt="${product.name}" style="height:300px;">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="price">$${product.price.toFixed(2)}</p>
                        <div class="d-flex align-content-center justify-content-center">
                            <button class="btn btn-primary w-50" onclick="addToCart(${product.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}
    renderProducts(products);

    categoryDropdown.addEventListener("change", () => {
        const selectedCategory = categoryDropdown.value.toLowerCase();
        if (selectedCategory === "all") {
            renderProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === selectedCategory);
            renderProducts(filteredProducts);
        }
    });

      