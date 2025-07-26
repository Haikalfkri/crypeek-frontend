<template>
    <div>
        <Navbar class="top-0 left-0 w-full bg-white shadow-md z-50 mb-6" />

        <div class="min-h-screen bg-[#fafafa] px-6 space-y-24">

            <!-- Hero Section -->
            <section
                class="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between text-left">
                <!-- Text Content -->
                <div class="w-full md:w-1/2 space-y-6">
                    <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Jelajahi Dunia Kripto dengan <span class="text-[#06b6d4]">Prediksi Cerdas</span>
                    </h1>
                    <p class="text-lg text-gray-600">
                        <strong>CryPeek</strong> adalah platform analitik kripto modern yang memberikan prediksi AI,
                        insight, dan berita terkini untuk keputusan investasi yang lebih bijak.
                    </p>
                    <div class="sm:space-x-4 space-y-3 sm:space-y-0">
                        <router-link to="/login"
                            class="px-6 py-3 bg-[#06b6d4] text-white font-medium rounded-lg shadow hover:bg-[#0891b2] transition">
                            Mulai Sekarang
                        </router-link>
                    </div>
                </div>

                <!-- Image Content -->
                <div class="w-full md:w-1/2 flex justify-center md:mb-0">
                    <div>
                        <img src="@/assets/crypeek-logo.png" alt="CryPeek Illustration" class="w-[550px] h-auto" />
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="text-center max-w-7xl mx-auto py-20 px-4">
                <h2 class="text-4xl font-bold text-gray-800 mb-16">CryPeek Bantu Kamu Dengan Ini</h2>

                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Card 1 -->
                    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                        <img src="https://img.icons8.com/fluency/64/news.png" alt="Crypto News" class="mx-auto mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Crypto News</h3>
                        <p class="text-gray-600 text-sm">Berita kripto terkini dari berbagai sumber terpercaya untuk
                            bantu kamu tetap up-to-date.</p>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                        <img src="https://img.icons8.com/fluency/64/news.png" alt="Insight News" class="mx-auto mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Insight News</h3>
                        <p class="text-gray-600 text-sm">Ringkasan & insight dari tren kripto untuk bantu ambil
                            keputusan yang tepat.</p>
                    </div>

                    <!-- Card 3 -->
                    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                        <img src="https://img.icons8.com/dusk/64/combo-chart.png" alt="Prediksi AI"
                            class="mx-auto mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Prediksi AI</h3>
                        <p class="text-gray-600 text-sm">Prediksi harga AI untuk jangka pendek: 2, 7, dan 14 hari ke
                            depan berdasarkan data historis.</p>
                    </div>

                    <!-- Card 4 -->
                    <div class="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
                        <img src="https://img.icons8.com/color/64/artificial-intelligence.png" alt="Sentiment"
                            class="mx-auto mb-4" />
                        <h3 class="text-xl font-semibold text-gray-800 mb-2">Analisis Sentimen</h3>
                        <p class="text-gray-600 text-sm">Analisa sentimen dari berita dan komunitas untuk tahu apakah
                            pasar sedang bullish atau bearish.</p>
                    </div>
                </div>
            </section>


            <!-- Pricing Section -->
            <section class="text-center max-w-5xl mx-auto py-16 px-4">
                <h2 class="text-4xl font-extrabold text-gray-900 mb-10">Pilih Paket Anda</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <!-- Free Plan -->
                    <div
                        class="rounded-xl border border-gray-200 shadow-sm p-6 bg-white hover:shadow-md transition-all duration-300">
                        <h3 class="text-xl font-bold text-gray-800 mb-1">Gratis</h3>
                        <p class="text-sm text-gray-500 mb-5">Cocok untuk pemula yang ingin memantau pasar kripto</p>
                        <p class="text-2xl font-extrabold text-gray-800 mb-4">Rp 0<span
                                class="text-base font-medium text-gray-600">/bulan</span></p>
                        <ul class="text-left space-y-2 text-gray-700 mb-5 text-sm">
                            <li>✅ Akses berita crypto</li>
                            <li>✅ Insight berita</li>
                            <li>✅ Prediksi 2 hari</li>
                            <li>❌ Prediksi 7 hari</li>
                            <li>❌ Prediksi 14 hari</li>
                        </ul>
                        <button
                            class="w-full py-2.5 px-4 bg-gray-100 text-gray-800 font-medium rounded-md hover:bg-gray-200 transition">
                            Gunakan Gratis
                        </button>
                    </div>

                    <!-- Premium Plan -->
                    <div
                        class="rounded-xl border-2 border-[#06b6d4] shadow-md p-6 bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                        <h3 class="text-xl font-bold text-[#06b6d4] mb-1">Premium</h3>
                        <p class="text-sm text-gray-500 mb-5">Untuk trader serius yang ingin prediksi jangka panjang</p>
                        <p class="text-2xl font-extrabold text-[#06b6d4] mb-4">Rp 300.000<span
                                class="text-base font-medium text-gray-600">/bulan</span></p>
                        <ul class="text-left space-y-2 text-gray-700 mb-5 text-sm">
                            <li>✅ Akses berita crypto</li>
                            <li>✅ Insight berita</li>
                            <li>✅ Prediksi 2 hari</li>
                            <li>✅ Prediksi 7 hari</li>
                            <li>✅ Prediksi 14 hari</li>
                        </ul>
                        <button
                            class="w-full py-2.5 px-4 bg-[#06b6d4] text-white font-medium rounded-md hover:bg-[#0592ac] transition">
                            Upgrade Sekarang
                        </button>
                    </div>

                </div>
            </section>



            <section class="max-w-4xl mx-auto px-6 py-20">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-16">Pertanyaan Umum</h2>
                <div class="divide-y divide-gray-200 space-y-6">

                    <details class="group cursor-pointer">
                        <summary class="flex justify-between items-center text-xl font-semibold text-gray-900 py-5">
                            <span>Apakah CryPeek bisa digunakan secara gratis?</span>
                            <svg class="w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p class="text-lg text-gray-700 mt-3 pl-1">
                            Ya! CryPeek menyediakan versi gratis yang memungkinkan Anda untuk mengakses berita crypto
                            terbaru, analisis pasar, dan prediksi harga selama 2 hari.
                        </p>
                    </details>

                    <details class="group cursor-pointer">
                        <summary class="flex justify-between items-center text-xl font-semibold text-gray-900 py-5">
                            <span>Apa perbedaan fitur Free dan Premium?</span>
                            <svg class="w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p class="text-lg text-gray-700 mt-3 pl-1">
                            Free user hanya mendapatkan akses prediksi harga selama 2 hari. Premium user bisa
                            mendapatkan prediksi hingga 14 hari dan fitur tambahan seperti insight lebih mendalam &
                            akses eksklusif.
                        </p>
                    </details>

                    <details class="group cursor-pointer">
                        <summary class="flex justify-between items-center text-xl font-semibold text-gray-900 py-5">
                            <span>Apakah CryPeek cocok untuk pemula?</span>
                            <svg class="w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p class="text-lg text-gray-700 mt-3 pl-1">
                            Sangat cocok! CryPeek dirancang dengan antarmuka yang simpel dan mudah digunakan. Cocok
                            untuk pengguna baru maupun investor berpengalaman.
                        </p>
                    </details>

                    <details class="group cursor-pointer">
                        <summary class="flex justify-between items-center text-xl font-semibold text-gray-900 py-5">
                            <span>Dari mana CryPeek mendapatkan data prediksi dan berita?</span>
                            <svg class="w-6 h-6 text-gray-500 transition-transform duration-300 group-open:rotate-180"
                                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </summary>
                        <p class="text-lg text-gray-700 mt-3 pl-1">
                            CryPeek mengambil data dari berbagai sumber terpercaya seperti Binance, CryptoCompare, dan
                            media crypto besar. Sistem kami menggabungkan data ini dengan analisis AI dan model
                            prediksi.
                        </p>
                    </details>

                </div>
            </section>


            <!-- User Testimonial -->
            <section class="bg-white py-10 px-6 md:px-12 rounded-2xl shadow-lg max-w-4xl mx-auto text-center">
                <div class="max-w-3xl mx-auto">
                    <svg class="w-10 h-10 mx-auto text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M7.17 15H4l3.91-9H13v2h-4.28l-.89 2H13v2H7.95l-.78 3.04zm10 0h-3.17l3.91-9H23v2h-4.28l-.89 2H23v2h-5.05l-.78 3.04z" />
                    </svg>
                    <p class="text-xl text-gray-700 leading-relaxed italic">
                        “CryPeek memberikan prediksi yang sangat membantu. Akurasinya mencapai 70% dan saya bisa ambil
                        keputusan yang lebih cerdas. Profit pun meningkat!”
                    </p>
                    <p class="mt-6 font-semibold text-gray-800">— Alif, Pengguna Awal CryPeek</p>
                </div>
            </section>


        </div>
    </div>
</template>

<script>
import Navbar from "@/components/NavbarCom.vue";
import axios from "axios";
axios.defaults.headers.common["ngrok-skip-browser-warning"] = true;

export default {
    name: "HomePage",
    components: {
        Navbar,
    },
};
</script>

<style scoped>
details>summary::-webkit-details-marker {
    display: none;
}

details>summary {
    list-style: none;
}
</style>