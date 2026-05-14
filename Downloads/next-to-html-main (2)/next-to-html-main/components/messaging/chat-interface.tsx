"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Send, Paperclip, Phone, Video, MoreVertical, CheckCheck, Check } from "lucide-react"

interface ChatMessage {
  id: string
  senderId: string
  senderName: string
  senderType: "advocate" | "client"
  content: string
  timestamp: string
  status: "sent" | "delivered" | "read"
  attachments?: { name: string; url: string; type: string }[]
}

interface ChatInterfaceProps {
  conversationId: string
  participantName: string
  participantType: "advocate" | "client"
  caseTitle?: string
}

export function ChatInterface({ conversationId, participantName, participantType, caseTitle }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      senderId: "adv1",
      senderName: "Adv. Rajesh Kumar",
      senderType: "advocate",
      content: "Hello! I've reviewed your case details. I believe we have a strong position for your property dispute.",
      timestamp: "10:30 AM",
      status: "read",
    },
    {
      id: "2",
      senderId: "client1",
      senderName: "You",
      senderType: "client",
      content: "Thank you for taking up my case. What documents do you need from me to proceed?",
      timestamp: "10:35 AM",
      status: "read",
    },
    {
      id: "3",
      senderId: "adv1",
      senderName: "Adv. Rajesh Kumar",
      senderType: "advocate",
      content:
        "I'll need the property deed, tax receipts for the last 3 years, and any correspondence with your neighbor. Also, do you have any photographs of the disputed boundary?",
      timestamp: "10:40 AM",
      status: "delivered",
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        senderId: "client1",
        senderName: "You",
        senderType: "client",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        status: "sent",
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "sent":
        return <Check className="w-3 h-3 text-gray-400" />
      case "delivered":
        return <CheckCheck className="w-3 h-3 text-gray-400" />
      case "read":
        return <CheckCheck className="w-3 h-3 text-primary" />
      default:
        return null
    }
  }

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback>{participantName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg">{participantName}</CardTitle>
              {caseTitle && (
                <Badge variant="outline" className="text-xs mt-1">
                  {caseTitle}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Video className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.senderType === "client" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.senderType === "client" ? "bg-primary text-primary-foreground" : "bg-muted"
              }`}
            >
              <p className="text-sm">{message.content}</p>
              <div
                className={`flex items-center justify-end gap-1 mt-2 text-xs ${
                  message.senderType === "client" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                <span>{message.timestamp}</span>
                {message.senderType === "client" && getStatusIcon(message.status)}
              </div>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-muted rounded-lg p-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>

      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <Button variant="outline" size="sm">
            <Paperclip className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <Textarea
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage()
                }
              }}
              className="min-h-[40px] max-h-[120px] resize-none"
            />
          </div>
          <Button onClick={handleSendMessage} disabled={!newMessage.trim()}>
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}
