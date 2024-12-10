// mockData.js
const mockData = [
   {
     id: 1, // Unique ID
     authorName: "Aice Gonzale",
     authorTitle: "Philippine Community Development Activist",
     authorImage: "https://i.pinimg.com/736x/1c/60/33/1c603382ca7ba9a1427d9eac71f4aa3f.jpg",
     mainImage: "https://images.unsplash.com/photo-1526951521990-620dc14c214b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     overlayText: "Through The village of Baseka is a poor area that makes a living based on garbage...",
     type: "Problem",
     shortTitle: "Problem Statement:",
     detailedDescription: `The village of Baseka is a poor area that relies on garbage for livelihood. Residents face;
       
 1. Environmental Pollution
    Toxic gases severely contaminate the environment.
 
 2. Health Issues
    Children face respiratory illnesses due to unsanitary conditions.
 
 3. Economic Instability
    Income from recycling is meager and inconsistent.
 
 4. Social Stigma
    Known as a "garbage village," there's a lack of external support.
 
 What We Want
 "We want a healthier environment and a stable future. Please help us find solutions."
 
 Resolution
 "With resilience, we aim to transform Baseka into a village of opportunity through sustainable resource management."`,
     location: "Baseka, Philippines",
     lat: 10.6157, // Example latitude for Baseka, Philippines
     lng: 123.4700, // Example longitude for Baseka, Philippines
     donationAmount: 250, // Current donation
     donationGoal: 1000, // Donation goal
     comments: [
       {
         authorName: "User A",
         time: "12:00 pm",
         text: "After watching the video containing the concerns...",
         likes: 0,
         replies: 0
       },
       {
         authorName: "User B",
         time: "1:00 pm",
         text: "Great initiative!",
         likes: 0,
         replies: 0
       }
     ]
   },
   {
     id: 2, // Unique ID
     authorName: "Jiin Yoo",
     authorTitle: "CEO ChakanCha",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://i.pinimg.com/736x/d8/34/e4/d834e4487a7f854452428668c8803e4f.jpg",
     overlayText: "Through innovation in the global value chain, Chakancha seeks to improve...",
     type: "Solution",
     shortTitle: "Purpose Statement:",
     detailedDescription: `Tea pickers in Barasandu face poor working conditions, low wages, lack of education, and social isolation.
 
 Purpose Statement
 Through innovation, Chakancha seeks to improve their quality of life.
 
 About Us
 Chakancha, a start-up from Handong University, aims to deliver specialty tea and empower tea-pickers with stable incomes and better living conditions.`,
     location: "Barasandu, Kenya",
     lat: -0.3213, // Example latitude for Barasandu, Kenya
     lng: 36.8270, // Example longitude for Barasandu, Kenya
     donationAmount: 500, // Current donation
     donationGoal: 2000, // Donation goal
     comments: [
       {
         authorName: "Aice Gonzale A",
         time: "12:00 pm",
         text: "After watching the video containing the concerns of GPS 101 students throughout the semester, we ask for your interest and support!",
         likes: 0,
         replies: 0
       },
       {
         authorName: "Aice Gonzale B",
         time: "12:00 pm",
         text: "We truly appreciate your efforts.",
         likes: 0,
         replies: 0
       }
     ]
   },
   {
     id: 3,
     authorName: "Maria Lopez",
     authorTitle: "Environmental Scientist",
     authorImage: "https://i.pinimg.com/474x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg",
     mainImage: "https://media.istockphoto.com/id/115969525/photo/deforestation.webp?a=1&b=1&s=612x612&w=0&k=20&c=bMToFPP8OZ7gLzm-GmALd9fbwzoJzqAnS7x-QVXywQA=",
     overlayText: "The rapid deforestation in the Amazon poses severe threats to biodiversity...",
     type: "Problem",
     shortTitle: "Problem Statement:",
     detailedDescription: `Deforestation in the Amazon rainforest has accelerated over the past decade, leading to:
       
 1. Loss of Biodiversity
    Numerous species are becoming extinct at an alarming rate.
 
 2. Climate Change
    Reduced carbon sequestration exacerbates global warming.
 
 3. Indigenous Rights
    Communities are displaced, losing their ancestral lands.
 
 4. Soil Erosion
    Removal of trees leads to poor soil quality and increased flooding.
 
 What We Want
 "We aim to halt deforestation and promote sustainable land use practices. Your support can make a difference."
 
 Resolution
 "By implementing community-driven conservation programs, we strive to protect the Amazon for future generations."`,
     location: "Amazon Rainforest, Brazil",
     lat: -3.4653,
     lng: -62.2159,
     donationAmount: 800,
     donationGoal: 3000,
     comments: [
       {
         authorName: "User C",
         time: "2:30 pm",
         text: "This is crucial for our planet's future.",
         likes: 2,
         replies: 1
       },
       {
         authorName: "User D",
         time: "3:15 pm",
         text: "How can I help beyond donations?",
         likes: 1,
         replies: 0
       }
     ]
   },
   {
     id: 4,
     authorName: "Liam Smith",
     authorTitle: "Tech Entrepreneur",
     authorImage: "https://i.pinimg.com/474x/0b/83/79/0b837956b6148edfaa4e9d28365c2701.jpg",
     mainImage: "https://media.istockphoto.com/id/182187069/photo/rush-hour-smog.webp?a=1&b=1&s=612x612&w=0&k=20&c=DW826DR8EbJ5nmAaE_j19HTP10rIzues7IzIFsCcCKQ=",
     overlayText: "Smart city technologies offer sustainable solutions to urban challenges...",
     type: "Solution",
     shortTitle: "Innovation Proposal:",
     detailedDescription: `Urban areas are grappling with congestion, pollution, and inefficient resource management.
 
 Innovation Proposal
 Implementing smart city technologies can address these issues by:
     
 1. Intelligent Traffic Systems
    Reducing congestion through real-time data analysis.
 
 2. Renewable Energy Integration
    Utilizing solar and wind power to minimize carbon footprints.
 
 3. Waste Management Automation
    Enhancing recycling processes with IoT-enabled solutions.
 
 4. Public Safety Enhancements
    Using AI for predictive policing and emergency response optimization.
 
 What We Want
 "We seek partnerships and funding to deploy smart technologies in major cities, ensuring a sustainable and efficient urban future."
 
 Resolution
 "By collaborating with local governments and tech firms, we aim to transform cities into models of sustainability and innovation."`,
     location: "San Francisco, USA",
     lat: 37.7749,
     lng: -122.4194,
     donationAmount: 1200,
     donationGoal: 5000,
     comments: [
       {
         authorName: "User E",
         time: "4:00 pm",
         text: "Excited about the potential of smart cities!",
         likes: 3,
         replies: 2
       },
       {
         authorName: "User F",
         time: "4:45 pm",
         text: "What technologies are you planning to implement first?",
         likes: 0,
         replies: 0
       }
     ]
   },
   {
     id: 5,
     authorName: "Chen Wei",
     authorTitle: "Public Health Expert",
     authorImage: "https://i.pinimg.com/474x/0f/92/29/0f9229c81b9275edec195bd8449ae7cc.jpg",
     mainImage: "https://media.istockphoto.com/id/1069158396/photo/storm-drain-outflow-stormwater-water-drainage-waste-water-or-effluent.webp?a=1&b=1&s=612x612&w=0&k=20&c=tm3xJRJLUjCA9bRGlg4AlMBO2jDMOC75HZDjTySzMLE=",
     overlayText: "Access to clean water remains a significant challenge in many rural communities...",
     type: "Problem",
     shortTitle: "Problem Statement:",
     detailedDescription: `Despite global efforts, millions still lack access to clean and safe drinking water. The primary issues include:
       
 1. Contaminated Water Sources
    Industrial waste and agricultural runoff pollute local water bodies.
 
 2. Infrastructure Deficiencies
    Inadequate water supply systems fail to deliver clean water efficiently.
 
 3. Health Impacts
    Waterborne diseases cause high mortality rates, especially among children.
 
 4. Economic Barriers
    Cost of water purification systems is prohibitive for impoverished communities.
 
 What We Want
 "Our mission is to provide sustainable and affordable clean water solutions to rural areas. Your support can save lives."
 
 Resolution
 "By installing advanced filtration systems and building resilient infrastructure, we aim to ensure every individual has access to clean water."`,
     location: "Rural Villages, India",
     lat: 20.5937,
     lng: 78.9629,
     donationAmount: 400,
     donationGoal: 1500,
     comments: [
       {
         authorName: "User G",
         time: "5:30 pm",
         text: "Access to clean water is a basic human right.",
         likes: 2,
         replies: 1
       },
       {
         authorName: "User H",
         time: "6:00 pm",
         text: "Can we volunteer to help with the installations?",
         likes: 1,
         replies: 0
       }
     ]
   },
   {
     id: 6,
     authorName: "Sophia Martinez",
     authorTitle: "Sustainable Agriculture Specialist",
     authorImage: "https://i.pinimg.com/474x/f9/58/e4/f958e4ad039823fdc0e5aaa45aae278d.jpg",
     mainImage: "https://media.istockphoto.com/id/676715490/photo/cereals-in-the-field-germany.webp?a=1&b=1&s=612x612&w=0&k=20&c=SsPNU_OaUHDjULZ2doBN0bAd-hIaLABDdUpv_UfoQIM=",
     overlayText: "Climate change is adversely affecting crop yields and food security worldwide...",
     type: "Solution",
     shortTitle: "Sustainable Farming Initiative:",
     detailedDescription: `Agricultural sectors are facing unprecedented challenges due to climate variability, leading to:
     
 1. Reduced Crop Yields
    Unpredictable weather patterns and extreme events harm production.
 
 2. Soil Degradation
    Intensive farming practices deplete essential nutrients.
 
 3. Water Scarcity
    Overuse of water resources leads to shortages.
 
 4. Increased Pest Infestations
    Changing climates create favorable conditions for pests and diseases.
 
 Sustainable Farming Initiative
 Implementing eco-friendly farming techniques can mitigate these issues by:
     
 1. Crop Rotation and Diversification
    Enhancing soil health and reducing pest proliferation.
 
 2. Drip Irrigation Systems
    Conserving water while maintaining crop hydration.
 
 3. Organic Farming Practices
    Eliminating harmful chemicals and promoting biodiversity.
 
 4. Climate-Resilient Crop Varieties
    Developing strains that withstand adverse weather conditions.
 
 What We Want
 "We aim to transform agricultural practices to be more sustainable and resilient. Your contribution can help secure a stable food future."
 
 Resolution
 "By partnering with local farmers and leveraging innovative technologies, we strive to create a sustainable and productive agricultural landscape."`,
     location: "Greenfields, Australia",
     lat: -25.2744,
     lng: 133.7751,
     donationAmount: 700,
     donationGoal: 2500,
     comments: [
       {
         authorName: "User I",
         time: "7:00 pm",
         text: "Sustainable farming is the way forward!",
         likes: 4,
         replies: 2
       },
       {
         authorName: "User J",
         time: "7:45 pm",
         text: "How can urban areas participate in this initiative?",
         likes: 1,
         replies: 0
       }
     ]
   },
   {
     id: 7,
     authorName: "Ahmed Khan",
     authorTitle: "Renewable Energy Advocate",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/310x265",
     overlayText: "Despite advancements, many regions still rely heavily on non-renewable energy sources...",
     type: "Problem",
     shortTitle: "Energy Crisis Overview:",
     detailedDescription: `The global dependency on fossil fuels presents multiple challenges:
       
 1. Environmental Degradation
    Emissions contribute to air pollution and climate change.
 
 2. Resource Depletion
    Finite fossil fuel reserves are being exhausted rapidly.
 
 3. Economic Volatility
    Fluctuating oil prices destabilize economies.
 
 4. Energy Access Inequity
    Remote and impoverished areas lack reliable energy sources.
 
 What We Want
 "We seek to accelerate the transition to renewable energy by implementing scalable and sustainable solutions."
 
 Resolution
 "By investing in solar, wind, and hydroelectric projects, we aim to provide clean and affordable energy to underserved communities."`,
     location: "Remote Villages, Nepal",
     lat: 28.3949,
     lng: 84.1240,
     donationAmount: 600,
     donationGoal: 2200,
     comments: [
       {
         authorName: "User K",
         time: "8:15 pm",
         text: "Renewable energy is essential for a sustainable future.",
         likes: 3,
         replies: 1
       },
       {
         authorName: "User L",
         time: "8:45 pm",
         text: "What specific projects are you planning to implement?",
         likes: 0,
         replies: 0
       }
     ]
   },
   {
     id: 8,
     authorName: "Emily Chen",
     authorTitle: "Education Reformist",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/258x328",
     overlayText: "Access to quality education remains a significant barrier in many developing countries...",
     type: "Solution",
     shortTitle: "Educational Empowerment Plan:",
     detailedDescription: `Educational disparities hinder personal and societal growth. Key challenges include:
     
 1. Lack of Infrastructure
    Schools in remote areas are under-resourced and poorly maintained.
 
 2. Teacher Shortages
    Qualified educators are scarce, affecting learning quality.
 
 3. Financial Constraints
    High costs deter families from sending children to school.
 
 4. Gender Inequality
    Girls face additional barriers to education in certain regions.
 
 Educational Empowerment Plan
 To overcome these challenges, we propose:
     
 1. Building and Renovating Schools
    Establishing state-of-the-art learning environments.
 
 2. Teacher Training Programs
    Enhancing the skills and retention of educators.
 
 3. Scholarship and Support Funds
    Providing financial assistance to underprivileged students.
 
 4. Community Engagement Initiatives
    Promoting the importance of education for all genders.
 
 What We Want
 "We aim to create an inclusive and accessible educational system that empowers every child to reach their full potential."
 
 Resolution
 "By collaborating with local governments and international organizations, we strive to implement comprehensive educational reforms that address both infrastructure and social barriers."`,
     location: "Kathmandu, Nepal",
     lat: 27.7172,
     lng: 85.3240,
     donationAmount: 900,
     donationGoal: 4000,
     comments: [
       {
         authorName: "User M",
         time: "9:30 pm",
         text: "Education is the foundation of progress.",
         likes: 5,
         replies: 3
       },
       {
         authorName: "User N",
         time: "10:00 pm",
         text: "How can international volunteers contribute?",
         likes: 2,
         replies: 0
       }
     ]
   },
   {
     id: 9,
     authorName: "Carlos Ramirez",
     authorTitle: "Urban Planner",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/310x265",
     overlayText: "Urban sprawl leads to inefficient land use and increased environmental impact...",
     type: "Problem",
     shortTitle: "Urban Sprawl Challenges:",
     detailedDescription: `Rapid urbanization without proper planning results in:
       
 1. Loss of Green Spaces
    Natural habitats are destroyed to make way for infrastructure.
 
 2. Traffic Congestion
    Increased vehicle density leads to longer commute times.
 
 3. Pollution
    Higher emissions from transportation and industrial activities.
 
 4. Social Segregation
    Inequitable distribution of resources fosters community divides.
 
 What We Want
 "We seek to promote sustainable urban development that balances growth with environmental preservation."
 
 Resolution
 "By implementing smart zoning laws, enhancing public transportation, and preserving green areas, we aim to create livable and eco-friendly cities."`,
     location: "Los Angeles, USA",
     lat: 34.0522,
     lng: -118.2437,
     donationAmount: 650,
     donationGoal: 3000,
     comments: [
       {
         authorName: "User O",
         time: "11:00 pm",
         text: "Sustainable urban planning is crucial for our future.",
         likes: 4,
         replies: 2
       },
       {
         authorName: "User P",
         time: "11:30 pm",
         text: "What initiatives are you planning to implement first?",
         likes: 1,
         replies: 0
       }
     ]
   },
   {
     id: 10,
     authorName: "Anika Patel",
     authorTitle: "Healthcare Advocate",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/258x328",
     overlayText: "Mental health support systems are lacking in many communities, leading to widespread issues...",
     type: "Solution",
     shortTitle: "Mental Health Initiative:",
     detailedDescription: `Mental health is a growing concern globally, yet support systems are often inadequate. Key issues include:
     
 1. Stigma Surrounding Mental Health
    Social prejudices prevent individuals from seeking help.
 
 2. Limited Access to Professionals
    There are insufficient mental health practitioners in many regions.
 
 3. High Treatment Costs
    Financial barriers make therapy and counseling unaffordable for many.
 
 4. Lack of Awareness
    Communities are unaware of mental health resources and coping strategies.
 
 Mental Health Initiative
 To address these challenges, we propose:
     
 1. Community Outreach Programs
    Educating the public to reduce stigma and promote mental well-being.
 
 2. Training Peer Counselors
    Empowering community members to provide basic mental health support.
 
 3. Subsidized Counseling Services
    Making professional help accessible and affordable.
 
 4. Digital Mental Health Platforms
    Utilizing technology to reach individuals in remote areas.
 
 What We Want
 "We aim to build a robust mental health support network that is inclusive and accessible to all community members."
 
 Resolution
 "By partnering with local organizations and leveraging technology, we strive to create sustainable mental health resources that cater to diverse populations."`,
     location: "Mumbai, India",
     lat: 19.0760,
     lng: 72.8777,
     donationAmount: 350,
     donationGoal: 1800,
     comments: [
       {
         authorName: "User Q",
         time: "12:15 am",
         text: "Mental health support is so important, thank you!",
         likes: 2,
         replies: 1
       },
       {
         authorName: "User R",
         time: "12:45 am",
         text: "Can we volunteer as peer counselors?",
         likes: 1,
         replies: 0
       }
     ]
   }
 ];
 
 export default mockData;
 