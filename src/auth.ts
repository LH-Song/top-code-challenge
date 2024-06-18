// import { SupabaseAdapter } from '@auth/supabase-adapter'
// import NextAuth from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'

// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   adapter: SupabaseAdapter({
//     url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     secret: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//   }) as unknown as any,
//   secret: process.env.NEXTAUTH_SECRET,
// })

