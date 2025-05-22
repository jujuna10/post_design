'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function ThirdPost() {
    const comments = ['first comment']
    const [comment,setComment] = useState(false)
    const [views,setViews] = useState(false)
    const [commentSection,setCommentSection] = useState(false)
    
    useEffect(() => {
        if (comments.length > 0) {
            setComment(true)
        }
    }, [comments])

    // console.log(comment)
    
  return (
    <div className='w-[32%] bg-white overflow-hidden translate-x-[50%] rounded-[10px]'>
        <div className='flex flex-col'>
            <div className='flex gap-2 items-center justify-between p-5'>
                <div className='flex gap-3 items-center'>
                    <div className='w-[42px] h-[42px] rounded-[50%] bg-gradient-to-r to-[#749435] from-[#C7BA4A] flex justify-center items-center p-2'>
                        <p className='text-white font-medium'>AK</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <div className='flex justify-between'>
                            <p className='font-medium'>Alex Jim</p>
                            <p className='text-blue-500 font-semibold bg-[rgb(245,239,252)] text-[12px] px-3 flex justify-center items-center rounded-[20px]'>Top Writter</p>
                        </div>
                        <p className='text-gray-400 text-[13px]'>Photoghrafer &bull; 3 hours ago</p>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <p style={{ color: 'rgb(89,175,163)' }} className='bg-[rgb(236,253,245)] px-3 py-1 rounded-[10px]'>Follow</p>
                </div>
            </div>
            <p className='font-light p-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consectetur eum molestias vero facilis dignissimos incidunt, fuga ad unde laborum quaerat autem rerum vitae odit consequuntur asperiores, ipsa, veniam nesciunt!</p>
            <hr className='w-[120%] translate-x-[-12%] text-gray-300' />
            {/* <p className='text-gray-600 text-[15px] p-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis excepturi ducimus maiores. Ipsa quibusdam ipsum doloremque aperiam assumenda sequi magnam laudantium sunt omnis repellat? Inventore accusamus ipsa alias accusantium fugiat.</p> */}
            <div className='w-full h-[10px] bg-black'></div>
            <Image src='/images.jpeg' width={10000} height={100} className='w-full h-[450px] hover:cursor-pointer' alt='photo' />
            <div className='w-full h-[10px] bg-black'></div>
            {comments.length > 0 ? (
                <div className='flex justify-between px-5 my-4'>
                    <div className='flex items-center'>
                        <div className='w-[18px] h-[18px] rounded-[50%] bg-green-600'></div>
                        <div className='w-[18px] h-[18px] rounded-[50%] bg-blue-600 translate-x-[-5px]'></div>
                        <div className='w-[18px] h-[18px] rounded-[50%] bg-yellow-600 translate-x-[-10px]'></div>

                        <p className='text-gray-500 hover:cursor-pointer'>128 reactions</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='text-gray-500 hover:cursor-pointer' onClick={() => setCommentSection(!commentSection)}>{comments.length} comments</p>
                        <p className='flex gap-1 items-center text-gray-500 hover:cursor-pointer'><span></span>&bull; 10 shares</p>
                        <p className='flex gap-1 items-center text-gray-500 hover:cursor-pointer'>&bull; 1.2k views</p>
                        
                    </div>
                </div>
                
            ) : (
                ''
            )}
            <hr className='w-[120%] translate-x-[-12%] text-gray-300' />
            <div className='flex justify-between px-5 my-2 py-2'>
                <p className='flex gap-1 text-gray-500 hover:cursor-pointer'><Image src='/arrow.png' width={20} height={15} alt='share' className='rotate-180' />Upvote</p>
                <p className='flex gap-1 text-gray-500 hover:cursor-pointer' onClick={() => setCommentSection(!commentSection)}><Image src='/chat.png' width={18} height={0} alt='comment' />Comment</p>
                <p className='flex gap-1 text-gray-500 hover:cursor-pointer'><Image src='/share.png' width={20} height={15} alt='share' />Share</p>
                <p className='flex gap-1 text-gray-500 hover:cursor-pointer'><Image src='/save.png' width={20} height={15} alt='save' />Save</p>
            </div>
            <hr className='w-[120%] translate-x-[-12%] text-gray-300' />
            {commentSection ? (
                comments?.map((item,index) => (
                    <div className='flex gap-2 px-5'>
                        <div className='w-[42px] h-[42px] rounded-[50%] bg-gradient-to-r to-[#749435] from-[#C7BA4A] flex justify-center items-center p-2'>
                            <p className='text-white font-medium'>AK</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <div className='flex gap-2'>
                                <p className='font-medium'>Lionel Messi</p>
                                <p className='text-gray-400 text-[15px]'>2 hours ago</p> 
                            </div>
                            <div className='p-3 bg-gray-100 rounded-[10px] w-[200%]'>
                                <p>{item}</p>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                ''
            )}

        </div>
    </div>
  )
}

export default ThirdPost