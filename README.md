# TaskTracker - Full Stack Task Management Application

A modern, responsive task management application built with React, TypeScript, Express.js, and MongoDB. Features JWT authentication, real-time updates, and a beautiful user interface.

## 🚀 Features

### Core Features
- ✅ **User Authentication** - JWT-based login/register system
- ✅ **Task Management** - Create, edit, delete, and organize tasks
- ✅ **Priority Levels** - Low, Medium, High priority with visual indicators
- ✅ **Due Dates** - Set and track task deadlines with overdue warnings
- ✅ **Task Status** - Active, Completed, and Archived statuses
- ✅ **Task Archiving** - Archive/unarchive tasks to keep them organized
- ✅ **Subtasks** - Break down tasks into smaller, manageable subtasks
- ✅ **Search & Filtering** - Search tasks and filter by status, priority, and archive status
- ✅ **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices

### Advanced Features
- 🔐 **JWT Authentication** - Secure token-based authentication
- 📱 **Mobile-First Design** - Optimized for all screen sizes
- 🎨 **Modern UI/UX** - Clean, intuitive interface with smooth animations
- ⚡ **Real-time Updates** - Instant feedback for all user actions
- 🔍 **Advanced Filtering** - Multiple filter combinations
- 📊 **Task Statistics** - Visual overview of task completion status
- 🎯 **Priority Indicators** - Color-coded priority levels
- 📅 **Date Handling** - Smart date formatting and overdue detection

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **React Hot Toast** - Toast notifications
- **Axios** - HTTP client
- **Date-fns** - Date manipulation

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **TypeScript** - Type-safe development
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Tokens
- **bcryptjs** - Password hashing
- **Express Validator** - Input validation
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd task-tracker
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:3001
```

### 4. Start the Application

#### Development Mode
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

#### Production Mode
```bash
# Build frontend
cd frontend
npm run build

# Start backend
cd backend
npm start
```

## 📱 Usage

### Authentication
1. **Register** - Create a new account with email and password
2. **Login** - Sign in with your credentials
3. **Logout** - Securely log out from the application

### Task Management
1. **Create Tasks** - Click "New Task" to create a new task
2. **Edit Tasks** - Click the edit icon to modify task details
3. **Complete Tasks** - Click the circle icon to mark tasks as complete
4. **Archive Tasks** - Use the archive button to organize completed tasks
5. **Delete Tasks** - Remove tasks permanently with confirmation

### Subtasks
1. **Add Subtasks** - Expand a task and add subtasks
2. **Complete Subtasks** - Check off individual subtasks
3. **Track Progress** - Monitor subtask completion

### Filtering & Search
1. **Search** - Use the search bar to find specific tasks
2. **Filter by Status** - Show Active, Completed, or Archived tasks
3. **Filter by Priority** - Filter by Low, Medium, or High priority
4. **Archive Filter** - Show/hide archived tasks

## 🏗️ Project Structure

```
task-tracker/
├── backend/
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API endpoints
│   │   ├── middleware/      # Authentication middleware
│   │   ├── app.ts          # Express app configuration
│   │   └── bin/www.ts      # Server entry point
│   ├── package.json
│   └── tsconfig.json
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── contexts/        # React contexts
│   │   ├── services/        # API services
│   │   ├── types/          # TypeScript types
│   │   ├── App.tsx         # Main app component
│   │   └── index.tsx       # App entry point
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## 🔧 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Tasks
- `GET /api/tasks` - Get all tasks (with filters)
- `POST /api/tasks` - Create new task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task
- `PATCH /api/tasks/:id/archive` - Archive/unarchive task
- `PATCH /api/tasks/:id/subtasks` - Update subtasks

## 🎨 UI Components

### Core Components
- **LoginForm** - User authentication form
- **RegisterForm** - User registration form
- **TaskList** - Main task display with filtering
- **TaskCard** - Individual task display
- **TaskForm** - Create/edit task modal

### Features
- **Responsive Design** - Mobile-first approach
- **Dark/Light Theme Ready** - Easy theme switching
- **Accessibility** - WCAG compliant
- **Loading States** - Smooth user experience
- **Error Handling** - User-friendly error messages

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt password encryption
- **Input Validation** - Server-side validation
- **CORS Protection** - Cross-origin security
- **Environment Variables** - Secure configuration

## 🚀 Deployment

### Backend Deployment
1. Set up MongoDB Atlas or local MongoDB
2. Configure environment variables
3. Deploy to Heroku, Vercel, or AWS

### Frontend Deployment
1. Build the application: `npm run build`
2. Deploy to Netlify, Vercel, or AWS S3
3. Update API URL in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments

## 🎯 Future Enhancements

- [ ] Real-time collaboration
- [ ] Task categories/tags
- [ ] File attachments
- [ ] Email notifications
- [ ] Calendar integration
- [ ] Dark mode toggle
- [ ] Task templates
- [ ] Export/import functionality
- [ ] Mobile app (React Native)
- [ ] Advanced analytics

---

**Built with ❤️ using modern web technologies** 