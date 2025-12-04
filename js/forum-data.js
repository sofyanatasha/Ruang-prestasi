// Data Forum Diskusi
const forumData = {
    categories: [
        {
            id: "matematika",
            name: "Matematika",
            description: "Diskusi tentang matematika semua tingkat",
            icon: "fa-calculator",
            color: "#e74c3c",
            thread_count: 125,
            post_count: 850
        },
        {
            id: "fisika",
            name: "Fisika",
            description: "Diskusi tentang fisika dan eksperimen",
            icon: "fa-atom",
            color: "#3498db",
            thread_count: 98,
            post_count: 620
        },
        {
            id: "kimia",
            name: "Kimia",
            description: "Diskusi tentang kimia dan reaksi",
            icon: "fa-flask",
            color: "#2ecc71",
            thread_count: 87,
            post_count: 540
        },
        {
            id: "biologi",
            name: "Biologi",
            description: "Diskusi tentang biologi dan kehidupan",
            icon: "fa-dna",
            color: "#9b59b6",
            thread_count: 105,
            post_count: 680
        },
        {
            id: "kompetisi",
            name: "Kompetisi",
            description: "Diskusi tentang lomba dan kompetisi",
            icon: "fa-trophy",
            color: "#f39c12",
            thread_count: 75,
            post_count: 420
        },
        {
            id: "tips",
            name: "Tips & Trik",
            description: "Tips belajar dan strategi ujian",
            icon: "fa-lightbulb",
            color: "#1abc9c",
            thread_count: 65,
            post_count: 380
        }
    ],
    
    discussions: [
        {
            id: 1,
            category: "matematika",
            title: "Cara cepat menyelesaikan persamaan kuadrat",
            author: "Budi_Santoso",
            author_avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=3498db&color=fff",
            content: "Ada yang punya tips untuk menyelesaikan persamaan kuadrat dengan cepat? Saya sering menghabiskan waktu lama untuk soal seperti ini.",
            timestamp: "2025-12-05T10:30:00Z",
            replies: 8,
            views: 156,
            upvotes: 15,
            tags: ["tips", "persamaan_kuadrat", "matematika_sma"],
            last_activity: "2025-12-05T14:20:00Z"
        },
        {
            id: 2,
            category: "fisika",
            title: "Membingungkan: soal fisika tentang gaya gesek",
            author: "Sari_Physics",
            author_avatar: "https://ui-avatars.com/api/?name=Sari+Physics&background=e74c3c&color=fff",
            content: "Ada yang bisa bantu jelaskan soal ini? Benda bermassa 5 kg ditarik dengan gaya 20 N di atas permukaan kasar (μ=0.2). Berapa percepatannya?",
            timestamp: "2025-12-04T15:45:00Z",
            replies: 12,
            views: 234,
            upvotes: 22,
            tags: ["gaya_gesek", "dinamika", "fisika_sma"],
            last_activity: "2025-12-05T09:15:00Z"
        },
        {
            id: 3,
            category: "kompetisi",
            title: "Persiapan OSN Matematika 2026",
            author: "Juara_Matematika",
            author_avatar: "https://ui-avatars.com/api/?name=Juara+Matematika&background=2ecc71&color=fff",
            content: "Halo semua! Saya sedang mempersiapkan OSN Matematika 2026. Ada yang punya rekomendasi materi atau soal latihan?",
            timestamp: "2025-12-03T09:15:00Z",
            replies: 25,
            views: 421,
            upvotes: 45,
            tags: ["osn", "matematika", "kompetisi", "persiapan"],
            last_activity: "2025-12-05T11:30:00Z"
        },
        {
            id: 4,
            category: "kimia",
            title: "Reaksi kimia yang menghasilkan gas",
            author: "Chem_Expert",
            author_avatar: "https://ui-avatars.com/api/?name=Chem+Expert&background=9b59b6&color=fff",
            content: "Sebutkan 5 reaksi kimia yang menghasilkan gas beserta persamaan reaksinya!",
            timestamp: "2025-12-02T14:20:00Z",
            replies: 6,
            views: 189,
            upvotes: 10,
            tags: ["reaksi_kimia", "gas", "kimia_smp"],
            last_activity: "2025-12-04T16:45:00Z"
        },
        {
            id: 5,
            category: "biologi",
            title: "Perbedaan mitosis dan meiosis",
            author: "Bio_Genius",
            author_avatar: "https://ui-avatars.com/api/?name=Bio+Genius&background=1abc9c&color=fff",
            content: "Bingung nih membedakan mitosis dan meiosis. Ada yang bisa jelaskan dengan tabel perbandingan?",
            timestamp: "2025-12-01T11:30:00Z",
            replies: 18,
            views: 312,
            upvotes: 28,
            tags: ["sel", "pembelahan_sel", "biologi_sma"],
            last_activity: "2025-12-05T08:45:00Z"
        },
        {
            id: 6,
            category: "tips",
            title: "Cara efektif belajar untuk UTBK",
            author: "UTBK_Master",
            author_avatar: "https://ui-avatars.com/api/?name=UTBK+Master&background=f39c12&color=fff",
            content: "Bagikan pengalaman kalian belajar untuk UTBK! Metode apa yang paling efektif?",
            timestamp: "2025-11-30T13:45:00Z",
            replies: 32,
            views: 567,
            upvotes: 52,
            tags: ["utbk", "tips_belajar", "strategi"],
            last_activity: "2025-12-05T10:15:00Z"
        }
    ],
    
    replies: [
        {
            id: 1,
            discussion_id: 1,
            author: "Math_Wizard",
            author_avatar: "https://ui-avatars.com/api/?name=Math+Wizard&background=e74c3c&color=fff",
            content: "Gunakan rumus abc: x = [-b ± √(b² - 4ac)] / 2a. Atau jika a=1, bisa pakai metode faktorisasi.",
            timestamp: "2025-12-05T11:15:00Z",
            upvotes: 8
        },
        {
            id: 2,
            discussion_id: 2,
            author: "Physics_Pro",
            author_avatar: "https://ui-avatars.com/api/?name=Physics+Pro&background=3498db&color=fff",
            content: "Pertama hitung gaya gesek: f = μ × N = 0.2 × 5 × 10 = 10 N. Gaya total = 20 - 10 = 10 N. Percepatan = F/m = 10/5 = 2 m/s².",
            timestamp: "2025-12-04T16:30:00Z",
            upvotes: 15
        }
    ],
    
    popular_tags: [
        { name: "matematika", count: 45 },
        { name: "fisika", count: 38 },
        { name: "kimia", count: 32 },
        { name: "biologi", count: 29 },
        { name: "tips", count: 25 },
        { name: "kompetisi", count: 22 },
        { name: "osn", count: 18 },
        { name: "utbk", count: 16 }
    ],
    
    online_users: 42,
    
    rules: [
        "Hargai pendapat orang lain",
        "Gunakan bahasa yang sopan",
        "Jangan spam atau promosi",
        "Posting di kategori yang sesuai",
        "Berikan sumber jika mengutip"
    ]
};

// Functions untuk menampilkan forum
function displayDiscussions(filterSubject = 'all', filterLevel = 'all') {
    const container = document.getElementById('discussions-container');
    if (!container) return;
    
    let filteredDiscussions = [...forumData.discussions];
    
    // Apply filters
    if (filterSubject !== 'all') {
        filteredDiscussions = filteredDiscussions.filter(discussion => 
            discussion.category === filterSubject
        );
    }
    
    // Sort by latest activity
    filteredDiscussions.sort((a, b) => new Date(b.last_activity) - new Date(a.last_activity));
    
    // Apply sorting option
    const sortBy = document.getElementById('sort-by')?.value || 'newest';
    if (sortBy === 'popular') {
        filteredDiscussions.sort((a, b) => b.upvotes - a.upvotes);
    } else if (sortBy === 'unanswered') {
        filteredDiscussions = filteredDiscussions.filter(d => d.replies === 0);
    }
    
    let html = '';
    
    if (filteredDiscussions.length === 0) {
        html = `
            <div class="no-discussions">
                <i class="fas fa-comments" style="font-size: 3rem; color: #ddd; margin-bottom: 1rem;"></i>
                <h3>Tidak ada diskusi</h3>
                <p>Jadilah yang pertama memulai diskusi!</p>
            </div>
        `;
    } else {
        filteredDiscussions.forEach(discussion => {
            const timeAgo = getTimeAgo(discussion.timestamp);
            const category = forumData.categories.find(c => c.id === discussion.category);
            
            html += `
                <div class="discussion-item fade-in">
                    <div class="discussion-category" style="background: ${category?.color || '#95a5a6'}">
                        <i class="fas ${category?.icon || 'fa-folder'}"></i>
                        ${category?.name || 'Umum'}
                    </div>
                    
                    <div class="discussion-content">
                        <div class="discussion-header">
                            <h4><a href="#" class="discussion-title">${discussion.title}</a></h4>
                            <div class="discussion-meta">
                                <span class="discussion-author">
                                    <img src="${discussion.author_avatar}" alt="${discussion.author}" class="author-avatar">
                                    ${discussion.author}
                                </span>
                                <span class="discussion-time">
                                    <i class="far fa-clock"></i> ${timeAgo}
                                </span>
                            </div>
                        </div>
                        
                        <p class="discussion-preview">${discussion.content.substring(0, 150)}${discussion.content.length > 150 ? '...' : ''}</p>
                        
                        <div class="discussion-footer">
                            <div class="discussion-tags">
                                ${discussion.tags.map(tag => `
                                    <span class="tag">${tag}</span>
                                `).join('')}
                            </div>
                            
                            <div class="discussion-stats">
                                <span class="stat-item">
                                    <i class="far fa-comment"></i> ${discussion.replies}
                                </span>
                                <span class="stat-item">
                                    <i class="far fa-eye"></i> ${discussion.views}
                                </span>
                                <span class="stat-item">
                                    <i class="fas fa-thumbs-up"></i> ${discussion.upvotes}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }
    
    container.innerHTML = html;
}

function displayCategories() {
    const container = document.getElementById('categories-container');
    if (!container) return;
    
    let html = '<div class="categories-grid">';
    
    forumData.categories.forEach(category => {
        html += `
            <div class="category-card" onclick="filterForum('${category.id}')">
                <div class="category-icon" style="background: ${category.color}">
                    <i class="fas ${category.icon}"></i>
                </div>
                <div class="category-info">
                    <h4>${category.name}</h4>
                    <p>${category.description}</p>
                    <div class="category-stats">
                        <span><i class="far fa-comments"></i> ${category.thread_count} diskusi</span>
                        <span><i class="far fa-comment-dots"></i> ${category.post_count} balasan</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function displayPopularTags() {
    const container = document.getElementById('popular-tags');
    if (!container) return;
    
    let html = '<div class="tags-cloud">';
    
    forumData.popular_tags.forEach(tag => {
        const size = Math.min(20 + (tag.count * 2), 28);
        html += `
            <span class="tag" style="font-size: ${size}px" onclick="filterByTag('${tag.name}')">
                ${tag.name}
            </span>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// Helper functions
function getTimeAgo(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diff = now - past;
    
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (minutes < 60) return `${minutes} menit lalu`;
    if (hours < 24) return `${hours} jam lalu`;
    if (days < 7) return `${days} hari lalu`;
    return past.toLocaleDateString('id-ID');
}

function filterForum(subject = null, level = null) {
    const subjectFilter = subject || document.getElementById('subject-filter')?.value || 'all';
    const levelFilter = level || document.getElementById('level-filter')?.value || 'all';
    
    displayDiscussions(subjectFilter, levelFilter);
}

function filterByTag(tag) {
    // Add tag to search or filter
    console.log(`Filter by tag: ${tag}`);
    // Implementation depends on your search functionality
}

function sortDiscussions() {
    const sortBy = document.getElementById('sort-by')?.value || 'newest';
    displayDiscussions();
}

// Initialize on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Check if on forum.html
        if (window.location.pathname.includes('forum.html')) {
            displayDiscussions();
            displayCategories();
            displayPopularTags();
            
            // Update online users count
            document.getElementById('online-count')?.textContent = forumData.online_users;
        }
    });
}

// Export untuk penggunaan di modul lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { forumData, displayDiscussions, displayCategories };
}