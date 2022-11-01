import React from 'react'
import { icons } from 'react-icons'
import { SocialIcon } from 'react-social-icons'
import { TiInfoLargeOutline } from 'react-icons/ti'
import Link from 'next/link'

export default function NavBar() {
  return (
    <div>
        <div className='max-w-5xl h-fit mx-auto text-white p-3'>
            <ul className='flex justify-end'>
                <li className='py-px px-2'><TiInfoLargeOutline /></li>
                <li className='py-px px-2'><SocialIcon network='twitter' style={{ height: 25, width: 25 }} /> </li>
                <li className='py-px px-2'><SocialIcon network='discord' style={{ height: 25, width: 25 }} /> </li>
                <li className='py-px px-2'><SocialIcon network='github' style={{ height: 25, width: 25 }} /> </li>
                <li className='py-px px-2'><Link href={"/about"}>gihub</Link></li>
            </ul>
        </div>
    </div>
  )
}
