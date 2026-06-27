import { Product, Article, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'velocity-pro',
    name: 'SprintX Velocity Pro',
    price: 3499,
    originalPrice: 4399,
    category: 'Running Shoes',
    badge: 'Best Seller',
    description: 'Lightweight premium running shoe engineered for elite athletes and daily logging alike.',
    features: [
      'Engineered breathable mesh upper for maximum ventilation',
      'Advanced high-rebound cushioning for responsive energy return',
      'Durable blown-rubber outsole pods in high-wear areas',
      'Anatomically configured heel counter for secure lockdown'
    ],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
    rating: 5
  },
  {
    id: 'urban-flex',
    name: 'SprintX Urban Flex',
    price: 2999,
    originalPrice: 3799,
    category: 'Casual Sneakers',
    badge: 'New Style',
    description: 'Comfortable all-day wear casual sneaker capturing modern street style without weight penalities.',
    features: [
      'Stylish modern lifestyle silhouette with premium textiles',
      'Plush step-in sockliner contours to your foot shape',
      'Highly flexible low-profile sole for uninhibited movement',
      'Easy-lace integration for rapid adjustment'
    ],
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600',
    rating: 5
  },
  {
    id: 'trail-master',
    name: 'SprintX Trail Master',
    price: 4299,
    category: 'Sports Shoes',
    badge: 'All-Terrain',
    description: 'Rugged outdoor and trekking shoe featuring slip-resistant technology to dominate any rugged path.',
    features: [
      'Ultra slip-resistant multidirectional rubber lug patterns',
      'Reinforced high-durability synthetic mudguards',
      'Shock-absorbing midsole compound limits joint impacts',
      'Gusseted tongue blockades debris and dirt'
    ],
    image: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=600',
    rating: 4.8
  },
  {
    id: 'walk-comfort',
    name: 'SprintX Walk Comfort',
    price: 2499,
    originalPrice: 2999,
    category: 'Walking Shoes',
    badge: 'Max Support',
    description: 'Ultra-soft walking shoe delivering premium comfort for active recovery and everyday walks.',
    features: [
      'Double-density soft foam cushioning platform',
      'Stretch-knit upper expands naturally with your foot step',
      'Extremely lightweight frame to minimize muscle fatigue',
      'Padded collar and tongue prevents pressure hotspots'
    ],
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600',
    rating: 4.9
  }
];

export const CATEGORIES = [
  'All Pairings',
  'Running Shoes',
  'Sports Shoes',
  'Casual Sneakers',
  'Walking Shoes'
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    rating: 5,
    comment: 'The most comfortable running shoes I\'ve ever worn! Excellent rebound, and it feels like running on clouds.',
    author: 'Rahul S.'
  },
  {
    id: 'rev-2',
    rating: 5,
    comment: 'Excellent quality and stylish design. I get compliments every time I wear my Urban Flex to the gym and work.',
    author: 'Priya M.'
  },
  {
    id: 'rev-3',
    rating: 5,
    comment: 'Fast delivery across India! The Trail Master shoes survived my weekend trek in Himachal flawlessly. Extremely stable sole.',
    author: 'Anil K.'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'art-1',
    title: 'How to Choose the Perfect Running Shoes',
    excerpt: 'Selecting the right running shoes depends on your foot type, running style, and training goals.',
    date: 'June 15, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=600',
    content: `Selecting the right running shoes depends on your foot type, running style, and training goals. Proper cushioning and support can help prevent injuries.

### Understanding Your Foot Type
Every runner has a unique stride. Before buying a shoe, observe your arch:
- **Low Arch / Flat Foot**: Often prone to overpronation (foot rolling inward). Opt for **Stability shoes** that offer firm support.
- **High Arch**: Often prone to underpronation (inward rolling is limited). Look for **Neutral, highly cushioned shoes** to absorb direct landing shock.
- **Normal Arch**: Standard mechanics. Most **Neutral shoes** with moderate cushioning work wonderfully.

### Consider Your Running Style
Are you running on concrete roads, indoor gyms, or rugged mountain trails?
- **Road Running Shoes**: Designed for pavement, treadmill, and hard tracks. Focuses on shock absorption and tread durability.
- **Trail Running Shoes**: Rugged sole designs with sticky rubber and protective plates to guard against rocks and slippery mud.

### Summary
Never compromise on size. Leave a thumb's width of space near the toe box because your feet naturally swell as you jog. A perfect fit guarantees injury-free performance!`
  },
  {
    id: 'art-2',
    title: 'Top 5 Benefits of Daily Walking',
    excerpt: 'Walking improves heart health, boosts energy, supports weight management, and enhances overall well-being.',
    date: 'June 10, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
    content: `Walking is one of the most accessible yet highly underrated cardiovascular exercises. Taking just 30 minutes daily can invoke profound transformations in both physical and psychological states.

### 1. Significant Cardiovascular Strength
Regular brisk walking lowers blood pressure, stabilizes resting heart rate, and substantially limits the risk of coronary heart diseases.

### 2. Weight Management and Active Recovery
While running burns more active calories per minute, walking is a fantastic low-impact habit that encourages steady lipid oxidation without raising cortisol and stressing joints.

### 3. Boosts Mental Alertness and Endorphins
Walking outside surrounded by natural sunlight instantly prompts endorphin and serotonin synthesis, acting as a natural mood elevator.

### 4. Fortifies Muscle and Joint Health
Regular walking increases joint lubrication and exercises stabilizing leg muscles (calves, hamstrings, and quads) without the microtrauma associated with high-impact pounding.

### 5. Boosted Immunity Levels
Studies showcase that individuals walking 30-45 minutes experienced significantly fewer sick days due to steady lymphatic system activation.`
  },
  {
    id: 'art-3',
    title: 'Shoe Care Tips to Make Your Footwear Last Longer',
    excerpt: 'Clean your shoes regularly, store them in a dry place, and avoid excessive exposure to water and sunlight.',
    date: 'June 03, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1449247700740-14819d85720c?auto=format&fit=crop&q=80&w=600',
    content: `You\'ve bought your dream pair of SprintX premium shoes; now how do you ensure they serve you for hundreds of kilometers? Follow our expert-vetted maintenance guide!

### 1. Master the Regular Wash
- **Never toss running shoes in a high-spin washing machine**. The aggressive spinning cycle weakens thermal glue points, degrading sole structure.
- **Hand wash instead**: Use a warm soapy solution, a gentle soft-bristled toothbrush to scrub off surface dirt, and rinse with damp microfibers.

### 2. The Golden Drying Rule
- Dry your shoes at ambient room temperature in a well-ventilated space.
- **Never place footwear near electric heaters or under high noon scorching sunlight**, as extreme heat causes polymers to shrink and crack.
- Stuff wet shoes with clean newsprint sheets to soak moisture from inside out.

### 3. Eliminate Bad Odors Safely
- Sprinkle a teaspoon of natural baking soda inside your sneakers overnight. It naturally absorbs moisture and completely neutralizes odor-producing bacteria.
- Store them with wooden cedar shoe-trees to retain perfect original shape.`
  },
  {
    id: 'art-4',
    title: 'Running vs Walking: Which Is Better?',
    excerpt: 'Both activities offer health benefits. Running burns more calories, while walking is easier on the joints.',
    date: 'May 28, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&q=80&w=600',
    content: `The age-old fitness debate: is it better to speed up into a vigorous run or maintain a steady walk? Let's take a deep look at how each affects your health and fitness trajectory.

### The Case for Running
- **Rapid Caloric Deficit**: Running burns nearly double the calories of walking per unit of time, perfect for busy individuals wanting fast body composition changes.
- **Maximal Cardio Fitness**: Running develops VO2 Max and absolute aerobic ceiling much quicker, encouraging superior lung capacity.

### The Case for Walking
- **Orthopedic Friendly**: Walking exerts minimal impact loads on knees, ankles, and lumbar joints, making it highly safe for veterans or heavy athletes.
- **Cortisol Control**: Brisk walking operates safely within fat-burning aerobic zones without triggering stressful inflammatory spikes, allowing you to walk every day without soreness.

### Verdict
Why choose when you can integrate both? Utilize running for high-intensity training days, and walking for active recovery and general movement!`
  }
];

export const VALUES = [
  {
    title: 'Quality First',
    description: 'We source only premium lightweight materials and test extensively under high-pounding conditions.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Innovation',
    description: 'Consistently researching cushioning compounds and anatomical support matrices for energy recovery.',
    icon: 'Lightbulb'
  },
  {
    title: 'Sustainability',
    description: 'We strive to integrate post-consumer recycled fabrics and reduce footprint during our manufacturing chains.',
    icon: 'Leaf'
  },
  {
    title: 'Customer Satisfaction',
    description: 'Over 10,000 satisfied Indian customers with a dedicated team handling every query with priority.',
    icon: 'Heart'
  }
];

export const WHY_US = [
  {
    title: 'High-quality materials',
    description: 'Breathable engineered knits and durable thermal vulcanized elements.',
    icon: 'Layers'
  },
  {
    title: 'Lightweight & durable',
    description: 'Structural reinforcement where you need it, minus the weight dragging you down.',
    icon: 'Sparkles'
  },
  {
    title: 'Advanced cushioning',
    description: 'Proprietary SprintX dual-density midsole technology for premium shock mitigation.',
    icon: 'Activity'
  },
  {
    title: 'Affordable prices',
    description: 'Cutting out middlemen to deliver top-tier athletics value straight to your door.',
    icon: 'IndianRupee'
  },
  {
    title: 'Fast delivery across India',
    description: 'Priority shipping partners tracking your parcel straight to all postal codes.',
    icon: 'Truck'
  }
];
