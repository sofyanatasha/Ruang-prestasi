// Data Latihan Soal Lengkap
const latihanData = {
    metadata: {
        last_updated: "2025-12-05",
        total_questions: 1250,
        subjects: ["matematika", "fisika", "kimia", "biologi"],
        levels: ["smp", "sma", "kuliah"]
    },
    
    question_banks: {
        matematika: {
            smp: [
                {
                    id: "math_smp_001",
                    source: "defantri.com/bank-soal-smp/",
                    title: "Aljabar Dasar SMP",
                    description: "Kumpulan soal aljabar untuk tingkat SMP",
                    question_count: 150,
                    topics: ["persamaan linear", "pertidaksamaan", "operasi aljabar"],
                    link: "https://defantri.com/bank-soal-smp/",
                    type: "pembahasan_lengkap",
                    difficulty: ["easy", "medium"]
                },
                {
                    id: "math_smp_002",
                    source: "juraganles.com/matematika-smp",
                    title: "Geometri SMP",
                    description: "Soal geometri dan pengukuran",
                    question_count: 120,
                    topics: ["bangun datar", "bangun ruang", "kesebangunan"],
                    link: "https://juraganles.com/matematika-smp",
                    type: "latihan_interaktif",
                    difficulty: ["easy", "medium", "hard"]
                }
            ],
            sma: [
                {
                    id: "math_sma_001",
                    source: "mathcyber1997.com/category/soal-dan-pembahasan/",
                    title: "Kalkulus SMA",
                    description: "Soal dan pembahasan kalkulus",
                    question_count: 200,
                    topics: ["limit", "turunan", "integral"],
                    link: "https://mathcyber1997.com/category/soal-dan-pembahasan/",
                    type: "pembahasan_video",
                    difficulty: ["medium", "hard"]
                },
                {
                    id: "math_sma_002",
                    source: "mathcyber1997.com/category/soal-dan-pembahasan/",
                    title: "Trigonometri SMA",
                    description: "Soal trigonometri lengkap",
                    question_count: 150,
                    topics: ["identitas trigonometri", "persamaan trigonometri"],
                    link: "https://mathcyber1997.com/category/soal-dan-pembahasan/",
                    type: "pembahasan_lengkap",
                    difficulty: ["medium"]
                }
            ],
            kuliah: [
                {
                    id: "math_kuliah_001",
                    source: "tutorial.math.lamar.edu/Problems/CalcI/CalcI.aspx",
                    title: "Kalkulus 1 - Soal Latihan",
                    description: "Problem set kalkulus dasar",
                    question_count: 300,
                    topics: ["limits", "derivatives", "applications"],
                    link: "https://tutorial.math.lamar.edu/Problems/CalcI/CalcI.aspx",
                    type: "textbook_problems",
                    difficulty: ["medium", "hard"]
                },
                {
                    id: "math_kuliah_002",
                    source: "tutorial.math.lamar.edu",
                    title: "Aljabar Linear",
                    description: "Soal matriks dan vektor",
                    question_count: 180,
                    topics: ["matriks", "vektor", "transformasi linear"],
                    link: "https://tutorial.math.lamar.edu/Problems/LinAlg/LinAlg.aspx",
                    type: "problem_set",
                    difficulty: ["hard"]
                }
            ]
        },
        
        fisika: {
            smp: [
                {
                    id: "physics_smp_001",
                    source: "fisikastudycenter.com/fisika-smp/",
                    title: "Mekanika Dasar SMP",
                    description: "Soal gerak, gaya, dan usaha",
                    question_count: 100,
                    topics: ["gerak lurus", "gaya", "energi"],
                    link: "https://fisikastudycenter.com/fisika-smp/",
                    type: "soal_dan_pembahasan",
                    difficulty: ["easy", "medium"]
                },
                {
                    id: "physics_smp_002",
                    source: "amongguru.com/category/soal-ipa-smp/",
                    title: "Listrik dan Magnet SMP",
                    description: "Soal listrik statis dan magnet",
                    question_count: 80,
                    topics: ["listrik statis", "magnet", "elektromagnet"],
                    link: "https://amongguru.com/category/soal-ipa-smp/",
                    type: "latihan_bertingkat",
                    difficulty: ["easy", "medium"]
                }
            ],
            sma: [
                {
                    id: "physics_sma_001",
                    source: "tanya-tanya.com/contoh-soal-pembahasan-fisika/",
                    title: "Mekanika SMA",
                    description: "Soal dinamika dan kinematika",
                    question_count: 150,
                    topics: ["kinematika", "dinamika", "gerak melingkar"],
                    link: "https://tanya-tanya.com/contoh-soal-pembahasan-fisika/",
                    type: "contoh_soal",
                    difficulty: ["medium", "hard"]
                },
                {
                    id: "physics_sma_002",
                    source: "fisikastudycenter.com/fisika-sma/",
                    title: "Fisika Modern",
                    description: "Soal relativitas dan kuantum",
                    question_count: 120,
                    topics: ["relativitas", "fisika kuantum", "inti atom"],
                    link: "https://fisikastudycenter.com/fisika-sma/",
                    type: "bank_soal",
                    difficulty: ["hard"]
                }
            ],
            kuliah: [
                {
                    id: "physics_kuliah_001",
                    source: "ocw.mit.edu/courses/physics-i-classical-mechanics/exams/",
                    title: "Mekanika Klasik",
                    description: "Ujian mekanika klasik MIT",
                    question_count: 50,
                    topics: ["lagrangian", "hamiltonian", "oskilator"],
                    link: "https://ocw.mit.edu/courses/physics-i-classical-mechanics/exams/",
                    type: "exam_problems",
                    difficulty: ["hard"]
                }
            ]
        },
        
        kimia: {
            smp: [
                {
                    id: "chemistry_smp_001",
                    source: "https://drive.google.com/file/d/1-vY-3iqT3LiBifDqcmP4fcJXK_91sP48/view",
                    title: "Kimia Dasar SMP",
                    description: "Kumpulan soal kimia SMP",
                    question_count: 100,
                    topics: ["zat dan perubahan", "unsur dan senyawa"],
                    link: "https://drive.google.com/file/d/1-vY-3iqT3LiBifDqcmP4fcJXK_91sP48/view",
                    type: "pdf_collection",
                    difficulty: ["easy"]
                }
            ],
            sma: [
                {
                    id: "chemistry_sma_001",
                    source: "urip.info",
                    title: "Stoikiometri dan Termokimia",
                    description: "Soal perhitungan kimia",
                    question_count: 200,
                    topics: ["stoikiometri", "termokimia", "laju reaksi"],
                    link: "https://urip.info",
                    type: "blog_pembahasan",
                    difficulty: ["medium", "hard"]
                },
                {
                    id: "chemistry_sma_002",
                    source: "pak-anang.blogspot.com",
                    title: "Kimia Organik",
                    description: "Soal senyawa karbon",
                    question_count: 150,
                    topics: ["hidrokarbon", "gugus fungsi", "polimer"],
                    link: "https://pak-anang.blogspot.com",
                    type: "prediksi_soal",
                    difficulty: ["medium"]
                }
            ],
            kuliah: [
                {
                    id: "chemistry_kuliah_001",
                    source: "chem.libretexts.org/Exercises",
                    title: "Kimia Analitik",
                    description: "Latihan kimia analitik",
                    question_count: 300,
                    topics: ["analisis kuantitatif", "spektroskopi"],
                    link: "https://chem.libretexts.org/Exercises",
                    type: "textbook_exercises",
                    difficulty: ["hard"]
                }
            ]
        },
        
        biologi: {
            smp: [
                {
                    id: "biology_smp_001",
                    source: "proprofs.com/quiz-school/topic/biology-7th-grade",
                    title: "Struktur dan Fungsi Sel",
                    description: "Quiz interaktif tentang sel",
                    question_count: 50,
                    topics: ["organel sel", "transportasi sel"],
                    link: "https://proprofs.com/quiz-school/topic/biology-7th-grade",
                    type: "interactive_quiz",
                    difficulty: ["easy"]
                },
                {
                    id: "biology_smp_002",
                    source: "pusmendik.kemdikbud.go.id/ayoakm/",
                    title: "AKM Biologi SMP",
                    description: "Soal AKM literasi sains",
                    question_count: 40,
                    topics: ["ekosistem", "genetika dasar"],
                    link: "https://pusmendik.kemdikbud.go.id/ayoakm/",
                    type: "akm_nasional",
                    difficulty: ["medium"]
                }
            ],
            sma: [
                {
                    id: "biology_sma_001",
                    source: "biologijk.com",
                    title: "Genetika dan Evolusi",
                    description: "Soal pola hereditas",
                    question_count: 180,
                    topics: ["hukum mendel", "mutasi", "evolusi"],
                    link: "https://biologijk.com",
                    type: "pembahasan_lengkap",
                    difficulty: ["medium", "hard"]
                },
                {
                    id: "biology_sma_002",
                    source: "quipper.com/id/blog/sbmptn/biologi-sbmptn/",
                    title: "Persiapan UTBK Biologi",
                    description: "Soal UTBK dan pembahasan",
                    question_count: 120,
                    topics: ["metabolisme", "bioteknologi"],
                    link: "https://quipper.com/id/blog/sbmptn/biologi-sbmptn/",
                    type: "sbmptn_preparation",
                    difficulty: ["hard"]
                }
            ],
            kuliah: [
                {
                    id: "biology_kuliah_001",
                    source: "tomatalikuang.com/soal-pembahasan-onmipa-biologi/",
                    title: "Biologi Molekuler",
                    description: "Soal ONMIPA Biologi",
                    question_count: 100,
                    topics: ["DNA", "RNA", "ekspresi gen"],
                    link: "https://tomatalikuang.com/soal-pembahasan-onmipa-biologi/",
                    type: "olympiad_preparation",
                    difficulty: ["hard"]
                }
            ]
        }
    },
    
    practice_sets: [
        {
            id: "daily_challenge_001",
            name: "Challenge Harian - Matematika",
            subject: "matematika",
            level: "mixed",
            description: "5 soal matematika pilihan setiap hari",
            questions_per_day: 5,
            streak_bonus: true,
            active: true
        },
        {
            id: "weekly_test_001",
            name: "Tes Mingguan - IPA Terpadu",
            subject: "mixed",
            level: "smp",
            description: "Tes mingguan untuk siswa SMP",
            questions_per_week: 20,
            duration: "60 menit",
            active: true
        },
        {
            id: "competition_sim_001",
            name: "Simulasi OSN Matematika",
            subject: "matematika",
            level: "smp",
            description: "Simulasi lengkap OSN Matematika",
            question_count: 30,
            duration: "120 menit",
            active: true
        }
    ],
    
    difficulty_levels: {
        easy: {
            color: "#2ecc71",
            description: "Dasar, untuk pemahaman konsep"
        },
        medium: {
            color: "#f39c12",
            description: "Menengah, memerlukan analisis"
        },
        hard: {
            color: "#e74c3c",
            description: "Sulit, untuk persiapan kompetisi"
        }
    }
};

// Functions untuk menampilkan data latihan
function displayLatihanData(subject = 'all', level = 'all') {
    const container = document.getElementById('latihan-container');
    if (!container) return;
    
    let html = '';
    
    if (subject === 'all') {
        // Tampilkan semua mata pelajaran
        for (const [subjKey, subjData] of Object.entries(latihanData.question_banks)) {
            html += createSubjectSection(subjKey, subjData, level);
        }
    } else if (latihanData.question_banks[subject]) {
        // Tampilkan satu mata pelajaran saja
        html += createSubjectSection(subject, latihanData.question_banks[subject], level);
    }
    
    container.innerHTML = html;
}

function createSubjectSection(subject, subjectData, levelFilter) {
    let html = `
        <div class="subject-section fade-in">
            <h2 class="subject-title">
                <i class="fas ${getSubjectIcon(subject)}"></i>
                ${capitalizeFirstLetter(subject)}
            </h2>
            <div class="levels-container">
    `;
    
    for (const [levelKey, levelData] of Object.entries(subjectData)) {
        if (levelFilter !== 'all' && levelFilter !== levelKey) continue;
        
        html += `
            <div class="level-section">
                <h3 class="level-title">
                    <span class="level-badge ${levelKey}">${levelKey.toUpperCase()}</span>
                    <small>${levelData.length} kumpulan soal</small>
                </h3>
                <div class="question-banks">
        `;
        
        levelData.forEach(bank => {
            html += createQuestionBankCard(bank);
        });
        
        html += `
                </div>
            </div>
        `;
    }
    
    html += `
            </div>
        </div>
    `;
    
    return html;
}

function createQuestionBankCard(bank) {
    const difficultyBadges = Array.isArray(bank.difficulty) 
        ? bank.difficulty.map(diff => 
            `<span class="difficulty-badge ${diff}" style="background: ${latihanData.difficulty_levels[diff]?.color || '#95a5a6'}">
                ${diff}
            </span>`
        ).join('')
        : '';
    
    return `
        <div class="question-bank-card">
            <div class="bank-header">
                <h4>${bank.title}</h4>
                <div class="bank-meta">
                    <span class="question-count">
                        <i class="fas fa-question-circle"></i> ${bank.question_count} soal
                    </span>
                </div>
            </div>
            <p class="bank-description">${bank.description}</p>
            <div class="bank-topics">
                ${bank.topics.map(topic => `<span class="topic-tag">${topic}</span>`).join('')}
            </div>
            <div class="bank-footer">
                <div class="difficulty-levels">
                    ${difficultyBadges}
                </div>
                <a href="${bank.link}" target="_blank" class="bank-link">
                    <i class="fas fa-external-link-alt"></i> Akses Soal
                </a>
            </div>
        </div>
    `;
}

// Helper functions
function getSubjectIcon(subject) {
    const icons = {
        matematika: 'fa-calculator',
        fisika: 'fa-atom',
        kimia: 'fa-flask',
        biologi: 'fa-dna'
    };
    return icons[subject] || 'fa-book';
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Filter function untuk halaman latihan
function filterLatihan() {
    const subject = document.getElementById('subject-filter')?.value || 'all';
    const level = document.getElementById('level-filter')?.value || 'all';
    const difficulty = document.getElementById('difficulty-filter')?.value || 'all';
    
    displayLatihanData(subject, level);
    
    // Apply difficulty filter (client-side)
    if (difficulty !== 'all') {
        setTimeout(() => {
            document.querySelectorAll('.question-bank-card').forEach(card => {
                const hasDifficulty = card.querySelector(`.difficulty-badge.${difficulty}`);
                card.style.display = hasDifficulty ? 'block' : 'none';
            });
        }, 100);
    }
}

// Initialize on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Check if on latihan.html
        if (window.location.pathname.includes('latihan.html')) {
            const urlParams = new URLSearchParams(window.location.search);
            const subjectParam = urlParams.get('subject');
            
            if (subjectParam) {
                document.getElementById('subject-filter').value = subjectParam;
            }
            
            displayLatihanData(subjectParam || 'all', 'all');
        }
    });
}

// Export untuk penggunaan di modul lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { latihanData, displayLatihanData, filterLatihan };
}