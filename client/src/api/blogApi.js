import axios from 'axios';

// API Configuration - Using Dev.to API for real English blog posts
const API_BASE_URL = 'https://dev.to/api';

const categories = ['Lifestyle', 'Career', 'Travel', 'Wellness', 'Fashion'];
const authors = ['Sarah Mitchell', 'David Chen', 'Emma Rodriguez', 'Lisa Park', 'Michael Zhang'];

// Curated posts to ensure all categories have content
const curatedPosts = [
  {
    id: 99001,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    slug: "hidden-gems-southeast-asia",
    excerpt: "Discover the lesser-known destinations in Southeast Asia that offer authentic experiences away from tourist crowds. From secluded beaches to ancient temples...",
    content: `
      <h2>Exploring Southeast Asia's Best Kept Secrets</h2>
      <p>Southeast Asia is renowned for its popular destinations, but venture off the beaten path and you'll discover hidden gems that offer truly authentic experiences. Here are ten destinations that deserve a spot on your travel bucket list.</p>
      
      <h3>1. Koh Rong Sanloem, Cambodia</h3>
      <p>This pristine island offers crystal-clear waters and bioluminescent plankton. Unlike its busier neighbor, Koh Rong Sanloem maintains a tranquil atmosphere perfect for relaxation and disconnecting from the digital world.</p>
      
      <h3>2. Pai, Thailand</h3>
      <p>Nestled in the mountains of Northern Thailand, Pai is a bohemian paradise with hot springs, waterfalls, and a laid-back vibe that attracts digital nomads and backpackers alike.</p>
      
      <h3>3. Ninh Binh, Vietnam</h3>
      <p>Often called "Halong Bay on land," this stunning region features limestone karsts, ancient temples, and peaceful rice paddies. Explore by bicycle or take a traditional boat ride through the caves.</p>
      
      <h3>Tips for Traveling Off the Beaten Path</h3>
      <ul>
        <li>Learn basic phrases in the local language</li>
        <li>Respect local customs and traditions</li>
        <li>Travel during shoulder season for better weather and fewer crowds</li>
        <li>Stay in locally-owned accommodations</li>
        <li>Be flexible with your itinerary</li>
      </ul>
      
      <p>These hidden gems offer unforgettable experiences that go beyond typical tourist attractions. Pack your bags and prepare for adventure!</p>
    `,
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    author: "Emma Rodriguez",
    date: "November 15, 2025",
    category: "Travel",
    tags: ["travel", "asia", "adventure"],
    featured: true,
    readTime: "6 min read"
  },
  {
    id: 99002,
    title: "Solo Female Travel: Essential Safety Tips and Empowering Stories",
    slug: "solo-female-travel-safety-tips",
    excerpt: "Practical advice and inspiring stories for women traveling alone. Learn how to stay safe, meet people, and embrace the freedom of solo adventure...",
    content: `
      <h2>Empowering Solo Female Travel</h2>
      <p>Traveling alone as a woman can be one of the most liberating and transformative experiences of your life. With proper preparation and awareness, you can explore the world confidently and safely.</p>
      
      <h3>Essential Safety Tips</h3>
      <ul>
        <li>Share your itinerary with trusted friends or family</li>
        <li>Trust your instincts - if something feels wrong, leave</li>
        <li>Keep important documents and emergency cash in multiple locations</li>
        <li>Research your destination's cultural norms and dress codes</li>
        <li>Stay in well-reviewed accommodations in safe neighborhoods</li>
        <li>Avoid walking alone late at night in unfamiliar areas</li>
      </ul>
      
      <h3>Building Confidence</h3>
      <p>Start with shorter trips to build your confidence. Join group tours or activities to meet fellow travelers. Many cities have women-only hostels or meetup groups that provide safe spaces for connection.</p>
      
      <h3>The Rewards</h3>
      <p>Solo travel allows you to move at your own pace, pursue your own interests, and discover your inner strength. You'll return home with incredible stories, new skills, and a deeper understanding of yourself and the world.</p>
      
      <p>Remember: millions of women travel solo every year and have amazing experiences. You can too!</p>
    `,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    author: "Sarah Mitchell",
    date: "November 12, 2025",
    category: "Travel",
    tags: ["travel", "solo", "safety"],
    featured: false,
    readTime: "7 min read"
  },
  {
    id: 99003,
    title: "The Ultimate Guide to Mindfulness Meditation for Beginners",
    slug: "mindfulness-meditation-beginners-guide",
    excerpt: "Learn how to start a meditation practice that reduces stress, improves focus, and enhances overall well-being. Simple techniques for busy people...",
    content: `
      <h2>Starting Your Mindfulness Journey</h2>
      <p>In our fast-paced world, mindfulness meditation offers a sanctuary of calm and clarity. Whether you're dealing with stress, anxiety, or simply want to improve your mental well-being, meditation can be a powerful tool.</p>
      
      <h3>What is Mindfulness Meditation?</h3>
      <p>Mindfulness is the practice of being fully present in the moment, observing your thoughts and feelings without judgment. It's not about emptying your mind, but rather becoming aware of your mental patterns.</p>
      
      <h3>Getting Started: A Simple 5-Minute Practice</h3>
      <ol>
        <li><strong>Find a quiet space:</strong> Choose a comfortable spot where you won't be disturbed</li>
        <li><strong>Sit comfortably:</strong> You don't need to sit cross-legged - any comfortable position works</li>
        <li><strong>Focus on your breath:</strong> Notice the sensation of breathing in and out</li>
        <li><strong>Observe your thoughts:</strong> When your mind wanders (and it will), gently return to your breath</li>
        <li><strong>Be patient:</strong> There's no "perfect" meditation - every session is valuable</li>
      </ol>
      
      <h3>Common Challenges and Solutions</h3>
      <ul>
        <li><strong>"My mind won't stop racing":</strong> That's normal! The practice is noticing and returning to the breath</li>
        <li><strong>"I don't have time":</strong> Start with just 2-3 minutes daily. Consistency matters more than duration</li>
        <li><strong>"I feel uncomfortable sitting still":</strong> Try walking meditation or body scan techniques</li>
      </ul>
      
      <h3>Benefits You Can Expect</h3>
      <p>Regular meditation practice can lead to reduced stress, improved sleep, better emotional regulation, enhanced focus, and increased self-awareness. Many practitioners report feeling more calm and centered in their daily lives.</p>
      
      <p>Remember: meditation is a practice, not a perfection. Be kind to yourself as you develop this life-changing skill.</p>
    `,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    author: "Lisa Park",
    date: "November 20, 2025",
    category: "Wellness",
    tags: ["wellness", "meditation", "mindfulness"],
    featured: true,
    readTime: "8 min read"
  },
  {
    id: 99004,
    title: "Building a Sustainable Fitness Routine That Actually Sticks",
    slug: "sustainable-fitness-routine",
    excerpt: "Stop the cycle of starting and quitting. Learn how to create a fitness routine that fits your lifestyle and keeps you motivated long-term...",
    content: `
      <h2>Creating Lasting Fitness Habits</h2>
      <p>We've all been there - starting a new workout routine with enthusiasm, only to abandon it weeks later. The key to sustainable fitness isn't willpower; it's smart planning and realistic expectations.</p>
      
      <h3>Start Small and Build Gradually</h3>
      <p>Forget the "go hard or go home" mentality. Research shows that small, consistent actions lead to lasting change. Start with 10-15 minutes of exercise three times per week, then gradually increase as it becomes habitual.</p>
      
      <h3>Find Activities You Actually Enjoy</h3>
      <p>The best workout is the one you'll actually do. Hate running? Don't force it. Try dancing, swimming, hiking, or group classes. Experiment until you find what feels fun, not like punishment.</p>
      
      <h3>Build It Into Your Existing Routine</h3>
      <ul>
        <li>Morning person? Workout before work</li>
        <li>Lunch break available? Try a midday class</li>
        <li>Evening free time? Wind down with yoga</li>
        <li>No large blocks of time? Split workouts into 10-minute sessions</li>
      </ul>
      
      <h3>Track Progress Beyond the Scale</h3>
      <p>Weight is just one metric. Notice improvements in energy levels, sleep quality, mood, strength, and how your clothes fit. These non-scale victories often provide better motivation.</p>
      
      <h3>Prepare for Setbacks</h3>
      <p>Life happens. You'll miss workouts. Instead of abandoning your routine entirely, plan your comeback. One missed workout doesn't erase your progress - consistency over time is what matters.</p>
      
      <p>Remember: fitness is a lifelong journey, not a temporary fix. Build habits that enhance your life rather than dominate it.</p>
    `,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    author: "Michael Zhang",
    date: "November 18, 2025",
    category: "Wellness",
    tags: ["wellness", "fitness", "health"],
    featured: false,
    readTime: "6 min read"
  },
  {
    id: 99005,
    title: "Backpacking Europe on a Budget: 30 Days for Under $2000",
    slug: "backpacking-europe-budget",
    excerpt: "Comprehensive guide to exploring Europe without breaking the bank. Tips on accommodation, transportation, food, and free attractions...",
    content: `
      <h2>Budget-Friendly European Adventure</h2>
      <p>Think Europe is too expensive? Think again. With smart planning and insider tips, you can experience the magic of Europe without emptying your savings account.</p>
      
      <h3>Transportation: $500</h3>
      <p>Invest in a Eurail pass for unlimited train travel, or book budget airlines like Ryanair and EasyJet in advance. FlixBus offers comfortable intercity travel for as little as €5.</p>
      
      <h3>Accommodation: $600</h3>
      <p>Stay in hostels ($15-25/night), try Couchsurfing for free stays, or book budget hotels outside city centers. Hostels offer more than cheap beds - they're great for meeting fellow travelers.</p>
      
      <h3>Food: $600</h3>
      <p>Shop at local markets, cook in hostel kitchens, and treat yourself to one nice meal per day. Street food and local bakeries offer authentic experiences at low prices.</p>
      
      <h3>Activities: $300</h3>
      <p>Many museums offer free entry days. Walking tours operate on tips. Explore parks, neighborhoods, and beaches for free. Save expensive tours for must-see attractions.</p>
      
      <h3>Must-Visit Budget-Friendly Destinations</h3>
      <ul>
        <li><strong>Prague, Czech Republic:</strong> Beautiful architecture, cheap beer, and affordable everything</li>
        <li><strong>Budapest, Hungary:</strong> Stunning thermal baths, vibrant nightlife, very affordable</li>
        <li><strong>Krakow, Poland:</strong> Rich history, amazing food scene, excellent value</li>
        <li><strong>Porto, Portugal:</strong> Coastal beauty, port wine, lower prices than Lisbon</li>
        <li><strong>Berlin, Germany:</strong> Cultural hub with free museums and affordable living</li>
      </ul>
      
      <h3>Money-Saving Tips</h3>
      <ul>
        <li>Travel during shoulder season (April-May, September-October)</li>
        <li>Pack light to avoid baggage fees</li>
        <li>Get a travel credit card with no foreign transaction fees</li>
        <li>Drink tap water and refill your bottle</li>
        <li>Take advantage of free walking tours</li>
      </ul>
      
      <p>Europe doesn't have to be a luxury - budget travel often leads to the most authentic and memorable experiences!</p>
    `,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    author: "David Chen",
    date: "November 10, 2025",
    category: "Travel",
    tags: ["travel", "budget", "europe"],
    featured: false,
    readTime: "9 min read"
  },
  {
    id: 99006,
    title: "Nutrition Myths Debunked: What Science Really Says",
    slug: "nutrition-myths-debunked",
    excerpt: "Separate fact from fiction in the world of nutrition. Evidence-based insights into common dietary misconceptions and what actually works...",
    content: `
      <h2>The Truth About Nutrition</h2>
      <p>In the age of social media, nutrition advice is everywhere - but much of it is misleading or downright wrong. Let's examine what science actually tells us about healthy eating.</p>
      
      <h3>Myth 1: Carbs Make You Fat</h3>
      <p><strong>Reality:</strong> Excess calories make you gain weight, regardless of source. Whole grains, fruits, and vegetables are healthy carbs that provide essential nutrients and fiber. It's the refined carbs and added sugars that are problematic.</p>
      
      <h3>Myth 2: You Need to Detox</h3>
      <p><strong>Reality:</strong> Your liver and kidneys already detox your body efficiently. "Detox" diets and cleanses are unnecessary and can be harmful. Instead, support your body with whole foods, water, sleep, and exercise.</p>
      
      <h3>Myth 3: Eating Late at Night Causes Weight Gain</h3>
      <p><strong>Reality:</strong> Total calorie intake matters more than timing. Late-night eating often means extra calories, not magical fat storage. Listen to your body's hunger cues throughout the day.</p>
      
      <h3>Myth 4: All Fat is Bad</h3>
      <p><strong>Reality:</strong> Your body needs healthy fats for hormone production, brain function, and nutrient absorption. Avocados, nuts, olive oil, and fatty fish provide essential fatty acids. Trans fats are the ones to avoid.</p>
      
      <h3>What Actually Works</h3>
      <ul>
        <li>Eat mostly whole, minimally processed foods</li>
        <li>Include plenty of vegetables and fruits</li>
        <li>Choose whole grains over refined grains</li>
        <li>Include lean proteins and healthy fats</li>
        <li>Stay hydrated with water</li>
        <li>Practice mindful eating and portion awareness</li>
        <li>Allow yourself occasional treats without guilt</li>
      </ul>
      
      <h3>The Bottom Line</h3>
      <p>There's no one "perfect" diet. The best eating pattern is one that includes nutrient-dense foods you enjoy, fits your lifestyle, and can be maintained long-term. Be skeptical of extreme claims and focus on sustainable, balanced eating.</p>
    `,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
    author: "Lisa Park",
    date: "November 8, 2025",
    category: "Wellness",
    tags: ["wellness", "nutrition", "health"],
    featured: true,
    readTime: "7 min read"
  },
  {
    id: 99007,
    title: "A Digital Nomad's Guide to Working While Traveling the World",
    slug: "digital-nomad-guide-working-traveling",
    excerpt: "Everything you need to know about maintaining a career while exploring the globe. From choosing destinations to staying productive on the road...",
    content: `
      <h2>The Digital Nomad Lifestyle</h2>
      <p>Thanks to remote work revolution, millions of people are now living the dream of working from anywhere. But successful digital nomadism requires planning, discipline, and the right mindset.</p>
      
      <h3>Best Digital Nomad Destinations</h3>
      <ul>
        <li><strong>Bali, Indonesia:</strong> Affordable, great wifi, vibrant community. Canggu and Ubud are nomad hotspots</li>
        <li><strong>Chiang Mai, Thailand:</strong> Low cost of living, coworking spaces, amazing food scene</li>
        <li><strong>Lisbon, Portugal:</strong> European base, beautiful city, growing tech scene</li>
        <li><strong>Medellín, Colombia:</strong> Spring-like weather year-round, affordable, friendly locals</li>
        <li><strong>Mexico City, Mexico:</strong> Cultural richness, great food, strong nomad community</li>
      </ul>
      
      <h3>Essential Tools and Setup</h3>
      <p><strong>Tech:</strong> Reliable laptop, backup hard drive, universal power adapter, portable wifi hotspot, noise-canceling headphones</p>
      <p><strong>Software:</strong> VPN for security, time zone converter, project management tools, communication apps (Slack, Zoom)</p>
      <p><strong>Banking:</strong> Cards with no foreign transaction fees, international money transfer services, emergency cash reserves</p>
      
      <h3>Staying Productive on the Road</h3>
      <ul>
        <li>Establish a routine and stick to it</li>
        <li>Choose accommodation with good wifi and workspace</li>
        <li>Join coworking spaces to meet other professionals</li>
        <li>Set boundaries between work and exploration time</li>
        <li>Communicate clearly with clients about time zones</li>
        <li>Have backup plans for internet outages</li>
      </ul>
      
      <h3>Common Challenges and Solutions</h3>
      <p><strong>Loneliness:</strong> Join digital nomad communities, attend meetups, stay in coliving spaces</p>
      <p><strong>Time zones:</strong> Plan your schedule to overlap with clients, use scheduling tools</p>
      <p><strong>Visa issues:</strong> Research visa requirements, consider visa runs, explore digital nomad visas</p>
      <p><strong>Work-life balance:</strong> Set clear working hours, create dedicated workspace, take regular breaks</p>
      
      <h3>Financial Considerations</h3>
      <p>Budget $1,500-3,000/month depending on location. Include accommodation, food, coworking, travel insurance, visas, entertainment, and emergency funds. Track expenses and maintain 3-6 months of savings.</p>
      
      <p>The digital nomad lifestyle isn't for everyone, but for those who value freedom and adventure, it can be incredibly rewarding. Start with a trial run before committing fully!</p>
    `,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80",
    author: "Sarah Mitchell",
    date: "November 25, 2025",
    category: "Travel",
    tags: ["travel", "digital nomad", "remote work"],
    featured: false,
    readTime: "10 min read"
  },
  {
    id: 99008,
    title: "Island Hopping in Greece: The Ultimate 2-Week Itinerary",
    slug: "greece-island-hopping-itinerary",
    excerpt: "Explore the magic of Greek islands with this comprehensive guide. From Santorini's sunsets to Mykonos nightlife, plan your perfect Aegean adventure...",
    content: `
      <h2>The Greek Islands Await</h2>
      <p>Greece's islands offer a perfect blend of ancient history, stunning beaches, delicious cuisine, and vibrant culture. Here's how to experience the best of them in two unforgettable weeks.</p>
      
      <h3>Week 1: Cyclades Islands</h3>
      
      <h4>Days 1-3: Santorini</h4>
      <p>Start in the iconic Santorini. Watch sunset in Oia, explore black sand beaches, visit ancient Akrotiri, and sample local wines. Stay in a cave hotel in Imerovigli for the best views without Oia's crowds.</p>
      
      <h4>Days 4-5: Naxos</h4>
      <p>Take a ferry to Naxos, the Cyclades' hidden gem. Explore mountain villages, visit Apollo's Temple, relax on endless sandy beaches, and try authentic Greek cuisine at family-run tavernas.</p>
      
      <h4>Days 6-7: Mykonos</h4>
      <p>Experience Mykonos' famous nightlife, beautiful beaches, and charming old town. Visit nearby Delos, the mythological birthplace of Apollo. Party at beach clubs or find quiet spots in the north.</p>
      
      <h3>Week 2: Dodecanese and Crete</h3>
      
      <h4>Days 8-10: Rhodes</h4>
      <p>Fly to Rhodes and explore the medieval old town (UNESCO site), ancient Lindos, and pristine beaches. Rent a car to discover hidden coves and traditional villages.</p>
      
      <h4>Days 11-14: Crete</h4>
      <p>End in Greece's largest island. Visit Knossos Palace, hike Samaria Gorge, relax in Elafonisi's pink sands, and feast on authentic Cretan cuisine. Base yourself in Chania for the perfect mix of beach and culture.</p>
      
      <h3>Practical Tips</h3>
      <ul>
        <li><strong>Ferries:</strong> Book in advance during peak season (June-August). Consider ferry passes for flexibility</li>
        <li><strong>Accommodation:</strong> Book early for Santorini and Mykonos. Consider smaller islands for better value</li>
        <li><strong>Best time:</strong> May-June or September-October for good weather and fewer crowds</li>
        <li><strong>Budget:</strong> €80-150/day including accommodation, food, transport, and activities</li>
        <li><strong>Packing:</strong> Reef-safe sunscreen, comfortable walking shoes, light layers for evenings</li>
      </ul>
      
      <h3>Local Food You Must Try</h3>
      <p>Don't miss: Greek salad (horiatiki), moussaka, fresh seafood, souvlaki, fava, dakos, baklava, and local wines. Eat where locals eat for authentic experiences and better prices.</p>
      
      <p>Greece's islands offer something for everyone - romance, adventure, history, or relaxation. This itinerary provides a perfect introduction to Aegean paradise!</p>
    `,
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    author: "Emma Rodriguez",
    date: "November 22, 2025",
    category: "Travel",
    tags: ["travel", "greece", "islands"],
    featured: true,
    readTime: "8 min read"
  },
  {
    id: 99009,
    title: "Sustainable Travel: How to Explore the World Responsibly",
    slug: "sustainable-travel-guide",
    excerpt: "Make your travels eco-friendly and support local communities. Practical tips for reducing your environmental impact while still having amazing adventures...",
    content: `
      <h2>Travel That Makes a Positive Impact</h2>
      <p>Tourism can harm or help destinations. By making conscious choices, you can explore the world while protecting it for future generations and supporting local communities.</p>
      
      <h3>Transportation Choices</h3>
      <p><strong>Reduce Flying:</strong> When possible, travel overland. Trains, buses, and boats have lower carbon footprints. If you must fly, choose direct flights and economy class, offset carbon emissions, and stay longer to justify the journey.</p>
      <p><strong>Local Transport:</strong> Walk, bike, or use public transportation. It's better for the environment and gives you authentic local experiences.</p>
      
      <h3>Accommodation</h3>
      <ul>
        <li>Choose eco-certified hotels or homestays</li>
        <li>Support locally-owned businesses over international chains</li>
        <li>Look for properties with solar power, water conservation, and waste reduction</li>
        <li>Bring reusable toiletries instead of using single-use hotel amenities</li>
        <li>Reuse towels and decline daily housekeeping when appropriate</li>
      </ul>
      
      <h3>Activities and Experiences</h3>
      <p><strong>Avoid:</strong> Animal entertainment (elephant rides, dolphin shows, tiger selfies), over-touristed sites during peak times, exploitative "voluntourism"</p>
      <p><strong>Choose:</strong> Wildlife viewing in natural habitats, local guides and tour operators, cultural experiences that respect traditions, activities that give back to communities</p>
      
      <h3>Reduce Plastic and Waste</h3>
      <ul>
        <li>Carry a reusable water bottle with filter</li>
        <li>Bring a shopping bag for markets and purchases</li>
        <li>Use reef-safe sunscreen</li>
        <li>Pack reusable utensils and straws</li>
        <li>Say no to plastic bags and unnecessary packaging</li>
        <li>Dispose of waste properly and participate in beach cleanups</li>
      </ul>
      
      <h3>Support Local Economies</h3>
      <p>Eat at local restaurants, shop at markets, hire local guides, buy authentic handicrafts directly from artisans, and learn basic phrases in the local language. Your money should benefit the community you're visiting.</p>
      
      <h3>Respect Culture and Nature</h3>
      <ul>
        <li>Research cultural norms before visiting</li>
        <li>Dress appropriately for religious sites</li>
        <li>Ask permission before photographing people</li>
        <li>Stay on marked trails and respect wildlife</li>
        <li>Leave no trace - take only photos, leave only footprints</li>
        <li>Support conservation efforts through responsible tourism fees</li>
      </ul>
      
      <h3>The Slow Travel Philosophy</h3>
      <p>Instead of rushing through multiple countries, spend more time in fewer places. You'll reduce your carbon footprint, have deeper experiences, and better understand local life. Quality over quantity creates more meaningful travel.</p>
      
      <p>Sustainable travel isn't about perfection - it's about making better choices whenever possible. Every small action contributes to preserving our beautiful planet!</p>
    `,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    author: "David Chen",
    date: "November 5, 2025",
    category: "Travel",
    tags: ["travel", "sustainability", "eco-friendly"],
    featured: false,
    readTime: "9 min read"
  },
  {
    id: 99010,
    title: "Sleep Better Tonight: Science-Based Strategies for Quality Rest",
    slug: "sleep-better-quality-rest-strategies",
    excerpt: "Transform your sleep quality with evidence-based techniques. From creating the perfect bedroom environment to optimizing your sleep schedule...",
    content: `
      <h2>The Foundation of Wellness</h2>
      <p>Quality sleep is essential for physical health, mental clarity, emotional regulation, and overall well-being. Yet millions struggle with sleep issues. Here's how to finally get the rest you deserve.</p>
      
      <h3>The Science of Sleep</h3>
      <p>Adults need 7-9 hours of sleep per night. During sleep, your body repairs tissues, consolidates memories, regulates hormones, and strengthens immunity. Chronic sleep deprivation increases risks of obesity, diabetes, heart disease, and mental health issues.</p>
      
      <h3>Create the Perfect Sleep Environment</h3>
      <ul>
        <li><strong>Temperature:</strong> Keep your bedroom cool (60-67°F/15-19°C)</li>
        <li><strong>Darkness:</strong> Use blackout curtains or an eye mask. Even small amounts of light disrupt sleep</li>
        <li><strong>Quiet:</strong> Try white noise, earplugs, or a fan to block disruptive sounds</li>
        <li><strong>Comfort:</strong> Invest in a quality mattress and pillows that support your sleep position</li>
        <li><strong>Clean air:</strong> Good ventilation or an air purifier improves sleep quality</li>
      </ul>
      
      <h3>Optimize Your Sleep Schedule</h3>
      <p><strong>Consistency is key:</strong> Go to bed and wake up at the same time every day, even weekends. Your body's circadian rhythm thrives on routine.</p>
      <p><strong>Wind-down routine:</strong> Start preparing for sleep 30-60 minutes before bed. Dim lights, avoid screens, do calming activities like reading or gentle stretching.</p>
      
      <h3>What to Avoid</h3>
      <ul>
        <li><strong>Caffeine:</strong> No coffee, tea, or chocolate after 2 PM. Effects last 6+ hours</li>
        <li><strong>Alcohol:</strong> While it helps you fall asleep, it disrupts sleep quality and REM cycles</li>
        <li><strong>Large meals:</strong> Finish dinner 2-3 hours before bed. Light snacks are okay</li>
        <li><strong>Screen time:</strong> Blue light suppresses melatonin. Use night mode or stop screens 1-2 hours before bed</li>
        <li><strong>Exercise:</strong> Great for sleep, but not within 3 hours of bedtime as it's too stimulating</li>
        <li><strong>Naps:</strong> If needed, keep them short (20-30 minutes) and before 3 PM</li>
      </ul>
      
      <h3>Natural Sleep Aids</h3>
      <p><strong>Magnesium:</strong> Supports relaxation and sleep. Found in nuts, seeds, leafy greens, or supplements.</p>
      <p><strong>Chamomile tea:</strong> Mild sedative properties, safe and soothing.</p>
      <p><strong>Lavender:</strong> Aromatherapy with lavender oil can improve sleep quality.</p>
      <p><strong>Melatonin:</strong> Can help with jet lag or shift work. Start with low doses (0.5-3mg).</p>
      
      <h3>Cognitive Techniques</h3>
      <ul>
        <li>Practice progressive muscle relaxation</li>
        <li>Try the 4-7-8 breathing technique</li>
        <li>Use guided sleep meditations</li>
        <li>Keep a worry journal to clear your mind</li>
        <li>Visualize peaceful, calming scenes</li>
      </ul>
      
      <h3>When to See a Doctor</h3>
      <p>If sleep problems persist despite lifestyle changes, consult a healthcare provider. You may have a sleep disorder like insomnia, sleep apnea, or restless leg syndrome that requires treatment.</p>
      
      <p>Remember: improving sleep is a gradual process. Implement changes one at a time, be patient, and prioritize your sleep health. Your entire life will benefit!</p>
    `,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80",
    author: "Lisa Park",
    date: "November 27, 2025",
    category: "Wellness",
    tags: ["wellness", "sleep", "health"],
    featured: false,
    readTime: "9 min read"
  },
  {
    id: 99011,
    title: "Yoga for Beginners: A Complete Guide to Starting Your Practice",
    slug: "yoga-beginners-complete-guide",
    excerpt: "Everything you need to know to start yoga, from choosing a style to mastering basic poses. Build strength, flexibility, and inner peace...",
    content: `
      <h2>Begin Your Yoga Journey</h2>
      <p>Yoga is more than just physical exercise - it's a holistic practice that benefits body, mind, and spirit. Whether you're seeking stress relief, flexibility, or spiritual growth, yoga has something to offer everyone.</p>
      
      <h3>Choosing Your Yoga Style</h3>
      <p><strong>Hatha:</strong> Perfect for beginners. Gentle, focuses on basic poses and breathing. Great foundation for all other styles.</p>
      <p><strong>Vinyasa:</strong> Flowing sequences that link movement with breath. More dynamic and cardio-intensive.</p>
      <p><strong>Yin:</strong> Slow-paced, holds poses for longer periods. Excellent for flexibility and meditation.</p>
      <p><strong>Restorative:</strong> Ultra-gentle, using props for support. Ideal for stress relief and recovery.</p>
      <p><strong>Bikram/Hot Yoga:</strong> Practiced in heated room. Intense, promotes sweating and flexibility.</p>
      
      <h3>Essential Equipment</h3>
      <ul>
        <li><strong>Yoga mat:</strong> Non-slip, cushioned, appropriate thickness (4-6mm)</li>
        <li><strong>Comfortable clothing:</strong> Stretchy, breathable, not too loose</li>
        <li><strong>Props (optional):</strong> Blocks, straps, bolsters for modifications</li>
        <li><strong>Water bottle:</strong> Stay hydrated, especially in heated classes</li>
      </ul>
      
      <h3>Basic Poses for Beginners</h3>
      
      <h4>1. Mountain Pose (Tadasana)</h4>
      <p>Foundation of all standing poses. Stand tall, feet together, weight evenly distributed, arms at sides. Focus on alignment and grounding.</p>
      
      <h4>2. Downward-Facing Dog (Adho Mukha Svanasana)</h4>
      <p>Inverted V-shape. Hands and feet on mat, hips raised. Strengthens arms and stretches hamstrings. Bend knees if needed.</p>
      
      <h4>3. Child's Pose (Balasana)</h4>
      <p>Resting pose. Kneel, sit on heels, fold forward, arms extended. Safe resting position anytime during practice.</p>
      
      <h4>4. Cat-Cow (Marjaryasana-Bitilasana)</h4>
      <p>On hands and knees, alternate arching and rounding spine. Warms up spine, improves flexibility.</p>
      
      <h4>5. Warrior I (Virabhadrasana I)</h4>
      <p>Standing pose. One leg forward in lunge, back leg straight, arms overhead. Builds strength and stability.</p>
      
      <h3>Breathing Techniques (Pranayama)</h3>
      <p><strong>Ujjayi breath:</strong> Ocean-sounding breath through nose. Creates heat and focus.</p>
      <p><strong>Three-part breath:</strong> Fill belly, ribs, chest sequentially. Promotes relaxation.</p>
      <p><strong>Alternate nostril breathing:</strong> Balances energy, calms nervous system.</p>
      
      <h3>Tips for Success</h3>
      <ul>
        <li>Start with beginner classes or videos</li>
        <li>Practice on empty stomach (2-3 hours after meals)</li>
        <li>Listen to your body - never force poses</li>
        <li>Focus on breath, not perfection</li>
        <li>Modify poses using props as needed</li>
        <li>Be patient - flexibility and strength develop gradually</li>
        <li>Practice regularly, even just 10-15 minutes daily</li>
        <li>Join a class for proper form instruction</li>
      </ul>
      
      <h3>Common Beginner Mistakes</h3>
      <ul>
        <li>Comparing yourself to others - yoga is personal</li>
        <li>Holding your breath - breath is central to practice</li>
        <li>Pushing too hard - respect your limits</li>
        <li>Skipping savasana (final relaxation) - crucial for integration</li>
        <li>Inconsistent practice - regularity matters more than duration</li>
      </ul>
      
      <h3>Beyond Physical Practice</h3>
      <p>Yoga philosophy teaches mindfulness, compassion, and presence. As you progress, explore meditation, study yoga philosophy, and notice how practice affects your daily life.</p>
      
      <p>Remember: yoga is a journey, not a destination. Every practice is an opportunity to connect with yourself. Namaste!</p>
    `,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    author: "Sarah Mitchell",
    date: "November 14, 2025",
    category: "Wellness",
    tags: ["wellness", "yoga", "fitness"],
    featured: true,
    readTime: "10 min read"
  },
  {
    id: 99012,
    title: "Mental Health Matters: Breaking the Stigma and Seeking Help",
    slug: "mental-health-breaking-stigma",
    excerpt: "An honest conversation about mental health, recognizing warning signs, and finding support. You're not alone, and help is available...",
    content: `
      <h2>Your Mental Health Journey</h2>
      <p>Mental health is just as important as physical health, yet it's often neglected or stigmatized. Understanding mental wellness and knowing when to seek help can be life-changing.</p>
      
      <h3>Understanding Mental Health</h3>
      <p>Mental health exists on a spectrum. Everyone experiences ups and downs. Mental health challenges are common, treatable, and nothing to be ashamed of. They're medical conditions, not character flaws or weaknesses.</p>
      
      <h3>Common Mental Health Conditions</h3>
      
      <h4>Depression</h4>
      <p><strong>Signs:</strong> Persistent sadness, loss of interest, fatigue, sleep changes, difficulty concentrating, feelings of worthlessness, thoughts of self-harm</p>
      
      <h4>Anxiety Disorders</h4>
      <p><strong>Signs:</strong> Excessive worry, restlessness, panic attacks, physical symptoms (rapid heartbeat, sweating), avoidance behaviors</p>
      
      <h4>Burnout</h4>
      <p><strong>Signs:</strong> Emotional exhaustion, cynicism, reduced effectiveness, feeling overwhelmed, detachment</p>
      
      <h3>When to Seek Professional Help</h3>
      <ul>
        <li>Symptoms interfere with daily life, work, or relationships</li>
        <li>Persistent feelings that don't improve with self-care</li>
        <li>Using substances to cope</li>
        <li>Thoughts of self-harm or suicide (call crisis hotline immediately)</li>
        <li>Physical symptoms without medical cause</li>
        <li>Loved ones express concern about changes in your behavior</li>
      </ul>
      
      <h3>Types of Mental Health Support</h3>
      <p><strong>Therapy/Counseling:</strong> Talk therapy with licensed professional. Types include CBT, DBT, psychodynamic, humanistic. Find one that fits your needs.</p>
      <p><strong>Medication:</strong> Psychiatrist can prescribe if needed. Often combined with therapy for best results.</p>
      <p><strong>Support Groups:</strong> Connect with others experiencing similar challenges. Both in-person and online options.</p>
      <p><strong>Crisis Services:</strong> Hotlines, text services, emergency rooms available 24/7 for immediate help.</p>
      
      <h3>Self-Care Strategies</h3>
      <ul>
        <li><strong>Routine:</strong> Regular sleep, meals, and activities provide stability</li>
        <li><strong>Movement:</strong> Exercise releases endorphins, reduces stress</li>
        <li><strong>Connection:</strong> Maintain relationships, reach out when struggling</li>
        <li><strong>Limits:</strong> Set boundaries, learn to say no</li>
        <li><strong>Hobbies:</strong> Engage in activities that bring joy</li>
        <li><strong>Nature:</strong> Time outdoors improves mood and perspective</li>
        <li><strong>Mindfulness:</strong> Meditation, deep breathing, grounding techniques</li>
      </ul>
      
      <h3>Supporting Others</h3>
      <p>If someone shares their mental health struggles:</p>
      <ul>
        <li>Listen without judgment</li>
        <li>Validate their feelings</li>
        <li>Ask how you can help</li>
        <li>Encourage professional support</li>
        <li>Check in regularly</li>
        <li>Educate yourself about their condition</li>
        <li>Take care of your own mental health too</li>
      </ul>
      
      <h3>Breaking the Stigma</h3>
      <p>Talk openly about mental health. Share your experiences if comfortable. Challenge stereotypes and discriminatory language. Treat mental health conditions like any other medical issue. The more we normalize these conversations, the easier it becomes for people to seek help.</p>
      
      <h3>Resources</h3>
      <ul>
        <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
        <li><strong>National Suicide Prevention Lifeline:</strong> 988 or 1-800-273-8255</li>
        <li><strong>SAMHSA Helpline:</strong> 1-800-662-4357</li>
        <li><strong>Online Therapy:</strong> BetterHelp, Talkspace, 7 Cups</li>
        <li><strong>Apps:</strong> Headspace, Calm, Sanvello for daily support</li>
      </ul>
      
      <p>Remember: seeking help is a sign of strength, not weakness. You deserve support, healing, and happiness. Take that first step - your future self will thank you.</p>
    `,
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80",
    author: "Michael Zhang",
    date: "November 6, 2025",
    category: "Wellness",
    tags: ["wellness", "mental health", "self-care"],
    featured: false,
    readTime: "11 min read"
  }
];

// Transform API data to our blog post format
const transformPost = (post, index) => {
  const author = authors[index % authors.length];
  const isFeatured = index % 3 === 0;
  
  const date = new Date(post.published_at || post.created_at);
  const formattedDate = date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const excerpt = post.description || post.title.substring(0, 150) + '...';
  
  let content = '';
  if (post.body_html) {
    content = post.body_html;
  } else if (post.body_markdown) {
    content = post.body_markdown
      .split('\n\n')
      .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
      .join('');
  } else {
    content = `<p>${excerpt}</p>`;
  }

  // Categorize based on tags
  let category = 'Lifestyle';
  if (post.tag_list) {
    const tagString = post.tag_list.join(' ').toLowerCase();
    if (tagString.includes('career') || tagString.includes('job') || tagString.includes('work') || tagString.includes('productivity')) {
      category = 'Career';
    } else if (tagString.includes('style') || tagString.includes('fashion') || tagString.includes('design')) {
      category = 'Fashion';
    }
  }

  return {
    id: post.id,
    title: post.title,
    slug: post.slug || post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    excerpt: excerpt,
    content: content,
    image: post.cover_image || post.social_image || `https://images.unsplash.com/photo-${1500000000000 + (post.id % 10000)}?w=800&q=80`,
    author: author,
    date: formattedDate,
    category: category,
    tags: post.tag_list || [category.toLowerCase()],
    featured: isFeatured,
    readTime: `${post.reading_time_minutes || Math.floor(Math.random() * 5) + 4} min read`
  };
};

// Cache for storing all posts
let postsCache = null;

// Fetch posts from API and combine with curated posts
export const fetchBlogPosts = async () => {
  // Return cached posts if available
  if (postsCache) {
    return postsCache;
  }
  
  try {
    const response = await axios.get(`${API_BASE_URL}/articles?per_page=30&top=7`);
    const apiPosts = response.data.map(transformPost);
    
    // Combine API posts with curated posts to ensure all categories have content
    postsCache = [...curatedPosts, ...apiPosts];
    return postsCache;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    // If API fails, return at least the curated posts
    postsCache = curatedPosts;
    return curatedPosts;
  }
};

// Fetch single post by ID with full content
export const fetchPostById = async (id) => {
  try {
    const numericId = parseInt(id);
    
    // Check if it's a curated post (IDs starting with 99)
    const curatedPost = curatedPosts.find(post => post.id === numericId);
    if (curatedPost) {
      return curatedPost;
    }
    
    // For API posts, fetch the full article to get complete content
    try {
      console.log('Fetching full article from Dev.to API for ID:', id);
      const response = await axios.get(`${API_BASE_URL}/articles/${id}`);
      const fullPost = response.data;
      
      console.log('Full post received:', {
        id: fullPost.id,
        title: fullPost.title,
        hasBodyHtml: !!fullPost.body_html,
        bodyHtmlLength: fullPost.body_html?.length,
        hasBodyMarkdown: !!fullPost.body_markdown,
        bodyMarkdownLength: fullPost.body_markdown?.length,
        description: fullPost.description,
        allKeys: Object.keys(fullPost)
      });
      
      // Transform the full post with complete body_html
      const author = authors[numericId % authors.length];
      const date = new Date(fullPost.published_at || fullPost.created_at);
      const formattedDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      
      // Categorize based on tags
      let category = 'Lifestyle';
      if (fullPost.tag_list) {
        // Handle tag_list as either array or string
        const tagString = Array.isArray(fullPost.tag_list) 
          ? fullPost.tag_list.join(' ').toLowerCase()
          : (typeof fullPost.tag_list === 'string' ? fullPost.tag_list.toLowerCase() : '');
        
        if (tagString.includes('career') || tagString.includes('job') || tagString.includes('work') || tagString.includes('productivity')) {
          category = 'Career';
        } else if (tagString.includes('style') || tagString.includes('fashion') || tagString.includes('design')) {
          category = 'Fashion';
        }
      }
      
      // Use body_html if available, otherwise convert markdown to basic HTML
      let content = '';
      if (fullPost.body_html) {
        content = fullPost.body_html;
      } else if (fullPost.body_markdown) {
        // Simple markdown to HTML conversion
        content = fullPost.body_markdown
          .split('\n\n')
          .map(paragraph => {
            // Convert headers
            if (paragraph.startsWith('###')) {
              return `<h3>${paragraph.replace(/^###\s*/, '')}</h3>`;
            } else if (paragraph.startsWith('##')) {
              return `<h2>${paragraph.replace(/^##\s*/, '')}</h2>`;
            } else if (paragraph.startsWith('#')) {
              return `<h1>${paragraph.replace(/^#\s*/, '')}</h1>`;
            }
            // Convert lists
            else if (paragraph.includes('\n-') || paragraph.includes('\n*')) {
              const items = paragraph.split('\n').filter(line => line.trim().startsWith('-') || line.trim().startsWith('*'));
              const listItems = items.map(item => `<li>${item.replace(/^[\-\*]\s*/, '')}</li>`).join('');
              return `<ul>${listItems}</ul>`;
            }
            // Regular paragraph
            return `<p>${paragraph.replace(/\n/g, '<br>')}</p>`;
          })
          .join('\n');
      } else {
        content = `<p>${fullPost.description || 'Content not available.'}</p>`;
      }
      
      console.log('Final content length:', content.length);
      
      // Normalize tags to always be an array
      let tags = [category.toLowerCase()];
      if (fullPost.tag_list) {
        if (Array.isArray(fullPost.tag_list)) {
          tags = fullPost.tag_list;
        } else if (typeof fullPost.tag_list === 'string') {
          tags = fullPost.tag_list.split(',').map(t => t.trim());
        }
      }
      
      return {
        id: fullPost.id,
        title: fullPost.title,
        slug: fullPost.slug,
        excerpt: fullPost.description || fullPost.title.substring(0, 150) + '...',
        content: content, // Full HTML content
        image: fullPost.cover_image || fullPost.social_image || `https://images.unsplash.com/photo-${1500000000000 + (fullPost.id % 10000)}?w=800&q=80`,
        author: author,
        date: formattedDate,
        category: category,
        tags: tags,
        featured: false,
        readTime: `${fullPost.reading_time_minutes || Math.floor(Math.random() * 5) + 4} min read`
      };
    } catch (apiError) {
      console.error('Error fetching from API:', apiError);
      
      // Fallback: try to find in cache
      if (!postsCache) {
        await fetchBlogPosts();
      }
      const cachedPost = postsCache?.find(post => post.id === numericId);
      return cachedPost || null;
    }
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
};

// Helper functions for filtering and searching
export const getFeaturedPosts = (posts) => {
  return posts.filter(post => post.featured);
};

export const getPostsByCategory = (posts, category) => {
  if (category === 'All') return posts;
  return posts.filter(post => post.category === category);
};

export const getRelatedPosts = (posts, currentPostId, category, limit = 3) => {
  return posts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
};

export const getAllCategories = () => {
  return ['All', ...categories];
};
