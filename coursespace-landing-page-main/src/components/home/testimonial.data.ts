import type { Testimonial } from '@/interfaces/testimonial'

export const data: Array<Testimonial> = [
  {
    id: 1,
    title: 'Confidence at work',
    content: 'Patricia helped me feel confident speaking at work meetings. Clear, practical, and friendly.',
    user: { id: 1, name: 'Ana', professional: 'Product Manager', photo: '1.jpg' }
  },
  {
    id: 2,
    title: 'Real-life English',
    content: 'Classes focused on real conversations. I felt progress from day one.',
    user: { id: 2, name: 'Diego', professional: 'Data Analyst', photo: '2.jpg' }
  },
  {
    id: 3,
    title: 'Pronunciation boost',
    content: 'My rhythm and connected speech improved a lot. I sound more natural now.',
    user: { id: 3, name: 'Clara', professional: 'Consultant', photo: '3.jpg' }
  },
]
