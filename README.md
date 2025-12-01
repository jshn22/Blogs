# Personal Blog Website

A fully responsive personal blog website built with React and modern design principles.

## 🌟 Features

- **35 Blog Posts** across multiple categories (10 NEW posts added!)
- **Frontend-Only Architecture** - No backend required, all data loaded from local files
- **Fully Responsive Design** - Works beautifully on all devices
- **Modern UI/UX** - Professional design with smooth animations
- **Category Filtering** - Filter posts by Lifestyle, Career, Travel, Wellness, and Fashion
- **Featured Posts** - Showcase your best content on the homepage (15 featured posts)
- **Related Posts** - Smart recommendations based on category
- **SEO-Friendly** - Semantic HTML and proper structure

## 📁 Project Structure

```
Blog/
├── api/                    # Backend API (optional - not used in current setup)
│   ├── data/
│   │   └── blogs.js
│   ├── routes/
│   │   └── blogs.js
│   ├── package.json
│   └── server.js
│
└── client/                 # Frontend React Application
    ├── public/
    ├── src/
    │   ├── components/     # Reusable components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── BlogCard.jsx
    │   │   └── Footer.jsx
    │   ├── pages/         # Main pages
    │   │   ├── Home.jsx
    │   │   ├── Blog.jsx
    │   │   ├── BlogPost.jsx
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   ├── data/          # Blog data
    │   │   └── blogData.js
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📝 Blog Content

The website includes **35 diverse blog posts** covering:

### Categories:
- **Lifestyle** (8 posts) - Minimalism, Digital Detox, Productivity, Writing, Gardening, Zero Waste
- **Career** (5 posts) - Remote Work, Home Office, Side Hustles, Freelancing, Personal Branding  
- **Travel** (8 posts) - Photography, Budget Travel, Backpacking, Hiking, Packing, Solo Travel, Road Trips, Sustainable Travel
- **Wellness** (7 posts) - Morning Routines, Mindful Eating, Yoga, Meditation, Fasting, Strength Training
- **Fashion** (8 posts) - Sustainable Fashion, Capsule Wardrobe, Vintage Thrifting, Street Style, Jewelry, Denim, Color Analysis, Accessories

### Featured Posts:
- 15 carefully selected featured articles appear on the homepage
- Each post includes rich HTML content, high-quality images, tags, and reading time
- Topics range from practical guides to inspirational stories

## 🎨 Design Highlights

- **Color Palette**: Deep blue primary, orange accent, light blue highlights
- **Typography**: Playfair Display (headings) + Inter (body)
- **Layout**: Grid-based responsive design
- **Animations**: Smooth transitions and hover effects
- **Images**: High-quality Unsplash photos

## 📱 Pages

1. **Home** - Hero section, featured posts, newsletter CTA
2. **Blog** - All posts with category filtering
3. **Blog Post** - Full article view with related posts
4. **About** - Personal introduction and values
5. **Contact** - Contact form and information

## 🛠️ Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **Google Fonts** - Playfair Display & Inter

## 📦 Build for Production

```bash
cd client
npm run build
```

The optimized production build will be created in the `dist` folder.

## 🔧 Customization

### Adding More Blog Posts

Edit `client/src/data/blogData.js` and add new blog objects to the array:

```javascript
{
  id: 26,
  title: "Your Post Title",
  slug: "your-post-slug",
  excerpt: "Brief description...",
  content: `<h2>Your HTML content...</h2>`,
  image: "https://your-image-url.jpg",
  author: "Author Name",
  date: "November 29, 2024",
  category: "Lifestyle",
  tags: ["tag1", "tag2"],
  featured: true,
  readTime: "5 min read"
}
```

### Changing Colors

Update CSS variables in `client/src/index.css`:

```css
:root {
  --primary-color: #2c3e50;
  --secondary-color: #e67e22;
  --accent-color: #3498db;
  /* ... more variables */
}
```

### Modifying Layout

Components are modular and can be easily customized:
- `components/` - Reusable UI components
- `pages/` - Page-specific layouts
- Each component has its own CSS file for styling

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork, modify, and use this project for your own blog!

## 📧 Contact

For questions or suggestions, use the contact form on the website.

---

**Built with ❤️ using React and modern web technologies**
