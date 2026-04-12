"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  MoreVertical,
  Send,
  Paperclip,
  Smile,
  Phone,
  Video,
  CheckCheck,
  ChevronLeft,
  MessageSquare,
} from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Sarah Johnson",
    company: "Airbnb",
    avatar: "https://picsum.photos/seed/sarah/100/100",
    lastMessage: "Looking forward to our interview tomorrow!",
    time: "10:30 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Google",
    avatar: "https://picsum.photos/seed/michael/100/100",
    lastMessage: "The team was really impressed with your portfolio.",
    time: "Yesterday",
    unread: 0,
    online: false,
  },
];

const messages = [
  { id: 1, senderId: 2, text: "Hi Devendra!", time: "09:00 AM" },
  { id: 2, senderId: 0, text: "Hello!", time: "09:05 AM" },
];

export default function Messages() {
  const [selectedContact, setSelectedContact] = useState<(typeof contacts)[0] | null>(contacts[0]);
  const [messageInput, setMessageInput] = useState("");

  return (
    <div className="flex h-full lg:h-[calc(100vh-80px)] bg-white rounded-xl overflow-hidden border">
      
      {/* LEFT CONTACTS */}
      <div className={`w-full lg:w-80 border-r ${selectedContact ? "hidden lg:flex" : ""}`}>
        
        {/* Header */}
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold mb-3">Messages</h2>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search..."
              className="w-full pl-10 py-2 bg-slate-100 rounded-xl"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="overflow-y-auto flex-1">
          {contacts.map((c) => (
            <div
              key={c.id}
              onClick={() => setSelectedContact(c)}
              className={`p-4 flex gap-3 cursor-pointer ${
                selectedContact?.id === c.id
                  ? "bg-primary/10 border-r-4 border-primary"
                  : "hover:bg-slate-50"
              }`}
            >
              <div className="relative">
                <Image src={c.avatar} alt="" width={48} height={48} className="rounded-full" />
                {c.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
                )}
              </div>

              <div className="flex-1">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{c.name}</span>
                  <span className="text-xs text-slate-400">{c.time}</span>
                </div>
                <p className="text-xs text-slate-500 truncate">
                  {c.lastMessage}
                </p>
              </div>

              {c.unread > 0 && (
                <div className="bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {c.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CHAT */}
      <div className={`flex-1 flex flex-col ${!selectedContact && "hidden lg:flex"}`}>
        
        {selectedContact ? (
          <>
            {/* Header */}
            <div className="p-4 border-b flex justify-between items-center">
              <div className="flex items-center gap-3">
                <button onClick={() => setSelectedContact(null)} className="lg:hidden">
                  <ChevronLeft />
                </button>

                <Image src={selectedContact.avatar} alt="" width={40} height={40} className="rounded-full" />
                <div>
                  <h4 className="font-bold text-sm">{selectedContact.name}</h4>
                  <p className="text-xs text-green-500">Online</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Phone />
                <Video />
                <MoreVertical />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.senderId === 0 ? "justify-end" : ""}`}>
                  <div
                    className={`p-3 rounded-xl text-sm ${
                      msg.senderId === 0
                        ? "bg-primary text-white"
                        : "bg-white border"
                    }`}
                  >
                    {msg.text}
                    <div className="text-[10px] mt-1 opacity-60 flex items-center gap-1">
                      {msg.time}
                      {msg.senderId === 0 && <CheckCheck size={12} />}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t flex gap-2">
              <input
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                placeholder="Type message..."
                className="flex-1 px-3 py-2 bg-slate-100 rounded-xl"
              />

              <button className="bg-primary text-white p-2 rounded-xl">
                <Send size={18} />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
            <MessageSquare size={40} />
            <p>Select chat</p>
          </div>
        )}
      </div>
    </div>
  );
}