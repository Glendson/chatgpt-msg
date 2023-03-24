import { getServerSession } from 'next-auth/next'
import { SessionProvider } from '../components/SessionProvider'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'
import { authOptions } from '../src/pages/api/auth/[...nextauth]'
import Login from '../components/Login'

export const metadata = {
  title: 'ChatGPT',
  description: 'build by Glendson',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session} >
          {!session ? (
            <Login />
          ) : (
            <div className='flex'>
              <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
                <Sidebar />
              </div>

              <div className='bg-[#343541] flex-1'>{children}</div>

            </div>
          )}

        </SessionProvider>
      </body>
    </html>
  )
}
