'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Search, ArrowRight, Filter, Grid3x3, List, Flame, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';


function PagesSecond() {
    const categories = ['categorie1','categorie2','categorie3','categorie4','categorie5']
    const [categorie,setCategorie] = useState('categorie1')
    const [viewMode, setViewMode] = useState('grid');

    const trandings = [
        {name:'Tranding page 1', followers:'120.5k followers', names:['A','B','C']},
        {name:'Tranding page 2', followers:'90k followers', names:['J','K','P']},
        {name:'Tranding page 3', followers:'103.2k followers', names:['W','E','Q']},
    ]
    const recommended = [
        {name:'Recommended page 1', followers:'120.5k followers', post:'87 post/week'},
        {name:'Recommended page 2', followers:'90k followers', post:'102 post/week'},
        {name:'Recommended page 3', followers:'103.2k followers', post:'79 post/week'},
        {name:'Recommended page 4', followers:'103.2k followers', post:'122 post/week'},
    ]
    // const popular = [
    //     {name:'Popular page 1', post:'87 post/week'},
    //     {name:'Popular page 2', post:'102 post/week'},
    //     {name:'Popular page 3', post:'79 post/week'},
    //     {name:'Popular page 4', post:'122 post/week'},
    // ]

    const categoryGradients = [
        "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",
        "bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500",
        "bg-gradient-to-br fro via-teal-500 to-blue-500"
    ]

     const popular = [
        {name:'Technology & AI', post:'3.2k active pages'},
        {name:'Entrepreneurship', post:'2.8k active pages'},
        {name:'Digital Art & Desm-green-400ign', post:'1.9k active pages'},
    ]

    const trendingColors = ["bg-red-500", "bg-blue-500", "bg-green-500"];
    const recomendedColors = ["bg-yellow-500", "bg-purple-500", "bg-orange-500", "bg-pink-500"]


    return (
    <div className='bg-gray-200 w-[70%] flex flex-col gap-12'>
        {/* pages header */}
        <div className='bg-white p-5 flex justify-between items-center'>
            <div>
                <h1 className='font-semibold text-[25px]'>Pages</h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex gap-5 items-center'>
                <div className="relative">
                    <Search className="absolute left-4 top-[28%] transform  text-gray-400 w-5 h-5" />
                    <input type="text" placeholder="Search pages..." className="pl-12 pr-6 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 w-80" />
                </div>                
                <div className='relative w-[25px]'>
                    <Image src='/bell.png' width={20} height={20} alt='bell' />
                    <div className='w-[7px] h-[7px] rounded-[50%] bg-red-500 absolute bottom-[105%] right-0'></div>
                </div>
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <Image src='/add.png' width={20} height={15} alt='bell' className='invert-100' />
                    <span className="font-semibold">Create Page</span>
                </button>
            </div>
        </div>
        {/* categories */}
        <div className='flex justify-between p-5'>
            <div className='flex gap-2'>
                {categories.map((item,index) => (
                    <div key={index}>
                        <p onClick={() => setCategorie(categories[index])} className={`px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${categorie === categories[index] ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg transform scale-105' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800 border border-gray-200'}`}>{item}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center space-x-3">
            <button className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors">
              <Filter className="w-5 h-5" />
            </button>
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              >
                <Grid3x3 className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        {/* pages */}
        <div className='p-5'>
            <div className='flex justify-between mb-5'>
                <div className='flex gap-3 items-center'>
                    <div className='p-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl'>
                        <Flame className='w-6 h-6 text-white' />
                    </div>
                    <h2 className='text-2xl font-bold text-gray-900'>Trending Now</h2>
                </div>
                <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                            View All 
                            <ArrowRight className="w-4 h-4" />
                </button>            
            </div>
            <div className='flex gap-12'>
                {trendingColors.map((item,index) => (
                    <div key={index} className='w-[33%] h-[320px] shadow-lg hover:shadow-xl bg-white rounded-[20px] relative'>
                        <div className={`w-full h-[45%] rounded-t-[20px] flex justify-end`}>
                            <Image src='/4kphoto.jpg' width={1000} height={100000} className='w-full h-[100%] rounded-t-[20px]' />
                            <p className={`text-red-500 absolute top-5 right-5 font-semibold bg-white h-[25px] w-[25%] text-[12px] flex justify-center items-center rounded-[5px]`}>#{index + 1} Trending</p>
                        </div>
                        <div className='absolute top-[45%] translate-y-[-45%] p-5 flex gap-2 items-center'>
                            <div className={`${item} w-[45px] rounded-[50%] text-center h-[45px] flex justify-center items-center text-white font-semibold border-[2px] border-white`}><p>{trandings[index].name.charAt(0)}</p></div>
                            <div>
                                <p className='font-semibold text-white'>{trandings[index].name}</p>
                                <p className='text-gray-400'>{trandings[index].followers}</p>
                            </div>
                        </div>
                        <div className='px-5 absolute top-[55%] flex flex-col gap-5'>
                            <p className='max-w-[100%] text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            <div className=' flex justify-between'>
                                <div className='flex'>
                                     <div className="flex -space-x-2">
                                        {trandings[index].names.map((name, i) => (
                                            <div key={i} className='w-8 h-8 rounded-full bg-gradient-to-br from-gray-400 to-gray-500 flex items-center justify-center text-white text-xs font-semibold border-2 border-white'>
                                                {name}
                                            </div>
                                        ))}
                                    </div>
                                    <div className='w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-xs font-semibold ml-1'>+5</div>                                
                                    </div>
                                <div>
                                    <p className='bg-blue-700 text-white px-6 py-1 rounded-[20px]'>Follow</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* recomended */}
        <div className='p-5'>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center mb-5'>
                   <div className='flex gap-3 items-center'>
                        <div className='p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl'>
                            <CheckCircle className='w-6 h-6 text-white' />
                        </div>
                        <h2 className='text-2xl font-bold text-gray-900'>Recommended For You</h2>
                    </div>
                    <p className='text-[25px] font-semibold'>Recommended For You</p>
                </div>
            <button className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 transition-colors">
                        View All <ArrowRight className="w-4 h-4" />
            </button>            
            </div>
            <div className='flex gap-5 w-full'>
                 <div className='flex gap-5 rounded-[10px] h-auto w-full'>
                    {recommended.map((item,index) => (
                        <div key={index} className='flex flex-col gap-6 p-5 shadow-lg hover:shadow-xl items-center bg-white w-[33%] rounded-[20px]'>
                            <div className='flex gap-2 items-center w-full'>
                                <p className={`w-[55px] h-[55px] ${recomendedColors[index]} flex justify-center items-center text-white font-semibold rounded-[10px]`}>A</p>
                                <div>
                                    <p className='font-semibold'>{item.name}</p>
                                    <p className='text-gray-400'>{item.followers}</p>
                                </div>
                            </div>
                            <div className='flex justify-between w-full'>
                                <p className='text-gray-500'>{item.post}</p>
                                <p className='bg-blue-700 text-white px-6 py-1 rounded-[20px]'>Follow</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>


        {/* popular */}
        <div className='px-6 py-8 pb-12'>
            <div className='flex justify-between mb-8'>
                <div className='flex gap-4 items-center'>
                    <div className='p-3 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl shadow-lg'>
                        <Award className='w-7 h-7 text-white' />
                    </div>
                    <div>
                        <h2 className='text-3xl font-black text-gray-900'>Popular Categories</h2>
                        {/* <p className='text-gray-600 font-medium'>Most active communities</p> */}
                    </div>
                </div>
                <button className="text-transparent bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text hover:from-violet-700 hover:to-purple-700 font-black flex items-center gap-2 transition-all duration-300 group">
                    View All 
                    <ArrowRight className="w-5 h-5 text-violet-600 group-hover:translate-x-1 transition-transform" />
                </button>            
            </div>
            
            <div className='grid grid-cols-3 gap-8'>
                {popular.map((item, index) => (
                    <div key={index} className='group relative'>
                        <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500'></div>
                        <div className='relative bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border border-white/50'>
                            <div className={`relative h-40 ${categoryGradients[index]} flex items-center justify-center overflow-hidden`}>
                                <div className='absolute inset-0 bg-black/10'></div>
                                <div className='text-white/30 text-8xl font-black transform rotate-12 scale-150'>
                                    {item.name.charAt(0)}
                                </div>
                                <div className='absolute bottom-4 left-6'>
                                    <Users className='w-8 h-8 text-white/80' />
                                </div>
                            </div>
                            <div className='p-6'>
                                <h3 className='text-2xl font-black text-gray-900 mb-3'>{item.name}</h3>
                                <p className='text-gray-600 mb-5 leading-relaxed font-medium'>Discover trending content and connect with passionate creators.</p>
                                <div className='flex justify-between items-center'>
                                    <span className='text-gray-500 font-bold'>{item.post}</span>
                                    <button className='bg-gradient-to-r from-violet-100 to-purple-100 hover:from-violet-200 hover:to-purple-200 text-violet-700 px-8 py-3 rounded-2xl font-bold transition-all duration-300 transform hover:scale-110 border border-violet-200'>
                                        Explore
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </div>
  )
}

export default PagesSecond