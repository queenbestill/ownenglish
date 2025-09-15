import React, { ReactNode } from 'react'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'

interface Data {
  title: string
  description: string
  icon?: ReactNode
}

export const data: Data[] = [
  {
    title: 'Easy to Access',
    description: 'Take your lessons online from anywhere — on your laptop, tablet, or phone.',
    icon: <ArtTrackIcon />,
  },
  {
    title: 'Affordable Pricing',
    description: 'Flexible plans that fit your budget — pay as you go, no long-term contracts.',
    icon: <AttachMoneyIcon />,
  },
  {
    title: 'Flexible Schedule',
    description: 'Choose class times that work for you, weekdays or weekends.',
    icon: <LocalLibraryIcon />,
  },
  {
    title: 'Personalized Support',
    description: 'Direct contact with your teacher to guide you through every step of learning.',
    icon: <ContactSupportIcon />,
  },
]

