// mockData.js
const mockData = [
   {
     authorName: "Aice Gonzale",
     authorTitle: "Chilippine Community Development Activist",
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
 
     // Additional fields for detail view
     age: 30,
     yearsOldText: "Years old",
     bio: "Graduated Handong Global University and is continuing 'ChakanCha', a startup that wants to share love with teas.",
     country: "Philippines",
     email: "aicegonzale@example.com",
     solutionDescription: "Through innovation in the global value chain, Chakancha seeks to improve the quality of life of Tea-pickers and convey love to them.",
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
     authorName: "Jiin Yoo",
     authorTitle: "CEO ChackanCha",
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
 
     // Additional detail fields
     age: 25,
     yearsOldText: "Years old",
     bio: "Graduated Handong Global University and is continuing 'ChakanCha', a startup that wants to share love with teas.",
     country: "S. Korea",
     email: "jiinyoo@gmail.com",
     solutionDescription: "Through innovation in the global value chain, Chakancha seeks to improve the quality of life of Tea-pickers and convey love to them.",
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
     authorName: "Aice Gonzale",
     authorTitle: "Chilippine Community Development Activist",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/310x265",
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
     
     age: 30,
     yearsOldText: "Years old",
     bio: "majored in environmental engineering at university, has a desire to solve the village's environmental problems and poverty vicious cycle.",
     country: "Philippines",
     email: "aicegonzale@example.com",
     solutionDescription: "Through innovation in the global value chain, ...",
     comments: []
   },
   {
     authorName: "Jiin Yoo",
     authorTitle: "CEO ChackanCha",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/258x328",
     overlayText: "Through innovation in the global value chain, Chakancha seeks to improve...",
     type: "Solution",
     shortTitle: "Purpose Statement:",
     detailedDescription: `Tea pickers in Barasandu face poor working conditions, low wages, lack of education, and social isolation.
 
 Purpose Statement
 Through innovation, Chakancha seeks to improve their quality of life.
 
 About Us
 Chakancha, a start-up from Handong University, aims to deliver specialty tea and empower tea-pickers with stable incomes and better living conditions.`,
     location: "Barasandu, Kenya",
 
     age: 25,
     yearsOldText: "Years old",
     bio: "Graduated Handong Global University and is continuing 'ChakanCha'.",
     country: "S. Korea",
     email: "jiinyoo@example.com",
     solutionDescription: "Through innovation in the global value chain...",
     comments: []
   },
   {
     authorName: "Aice Gonzale",
     authorTitle: "Chilippine Community Development Activist",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/310x265",
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
     age: 30,
     yearsOldText: "Years old",
     bio: "majored in environmental engineering at university, has a desire to solve the village's environmental problems and poverty vicious cycle.",
     country: "Philippines",
     email: "aicegonzale@example.com",
     solutionDescription: "Through innovation in the global value chain...",
     comments: []
   },
   {
     authorName: "Jiin Yoo",
     authorTitle: "CEO ChackanCha",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/258x328",
     overlayText: "Through innovation in the global value chain, Chakancha seeks to improve...",
     type: "Solution",
     shortTitle: "Purpose Statement:",
     detailedDescription: `Tea pickers in Barasandu face poor working conditions, low wages, lack of education, and social isolation.
 
 Purpose Statement
 Through innovation, Chakancha seeks to improve their quality of life.
 
 About Us
 Chakancha, a start-up from Handong University, aims to deliver specialty tea...`,
     location: "Barasandu, Kenya",
     age: 25,
     yearsOldText: "Years old",
     bio: "Graduated Handong Global University...",
     country: "S. Korea",
     email: "jiinyoo@example.com",
     solutionDescription: "Through innovation in the global value chain...",
     comments: []
   },
   {
     authorName: "Aice Gonzale",
     authorTitle: "Chilippine Community Development Activist",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://i.pinimg.com/736x/d8/34/e4/d834e4487a7f854452428668c8803e4f.jpg",
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
 "We want a healthier environment and a stable future..."
 
 Resolution
 "With resilience, we aim to transform Baseka..."`,
     location: "Baseka, Philippines",
     age: 30,
     yearsOldText: "Years old",
     bio: "Graduated Handong Global University...",
     country: "Philippines",
     email: "aicegonzale@example.com",
     solutionDescription: "Through innovation in the global value chain...",
     comments: []
   },
   {
     authorName: "Jiin Yoo",
     authorTitle: "CEO ChackanCha",
     authorImage: "https://via.placeholder.com/85x100",
     mainImage: "https://via.placeholder.com/258x328",
     overlayText: "Through innovation in the global value chain, Chakancha seeks to improve...",
     type: "Solution",
     shortTitle: "Purpose Statement:",
     detailedDescription: `Tea pickers in Barasandu face poor working conditions, low wages, lack of education, and social isolation.
 
 Purpose Statement
 Through innovation, Chakancha seeks to improve their quality of life.
 
 About Us
 Chakancha, a start-up from Handong University...`,
     location: "Barasandu, Kenya",
     age: 25,
     yearsOldText: "Years old",
     bio: "Graduated Handong Global University...",
     country: "S. Korea",
     email: "jiinyoo@example.com",
     solutionDescription: "Through innovation in the global value chain...",
     comments: []
   }
 ];
 
 export default mockData;
 