// Data Kuis Lengkap
const quizData = {
    metadata: {
        last_updated: "2025-12-05",
        total_quizzes: 25,
        total_questions: 500,
        average_duration: "15 menit"
    },
    
    quiz_categories: [
        {
            id: "quick_math",
            name: "Quick Math Challenge",
            subject: "matematika",
            level: "smp",
            description: "10 soal matematika dasar dengan timer",
            question_count: 10,
            time_limit: 600, // 10 menit dalam detik
            difficulty: "easy",
            icon: "fa-bolt",
            color: "#f39c12",
            questions: [
                {
                    id: "q1",
                    question: "Berapakah hasil dari 15 + 27?",
                    options: ["42", "43", "44", "45"],
                    correct_answer: 0,
                    explanation: "15 + 27 = 42",
                    points: 10
                },
                {
                    id: "q2",
                    question: "Jika x = 5, berapakah nilai dari 2x + 3?",
                    options: ["10", "11", "12", "13"],
                    correct_answer: 3,
                    explanation: "2(5) + 3 = 10 + 3 = 13",
                    points: 10
                },
                {
                    id: "q3",
                    question: "Bentuk sederhana dari 3/6 adalah...",
                    options: ["1/2", "1/3", "2/3", "3/4"],
                    correct_answer: 0,
                    explanation: "3/6 = 1/2 (dibagi 3)",
                    points: 10
                },
                {
                    id: "q4",
                    question: "Berapakah hasil dari 7 × 8?",
                    options: ["54", "56", "58", "60"],
                    correct_answer: 1,
                    explanation: "7 × 8 = 56",
                    points: 10
                },
                {
                    id: "q5",
                    question: "Jika sebuah segitiga memiliki alas 10 cm dan tinggi 5 cm, berapakah luasnya?",
                    options: ["20 cm²", "25 cm²", "30 cm²", "35 cm²"],
                    correct_answer: 1,
                    explanation: "Luas = ½ × alas × tinggi = ½ × 10 × 5 = 25 cm²",
                    points: 15
                }
            ]
        },
        {
            id: "physics_basics",
            name: "Fisika Dasar",
            subject: "fisika",
            level: "smp",
            description: "Konsep fisika dasar untuk SMP",
            question_count: 8,
            time_limit: 480, // 8 menit
            difficulty: "easy",
            icon: "fa-atom",
            color: "#3498db",
            questions: [
                {
                    id: "p1",
                    question: "Satuan SI untuk gaya adalah...",
                    options: ["Joule", "Newton", "Watt", "Pascal"],
                    correct_answer: 1,
                    explanation: "Satuan SI untuk gaya adalah Newton (N)",
                    points: 10
                },
                {
                    id: "p2",
                    question: "Alat yang digunakan untuk mengukur massa adalah...",
                    options: ["Termometer", "Neraca", "Speedometer", "Barometer"],
                    correct_answer: 1,
                    explanation: "Neraca digunakan untuk mengukur massa",
                    points: 10
                },
                {
                    id: "p3",
                    question: "Energi yang dimiliki benda karena geraknya disebut...",
                    options: ["Energi potensial", "Energi kinetik", "Energi panas", "Energi kimia"],
                    correct_answer: 1,
                    explanation: "Energi kinetik adalah energi yang dimiliki benda karena geraknya",
                    points: 15
                }
            ]
        },
        {
            id: "chemistry_fundamental",
            name: "Kimia Fundamental",
            subject: "kimia",
            level: "sma",
            description: "Konsep dasar kimia untuk SMA",
            question_count: 12,
            time_limit: 720, // 12 menit
            difficulty: "medium",
            icon: "fa-flask",
            color: "#2ecc71",
            questions: [
                {
                    id: "c1",
                    question: "Unsur dengan nomor atom 1 adalah...",
                    options: ["Helium", "Hidrogen", "Litium", "Berilium"],
                    correct_answer: 1,
                    explanation: "Hidrogen memiliki nomor atom 1",
                    points: 10
                },
                {
                    id: "c2",
                    question: "Rumus kimia untuk air adalah...",
                    options: ["CO₂", "H₂O", "O₂", "NaCl"],
                    correct_answer: 1,
                    explanation: "Rumus kimia air adalah H₂O",
                    points: 10
                },
                {
                    id: "c3",
                    question: "pH larutan netral adalah...",
                    options: ["0", "7", "14", "1"],
                    correct_answer: 1,
                    explanation: "Larutan netral memiliki pH = 7",
                    points: 15
                }
            ]
        },
        {
            id: "biology_cell",
            name: "Biologi Sel",
            subject: "biologi",
            level: "sma",
            description: "Struktur dan fungsi sel",
            question_count: 10,
            time_limit: 600,
            difficulty: "medium",
            icon: "fa-dna",
            color: "#9b59b6",
            questions: [
                {
                    id: "b1",
                    question: "Organel sel yang berfungsi sebagai tempat respirasi adalah...",
                    options: ["Ribosom", "Mitokondria", "Lisosom", "Retikulum Endoplasma"],
                    correct_answer: 1,
                    explanation: "Mitokondria adalah tempat respirasi seluler",
                    points: 10
                },
                {
                    id: "b2",
                    question: "Bagian sel yang mengatur keluar masuknya zat adalah...",
                    options: ["Membran sel", "Inti sel", "Sitoplasma", "Dinding sel"],
                    correct_answer: 0,
                    explanation: "Membran sel mengatur transportasi zat",
                    points: 10
                },
                {
                    id: "b3",
                    question: "Pembelahan sel untuk pertumbuhan disebut...",
                    options: ["Meiosis", "Mitosis", "Amitosis", "Endositosis"],
                    correct_answer: 1,
                    explanation: "Mitosis adalah pembelahan sel untuk pertumbuhan",
                    points: 15
                }
            ]
        }
    ],
    
    leaderboard: [
        {
            rank: 1,
            name: "Budi_Santoso",
            score: 1250,
            quizzes_completed: 15,
            streak: 7
        },
        {
            rank: 2,
            name: "Sari_Matematika",
            score: 1100,
            quizzes_completed: 12,
            streak: 5
        },
        {
            rank: 3,
            name: "Fisika_Master",
            score: 980,
            quizzes_completed: 10,
            streak: 3
        },
        {
            rank: 4,
            name: "Kimia_Expert",
            score: 850,
            quizzes_completed: 8,
            streak: 6
        },
        {
            rank: 5,
            name: "Bio_Genius",
            score: 720,
            quizzes_completed: 7,
            streak: 2
        }
    ],
    
    user_stats: {
        total_quizzes_taken: 0,
        total_score: 0,
        average_score: 0,
        best_subject: null,
        current_streak: 0,
        longest_streak: 0
    },
    
    scoring_system: {
        correct_answer: 10,
        time_bonus: 5,
        streak_bonus: 15,
        perfect_quiz_bonus: 50
    },
    
    achievements: [
        {
            id: "first_quiz",
            name: "Pemula",
            description: "Selesaikan quiz pertama",
            icon: "fa-star",
            unlocked: false
        },
        {
            id: "perfect_score",
            name: "Sempurna",
            description: "Dapatkan nilai sempurna dalam satu quiz",
            icon: "fa-trophy",
            unlocked: false
        },
        {
            id: "streak_5",
            name: "Konsisten",
            description: "Selesaikan 5 quiz berturut-turut",
            icon: "fa-fire",
            unlocked: false
        },
        {
            id: "subject_master",
            name: "Ahli Bidang",
            description: "Selesaikan semua quiz dalam satu mata pelajaran",
            icon: "fa-graduation-cap",
            unlocked: false
        }
    ]
};

// Quiz Engine
class QuizEngine {
    constructor() {
        this.currentQuiz = null;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeRemaining = 0;
        this.timer = null;
        this.userAnswers = [];
        this.quizStarted = false;
    }
    
    startQuiz(quizId) {
        const quiz = quizData.quiz_categories.find(q => q.id === quizId);
        if (!quiz) {
            console.error('Quiz tidak ditemukan');
            return;
        }
        
        this.currentQuiz = quiz;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.timeRemaining = quiz.time_limit;
        this.userAnswers = [];
        this.quizStarted = true;
        
        // Update user stats
        quizData.user_stats.total_quizzes_taken++;
        
        // Start timer
        this.startTimer();
        
        // Display first question
        this.displayCurrentQuestion();
        
        // Update UI
        this.updateQuizUI();
    }
    
    startTimer() {
        if (this.timer) clearInterval(this.timer);
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endQuiz();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        document.getElementById('timer-display').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    
    displayCurrentQuestion() {
        if (!this.currentQuiz || !this.quizStarted) return;
        
        const question = this.currentQuiz.questions[this.currentQuestionIndex];
        const container = document.getElementById('quiz-question-container');
        
        if (!container) return;
        
        container.innerHTML = `
            <div class="question-header">
                <span class="question-number">Soal ${this.currentQuestionIndex + 1} dari ${this.currentQuiz.questions.length}</span>
                <span class="question-points">${question.points} poin</span>
            </div>
            
            <div class="question-text">
                <h3>${question.question}</h3>
            </div>
            
            <div class="question-options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="quizEngine.selectAnswer(${index})">
                        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                        <span class="option-text">${option}</span>
                    </div>
                `).join('')}
            </div>
            
            <div class="question-navigation">
                ${this.currentQuestionIndex > 0 ? 
                    `<button onclick="quizEngine.previousQuestion()" class="btn-nav">
                        <i class="fas fa-arrow-left"></i> Sebelumnya
                    </button>` : ''
                }
                
                ${this.currentQuestionIndex < this.currentQuiz.questions.length - 1 ?
                    `<button onclick="quizEngine.nextQuestion()" class="btn-nav next">
                        Selanjutnya <i class="fas fa-arrow-right"></i>
                    </button>` : 
                    `<button onclick="quizEngine.endQuiz()" class="btn-nav finish">
                        <i class="fas fa-flag-checkered"></i> Selesaikan Quiz
                    </button>`
                }
            </div>
        `;
        
        // Highlight previously selected answer if exists
        const userAnswer = this.userAnswers[this.currentQuestionIndex];
        if (userAnswer !== undefined) {
            const options = container.querySelectorAll('.option');
            options[userAnswer].classList.add('selected');
        }
    }
    
    selectAnswer(answerIndex) {
        if (!this.quizStarted) return;
        
        // Save answer
        this.userAnswers[this.currentQuestionIndex] = answerIndex;
        
        // Update UI
        const options = document.querySelectorAll('.option');
        options.forEach(option => option.classList.remove('selected'));
        options[answerIndex].classList.add('selected');
    }
    
    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
            this.currentQuestionIndex++;
            this.displayCurrentQuestion();
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayCurrentQuestion();
        }
    }
    
    calculateScore() {
        if (!this.currentQuiz) return 0;
        
        let totalScore = 0;
        let correctAnswers = 0;
        
        this.currentQuiz.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            
            if (userAnswer === question.correct_answer) {
                totalScore += question.points;
                correctAnswers++;
            }
        });
        
        // Add time bonus
        const timeBonus = Math.floor(this.timeRemaining / 10) * 5;
        totalScore += timeBonus;
        
        // Add streak bonus
        if (correctAnswers === this.currentQuiz.questions.length) {
            totalScore += quizData.scoring_system.perfect_quiz_bonus;
        }
        
        // Update user stats
        quizData.user_stats.total_score += totalScore;
        quizData.user_stats.average_score = Math.round(
            quizData.user_stats.total_score / quizData.user_stats.total_quizzes_taken
        );
        
        // Check achievements
        this.checkAchievements(correctAnswers);
        
        return {
            totalScore,
            correctAnswers,
            totalQuestions: this.currentQuiz.questions.length,
            timeBonus,
            perfectBonus: correctAnswers === this.currentQuiz.questions.length ? 
                quizData.scoring_system.perfect_quiz_bonus : 0
        };
    }
    
    checkAchievements(correctAnswers) {
        // First quiz achievement
        if (quizData.user_stats.total_quizzes_taken === 1) {
            quizData.achievements[0].unlocked = true;
        }
        
        // Perfect score achievement
        if (correctAnswers === this.currentQuiz.questions.length) {
            quizData.achievements[1].unlocked = true;
        }
        
        // Update streak
        quizData.user_stats.current_streak++;
        if (quizData.user_stats.current_streak > quizData.user_stats.longest_streak) {
            quizData.user_stats.longest_streak = quizData.user_stats.current_streak;
        }
        
        // Streak achievement
        if (quizData.user_stats.current_streak >= 5) {
            quizData.achievements[2].unlocked = true;
        }
    }
    
    endQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        this.quizStarted = false;
        const result = this.calculateScore();
        
        // Display results
        this.displayResults(result);
        
        // Update leaderboard
        this.updateLeaderboard(result.totalScore);
    }
    
    displayResults(result) {
        const container = document.getElementById('quiz-container');
        if (!container) return;
        
        const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);
        
        container.innerHTML = `
            <div class="quiz-results">
                <div class="results-header">
                    <i class="fas fa-trophy" style="color: #f39c12; font-size: 3rem;"></i>
                    <h2>Quiz Selesai!</h2>
                    <p class="quiz-name">${this.currentQuiz.name}</p>
                </div>
                
                <div class="score-display">
                    <div class="score-circle">
                        <span class="score-percentage">${percentage}%</span>
                        <span class="score-text">Nilai</span>
                    </div>
                </div>
                
                <div class="results-details">
                    <div class="detail-item">
                        <span class="detail-label">Jawaban Benar</span>
                        <span class="detail-value">${result.correctAnswers}/${result.totalQuestions}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Skor Dasar</span>
                        <span class="detail-value">${result.totalScore - result.timeBonus - result.perfectBonus} poin</span>
                    </div>
                    ${result.timeBonus > 0 ? `
                    <div class="detail-item">
                        <span class="detail-label">Bonus Waktu</span>
                        <span class="detail-value">+${result.timeBonus} poin</span>
                    </div>` : ''}
                    ${result.perfectBonus > 0 ? `
                    <div class="detail-item">
                        <span class="detail-label">Bonus Sempurna</span>
                        <span class="detail-value">+${result.perfectBonus} poin</span>
                    </div>` : ''}
                    <div class="detail-item total">
                        <span class="detail-label">Total Skor</span>
                        <span class="detail-value">${result.totalScore} poin</span>
                    </div>
                </div>
                
                <div class="results-actions">
                    <button onclick="quizEngine.restartQuiz()" class="btn-action">
                        <i class="fas fa-redo"></i> Coba Lagi
                    </button>
                    <button onclick="showQuizCategories()" class="btn-action secondary">
                        <i class="fas fa-list"></i> Pilih Quiz Lain
                    </button>
                </div>
            </div>
        `;
    }
    
    restartQuiz() {
        this.startQuiz(this.currentQuiz.id);
    }
    
    updateLeaderboard(score) {
        // In a real app, this would send to server
        console.log(`Skor baru: ${score}`);
    }
    
    updateQuizUI() {
        // Update progress, timer, etc.
        document.getElementById('quiz-progress').textContent = 
            `${this.currentQuestionIndex + 1}/${this.currentQuiz.questions.length}`;
    }
}

// Initialize quiz engine
const quizEngine = new QuizEngine();

// UI Functions
function showQuizCategories() {
    const container = document.getElementById('quiz-container');
    if (!container) return;
    
    let html = `
        <div class="quiz-categories">
            <h2><i class="fas fa-gamepad"></i> Pilih Quiz</h2>
            <p class="subtitle">Pilih quiz berdasarkan minat dan kemampuan Anda</p>
            
            <div class="categories-grid">
    `;
    
    quizData.quiz_categories.forEach(category => {
        html += `
            <div class="quiz-category-card" onclick="startQuiz('${category.id}')">
                <div class="category-icon" style="background: ${category.color}">
                    <i class="fas ${category.icon}"></i>
                </div>
                <div class="category-info">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    <div class="category-meta">
                        <span><i class="fas fa-question-circle"></i> ${category.question_count} soal</span>
                        <span><i class="fas fa-clock"></i> ${category.time_limit / 60} menit</span>
                        <span class="difficulty ${category.difficulty}">${category.difficulty}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function startQuiz(quizId) {
    quizEngine.startQuiz(quizId);
}

function displayLeaderboard() {
    const container = document.getElementById('leaderboard-container');
    if (!container) return;
    
    let html = `
        <div class="leaderboard">
            <h3><i class="fas fa-crown"></i> Papan Peringkat</h3>
            <div class="leaderboard-list">
    `;
    
    quizData.leaderboard.forEach(user => {
        html += `
            <div class="leaderboard-item ${user.rank <= 3 ? 'top-three' : ''}">
                <div class="rank">${user.rank}</div>
                <div class="user-info">
                    <div class="user-name">${user.name}</div>
                    <div class="user-stats">
                        <span><i class="fas fa-star"></i> ${user.score} poin</span>
                        <span><i class="fas fa-fire"></i> ${user.streak} hari</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function displayUserStats() {
    const container = document.getElementById('user-stats-container');
    if (!container) return;
    
    const stats = quizData.user_stats;
    
    let html = `
        <div class="user-stats">
            <h3><i class="fas fa-chart-line"></i> Statistik Anda</h3>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-value">${stats.total_quizzes_taken}</div>
                    <div class="stat-label">Quiz Diselesaikan</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${stats.total_score}</div>
                    <div class="stat-label">Total Poin</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${stats.average_score}</div>
                    <div class="stat-label">Rata-rata Nilai</div>
                </div>
                <div class="stat-item">
                    <div class="stat-value">${stats.current_streak}</div>
                    <div class="stat-label">Streak Saat Ini</div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// Initialize on page load
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Check if on quiz.html
        if (window.location.pathname.includes('quiz.html')) {
            showQuizCategories();
            displayLeaderboard();
            displayUserStats();
        }
    });
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizData, quizEngine, showQuizCategories, startQuiz };
}