// Admin Panel Functionality
class AdminPanel {
    constructor() {
        this.currentSection = 'dashboard';
        this.init();
    }
    
    init() {
        // Load data on page load
        this.loadDashboardData();
        this.loadLombaData();
        this.loadMateriData();
        this.loadSoalData();
        this.loadForumData();
        this.loadUsersData();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Check authentication (simulated)
        this.checkAuth();
    }
    
    // Authentication (simulated)
    checkAuth() {
        // In real app, check session/cookie
        const isAuthenticated = localStorage.getItem('admin_auth') === 'true';
        if (!isAuthenticated && !window.location.hash.includes('login')) {
            // Redirect to login
            // window.location.href = 'admin-login.html';
        }
    }
    
    setupEventListeners() {
        // Handle form submissions
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmit(e.target.id);
            });
        });
        
        // Search functionality
        const searchInput = document.querySelector('.admin-search input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.handleSearch(e.target.value);
            });
        }
        
        // Notification click
        document.querySelector('.notification')?.addEventListener('click', () => {
            this.showNotifications();
        });
    }
    
    // Section Navigation
    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected section
        const section = document.getElementById(`${sectionId}-section`);
        if (section) {
            section.classList.add('active');
            this.currentSection = sectionId;
            
            // Update page title
            const pageTitle = document.getElementById('page-title');
            if (pageTitle) {
                const titles = {
                    dashboard: 'Dashboard Admin',
                    lomba: 'Kelola Lomba',
                    materi: 'Kelola Materi',
                    soal: 'Kelola Soal',
                    quiz: 'Kelola Quiz',
                    forum: 'Kelola Forum',
                    users: 'Kelola Pengguna',
                    settings: 'Pengaturan Sistem'
                };
                pageTitle.textContent = titles[sectionId] || 'Admin Panel';
            }
            
            // Load section data if needed
            this.loadSectionData(sectionId);
        }
    }
    
    loadSectionData(sectionId) {
        switch(sectionId) {
            case 'dashboard':
                this.loadDashboardData();
                break;
            case 'lomba':
                this.loadLombaData();
                break;
            case 'materi':
                this.loadMateriData();
                break;
            case 'soal':
                this.loadSoalData();
                break;
            case 'quiz':
                this.loadQuizData();
                break;
            case 'forum':
                this.loadForumData();
                break;
            case 'users':
                this.loadUsersData();
                break;
        }
    }
    
    // Load Dashboard Data
    async loadDashboardData() {
        try {
            // Simulate API call
            const data = {
                lombaAktif: 50,
                totalMateri: 500,
                totalSoal: 1250,
                totalUsers: 5000,
                recentActivities: [
                    { type: 'lomba', action: 'ditambahkan', time: '2 menit lalu' },
                    { type: 'materi', action: 'diperbarui', time: '1 jam lalu' },
                    { type: 'users', action: 'bergabung', count: 25, time: 'Hari ini' },
                    { type: 'forum', action: 'diskusi', count: 15, time: '2 jam lalu' }
                ]
            };
            
            this.updateDashboardUI(data);
        } catch (error) {
            console.error('Error loading dashboard data:', error);
        }
    }
    
    updateDashboardUI(data) {
        // Update stat cards
        document.querySelectorAll('.stat-card h3')[0].textContent = data.lombaAktif;
        document.querySelectorAll('.stat-card h3')[1].textContent = data.totalMateri + '+';
        document.querySelectorAll('.stat-card h3')[2].textContent = data.totalSoal + '+';
        document.querySelectorAll('.stat-card h3')[3].textContent = data.totalUsers + '+';
    }
    
    // Load Lomba Data
    async loadLombaData() {
        try {
            const response = await fetch('assets/data/competitions.json');
            const data = await response.json();
            this.renderLombaTable(data.lomba);
        } catch (error) {
            console.error('Error loading lomba data:', error);
            this.renderLombaTable([]);
        }
    }
    
    renderLombaTable(lombaList) {
        const tbody = document.getElementById('lomba-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        lombaList.forEach((lomba, index) => {
            const statusBadge = lomba.status === 'buka' ? 
                '<span class="status-badge status-active">Aktif</span>' :
                '<span class="status-badge status-pending">Akan Datang</span>';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${lomba.id}</td>
                <td><strong>${lomba.nama}</strong></td>
                <td>${this.capitalizeFirstLetter(lomba.bidang)}</td>
                <td>${lomba.tingkat.toUpperCase()}</td>
                <td>${statusBadge}</td>
                <td>${lomba.pendaftaran}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-action btn-edit" onclick="admin.editLomba(${lomba.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-action btn-delete" onclick="admin.deleteLomba(${lomba.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                        <button class="btn-action btn-view" onclick="admin.viewLomba(${lomba.id})">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Load Materi Data
    async loadMateriData() {
        try {
            // Simulate loading from API
            const materiData = [
                {
                    id: 1,
                    title: "Matematika Dasar SMP",
                    subject: "matematika",
                    level: "smp",
                    source: "buku.kemdikbud.go.id",
                    date: "2025-11-30"
                },
                {
                    id: 2,
                    title: "Fisika Mekanika SMA",
                    subject: "fisika",
                    level: "sma",
                    source: "fisikastudycenter.com",
                    date: "2025-12-01"
                },
                {
                    id: 3,
                    title: "Kimia Organik SMA",
                    subject: "kimia",
                    level: "sma",
                    source: "bisakimia.com",
                    date: "2025-12-02"
                }
            ];
            
            this.renderMateriTable(materiData);
        } catch (error) {
            console.error('Error loading materi data:', error);
        }
    }
    
    renderMateriTable(materiList) {
        const tbody = document.getElementById('materi-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        materiList.forEach(materi => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${materi.id}</td>
                <td><strong>${materi.title}</strong></td>
                <td>${this.capitalizeFirstLetter(materi.subject)}</td>
                <td>${materi.level.toUpperCase()}</td>
                <td>${materi.source}</td>
                <td>${this.formatDate(materi.date)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-action btn-edit" onclick="admin.editMateri(${materi.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-action btn-delete" onclick="admin.deleteMateri(${materi.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Load Soal Data
    async loadSoalData() {
        try {
            // Simulate loading from API
            const soalData = [
                {
                    id: 1,
                    question: "Berapakah hasil dari 2x + 3 = 11?",
                    subject: "matematika",
                    level: "smp",
                    difficulty: "easy",
                    date: "2025-12-01"
                },
                {
                    id: 2,
                    question: "Satuan SI untuk gaya adalah...",
                    subject: "fisika",
                    level: "sma",
                    difficulty: "medium",
                    date: "2025-12-02"
                }
            ];
            
            this.renderSoalTable(soalData);
        } catch (error) {
            console.error('Error loading soal data:', error);
        }
    }
    
    renderSoalTable(soalList) {
        const tbody = document.getElementById('soal-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        soalList.forEach(soal => {
            const difficultyBadge = soal.difficulty === 'easy' ? 'Mudah' :
                                  soal.difficulty === 'medium' ? 'Sedang' : 'Sulit';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${soal.id}</td>
                <td><strong>${soal.question.substring(0, 50)}...</strong></td>
                <td>${this.capitalizeFirstLetter(soal.subject)}</td>
                <td>${soal.level.toUpperCase()}</td>
                <td>${difficultyBadge}</td>
                <td>${this.formatDate(soal.date)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-action btn-edit" onclick="admin.editSoal(${soal.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-action btn-delete" onclick="admin.deleteSoal(${soal.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Load Forum Data
    async loadForumData() {
        try {
            const response = await fetch('assets/data/forum-data.js');
            const data = await response.json();
            this.renderForumTable(data.discussions);
        } catch (error) {
            console.error('Error loading forum data:', error);
        }
    }
    
    renderForumTable(discussions) {
        const tbody = document.getElementById('forum-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        discussions.forEach(discussion => {
            const status = discussion.replies > 0 ? 
                '<span class="status-badge status-active">Aktif</span>' :
                '<span class="status-badge status-pending">Baru</span>';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${discussion.id}</td>
                <td><strong>${discussion.title}</strong></td>
                <td>${discussion.author}</td>
                <td>${discussion.replies}</td>
                <td>${discussion.views}</td>
                <td>${status}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-action btn-edit" onclick="admin.editForum(${discussion.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-action btn-delete" onclick="admin.deleteForum(${discussion.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Load Users Data
    async loadUsersData() {
        try {
            // Simulate loading from API
            const usersData = [
                {
                    id: 1,
                    name: "Budi Santoso",
                    email: "budi@email.com",
                    role: "user",
                    status: "active",
                    joined: "2025-01-15"
                },
                {
                    id: 2,
                    name: "Admin Utama",
                    email: "admin@ruangprestasi.id",
                    role: "admin",
                    status: "active",
                    joined: "2025-01-01"
                }
            ];
            
            this.renderUsersTable(usersData);
        } catch (error) {
            console.error('Error loading users data:', error);
        }
    }
    
    renderUsersTable(usersList) {
        const tbody = document.getElementById('users-table-body');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        usersList.forEach(user => {
            const statusBadge = user.status === 'active' ?
                '<span class="status-badge status-active">Aktif</span>' :
                '<span class="status-badge status-inactive">Nonaktif</span>';
            
            const roleBadge = user.role === 'admin' ?
                '<span class="status-badge" style="background: #9b59b6;">Admin</span>' :
                '<span class="status-badge" style="background: #3498db;">User</span>';
            
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td><strong>${user.name}</strong></td>
                <td>${user.email}</td>
                <td>${roleBadge}</td>
                <td>${statusBadge}</td>
                <td>${this.formatDate(user.joined)}</td>
                <td>
                    <div class="action-buttons">
                        <button class="btn-action btn-edit" onclick="admin.editUser(${user.id})">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn-action btn-delete" onclick="admin.deleteUser(${user.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </td>
            `;
            tbody.appendChild(row);
        });
    }
    
    // Load Quiz Data
    async loadQuizData() {
        try {
            // Implementation for quiz data
        } catch (error) {
            console.error('Error loading quiz data:', error);
        }
    }
    
    // Form Handling
    async handleFormSubmit(formId) {
        const form = document.getElementById(formId);
        if (!form) return;
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        try {
            // Show loading
            this.showLoading();
            
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Handle different forms
            switch(formId) {
                case 'form-lomba':
                    await this.saveLombaToDB(data);
                    break;
                case 'form-materi':
                    await this.saveMateriToDB(data);
                    break;
                case 'form-soal':
                    await this.saveSoalToDB(data);
                    break;
            }
            
            // Hide loading
            this.hideLoading();
            
            // Show success message
            this.showAlert('Data berhasil disimpan!', 'success');
            
            // Close modal and refresh data
            this.closeActiveModal();
            this.loadSectionData(this.currentSection);
            
        } catch (error) {
            this.hideLoading();
            this.showAlert('Gagal menyimpan data: ' + error.message, 'error');
        }
    }
    
    // CRUD Operations for Lomba
    async saveLombaToDB(data) {
        // Simulate API call
        console.log('Saving lomba:', data);
        return { success: true, id: Date.now() };
    }
    
    async editLomba(id) {
        console.log('Edit lomba:', id);
        this.showAlert('Fitur edit akan segera tersedia', 'info');
    }
    
    async deleteLomba(id) {
        if (confirm('Apakah Anda yakin ingin menghapus lomba ini?')) {
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 500));
                
                this.showAlert('Lomba berhasil dihapus', 'success');
                this.loadLombaData();
            } catch (error) {
                this.showAlert('Gagal menghapus lomba', 'error');
            }
        }
    }
    
    viewLomba(id) {
        // Open in new tab or show preview
        window.open(`lomba.html#${id}`, '_blank');
    }
    
    // CRUD Operations for Materi
    async saveMateriToDB(data) {
        console.log('Saving materi:', data);
        return { success: true, id: Date.now() };
    }
    
    async editMateri(id) {
        console.log('Edit materi:', id);
        this.showAlert('Fitur edit akan segera tersedia', 'info');
    }
    
    async deleteMateri(id) {
        if (confirm('Apakah Anda yakin ingin menghapus materi ini?')) {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                this.showAlert('Materi berhasil dihapus', 'success');
                this.loadMateriData();
            } catch (error) {
                this.showAlert('Gagal menghapus materi', 'error');
            }
        }
    }
    
    // CRUD Operations for Soal
    async saveSoalToDB(data) {
        console.log('Saving soal:', data);
        return { success: true, id: Date.now() };
    }
    
    async editSoal(id) {
        console.log('Edit soal:', id);
        this.showAlert('Fitur edit akan segera tersedia', 'info');
    }
    
    async deleteSoal(id) {
        if (confirm('Apakah Anda yakin ingin menghapus soal ini?')) {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                this.showAlert('Soal berhasil dihapus', 'success');
                this.loadSoalData();
            } catch (error) {
                this.showAlert('Gagal menghapus soal', 'error');
            }
        }
    }
    
    // CRUD Operations for Forum
    async editForum(id) {
        console.log('Edit forum:', id);
    }
    
    async deleteForum(id) {
        if (confirm('Apakah Anda yakin ingin menghapus diskusi ini?')) {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                this.showAlert('Diskusi berhasil dihapus', 'success');
                this.loadForumData();
            } catch (error) {
                this.showAlert('Gagal menghapus diskusi', 'error');
            }
        }
    }
    
    // CRUD Operations for Users
    async editUser(id) {
        console.log('Edit user:', id);
        this.showAlert('Fitur edit akan segera tersedia', 'info');
    }
    
    async deleteUser(id) {
        if (confirm('Apakah Anda yakin ingin menghapus pengguna ini?')) {
            try {
                await new Promise(resolve => setTimeout(resolve, 500));
                this.showAlert('Pengguna berhasil dihapus', 'success');
                this.loadUsersData();
            } catch (error) {
                this.showAlert('Gagal menghapus pengguna', 'error');
            }
        }
    }
    
    // Modal Functions
    openModal(modalId) {
        const modal = document.getElementById(`${modalId}-modal`);
        if (modal) {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    closeActiveModal() {
        document.querySelectorAll('.modal.active').forEach(modal => {
            modal.classList.remove('active');
        });
        document.body.style.overflow = 'auto';
    }
    
    // Utility Functions
    showLoading() {
        // Create loading overlay
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = `
            <div class="loader"></div>
            <p>Menyimpan data...</p>
        `;
        document.body.appendChild(overlay);
    }
    
    hideLoading() {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.remove();
        }
    }
    
    showAlert(message, type = 'info') {
        // Create alert element
        const alert = document.createElement('div');
        alert.className = `admin-alert alert-${type}`;
        alert.innerHTML = `
            <span>${message}</span>
            <button onclick="this.parentElement.remove()">&times;</button>
        `;
        
        document.body.appendChild(alert);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (alert.parentElement) {
                alert.remove();
            }
        }, 5000);
    }
    
    showNotifications() {
        // Create notifications modal
        const notifications = [
            { id: 1, message: 'Lomba baru ditambahkan', time: '2 menit lalu' },
            { id: 2, message: '5 pengguna baru bergabung', time: '1 jam lalu' },
            { id: 3, message: 'Sistem backup berhasil', time: '3 jam lalu' }
        ];
        
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 400px;">
                <div class="modal-header">
                    <h3><i class="fas fa-bell"></i> Notifikasi</h3>
                    <button class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="notifications-list">
                        ${notifications.map(notif => `
                            <div class="notification-item">
                                <div class="notification-content">
                                    <p>${notif.message}</p>
                                    <small>${notif.time}</small>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-secondary" onclick="this.parentElement.parentElement.parentElement.remove()">Tutup</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    handleSearch(query) {
        // Implement search functionality
        console.log('Searching for:', query);
        
        // Filter current section table
        const section = this.currentSection;
        switch(section) {
            case 'lomba':
                this.searchLomba(query);
                break;
            case 'materi':
                this.searchMateri(query);
                break;
            case 'soal':
                this.searchSoal(query);
                break;
        }
    }
    
    searchLomba(query) {
        const rows = document.querySelectorAll('#lomba-table-body tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(query.toLowerCase()) ? '' : 'none';
        });
    }
    
    searchMateri(query) {
        const rows = document.querySelectorAll('#materi-table-body tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(query.toLowerCase()) ? '' : 'none';
        });
    }
    
    searchSoal(query) {
        const rows = document.querySelectorAll('#soal-table-body tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(query.toLowerCase()) ? '' : 'none';
        });
    }
    
    filterMateri() {
        const subject = document.querySelector('#materi-section .filter-select:first-child').value;
        const level = document.querySelector('#materi-section .filter-select:last-child').value;
        
        // Implement filtering logic
        console.log('Filter materi:', { subject, level });
    }
    
    // Helper Functions
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    }
}

// Global functions for HTML onclick handlers
function showSection(sectionId) {
    window.admin.showSection(sectionId);
}

function toggleSidebar() {
    document.querySelector('.admin-sidebar').classList.toggle('active');
}

function openModal(modalId) {
    window.admin.openModal(modalId);
}

function closeModal(modalId) {
    window.admin.closeActiveModal();
}

// Save functions for modals
function saveLomba() {
    window.admin.handleFormSubmit('form-lomba');
}

function saveMateri() {
    window.admin.handleFormSubmit('form-materi');
}

function saveSoal() {
    window.admin.handleFormSubmit('form-soal');
}

// Initialize admin panel
document.addEventListener('DOMContentLoaded', () => {
    window.admin = new AdminPanel();
    
    // Add alert styles
    const style = document.createElement('style');
    style.textContent = `
        .admin-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 5px;
            color: white;
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-width: 300px;
            max-width: 400px;
            z-index: 3000;
            animation: slideIn 0.3s ease;
        }
        
        .alert-success {
            background: #2ecc71;
        }
        
        .alert-error {
            background: #e74c3c;
        }
        
        .alert-info {
            background: #3498db;
        }
        
        .admin-alert button {
            background: none;
            border: none;
            color: white;
            font-size: 1.2rem;
            cursor: pointer;
            margin-left: 1rem;
        }
        
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255,255,255,0.9);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 4000;
        }
        
        .loading-overlay .loader {
            margin-bottom: 1rem;
        }
        
        .notifications-list {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .notification-item {
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 5px;
            border-left: 3px solid #3498db;
        }
        
        .notification-content p {
            margin: 0 0 0.5rem 0;
            color: #2c3e50;
        }
        
        .notification-content small {
            color: #95a5a6;
        }
    `;
    document.head.appendChild(style);
});