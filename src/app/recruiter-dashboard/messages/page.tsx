import React from "react";
import { Edit, Inbox, Star, Mail, Eye,
  MoreVertical,
  Paperclip,
  Smile,
  Image,
  Send,
  Download,
  FileText,
  Zap,
  Lock,
  Clock,} from "lucide-react";

const page = () => {
  return (
    <div >      
      <div className="h-screen flex">
        <section className="w-full sm:w-[380px] h-full flex flex-col bg-surface-container-low border-r border-outline-variant/20 overflow-hidden">
      
      {/* Header */}
      <div className="p-6 border-b border-outline-variant/10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold tracking-tight">Messages</h2>

          <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
            <Edit size={18} className="text-primary" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto">
          <button className="px-3 py-1.5 rounded-full bg-white text-xs font-semibold shadow-sm text-primary flex items-center gap-1">
            <Inbox size={14} /> All
          </button>

          <button className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center gap-1">
            <Mail size={14} /> Unread
          </button>

          <button className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-500 hover:bg-white hover:shadow-sm transition-all flex items-center gap-1">
            <Star size={14} /> Starred
          </button>
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto space-y-px">
        
        {/* ITEM 1 */}
        <div className="p-5 bg-white border-l-4 border-primary transition-all cursor-pointer">
          <div className="flex gap-4">
            <div className="relative flex-shrink-0">
              <img
                className="w-12 h-12 rounded-xl object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGCd3mNkJ-d9IKsJynTfuC0NaYJDfJq-fjTYZMUvF8SjYoiNmYCwrnLFX7eNX9ZneInDe9TFaGS8DRVP4ReW3CpJxG3rGrBjtLbCxFI8nTNFr_fs-Wu7XQBvNrZ3gYFYMPnu6PZ7ROUsUmgoxVKtjusJpnjrOZ_M_W875bLjJCNwfGHZVtBSFKQGc8bj-A_WGPOqvgwYF1T0zE4TUiy2932gHfqKdGYEdPsH5z8ejke4Q0DyyqDH3OaX_MlLMOF_M72iWtjxx-cpjn"
              />
              <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="text-sm font-semibold text-on-surface truncate">
                  Helena Vance
                </h3>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  12:45 PM
                </span>
              </div>

              <p className="text-xs text-on-surface-variant line-clamp-1 mb-1">
                I've attached the revised portfolio deck with the editorial case studies.
              </p>

              <span className="inline-flex items-center px-2 py-0.5 rounded bg-tertiary-container text-on-tertiary-container text-[10px] font-bold uppercase tracking-tighter">
                Gold Tier Candidate
              </span>
            </div>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="p-5 hover:bg-surface-container-high transition-all cursor-pointer group">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-xl object-cover grayscale group-hover:grayscale-0 transition-all"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7EmPJ-TVZE3q8tWLPyh2J_3hElEnJgYBv-o88RNnb23VMKpBtN8xS4HsCW0YO5HYKDlo4_7jx-0w-iEbC8oJXHUnpqIJMNU0nnQ1GveY_68zL1LgJqh5NUD2qOQxbLRnaJHkDYN-GZbjsVy9DcZztq8LjjoAWiZXRI0ThQ31BYKnPMi8w7Z6uaK6uJjckr9i1GWdTQ8OXQ6nciBSoBYylZ7FhY9jQIwRRYTtBB_j2ooFE7IoptLrOTZCahHP1qoN6JGOiy7EdQt7e"
            />

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="text-sm font-medium text-on-surface truncate">
                  Marcus Chen
                </h3>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  Yesterday
                </span>
              </div>

              <p className="text-xs text-slate-500 line-clamp-1">
                That interview time works perfectly for me. See you on Monday!
              </p>
            </div>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="p-5 hover:bg-surface-container-high transition-all cursor-pointer group">
          <div className="flex gap-4">
            <div className="relative flex-shrink-0">
              <img
                className="w-12 h-12 rounded-xl object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXo3sD6HKURhzWBoxmlj9f1Te95EXn8U0PXx31Fl01WsAz68CNaGwoXsN54pjbIP-ZIe5DeQoMtvPu9SPpFZcdP-YD7lAX0Kp6JTY_FZfey8bYwGSadBJjqCK8SrsYnnU5lc1VXzWjNyvho5JDYh32s2LL8b0cnE_mix7XgbFBiYHJ1Mk1Q02NTvUyMqrYOWkoJ4EAQO6XKR4RjA-9PkbKq1T0lLCOLeD-Yg_H1nKNhtYIAbkv0tDPVkW-8Zn9lGEN8DGFOSZlHozx"
              />
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                2
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="text-sm font-bold text-on-surface truncate">
                  Isobel Thorne
                </h3>
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider">
                  2m ago
                </span>
              </div>

              <p className="text-xs text-on-surface font-semibold line-clamp-1">
                Waiting on the contract details before I can finalize the offer...
              </p>
            </div>
          </div>
        </div>

        {/* ITEM 4 */}
        <div className="p-5 hover:bg-surface-container-high transition-all cursor-pointer group opacity-70">
          <div className="flex gap-4">
            <img
              className="w-12 h-12 rounded-xl object-cover grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXnYG2jbafYCFXctzjivYdHv2phdCvrELylKaNjuw8t9XMhJNI4TE5KICMNX9NPC5TT9Jc4bQ-5NcUvKhLIRZR2xKl9jFcdoZ2gQFaSJYd_yES0uA3T_ZV9UD1k1JZ9C-Vzou-8bt9ZIKGtHwUBTGwbPgO1gyMeuhXweSHzedA6Ig9Y9SRGWoP3TDT0PAydgZ-jEfjc7gSTLglHsGk6ZK_R9XxVwmrZLJn-nRDSlsRou97LxRt9x8M4Ke869KjjEANyoi_SjDo3_Kv"
            />

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="text-sm font-medium text-on-surface truncate">
                  Julian Rossi
                </h3>
                <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">
                  Oct 24
                </span>
              </div>

              <p className="text-xs text-slate-500 line-clamp-1">
                Thank you for reaching out, but I've recently accepted a role at...
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
        <section className="flex-1 flex flex-col bg-surface relative overflow-hidden">
      
      {/* HEADER */}
      <header className="h-20 px-4 sm:px-10 border-b border-outline-variant/10 flex items-center justify-between bg-white/50 backdrop-blur-sm z-10">
        
        <div className="flex items-center gap-4 min-w-0">
          <div className="relative flex-shrink-0">
            <img
              alt="Helena Vance"
              className="w-10 h-10 rounded-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCObOS3cDY2raHU-Lmy8ki8_ntLhisOsQe8zhRx8iW0hWG8aPwuI5emEXvqOzXiKnca0Myf2MeVbCFlgRYuD5GrZAA75rCOKe1vP3pG9yw9tf_aXJdv-2vscebiFGutkI3ulEeBYt0i-VOxGasinHEki1BPdkxUPlIr2GHBnEcMthQ181w5-0WwEgq5uKfDLpICh_I_ufQKYDvu-fdVZ11YWU5cERCi4oDdoB6Z-ap8TaB7aWFWCkgzlq1_64MZ5nJdZIW8oKSBJkT4"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-bold text-on-surface truncate">
              Helena Vance
            </h2>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest flex items-center gap-2">
              Senior Creative Editor
              <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
              Active Now
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-primary bg-indigo-50 hover:bg-indigo-100 transition-colors text-xs font-semibold">
            <Eye size={16} />
            <span className="hidden sm:inline">View Profile</span>
          </button>

          <button className="p-2 text-slate-400 hover:text-on-surface transition-colors">
            <MoreVertical size={18} />
          </button>
        </div>
      </header>

      {/* CHAT BODY */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-10 py-6 sm:py-8 space-y-10">
        
        {/* DATE DIVIDER */}
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="h-px flex-1 bg-outline-variant/20"></div>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
            Tuesday, Oct 28
          </span>
          <div className="h-px flex-1 bg-outline-variant/20"></div>
        </div>

        {/* USER MESSAGE */}
        <div className="flex justify-end gap-3">
          <div className="max-w-[85%] sm:max-w-md">
            <div className="bg-primary text-white px-5 py-4 rounded-2xl rounded-tr-none shadow-sm">
              <p className="text-sm leading-relaxed">
                Hi Helena, I've had a chance to review your initial case studies...
              </p>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-right font-medium uppercase tracking-tighter">
              Sent 10:15 AM
            </p>
          </div>
        </div>

        {/* RECEIVED MESSAGE */}
        <div className="flex justify-start gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 mt-1">
            <img
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtKzZQ-o9qAVlo0WDjo9a4Wesn1n_udsGujbCT-yfbyzTAstASEB7ZwbkWLYtIS09QhhdkiTpuNcsdvlt38xXBQtoVBcRmyCKZJQ__assEqY7ZdX2zWvaMtr5LID1UPHdKZcRQkyG-cHcdBLs0rZjzG66lhDIoGbIM_4xrxpCLIm2uenBsKz_p4iHjnWNxsiM8-imNVj5vT98xLC18AxTqkybLkOPYyrqXO2ax7DDvM5u0xJeUS1bhXvqMxX-9yjSc1yM0Jvig09ua"
            />
          </div>

          <div className="max-w-[85%] sm:max-w-md">
            <div className="bg-surface-container-low text-on-surface px-5 py-4 rounded-2xl rounded-tl-none border border-outline-variant/10">
              <p className="text-sm leading-relaxed">
                Absolutely! I've attached a detailed breakdown of KPIs...
              </p>
            </div>

            {/* FILE ATTACHMENT */}
            <div className="mt-3 bg-white p-3 rounded-xl border border-outline-variant/20 flex items-center gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center text-tertiary">
                <FileText size={18} />
              </div>

              <div className="flex-1">
                <p className="text-xs font-semibold text-on-surface">
                  The_Sovereign_Metrics.pdf
                </p>
                <p className="text-[10px] text-slate-400">
                  4.2 MB • PDF Document
                </p>
              </div>

              <Download size={16} className="text-slate-400" />
            </div>

            <p className="text-[10px] text-slate-400 mt-2 font-medium uppercase tracking-tighter">
              Helena • 12:45 PM
            </p>
          </div>
        </div>

        {/* TYPING INDICATOR */}
        <div className="flex justify-end gap-3 opacity-50">
          <div className="flex gap-1 py-2 px-4 bg-slate-100 rounded-full">
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></span>
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></span>
            <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse"></span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="p-4 sm:p-8 bg-white border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto">
          
          <div className="bg-surface-container-low rounded-2xl p-2 border border-transparent focus-within:border-primary/20 transition-all">
            
            <textarea
              className="w-full bg-transparent border-none focus:ring-0 text-sm px-4 py-2 resize-none placeholder:text-slate-400"
              placeholder="Write your message to Helena..."
            />

            <div className="flex items-center justify-between mt-2 px-2 pb-1">
              
              <div className="flex items-center gap-1 flex-wrap">
                <button className="p-2 text-slate-500 hover:text-primary rounded-lg hover:bg-white">
                  <Paperclip size={18} />
                </button>

                <button className="p-2 text-slate-500 hover:text-primary rounded-lg hover:bg-white">
                  <Smile size={18} />
                </button>

                <button className="p-2 text-slate-500 hover:text-primary rounded-lg hover:bg-white">
                  <Image size={18} />
                </button>

                <div className="w-px h-6 bg-outline-variant/20 mx-1"></div>

                <button className="p-2 text-slate-500 hover:text-tertiary rounded-lg hover:bg-white">
                  <Clock size={18} />
                </button>
              </div>

              <button className="bg-primary text-white px-4 sm:px-6 py-2 rounded-xl text-xs font-bold shadow-sm hover:opacity-90 active:scale-95 transition-all flex items-center gap-2">
                Send Message
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* FOOTER INFO */}
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Zap size={14} />
              Cmd + Enter to send
            </span>

            <span className="text-[10px] text-slate-400 uppercase tracking-widest flex items-center gap-1.5">
              <Lock size={14} />
              End-to-end Encrypted
            </span>
          </div>
        </div>
      </footer>
    </section>
      </div>
      <footer className="w-full py-6 mt-auto border-t border-slate-100 dark:border-slate-800 flex justify-between items-center px-8 w-[calc(100%-16rem)] ml-64 z-10 bg-white">
        <span className="text-xs font-medium uppercase tracking-widest text-slate-400">
          © 2024 Editorial Executive Recruitment. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Legal
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Privacy Policy
          </a>
          <a
            className="text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-indigo-500 transition-opacity"
            href="#"
          >
            Support
          </a>
        </div>
      </footer>
    </div>
  );
};

export default page;
