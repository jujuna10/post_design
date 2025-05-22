
'use client'
import React, { useState } from 'react';

const PostCard = () => {
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)
    const [commentSection, setCommentSection] = useState(false)
  return (
    <div className={`w-[35%] h-auto shadow-[0_0_10px_rgb(225,225,225)] rounded-[20px] ${commentSection ? 'overflow-y-scroll' : ''}`}>
      <div className="pt-6 px-6 pb-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative user-badge">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
              <div className="w-full h-full rounded-xl overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <defs>
                    <pattern id="userPattern" patternUnits="userSpaceOnUse" width="100" height="100">
                      <rect width="100" height="100" fill="#c7d2fe"/>
                      <circle cx="50" cy="35" r="20" fill="#818cf8"/>
                      <rect x="30" y="60" width="40" height="30" rx="10" fill="#818cf8"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#userPattern)"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center">
              <h3 className="font-semibold text-gray-800">Alex Wellness</h3>
              <div className="ml-2 px-1.5 py-0.5 bg-indigo-100 rounded-md">
                <span className="text-[10px] font-medium text-indigo-600">PRO</span>
              </div>
            </div>
            <div className="flex items-center text-xs text-gray-500 mt-0.5">
              <span>Nutrition Coach</span>
              <span className="mx-1.5">•</span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                3h ago
              </span>
            </div>
          </div>
        </div>
        
        <button id="follow-btn" className="group relative overflow-hidden px-4 py-1.5 rounded-full bg-indigo-50 hover:bg-indigo-100 transition-colors">
          <div className="absolute inset-0 w-0 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></div>
          <span className="relative text-sm font-medium text-indigo-600 group-hover:text-white transition-colors duration-300">Follow</span>
        </button>
      </div>
      
      {/* Content */}
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">The Science Behind Intermittent Fasting: My 30-Day Journey</h2>
        
        {/* Reading time and views */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              1.2k views
            </div>
            <div className="flex items-center text-xs text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              4 min read
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="w-20 h-1 bg-gray-200 rounded overflow-hidden">
                <div
                className="h-full bg-blue-500 transition-all duration-300 ease-in-out"
                style={{ width: '75%' }}
                ></div>
            </div>
            <span className="ml-2 text-xs text-gray-500">75%</span>
          </div>

        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          After years of trying different diets with mixed results, I decided to explore intermittent fasting. The science behind it fascinated me - from autophagy to metabolic switching. Here's what happened when I committed to a 16:8 schedule for 30 days, tracking everything from energy levels to body composition...
        </p>
        
        {/* Tags with unique design */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="tag px-3 py-1.5 bg-indigo-500 text-white rounded-lg text-xs font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
            Intermittent Fasting
          </span>
          <span className="tag px-3 py-1.5 bg-purple-500 text-white rounded-lg text-xs font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Weight Management
          </span>
          <span className="tag px-3 py-1.5 bg-orange-500 text-white rounded-lg text-xs font-medium flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Science-Based
          </span>
        </div>
        
        {/* Image with overlay info */}
        <div className="relative rounded-2xl overflow-hidden mb-5 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <div className="text-white">
              <div className="text-sm font-medium">Day 15 progress photo</div>
              <div className="text-xs opacity-80">Energy levels noticeably improved</div>
            </div>
          </div>
          
          <div className="h-56 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.8"/>
                </linearGradient>
                <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#818cf8" stopOpacity="0.2"/>
                </linearGradient>
              </defs>
              
              {/* Background */}
              <rect width="800" height="400" fill="url(#bgGrad)"/>
              
              {/* Decorative elements */}
              <circle cx="650" cy="100" r="60" fill="#6366f1" opacity="0.1"/>
              <circle cx="150" cy="300" r="80" fill="#6366f1" opacity="0.1"/>
              
              {/* Chart visualization */}
              <g transform="translate(100, 50)">
                {/* Chart background */}
                <rect x="0" y="0" width="600" height="250" rx="10" fill="white" opacity="0.8"/>
                
                {/* Chart title */}
                <text x="20" y="30" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#1f2937">30-Day Progress</text>
                
                {/* Chart grid lines */}
                <g stroke="#e5e7eb" strokeWidth="1">
                  <line x1="50" y1="50" x2="550" y2="50"/>
                  <line x1="50" y1="100" x2="550" y2="100"/>
                  <line x1="50" y1="150" x2="550" y2="150"/>
                  <line x1="50" y1="200" x2="550" y2="200"/>
                </g>
                
                {/* Chart axes */}
                <line x1="50" y1="50" x2="50" y2="200" stroke="#94a3b8" strokeWidth="2"/>
                <line x1="50" y1="200" x2="550" y2="200" stroke="#94a3b8" strokeWidth="2"/>
                
                {/* Energy level line */}
                <path d="M50,180 L100,170 L150,160 L200,140 L250,130 L300,110 L350,100 L400,90 L450,80 L500,70 L550,60" 
                      stroke="#6366f1" strokeWidth="3" fill="none" strokeLinecap="round"/>
                
                {/* Data points */}
                <circle cx="50" cy="180" r="4" fill="#6366f1"/>
                <circle cx="100" cy="170" r="4" fill="#6366f1"/>
                <circle cx="150" cy="160" r="4" fill="#6366f1"/>
                <circle cx="200" cy="140" r="4" fill="#6366f1"/>
                <circle cx="250" cy="130" r="4" fill="#6366f1"/>
                <circle cx="300" cy="110" r="4" fill="#6366f1"/>
                <circle cx="350" cy="100" r="4" fill="#6366f1"/>
                <circle cx="400" cy="90" r="4" fill="#6366f1"/>
                <circle cx="450" cy="80" r="4" fill="#6366f1"/>
                <circle cx="500" cy="70" r="4" fill="#6366f1"/>
                <circle cx="550" cy="60" r="4" fill="#6366f1"/>
                
                {/* Area under curve */}
                <path d="M50,180 L100,170 L150,160 L200,140 L250,130 L300,110 L350,100 L400,90 L450,80 L500,70 L550,60 L550,200 L50,200 Z" 
                      fill="url(#chartGrad)"/>
                
                {/* Legend */}
                <rect x="450" y="20" width="10" height="10" fill="#6366f1"/>
                <text x="465" y="30" fontFamily="Arial" fontSize="12" fill="#4b5563">Energy Level</text>
              </g>
              
              {/* Person silhouette */}
              <g transform="translate(400, 320)">
                <circle cx="0" cy="-40" r="15" fill="#4f46e5" opacity="0.7"/>
                <path d="M-15,-25 C-15,-10 15,-10 15,-25 L10,20 L-10,20 Z" fill="#4f46e5" opacity="0.7"/>
                <line x1="-10" y1="0" x2="-20" y2="20" stroke="#4f46e5" strokeWidth="5" opacity="0.7"/>
                <line x1="10" y1="0" x2="20" y2="20" stroke="#4f46e5" strokeWidth="5" opacity="0.7"/>
              </g>
            </svg>
          </div>
        </div>
        
        {/* Key points */}
        <div className="bg-indigo-50 rounded-xl p-4 mb-5">
          <h4 className="font-medium text-indigo-800 mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Key Findings
          </h4>
          <ul className="space-y-2 text-sm text-indigo-700">
            <li className="flex items-start">
              <div className="min-w-[20px] h-5 flex items-center justify-center mr-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              </div>
              <span>Increased mental clarity after just 7 days</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-[20px] h-5 flex items-center justify-center mr-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              </div>
              <span>Lost 4.5 pounds without changing exercise routine</span>
            </li>
            <li className="flex items-start">
              <div className="min-w-[20px] h-5 flex items-center justify-center mr-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
              </div>
              <span>Blood glucose levels stabilized by week 3</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="px-6 pb-5">
        {/* Stats with animated bar */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex -space-x-2 mr-2">
              <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center text-white text-xs">
                ❤️
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs">
                💡
              </div>
              <div className="w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-white text-xs">
                👏
              </div>
            </div>
            <div className="text-sm">
              <span className="font-medium text-gray-800">324</span>
              <span className="text-gray-500 text-xs ml-1">reactions</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 text-sm text-gray-500">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <span>56 comments</span>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
              <span>32 shares</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons with unique design */}
        <div className="flex border-t border-b border-gray-100 py-3 mb-4">
          <button onClick={() => setLike(!like)} className={`like-btn action-btn flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-50 rounded-xl transition-all ${like ? 'text-pink-500 fill-pink-500' : 'text-gray-500 fill-none'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${like ? 'fill-pink-500' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-xs font-medium text-gray-600 mt-1">Like</span>
          </button>
          
          <button id="comment-btn" onClick={() => setCommentSection(!commentSection)} className="action-btn flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-50 rounded-xl transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="action-icon h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <span className="text-xs font-medium text-gray-600 mt-1">Comment</span>
          </button>
          
          <button id="share-btn" className="action-btn flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-50 rounded-xl transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="action-icon h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            <span className="text-xs font-medium text-gray-600 mt-1">Share</span>
          </button>
          
          <button id="bookmark-btn" onClick={() => setSave(!save)} className="bookmark-btn action-btn flex-1 flex flex-col items-center justify-center py-2 hover:bg-gray-50 rounded-xl transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="action-icon bookmark-icon h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" className={`${save ? 'fill-yellow-400' : ''}`} strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-xs font-medium text-gray-600 mt-1">Save</span>
          </button>
        </div>
        
        {/* Comment Section */}
        {commentSection && (
          <div className="overflow-y-auto max-h-[40vh]">
            <div className="flex space-x-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-500 text-xs font-medium">
                YOU
              </div>
              <div className="flex-1">
                <div className="relative">
                  <textarea id="comment-input" className="w-full border border-gray-200 rounded-2xl p-3 pl-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" placeholder="Share your thoughts..."></textarea>
                  <button id="send-comment" className="absolute right-3 bottom-3 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Comments */}
            <div className="space-y-4">
              {/* Comment 1 */}
              <div className="flex space-x-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-white text-xs font-medium">
                  DR
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-2xl p-3">
                    <div className="flex items-center mb-1">
                      <h4 className="font-medium text-gray-800 text-sm">Dr. Rachel Kim</h4>
                      <div className="ml-2 px-1.5 py-0.5 bg-blue-100 rounded-md">
                        <span className="text-[10px] font-medium text-blue-600">MD</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-xs text-gray-500">45m ago</span>
                    </div>
                    <p className="text-sm text-gray-600">Great insights! I've been recommending IF to my patients with metabolic syndrome. Your experience aligns with the clinical data we're seeing. Did you notice any changes in your sleep quality?</p>
                    
                    <div className="flex items-center space-x-4 mt-2">
                      <button className="text-xs text-gray-500 hover:text-indigo-500 transition-colors flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        24
                      </button>
                      <button className="text-xs text-gray-500 hover:text-indigo-500 transition-colors">Reply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostCard;