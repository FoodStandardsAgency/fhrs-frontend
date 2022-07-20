import { NextRequest, NextResponse } from 'next/server'

export function middleware(req) {
  const basicAuth = req.headers.get('authorization')
  const ht = process.env.HTPASSWD;
  
  if (!ht) {
    return NextResponse.next()
  }

  if (ht === basicAuth) {
    return NextResponse.next()
  }

  // will not allow access
  return new Response('No access', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
