'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function Pages() {
    const categories = ['categorie1','categorie2','categorie3','categorie4','categorie5']
    const [categorie,setCategorie] = useState('categorie1')
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
    const popular = [
        {name:'Popular page 1', post:'87 post/week'},
        {name:'Popular page 2', post:'102 post/week'},
        {name:'Popular page 3', post:'79 post/week'},
        {name:'Popular page 4', post:'122 post/week'},
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
                <input type="text" name="search" placeholder='Search page...' className='border-[1px] border-gray-400 px-5 py-1 rounded-[25px]' />
                <div className='relative w-[25px]'>
                    <Image src='/bell.png' width={20} height={20} alt='bell' />
                    <div className='w-[7px] h-[7px] rounded-[50%] bg-red-500 absolute bottom-[105%] right-0'></div>
                </div>
                <div className='bg-blue-700 rounded-[7px] px-4 py-2 flex gap-2'>
                    <Image src='/add.png' width={20} height={15} alt='bell' className='invert-100' />
                    <p className='text-white text-[15px] font-semibold'>Create Page</p>
                </div>
            </div>
        </div>
        {/* categories */}
        <div className='flex gap-2 p-5'>
            {categories.map((item,index) => (
                <div key={index}>
                    <p onClick={() => setCategorie(categories[index])} className={`px-4 py-2 rounded-[20px] text-[15px] hover:cursor-pointer ${categorie === categories[index] ? 'bg-blue-600 text-white' : 'bg-white'}`}>{item}</p>
                </div>
            ))}
        </div>
        {/* pages */}
        <div className='p-5'>
            <div className='flex justify-between mb-5'>
                <div className='flex gap-2 items-center'>
                    <Image src='/fire.png' width={20} height={20} alt='fire' />
                    <p className='text-[25px] font-semibold'>Trending Now</p>
                </div>
                <p className='font-light text-[15px] text-blue-500 hover:cursor-pointer'>View All</p>
            </div>
            <div className='flex gap-12'>
                {trendingColors.map((item,index) => (
                    <div key={index} className='w-[33%] h-[320px] bg-white rounded-[20px] relative'>
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
                                    <div className="flex">
                                        {trandings[index].names.map((n, i) => (
                                            <div>
                                                <p key={i} className={`rounded-[50%] text-[12px] w-[20px] h-[20px] flex justify-center items-center bg-gray-400 text-white ${i === 1 ? 'translate-x-[-5px]' : ''} ${i === 2 ? 'translate-x-[-10px]' : ''}`}>{n}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p  className={`rounded-[50%] text-[12px] w-[20px] h-[20px] flex justify-center items-center bg-gray-300 text-white`}>+5</p>
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
                    <div className='bg-blue-600 rounded-[50%] w-[25px] h-[25px] flex justify-center items-center'>
                        <Image src='/done.png' width={12} height={12} alt='done' className='invert-100' />
                    </div>
                    <p className='text-[25px] font-semibold'>Recommended For You</p>
                </div>
                <p className='font-light text-[15px] text-blue-500 hover:cursor-pointer'>View All</p>
            </div>
            <div className='flex gap-5 w-full'>
                 <div className='flex gap-5 rounded-[10px] h-auto w-full'>
                    {recommended.map((item,index) => (
                        <div key={index} className='flex flex-col gap-6 p-5 items-center bg-white w-[33%] rounded-[20px]'>
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
        <div className='p-5'>
            <div className='flex justify-between mb-5'>
                <div className='flex gap-2 items-center'>
                    <p className='text-[25px] font-semibold'>Poplucar Categories</p>
                </div>
                <p className='font-light text-[15px] text-blue-500 hover:cursor-pointer'>View All</p>
            </div>
            <div className='flex gap-12'>
                {trendingColors.map((item,index) => (
                    <div key={index} className='w-[33%] h-[320px] bg-white rounded-[20px] relative'>
                        <div className={`w-full h-[45%] rounded-t-[20px] flex justify-end ${item}`}>
                            <Image src='/4kphoto.jpg' width={1000} height={100000} className='w-full h-[100%] rounded-t-[20px]' />

                        </div>
                        <div className='px-5 mt-5 flex flex-col gap-5'>
                            <div>
                                <p className='text-[20px] font-semibold'>{popular[index].name}</p>
                                <p className='max-w-[100%] text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                            </div>
                                
                            <div className='flex justify-between w-full'>
                                <p className='text-gray-400'>{popular[index].post}</p>
                                <p className='bg-blue-200 text-blue-600 font-semibold px-6 py-1 rounded-[20px]'>Explore</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>


    </div>
  )
}

export default Pages