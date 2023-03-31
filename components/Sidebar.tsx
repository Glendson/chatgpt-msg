'use client'

import { useSession, signOut } from "next-auth/react"
import { useCollection } from "react-firebase-hooks/firestore"
import NewChat from "./NewChat"
import { collection, orderBy, query } from "firebase/firestore"
import { db } from "../firebase"
import ChatRow from "./ChatRow"
import ModelSelection from "./ModelSelection"

function Sidebar() {

  const { data: session } = useSession()

  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy("createdAt", "asc"))
  )

  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>

          <NewChat />

          <div className="hidden sm:inline">
            <ModelSelection />
          </div>

          {chats?.docs.map(chat => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}

        </div>
      </div>

      {session && (
        <img
          onClick={() => signOut()}
          className="h-12 w-12 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50"
          src={session.user?.image!} alt="Profile Picture"
        />
      )}

    </div>
  )
}

export default Sidebar