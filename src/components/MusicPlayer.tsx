"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Pause, Play, Volume2, VolumeX, SkipForward, SkipBack } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const PLAYLIST = [
  { 
    title: "Like I Do", 
    artist: "J.Tajor ft. sunkis", 
    src: "/music/Like I Do _with sunkis_ - J.Tajor.mp3", 
    cover: "/music/cover-1.jpg" 
  },
  { 
    title: "Last Goodbye", 
    artist: "sunkis", 
    src: "/music/LAST GOODBYE - sunkis.mp3", 
    cover: "/music/cover-2.jpg" 
  },
  { 
    title: "Trust Me", 
    artist: "sunkis", 
    src: "/music/trust me - sunkis.mp3", 
    cover: "/music/cover-3.jpg" 
  },
  { 
    title: "4ever", 
    artist: "sunkis", 
    src: "/music/4ever - sunkis.mp3", 
    cover: "/music/cover-4.jpg" 
  }
]

export function MusicPlayer() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [volume, setVolume] = useState(0.5)
  
  const audioRef = useRef<HTMLAudioElement>(null)
  const currentTrack = PLAYLIST[currentTrackIndex]

  // Handle track ending -> auto play next
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const handleEnded = () => {
        playNext()
    }

    audio.addEventListener('ended', handleEnded)
    return () => audio.removeEventListener('ended', handleEnded)
  }, [currentTrackIndex]) // Re-bind when index changes to ensure correct next track logic if needed, simplify dependency

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      if (isPlaying) {
          audioRef.current.play().catch(e => console.error("Playback failed", e))
      }
    }
  }, [currentTrackIndex]) // Auto-play when track changes if already playing

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch((e) => {
          console.error("Autoplay prevented:", e)
        })
      }
      setIsPlaying(!isPlaying)
      setIsExpanded(true)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const playNext = () => {
      setCurrentTrackIndex((prev) => (prev + 1) % PLAYLIST.length)
      setIsPlaying(true)
  }

  const playPrev = () => {
      setCurrentTrackIndex((prev) => (prev - 1 + PLAYLIST.length) % PLAYLIST.length)
      setIsPlaying(true)
  }

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 flex items-end gap-2">
      <audio 
        ref={audioRef} 
        src={currentTrack.src}
        preload="auto"
      />

      <motion.div
        layout
        className={cn(
          "flex items-center gap-2 p-3 rounded-full backdrop-blur-md border shadow-lg transition-colors duration-500",
          isPlaying ? "bg-primary/10 border-primary/20" : "bg-background/80 border-border/50"
        )}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => !isPlaying && setIsExpanded(false)}
      >
        {/* Cover Art Spin */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-border/50 shrink-0">
             <Image 
                src={currentTrack.cover} 
                alt="Cover" 
                fill 
                className={cn(
                    "object-cover",
                    isPlaying && "animate-spin [animation-duration:10s]"
                )}
             />
             {/* Center hole for vinyl look */}
             <div className="absolute inset-0 m-auto w-2 h-2 bg-background rounded-full z-10" />
        </div>

        <AnimatePresence>
            {(isExpanded || isPlaying) && (
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "auto", opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="flex items-center gap-4 pr-2 overflow-hidden"
                >
                    <div className="flex flex-col min-w-[100px]">
                        <span className="text-xs font-bold text-foreground truncate max-w-[120px]">{currentTrack.title}</span>
                        <span className="text-[10px] text-muted-foreground truncate max-w-[120px]">{currentTrack.artist}</span>
                    </div>

                    <div className="flex items-center gap-2">
                         <button onClick={playPrev} className="p-1 hover:text-accent transition-colors"><SkipBack className="w-4 h-4" /></button>
                         
                         <button
                          onClick={togglePlay}
                          className="p-1.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
                        >
                            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                        </button>

                         <button onClick={playNext} className="p-1 hover:text-accent transition-colors"><SkipForward className="w-4 h-4" /></button>
                    </div>

                    <button 
                        onClick={toggleMute}
                        className="p-1 hover:bg-secondary rounded-full transition-colors ml-1"
                    >
                        {isMuted ? <VolumeX className="w-4 h-4 text-muted-foreground" /> : <Volume2 className="w-4 h-4 text-muted-foreground" />}
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
