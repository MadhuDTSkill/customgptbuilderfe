import { NextResponse } from 'next/server'
 
const publicRoutes = ['', '/signin', '/signup']


export function middleware(request) {
  console.log('Server Running')
}
 
