// Database untuk Admin Panel (simulasi)
const adminDatabase = {
    users: [
        {
            id: 1,
            username: "admin",
            email: "admin@ruangprestasi.id",
            password: "hashed_password_here",
            role: "superadmin",
            status: "active",
            created_at: "2025-01-01T00:00:00Z",
            last_login: "2025-12-05T10:30:00Z"
        },
        {
            id: 2,
            username: "editor",
            email: "editor@ruangprestasi.id",
            password: "hashed_password_here",
            role: "editor",
            status: "active",
            created_at: "2025-06-15T00:00:00Z",
            last_login: "2025-12-04T15:45:00Z"
        }
    ],
    
    logs: [
        {
            id: 1,
            user_id: 1,
            action: "login",
            description: "Admin logged in",
            timestamp: "2025-12-05T10:30:00Z",
            ip_address: "192.168.1.1"
        },
        {
            id: 2,
            user_id: 1,
            action: "create",
            description: "Created new competition: OSN Matematika 2026",
            timestamp: "2025-12-05T11:15:00Z",
            ip_address: "192.168.1.1"
        }
    ],
    
    settings: {
        site_name: "Ruang Prestasi",
        site_description: "Platform pembelajaran dan kompetisi akademik",
        contact_email: "info@ruangprestasi.id",
        maintenance_mode: false,
        registration_enabled: true,
        max_file_size: 10, // MB
        allowed_file_types: ["pdf", "jpg", "png", "docx"]
    },
    
    backups: [
        {
            id: 1,
            filename: "backup_20251205.sql",
            size: "45.2 MB",
            created_at: "2025-12-05T03:00:00Z",
            status: "completed"
        }
    ]
};

// API Simulasi untuk Admin
class AdminAPI {
    constructor() {
        this.baseURL = '/api/admin';
        this.token = localStorage.getItem('admin_token');
    }
    
    // Authentication
    async login(email, password) {
        // Simulate API call
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = adminDatabase.users.find(u => 
                    u.email === email && u.password === password
                );
                
                if (user) {
                    const token = btoa(`${email}:${Date.now()}`);
                    localStorage.setItem('admin_token', token);
                    localStorage.setItem('admin_user', JSON.stringify(user));
                    resolve({ success: true, token, user });
                } else {
                    reject(new Error('Email atau password salah'));
                }
            }, 1000);
        });
    }
    
    async logout() {
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_user');
        return { success: true };
    }
    
    // CRUD Operations
    async get(endpoint) {
        this.checkAuth();
        
        // Simulate API response based on endpoint
        return new Promise((resolve) => {
            setTimeout(() => {
                switch(endpoint) {
                    case '/competitions':
                        resolve(this.getCompetitions());
                        break;
                    case '/materials':
                        resolve(this.getMaterials());
                        break;
                    case '/questions':
                        resolve(this.getQuestions());
                        break;
                    case '/users':
                        resolve(this.getUsers());
                        break;
                    case '/logs':
                        resolve(this.getLogs());
                        break;
                    default:
                        resolve({ data: [], total: 0 });
                }
            }, 500);
        });
    }
    
    async post(endpoint, data) {
        this.checkAuth();
        
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate successful save
                const response = {
                    success: true,
                    message: 'Data berhasil disimpan',
                    data: { ...data, id: Date.now() }
                };
                resolve(response);
            }, 800);
        });
    }
    
    async put(endpoint, id, data) {
        this.checkAuth();
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'Data berhasil diperbarui',
                    data: { ...data, id }
                });
            }, 800);
        });
    }
    
    async delete(endpoint, id) {
        this.checkAuth();
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    success: true,
                    message: 'Data berhasil dihapus'
                });
            }, 500);
        });
    }
    
    // Data Getters
    getCompetitions() {
        // Fetch from competitions.json or simulate
        return {
            data: [
                {
                    id: 1,
                    nama: "OSN Matematika 2026",
                    bidang: "matematika",
                    tingkat: "smp",
                    status: "buka"
                }
            ],
            total: 1
        };
    }
    
    getMaterials() {
        // Fetch from materials.json or simulate
        return {
            data: [
                {
                    id: 1,
                    title: "Matematika Dasar SMP",
                    subject: "matematika",
                    level: "smp",
                    type: "pdf"
                }
            ],
            total: 1
        };
    }
    
    getQuestions() {
        // Fetch from questions.json or simulate
        return {
            data: [
                {
                    id: 1,
                    question: "Berapakah hasil dari 2x + 3 = 11?",
                    subject: "matematika",
                    level: "smp",
                    difficulty: "easy"
                }
            ],
            total: 1
        };
    }
    
    getUsers() {
        return {
            data: adminDatabase.users,
            total: adminDatabase.users.length
        };
    }
    
    getLogs() {
        return {
            data: adminDatabase.logs,
            total: adminDatabase.logs.length
        };
    }
    
    // Utility Methods
    checkAuth() {
        if (!this.token) {
            throw new Error('Tidak terautentikasi');
        }
    }
    
    // File Upload
    async uploadFile(file, type) {
        this.checkAuth();
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (file.size > adminDatabase.settings.max_file_size * 1024 * 1024) {
                    reject(new Error(`File terlalu besar. Maksimal: ${adminDatabase.settings.max_file_size}MB`));
                    return;
                }
                
                const extension = file.name.split('.').pop().toLowerCase();
                if (!adminDatabase.settings.allowed_file_types.includes(extension)) {
                    reject(new Error(`Tipe file tidak diizinkan. Gunakan: ${adminDatabase.settings.allowed_file_types.join(', ')}`));
                    return;
                }
                
                // Simulate successful upload
                resolve({
                    success: true,
                    filename: `upload_${Date.now()}.${extension}`,
                    url: `/uploads/${type}/${Date.now()}.${extension}`,
                    size: file.size
                });
            }, 1500);
        });
    }
    
    // Backup
    async createBackup() {
        this.checkAuth();
        
        return new Promise((resolve) => {
            setTimeout(() => {
                const backup = {
                    id: adminDatabase.backups.length + 1,
                    filename: `backup_${new Date().toISOString().split('T')[0]}.sql`,
                    size: `${Math.random() * 50 + 20} MB`,
                    created_at: new Date().toISOString(),
                    status: "completed"
                };
                
                adminDatabase.backups.push(backup);
                
                resolve({
                    success: true,
                    message: 'Backup berhasil dibuat',
                    backup
                });
            }, 2000);
        });
    }
    
    // Statistics
    async getStatistics() {
        this.checkAuth();
        
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    competitions: {
                        total: 50,
                        active: 25,
                        upcoming: 15,
                        completed: 10
                    },
                    users: {
                        total: 5000,
                        active: 3500,
                        new_today: 25
                    },
                    materials: {
                        total: 500,
                        by_subject: {
                            matematika: 85,
                            fisika: 71,
                            kimia: 82,
                            biologi: 68
                        }
                    },
                    forum: {
                        discussions: 125,
                        replies: 850,
                        users_online: 42
                    }
                });
            }, 800);
        });
    }
}

// Export untuk penggunaan
if (typeof window !== 'undefined') {
    window.AdminAPI = AdminAPI;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { adminDatabase, AdminAPI };
}