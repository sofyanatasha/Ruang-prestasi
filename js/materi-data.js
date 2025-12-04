// Data materi pembelajaran berdasarkan input Anda
const materialsData = {
    matematika: {
        smp: [
            {
                title: "Buku Matematika SMP - Kemdikbud",
                url: "https://buku.kemdikbud.go.id",
                description: "Buku resmi Kementerian Pendidikan untuk SMP",
                icon: "fas fa-book"
            },
            {
                title: "Matematika Study Center - SMP",
                url: "https://matematikastudycenter.com/smp/",
                description: "Kumpulan materi dan soal matematika SMP",
                icon: "fas fa-chalkboard-teacher"
            },
            {
                title: "Ajar Hitung",
                url: "https://ajarhitung.com",
                description: "Belajar matematika dengan cara menyenangkan",
                icon: "fas fa-calculator"
            }
        ],
        sma: [
            {
                title: "Repositori Kemdikbud - Matematika SMA",
                url: "https://repositori.kemdikbud.go.id",
                description: "Repositori resmi materi matematika SMA",
                icon: "fas fa-database"
            },
            {
                title: "Math Cyber 1997",
                url: "https://mathcyber1997.com",
                description: "Materi dan pembahasan soal matematika SMA",
                icon: "fas fa-laptop-code"
            },
            {
                title: "M4TH-LAB",
                url: "https://m4th-lab.net",
                description: "Laboratorium matematika online",
                icon: "fas fa-flask"
            },
            {
                title: "Tanya-Tanya.com - Matematika",
                url: "https://tanya-tanya.com/rangkuman-materi-matematika/",
                description: "Rangkuman materi matematika lengkap",
                icon: "fas fa-file-alt"
            }
        ],
        kuliah: [
            {
                title: "OpenStax Mathematics",
                url: "https://openstax.org/subjects/math",
                description: "Buku matematika kuliah gratis",
                icon: "fas fa-university"
            },
            {
                title: "Paul's Online Math Notes",
                url: "https://tutorial.math.lamar.edu",
                description: "Tutorial matematika universitas",
                icon: "fas fa-graduation-cap"
            },
            {
                title: "MIT OpenCourseWare - Mathematics",
                url: "https://ocw.mit.edu/search/?t=Mathematics",
                description: "Materi kuliah MIT gratis",
                icon: "fas fa-chalkboard"
            },
            {
                title: "Math LibreTexts",
                url: "https://math.libretexts.org",
                description: "Sumber terbuka matematika",
                icon: "fas fa-book-open"
            }
        ]
    },
    fisika: {
        smp: [
            {
                title: "Fisika Study Center - SMP",
                url: "https://fisikastudycenter.com/fisika-smp/",
                description: "Materi dan soal fisika SMP",
                icon: "fas fa-atom"
            },
            {
                title: "Virtual Lab Kemdikbud",
                url: "https://vlab.belajar.kemdikbud.go.id",
                description: "Laboratorium virtual fisika",
                icon: "fas fa-vial"
            }
        ],
        sma: [
            {
                title: "Repositori Kemdikbud - Fisika SMA",
                url: "https://repositori.kemdikbud.go.id",
                description: "Repositori resmi materi fisika SMA",
                icon: "fas fa-database"
            },
            {
                title: "Materi78 - Fisika",
                url: "https://materi78.wordpress.com/fisika/",
                description: "Rangkuman materi fisika SMA",
                icon: "fas fa-file-word"
            },
            {
                title: "Fisika Study Center - SMA",
                url: "https://fisikastudycenter.com/fisika-sma/",
                description: "Materi dan soal fisika SMA",
                icon: "fas fa-atom"
            },
            {
                title: "Tanya-Tanya.com - Fisika",
                url: "https://tanya-tanya.com/rangkuman-materi-fisika/",
                description: "Rangkuman materi fisika lengkap",
                icon: "fas fa-file-alt"
            }
        ],
        kuliah: [
            {
                title: "OpenStax Physics",
                url: "https://openstax.org/subjects/science",
                description: "Buku fisika kuliah gratis",
                icon: "fas fa-university"
            },
            {
                title: "HyperPhysics",
                url: "http://hyperphysics.phy-astr.gsu.edu/hbase/hframe.html",
                description: "Konsep fisika dengan diagram",
                icon: "fas fa-project-diagram"
            },
            {
                title: "Feynman Lectures",
                url: "https://feynmanlectures.caltech.edu",
                description: "Kuliah fisika legendaris",
                icon: "fas fa-microphone-alt"
            },
            {
                title: "MIT OpenCourseWare - Physics",
                url: "https://ocw.mit.edu/search/?t=Physics",
                description: "Materi kuliah fisika MIT",
                icon: "fas fa-chalkboard"
            },
            {
                title: "PhET Simulations - Physics",
                url: "https://phet.colorado.edu/in/simulations/filter?subjects=physics",
                description: "Simulasi fisika interaktif",
                icon: "fas fa-gamepad"
            }
        ]
    },
    kimia: {
        smp: [
            {
                title: "Buku IPA SMP - Kurikulum Merdeka",
                url: "https://buku.kemdikbud.go.id/katalog/buku-kurikulum-merdeka",
                description: "Buku IPA SMP Kurikulum Merdeka",
                icon: "fas fa-book"
            },
            {
                title: "Wirahadie - Materi IPA SMP",
                url: "https://wirahadie.com/materi-ipa-smp/",
                description: "Materi IPA SMP lengkap",
                icon: "fas fa-flask"
            },
            {
                title: "Amongguru - Materi SMP",
                url: "https://amongguru.com/category/materi-smp/ipa-smp/",
                description: "Materi pembelajaran untuk guru",
                icon: "fas fa-chalkboard-teacher"
            },
            {
                title: "Materi78 - Kimia",
                url: "https://materi78.wordpress.com/kimia/",
                description: "Rangkuman materi kimia",
                icon: "fas fa-file-word"
            },
            {
                title: "Urip.info",
                url: "https://urip.info",
                description: "Sumber belajar kimia",
                icon: "fas fa-info-circle"
            },
            {
                title: "Studiobelajar.com - Kimia",
                url: "https://studiobelajar.com/kimia/",
                description: "Belajar kimia online",
                icon: "fas fa-graduation-cap"
            }
        ],
        sma: [
            {
                title: "Repositori Kemdikbud - Kimia SMA",
                url: "https://repositori.kemdikbud.go.id",
                description: "Repositori resmi materi kimia SMA",
                icon: "fas fa-database"
            },
            {
                title: "Materi78 - Kimia SMA",
                url: "https://materi78.wordpress.com/kimia/",
                description: "Rangkuman materi kimia SMA",
                icon: "fas fa-file-word"
            },
            {
                title: "Bisakimia",
                url: "https://bisakimia.com",
                description: "Blog pembelajaran kimia",
                icon: "fas fa-blog"
            }
        ],
        kuliah: [
            {
                title: "OpenStax Chemistry 2e",
                url: "https://openstax.org/details/books/chemistry-2e",
                description: "Buku kimia universitas",
                icon: "fas fa-university"
            },
            {
                title: "InTechOpen - Chemistry",
                url: "https://intechopen.com/books/subject/chemistry",
                description: "Buku kimia open access",
                icon: "fas fa-book-open"
            }
        ]
    },
    biologi: {
        smp: [
            {
                title: "Sumber Belajar Kemdikbud",
                url: "https://sumberbelajar.belajar.kemdikbud.go.id",
                description: "Sumber belajar resmi Kemdikbud",
                icon: "fas fa-graduation-cap"
            },
            {
                title: "Dosen Pendidikan",
                url: "https://dosenpendidikan.co.id",
                description: "Materi pembelajaran biologi",
                icon: "fas fa-chalkboard-teacher"
            }
        ],
        sma: [
            {
                title: "Repositori Kemdikbud - Biologi SMA",
                url: "https://repositori.kemdikbud.go.id",
                description: "Repositori resmi materi biologi SMA",
                icon: "fas fa-database"
            },
            {
                title: "Materi78 - Biologi",
                url: "https://materi78.wordpress.com/biologi/",
                description: "Rangkuman materi biologi SMA",
                icon: "fas fa-file-word"
            },
            {
                title: "Biologi JK",
                url: "https://biologijk.com",
                description: "Portal pembelajaran biologi",
                icon: "fas fa-dna"
            },
            {
                title: "Generasi Biologi",
                url: "https://generasibiologi.com",
                description: "Sumber belajar biologi modern",
                icon: "fas fa-seedling"
            }
        ],
        kuliah: [
            {
                title: "OpenStax Biology",
                url: "https://openstax.org/subjects/science",
                description: "Buku biologi kuliah gratis",
                icon: "fas fa-university"
            },
            {
                title: "NCBI Bookshelf",
                url: "https://ncbi.nlm.nih.gov/books/",
                description: "Referensi biologi medis",
                icon: "fas fa-book-medical"
            },
            {
                title: "Biology LibreTexts",
                url: "https://bio.libretexts.org",
                description: "Sumber terbuka biologi",
                icon: "fas fa-book-open"
            },
            {
                title: "MIT OpenCourseWare - Biology",
                url: "https://ocw.mit.edu/search/?t=Biology",
                description: "Materi kuliah biologi MIT",
                icon: "fas fa-chalkboard"
            },
            {
                title: "BioDigital Human",
                url: "https://biodigital.com",
                description: "Model 3D tubuh manusia",
                icon: "fas fa-user-md"
            },
            {
                title: "Learn Genetics Utah",
                url: "https://learn.genetics.utah.edu",
                description: "Belajar genetika interaktif",
                icon: "fas fa-dna"
            }
        ]
    }
};

// Fungsi untuk menampilkan materi
function displayMaterials(subject = 'all', level = 'all') {
    const container = document.getElementById('materials-container');
    if (!container) return;

    container.innerHTML = '';
    
    let html = '';
    
    // Loop melalui semua mata pelajaran
    for (const [subjKey, subjData] of Object.entries(materialsData)) {
        if (subject !== 'all' && subject !== subjKey) continue;
        
        html += `
            <div class="subject-section">
                <h2 class="subject-title">
                    <i class="fas ${getSubjectIcon(subjKey)}"></i>
                    ${capitalizeFirstLetter(subjKey)}
                </h2>
                <div class="materials-grid">
        `;
        
        // Loop melalui semua tingkat
        for (const [levelKey, materials] of Object.entries(subjData)) {
            if (level !== 'all' && level !== levelKey) continue;
            
            html += `
                <div class="level-section">
                    <h3 class="level-title">
                        <span class="level-badge ${levelKey}">${levelKey.toUpperCase()}</span>
                    </h3>
                    <div class="materials-list">
            `;
            
            // Tampilkan setiap materi
            materials.forEach(material => {
                html += `
                    <div class="material-card">
                        <div class="material-icon">
                            <i class="${material.icon}"></i>
                        </div>
                        <div class="material-content">
                            <h4>${material.title}</h4>
                            <p>${material.description}</p>
                            <a href="${material.url}" target="_blank" class="material-link">
                                <i class="fas fa-external-link-alt"></i> Akses Materi
                            </a>
                        </div>
                    </div>
                `;
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
    }
    
    container.innerHTML = html;
}

// Fungsi untuk filter materi
function filterMaterials() {
    const subject = document.getElementById('subject-filter').value;
    const level = document.getElementById('level-filter').value;
    
    displayMaterials(subject, level);
}

// Fungsi helper
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

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Cek jika ada parameter URL
    const urlParams = new URLSearchParams(window.location.search);
    const subjectParam = urlParams.get('subject');
    
    if (subjectParam && materialsData[subjectParam]) {
        document.getElementById('subject-filter').value = subjectParam;
    }
    
    displayMaterials();
});