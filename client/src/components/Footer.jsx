import React from 'react'
import state from '../store'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'



const Footer = () => {
    const snap = useSnapshot(state)
    const generateStyleForFooter = () => {
        return{
            backgroundColor: snap.color,
            color: getContrastingColor(snap.color),
            height: 35
        }
    }
  return (
    <div className='w-full absolute inset-x-0 bottom-0 h-16' style={generateStyleForFooter()}>
        Footer
    </div>
  )
}

export default Footer
