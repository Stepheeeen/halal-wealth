import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
 const sidebar: {name: string, path: string;}[] = [{
    path: '#', name: 'Dashboard'},
  ]
  return (
    <div className='fixed h-[100vh] w-[20%] top-0 left-0 bg-white shadow-lg p-4 '>
      {sidebar.map((link, i) => (
        <Link href={link.path} key={i}>
          {link.name}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar