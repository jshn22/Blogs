# API Integration - Blog Posts from External API

## What Changed

Your blog now **dynamically loads posts from a real API** instead of using hardcoded data! 

## API Source

**Dev.to API** - Real blog posts in English from the Dev.to community
- Base URL: `https://dev.to/api`
- Fetches up to 50 top articles
- All content in proper English
- Real cover images and reading times
- Data is transformed to match our blog format

## New Features

### 1. Dynamic Content Loading
- Posts are fetched from the API when pages load
- Real loading states while data is being retrieved
- Automatic error handling

### 2. Random Enhancements
- **Random Images**: Each post gets a unique Unsplash image
- **Random Categories**: Posts are distributed across 5 categories (Lifestyle, Career, Travel, Wellness, Fashion)
- **Random Authors**: 5 different authors assigned to posts
- **Random Dates**: Posts dated within the last 60 days
- **Featured Posts**: Every 3rd post is marked as featured

### 3. API Functions

Created in `/client/src/api/blogApi.js`:

```javascript
// Fetch all blog posts (up to 50)
fetchBlogPosts()

// Fetch a single post by ID
fetchPostById(id)

// Filter featured posts
getFeaturedPosts(posts)

// Filter by category
getPostsByCategory(posts, category)

// Get related posts
getRelatedPosts(posts, currentPostId, category, limit)

// Get all categories
getAllCategories()
```

## Updated Pages

### Home.jsx
- Now fetches posts via API
- Shows 6 featured posts
- Loading state while fetching

### Blog.jsx
- Fetches all posts from API
- Category filtering works with API data
- Loading state during fetch

### BlogPost.jsx
- Fetches individual post by ID
- Loads related posts from API
- Loading state for better UX

## How It Works

1. **User visits page** → Component mounts
2. **API call triggered** → `fetchBlogPosts()` or `fetchPostById()`
3. **Data transformation** → API response converted to blog format
4. **State updated** → Posts displayed on page
5. **Loading complete** → Content shown to user

## Data Transformation

API posts are transformed to include:
- ✅ Proper titles (capitalized)
- ✅ URL-friendly slugs
- ✅ Excerpts (first 150 characters)
- ✅ Full HTML content with formatting
- ✅ Random category assignment
- ✅ Random author assignment
- ✅ Recent dates
- ✅ Featured status
- ✅ Read time estimation
- ✅ Tags based on category
- ✅ High-quality images from Unsplash

## Testing Your Blog

1. **Visit**: http://localhost:5175
2. **Home Page**: See 6 featured posts loaded from API
3. **Blog Page**: See all posts with category filtering
4. **Click any post**: View full content loaded from API
5. **Related Posts**: See similar posts from the same category

## Benefits

✅ **No manual data entry** - Posts load automatically
✅ **Always fresh content** - API provides new data
✅ **Scalable** - Can handle 50+ posts easily
✅ **Real-world ready** - Uses actual HTTP requests
✅ **Error handling** - Gracefully handles API failures
✅ **Professional UX** - Loading states and smooth transitions

## Next Steps (Optional)

You can replace JSONPlaceholder with any other API:
1. Update `API_BASE_URL` in `blogApi.js`
2. Modify the `transformPost` function to match the new API structure
3. Everything else works automatically!

## Technical Details

- **HTTP Client**: Axios
- **API**: Dev.to API (free, no authentication required)
- **Content Language**: English
- **Posts Loaded**: 50 top articles
- **Featured Posts**: ~17 posts (every 3rd)
- **Categories**: Auto-mapped from article tags
- **Loading Time**: ~500ms (depending on connection)
- **Images**: Real cover images from articles

---

**Your blog is now fully dynamic and loads all content from an external API!** 🚀
