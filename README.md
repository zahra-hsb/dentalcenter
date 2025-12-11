# Dental Center

A modern dental clinic management system built with Next.js, featuring appointment booking, blog management, image galleries, and a comprehensive admin dashboard.

## ✨ Features

- **Appointment Booking System** - Allow patients to book appointments online with real-time availability
- **Blog & Articles** - Rich text editor (CKEditor 5) for creating and managing dental health articles
- **Image Gallery** - AWS S3 integration for storing and managing dental procedure images
- **Admin Dashboard** - Comprehensive admin panel for managing appointments, content, and users
- **Patient Management** - Store and manage patient information securely
- **Form Validation** - React Hook Form for robust client-side validation
- **Email Notifications** - EmailJS integration for appointment confirmations and updates
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Image Optimization** - Sharp for processing and optimizing medical images
- **Pagination** - React Paginate for efficient data browsing
- **State Management** - Zustand for lightweight state management
- **Slider/Carousel** - Swiper for showcasing dental services and testimonials

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14.2.11
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4.1
- **Icons:** React Icons 5.3.0
- **Forms:** React Hook Form 7.53.2
- **State Management:** Zustand 5.0.3
- **Carousel:** Swiper 11.1.14
- **Pagination:** React Paginate 8.2.0

### Rich Text Editor
- **CKEditor:** CKEditor 5 React 9.3.1 with Premium Features 43.2.0
- **Features:** Advanced text formatting, image upload, tables, media embed

### Backend & Database
- **Database:** MongoDB 6.10.0 with Mongoose 8.8.1
- **API Requests:** Axios 1.7.7
- **Authentication:** bcrypt 5.1.1 for password hashing
- **File Storage:** AWS S3 via aws-sdk 2.1692.0 and @aws-sdk/client-s3 3.779.0

### Additional Services
- **Email:** EmailJS Browser 4.4.1, EmailJS-com 3.2.0
- **Image Processing:** Sharp 0.33.5
- **Database Management:** Mongosh 2.3.8

## 📋 Prerequisites

Before you begin, ensure you have the following:
- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun
- MongoDB (local or cloud instance)
- AWS account with S3 bucket configured
- EmailJS account for email notifications

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zahra-hsb/dentalcenter.git
   cd dentalcenter
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB
   MONGODB_URI=your_mongodb_connection_string
   
   # AWS S3
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   AWS_REGION=your_aws_region
   AWS_S3_BUCKET_NAME=your_bucket_name
   NEXT_PUBLIC_S3_BASE_URL=https://your-bucket.s3.amazonaws.com
   
   # EmailJS
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   
   # Application
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   
   # Security
   JWT_SECRET=your_jwt_secret_key
   BCRYPT_SALT_ROUNDS=10
   ```

4. **Start MongoDB**

   Ensure your MongoDB instance is running and accessible.

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
dentalcenter/
├── public/             # Static assets (images, icons, logos)
├── src/
│   ├── app/           # Next.js app directory (pages, layouts, API routes)
│   ├── components/    # React components
│   ├── lib/           # Utility functions and database connections
│   ├── models/        # Mongoose schemas
│   ├── store/         # Zustand store configurations
│   └── styles/        # Global styles
├── .eslintrc.json     # ESLint configuration
├── .gitignore         # Git ignore rules
├── jsconfig.json      # JavaScript configuration
├── liara.json         # Liara deployment configuration
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.mjs # PostCSS configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## ⚙️ Configuration

### MongoDB Setup

You can use:
- **Local MongoDB:** Install MongoDB locally and use `mongodb://localhost:27017/dentalcenter`
- **MongoDB Atlas:** Create a free cluster at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

### AWS S3 Setup

1. Create an AWS account at [aws.amazon.com](https://aws.amazon.com/)
2. Create an S3 bucket for storing images
3. Configure bucket permissions for public read access (for public images)
4. Create IAM user with S3 access permissions
5. Copy Access Key ID and Secret Access Key to your `.env.local`

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template for appointment notifications
4. Copy your Service ID, Template ID, and Public Key

### CKEditor Configuration

CKEditor 5 is pre-configured with premium features. For custom configurations:
- Edit CKEditor settings in your blog/article components
- Configure image upload to use AWS S3
- Customize toolbar and plugins as needed

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Features Breakdown

### Appointment System
- Online booking with date/time selection
- Email confirmations via EmailJS
- Admin dashboard for managing appointments
- Patient information collection and storage

### Blog Management
- Rich text editor with CKEditor 5
- Premium features: image upload, tables, media embed
- CRUD operations for articles
- Image hosting on AWS S3
- Pagination for blog listing

### Image Gallery
- Upload and manage dental procedure images
- AWS S3 for scalable storage
- Image optimization with Sharp
- Organized by categories or procedures

### Admin Dashboard
- Manage appointments, patients, and content
- Secure authentication with bcrypt
- User role management
- Analytics and reporting

## 🚀 Deployment

### Deploy to Vercel

The easiest deployment option for Next.js applications:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zahra-hsb/dentalcenter)

1. Push your code to GitHub
2. Import repository to Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy

**Live Demo:** [dentalcenter.vercel.app](https://dentalcenter.vercel.app)

### Deploy to Liara

This project includes `liara.json` configuration for Liara deployment:

1. Install Liara CLI:
   ```bash
   npm install -g @liara/cli
   ```

2. Login to Liara:
   ```bash
   liara login
   ```

3. Deploy:
   ```bash
   liara deploy
   ```

## 🔐 Environment Variables

Required environment variables for deployment:

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `AWS_ACCESS_KEY_ID` | AWS access key for S3 | Yes |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key for S3 | Yes |
| `AWS_REGION` | AWS region (e.g., us-east-1) | Yes |
| `AWS_S3_BUCKET_NAME` | S3 bucket name | Yes |
| `NEXT_PUBLIC_S3_BASE_URL` | Public S3 bucket URL | Yes |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID | Yes |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID | Yes |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key | Yes |
| `JWT_SECRET` | Secret key for JWT tokens | Yes |
| `BCRYPT_SALT_ROUNDS` | Salt rounds for password hashing | Optional |

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.2.11 | React framework |
| react | ^18 | UI library |
| mongodb | ^6.10.0 | Database driver |
| mongoose | ^8.8.1 | MongoDB ODM |
| @aws-sdk/client-s3 | ^3.779.0 | AWS S3 integration |
| @ckeditor/ckeditor5-react | ^9.3.1 | Rich text editor |
| @emailjs/browser | ^4.4.1 | Email service |
| axios | ^1.7.7 | HTTP client |
| bcrypt | ^5.1.1 | Password hashing |
| react-hook-form | ^7.53.2 | Form validation |
| zustand | ^5.0.3 | State management |
| swiper | ^11.1.14 | Carousel/slider |
| sharp | ^0.33.5 | Image processing |
| tailwindcss | ^3.4.1 | CSS framework |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify your MongoDB URI is correct
- Ensure MongoDB is running and accessible
- Check firewall/network settings
- For MongoDB Atlas, whitelist your IP address

### AWS S3 Upload Issues
- Verify AWS credentials are correct
- Check S3 bucket permissions and CORS settings
- Ensure bucket policy allows public read (if needed)
- Verify IAM user has necessary S3 permissions

### EmailJS Issues
- Confirm Service ID, Template ID, and Public Key are correct
- Check EmailJS dashboard for usage limits
- Verify email service connection (Gmail, Outlook, etc.)
- Test with EmailJS dashboard before integrating

### CKEditor Issues
- Ensure all CKEditor packages are installed
- Check for console errors related to CKEditor
- Verify image upload endpoint is working
- Clear browser cache if editor doesn't load

### Build Issues
- Delete `node_modules` and `.next` folders
- Run `npm install` again
- Check Node.js version (18.0 or higher required)
- Verify all environment variables are set

## 🔒 Security Best Practices

- Never commit `.env.local` file to version control
- Keep AWS credentials secure and rotate regularly
- Use strong JWT secrets
- Implement rate limiting for API endpoints
- Validate and sanitize all user inputs
- Use HTTPS in production
- Regularly update dependencies for security patches
- Implement proper authentication and authorization
- Sanitize CKEditor content before storing in database

## 📱 Mobile Responsiveness

The application is fully responsive and optimized for:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🎨 Customization

### Branding
- Update logo and favicon in `/public` folder
- Modify color scheme in `tailwind.config.js`
- Customize typography and spacing

### Content
- Edit homepage content in `src/app/page.js`
- Modify service listings and descriptions
- Update contact information and clinic details

### Features
- Add new appointment types
- Customize form fields
- Add new admin dashboard sections
- Extend blog categories and tags

## 📄 License

This project is private and not licensed for public use.

## 📞 Support

For support and questions:
- Open an issue on GitHub
- Contact via the website's contact form
- Email support through EmailJS integration

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Rich text editing powered by [CKEditor 5](https://ckeditor.com/)
- Image storage via [AWS S3](https://aws.amazon.com/s3/)
- Email service by [EmailJS](https://www.emailjs.com/)
- Database powered by [MongoDB](https://www.mongodb.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Made with care by [zahra-hsb](https://github.com/zahra-hsb)**
